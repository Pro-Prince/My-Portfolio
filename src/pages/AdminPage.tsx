import { useState, useEffect, useRef } from 'react';
import { Lock, Users, TrendingUp, Mail, MailOpen, BarChart3, Inbox, MousePointerClick } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FadeIn from '../components/FadeIn';
import { useCountUp } from '../hooks/useCountUp';

type Visit = {
  id: number;
  created_at: string;
  page_path: string;
  referrer: string;
  device_type: string;
  browser: string;
};

type Message = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
};

type Click = {
  id: number;
  created_at: string;
  project_name: string;
  button_type: 'live_demo' | 'github' | 'gpt_link';
};

function formatRelativeTime(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}d ago`;
}

function StatCard({ value, label, icon: Icon }: { value: number, label: string, icon: any }) {
  const { count, ref } = useCountUp(value, 1000);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="bg-[#111111] border border-[#262626] hover:border-[#3F3F46] hover:-translate-y-0.5 transition-all rounded-xl p-5 relative">
      <Icon size={18} color="#6366F1" className="absolute top-5 right-5" />
      <div className="text-3xl font-bold text-[#6366F1]">{count}</div>
      <div className="text-sm text-[#A3A3A3] mt-1">{label}</div>
    </div>
  );
}

function EmptyState({ icon: Icon, message }: { icon: any, message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Icon size={32} color="#262626" className="mb-3" />
      <div className="text-sm text-[#525252]">{message}</div>
      <div className="text-xs text-[#3F3F46] mt-1">Data will appear here once your portfolio gets traffic.</div>
    </div>
  );
}

function AdminDashboard({ onLock }: { onLock: () => void }) {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [chartData, setChartData] = useState<{ date: string; count: number }[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [clicks, setClicks] = useState<Click[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'visitors' | 'messages' | 'engagement'>('overview');

  useEffect(() => {
    const fetchData = async () => {
      if (!supabase) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        const { data: visitsData } = await supabase
          .from('page_visits')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(100);
          
        if (visitsData) {
          setVisits(visitsData);
          
          const last30Days = [...Array(30)].map((_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - i);
            return d.toISOString().split('T')[0];
          }).reverse();
          
          const countsByDate = visitsData.reduce((acc, visit) => {
            const date = visit.created_at.split('T')[0];
            acc[date] = (acc[date] || 0) + 1;
            return acc;
          }, {} as Record<string, number>);
          
          const chartDataProcessed = last30Days.map(date => ({
            date: date.substring(5),
            count: countsByDate[date] || 0
          }));
          
          setChartData(chartDataProcessed);
        }

        const { data: messagesData } = await supabase
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (messagesData) setMessages(messagesData);

        const { data: clicksData } = await supabase
          .from('project_clicks')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (clicksData) setClicks(clicksData);

      } catch (error) {
        console.error('Error fetching admin data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const markAsRead = async (id: number) => {
    if (!supabase) return;
    try {
      const { error } = await supabase.from('contact_messages').update({ is_read: true }).eq('id', id);
      if (error) throw error;
      setMessages(messages.map(m => m.id === id ? { ...m, is_read: true } : m));
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };
  
  const handleDeleteMessage = async (messageId: number) => {
    if (!supabase) return
    const confirmed = window.confirm(
      'Delete this message permanently?'
    )
    if (!confirmed) return

    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', messageId)

      if (error) throw error

      setMessages((prev) =>
        prev.filter((msg) => msg.id !== messageId)
      )
    } catch (err) {
      console.error('Failed to delete message:', err)
      alert('Could not delete message. Please try again.')
    }
  }

  const todayDate = new Date().toISOString().split('T')[0];
  const visitorsToday = visits.filter(v => v.created_at.startsWith(todayDate)).length;
  const unreadMessages = messages.filter(m => !m.is_read).length;

  const pageCounts = visits.reduce((acc, v) => {
    acc[v.page_path] = (acc[v.page_path] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const topPages = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const projectStats = clicks.reduce((acc, click) => {
    if (!acc[click.project_name]) {
      acc[click.project_name] = { live_demo: 0, github: 0, gpt_link: 0, total: 0 };
    }
    acc[click.project_name][click.button_type]++;
    acc[click.project_name].total++;
    return acc;
  }, {} as Record<string, { live_demo: number, github: number, gpt_link: number, total: number }>);
  
  const sortedProjects = Object.entries(projectStats)
    .sort((a, b) => b[1].total - a[1].total);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <div className="text-[#A3A3A3]">Loading dashboard...</div>
      </div>
    );
  }

  const chartElement = (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" vertical={false} />
        <XAxis dataKey="date" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#262626', color: '#FAFAFA' }}
          itemStyle={{ color: '#6366F1' }}
        />
        <Line type="monotone" dataKey="count" stroke="#6366F1" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-y-auto">
      <div className="w-full flex justify-between items-center px-8 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">Admin</h1>
        <button
          onClick={onLock}
          className="text-xs text-[#A3A3A3] hover:text-[#FAFAFA] bg-transparent border border-[#262626] hover:border-[#3F3F46] rounded-md px-3 py-1.5 transition-colors"
        >
          Lock Panel
        </button>
      </div>
      
      <div className="flex gap-1 border-b border-[#1F1F1F] px-8 overflow-x-auto no-scrollbar">
        {(['overview', 'visitors', 'messages', 'engagement'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-all duration-200 flex items-center whitespace-nowrap
            ${activeTab === tab ? 'text-white border-b-[#6366F1]' : 'text-[#A3A3A3] border-b-transparent hover:text-white'}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {tab === 'messages' && unreadMessages > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-[#6366F1] text-white text-[10px] font-bold rounded-full">
                {unreadMessages}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 pb-20">
        {activeTab === 'overview' && (
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <StatCard value={visits.length} label="Total Visitors" icon={Users} />
              <StatCard value={visitorsToday} label="Visitors Today" icon={TrendingUp} />
              <StatCard value={messages.length} label="Total Messages" icon={Mail} />
              <StatCard value={unreadMessages} label="Unread Messages" icon={MailOpen} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Visitor Trend</h3>
                <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 h-64">
                  {visits.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full">
                      <BarChart3 size={24} color="#262626" className="mb-2" />
                      <div className="text-xs text-[#525252]">No data yet</div>
                    </div>
                  ) : chartElement}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Recent Unread Messages</h3>
                <div className="flex flex-col gap-3">
                  {messages.filter(m => !m.is_read).slice(0, 3).map(m => (
                    <div key={m.id} className="bg-[#111111] border border-[#262626] rounded-xl p-4 border-l-4 border-l-[#6366F1]">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-semibold text-white text-sm">{m.name}</div>
                        <div className="text-xs text-[#525252]">{formatRelativeTime(m.created_at)}</div>
                      </div>
                      <div className="text-sm text-[#A3A3A3] truncate">{m.message}</div>
                    </div>
                  ))}
                  {unreadMessages === 0 && (
                    <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 flex flex-col items-center justify-center h-32">
                      <Inbox size={24} color="#262626" className="mb-2" />
                      <div className="text-sm text-[#525252]">No unread messages.</div>
                    </div>
                  )}
                  {messages.filter(m => !m.is_read).length > 0 && (
                    <button onClick={() => setActiveTab('messages')} className="text-sm text-[#6366F1] hover:text-[#4F46E5] text-left mt-2 transition-colors inline-block">
                      View all in Messages &rarr;
                    </button>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {activeTab === 'visitors' && (
          <FadeIn>
            <h2 className="text-xl font-bold text-white mb-4">Visitor Analytics</h2>
            
            <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 mb-6">
              {visits.length === 0 ? (
                <EmptyState icon={BarChart3} message="No visitor data yet." />
              ) : (
                <div className="h-64 w-full">
                  {chartElement}
                </div>
              )}
            </div>

            {topPages.length > 0 && (
              <div className="mb-6">
                <div className="text-sm font-medium text-white mb-3">Top Pages</div>
                <div className="flex flex-col gap-2">
                  {topPages.map(([path, count]) => (
                    <div key={path} className="flex justify-between items-center text-sm">
                      <span className="text-[#A3A3A3]">{path}</span>
                      <span className="text-[#FAFAFA] font-mono">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {visits.length > 0 && (
              <div className="bg-[#111111] border border-[#262626] rounded-xl overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#1A1A1A] text-xs uppercase tracking-widest text-[#525252]">
                      <th className="px-4 py-3 font-medium">Time</th>
                      <th className="px-4 py-3 font-medium">Page</th>
                      <th className="px-4 py-3 font-medium">Referrer</th>
                      <th className="px-4 py-3 font-medium">Device</th>
                      <th className="px-4 py-3 font-medium">Browser</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visits.slice(0, 20).map((visit) => (
                      <tr key={visit.id} className="text-sm text-[#A3A3A3] border-b border-[#1F1F1F] hover:bg-[#1A1A1A] transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap">{formatRelativeTime(visit.created_at)}</td>
                        <td className="px-4 py-3 truncate max-w-[150px]">{visit.page_path}</td>
                        <td className="px-4 py-3 truncate max-w-[150px]">{visit.referrer}</td>
                        <td className="px-4 py-3">{visit.device_type}</td>
                        <td className="px-4 py-3">{visit.browser}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </FadeIn>
        )}

        {activeTab === 'messages' && (
          <FadeIn>
            <h2 className="text-xl font-bold text-white mb-4">Messages</h2>
            {messages.length === 0 ? (
              <EmptyState icon={Inbox} message="No messages yet." />
            ) : (
              <div>
                {messages.map((message, index) => {
                  const isNew = (new Date().getTime() - new Date(message.created_at).getTime()) < 60 * 60 * 1000;
                  return (
                    <FadeIn key={message.id} delay={index * 0.04}>
                      <div 
                        className={`bg-[#111111] border border-[#262626] hover:border-[#3F3F46] transition-colors rounded-xl p-5 mb-3 ${!message.is_read ? 'border-l-4 border-l-[#6366F1]' : ''}`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            {!message.is_read && (
                              <div className={`w-2 h-2 bg-[#6366F1] rounded-full mr-2 ${isNew ? 'animate-pulse' : ''}`}></div>
                            )}
                            <span className="font-semibold text-white">{message.name}</span>
                            <span className="text-xs text-[#525252] ml-2">{message.email}</span>
                          </div>
                          <span className="text-xs text-[#525252]">{formatRelativeTime(message.created_at)}</span>
                        </div>
                        {message.subject && (
                          <div className="text-sm text-[#6366F1] font-medium mt-1">{message.subject}</div>
                        )}
                        <div className="text-sm text-[#A3A3A3] mt-2 leading-relaxed whitespace-pre-wrap">
                          {message.message}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {!message.is_read && (
                            <button 
                              onClick={() => markAsRead(message.id)}
                              className="bg-transparent border border-[#3F3F46] hover:border-[#6366F1] text-[#FAFAFA] rounded-md px-3 py-1.5 transition-colors text-xs"
                            >
                              Mark as Read
                            </button>
                          )}
                          <a 
                            href={`mailto:${message.email}?subject=Re: ${message.subject || 'Your message'}`}
                            className="flex items-center justify-center bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.3)] hover:bg-[rgba(99,102,241,0.15)] hover:border-[#6366F1] text-[#6366F1] rounded-md px-3 py-1.5 transition-colors text-xs"
                          >
                            Reply via Email
                          </a>
                          <button 
                            onClick={() => handleDeleteMessage(message.id)}
                            className="text-xs px-3 py-1.5 text-red-400 border border-red-900/40 hover:bg-red-900/10 rounded-md transition-colors ml-auto md:ml-0"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            )}
          </FadeIn>
        )}

        {activeTab === 'engagement' && (
          <FadeIn>
            <h2 className="text-xl font-bold text-white mb-4">Project Engagement</h2>
            {clicks.length === 0 ? (
              <EmptyState icon={MousePointerClick} message="No engagement data yet." />
            ) : (
              <div className="bg-[#111111] border border-[#262626] rounded-xl overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#1A1A1A] text-xs uppercase tracking-widest text-[#525252]">
                      <th className="px-4 py-3 font-medium">Project Name</th>
                      <th className="px-4 py-3 font-medium text-right">Live Demo</th>
                      <th className="px-4 py-3 font-medium text-right">GitHub</th>
                      <th className="px-4 py-3 font-medium text-right">GPT Link</th>
                      <th className="px-4 py-3 font-medium text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedProjects.map(([name, stats]) => (
                      <tr key={name} className="text-sm text-[#A3A3A3] border-b border-[#1F1F1F] hover:bg-[#1A1A1A] transition-colors">
                        <td className="px-4 py-3 text-white font-medium">{name}</td>
                        <td className="px-4 py-3 text-right">{stats.live_demo || 0}</td>
                        <td className="px-4 py-3 text-right">{stats.github || 0}</td>
                        <td className="px-4 py-3 text-right">{stats.gpt_link || 0}</td>
                        <td className="px-4 py-3 text-right font-bold text-[#6366F1]">{stats.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </FadeIn>
        )}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pin, setPin] = useState('');
  const [shakeError, setShakeError] = useState(false);
  const [successFlash, setSuccessFlash] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem('admin_unlocked') === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    if (val.length <= 4) {
      setPin(val);
      if (val.length === 4) {
        if (val === '1427') {
          setSuccessFlash(true);
          setTimeout(() => {
            sessionStorage.setItem('admin_unlocked', 'true');
            setIsUnlocked(true);
            setPin('');
            setSuccessFlash(false);
          }, 200);
        } else {
          setShakeError(true);
          setTimeout(() => {
            setShakeError(false);
            setPin('');
          }, 300);
        }
      }
    }
  };

  const handleLock = () => {
    sessionStorage.removeItem('admin_unlocked');
    setIsUnlocked(false);
  };

  if (isUnlocked) {
    return <AdminDashboard onLock={handleLock} />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center relative" onClick={() => inputRef.current?.focus()}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .shake-animation {
          animation: shake 300ms ease-in-out;
        }
        @keyframes breathing {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-breathing {
          animation: breathing 3s infinite ease-in-out;
        }
        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-pop {
          animation: pop 150ms ease-out forwards;
        }
      `}</style>
      <div
        className={`bg-[#111111] border border-[#262626] rounded-2xl p-10 max-w-sm w-full mx-4 flex flex-col items-center cursor-text ${
          shakeError ? 'shake-animation' : ''
        }`}
      >
        <Lock size={24} color="#6366F1" className="mb-6 animate-breathing" />
        
        <input
          ref={inputRef}
          type="tel"
          inputMode="numeric"
          maxLength={4}
          value={pin}
          onChange={handlePinChange}
          className="opacity-0 absolute pointer-events-none"
          autoFocus
        />

        <div className="flex flex-row gap-3 justify-center">
          {[0, 1, 2, 3].map((i) => {
            const digit = pin[i] || '';
            const isActive = pin.length === i;
            const isFilled = pin.length > i;
            let borderColor = '#262626';
            
            if (successFlash) borderColor = '#22C55E';
            else if (isActive && !shakeError) borderColor = '#6366F1';
            
            return (
              <div
                key={i}
                style={{ borderColor }}
                className={`w-[52px] h-[60px] bg-[#1A1A1A] border-[1.5px] rounded-xl flex items-center justify-center text-2xl font-bold text-white transition-colors duration-200
                ${isActive && !successFlash && !shakeError ? 'animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.2)]' : ''}
                `}
              >
                {digit ? <span className="animate-pop block">{digit}</span> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

