import React, { useState, useEffect, useRef } from 'react';
import { Lock, Users, TrendingUp, Mail, MailOpen, BarChart3, Inbox, MousePointerClick, AlertTriangle, Monitor, Smartphone, Tablet, ArrowRight, Menu, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FadeIn from '../components/FadeIn';
import { useCountUp } from '../hooks/useCountUp';
import { motion, AnimatePresence } from 'framer-motion';

type Visit = {
  id: number;
  created_at: string;
  page_path: string;
  referrer: string;
  device_type: string;
  browser: string;
  session_id?: string;
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

function getDateGroupLabel(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfYesterday = new Date(startOfToday);
  startOfYesterday.setDate(startOfYesterday.getDate() - 1);
  const startOfVisitDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  if (startOfVisitDay.getTime() === startOfToday.getTime()) return 'Today';
  if (startOfVisitDay.getTime() === startOfYesterday.getTime()) return 'Yesterday';

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function StatCard({ value, label, icon: Icon }: { value: number, label: string, icon: any }) {
  const { count, ref } = useCountUp(value, 1000);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="bg-[#111111] border border-[#262626] hover:border-[#3F3F46] hover:-translate-y-0.5 transition-all rounded-xl p-5 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6366F1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
  const [activeTab, setActiveTab] = useState<'overview' | 'visitors' | 'messages' | 'engagement'>('overview');
  const [deleteTarget, setDeleteTarget] = useState<Message | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!supabase) {
        return;
      }
      try {
        const [
          { data: visitsData },
          { data: messagesData },
          { data: clicksData }
        ] = await Promise.all([
          supabase.from('page_visits').select('*').order('created_at', { ascending: false }).limit(100),
          supabase.from('contact_messages').select('*').order('created_at', { ascending: false }),
          supabase.from('project_clicks').select('*').order('created_at', { ascending: false })
        ]);
          
        if (visitsData) {
          setVisits(visitsData);
          
          const last30Days = [...Array(30)].map((_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - i);
            return d.toISOString().split('T')[0];
          }).reverse();
          
          // Group by session_id to get unique sessions per day
          const uniqueSessions = new Set<string>();
          const countsByDate: Record<string, number> = {};
          
          visitsData.forEach(visit => {
            const date = visit.created_at.split('T')[0];
            const sessionKey = visit.session_id ? `${date}-${visit.session_id}` : `unknown-${visit.id}`;
            if (!uniqueSessions.has(sessionKey)) {
              uniqueSessions.add(sessionKey);
              countsByDate[date] = (countsByDate[date] || 0) + 1;
            }
          });
          
          const chartDataProcessed = last30Days.map(date => ({
            date: date,
            count: countsByDate[date] || 0
          }));
          
          setChartData(chartDataProcessed);
        }

        if (messagesData) setMessages(messagesData);
        if (clicksData) setClicks(clicksData);

      } catch (error) {
        console.error('Error fetching admin data:', error);
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
  const visitorsToday = new Set(visits.filter(v => v.created_at.startsWith(todayDate)).map(v => v.session_id || v.id.toString())).size;
  const unreadMessages = messages.filter(m => !m.is_read).length;

  const pageCounts = visits.reduce((acc, v) => {
    acc[v.page_path] = (acc[v.page_path] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const topPages = (Object.entries(pageCounts) as [string, number][])
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
  
  const sortedProjects = (Object.entries(projectStats) as [string, { live_demo: number, github: number, gpt_link: number, total: number }][])
    .sort((a, b) => b[1].total - a[1].total);

  const chartElement = (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" vertical={false} />
        <XAxis 
          dataKey="date" 
          stroke="#525252" 
          fontSize={11} 
          tickLine={false} 
          axisLine={false}
          tickFormatter={(value) =>
            new Date(value).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          }
        />
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
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      <header
        className={`fixed top-0 w-full h-16 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1F1F1F]' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="font-semibold text-white text-base">
            Admin
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 h-full">
            <div className="flex gap-6 h-full">
              {(['overview', 'visitors', 'messages', 'engagement'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative h-full text-sm font-medium transition-colors flex items-center whitespace-nowrap
                  ${activeTab === tab ? 'text-white' : 'text-[#A3A3A3] hover:text-white'}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {tab === 'messages' && unreadMessages > 0 && (
                    <span className="ml-2 bg-[#6366F1] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {unreadMessages}
                    </span>
                  )}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366F1]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
            
            <button
              onClick={onLock}
              className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-5 py-2.5 rounded-[8px] text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Lock size={16} />
              Lock Panel
            </button>
          </div>

          {/* Mobile Toggle */}
          <button aria-label="Open navigation menu" className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className="fixed inset-0 w-screen h-screen bg-[#0A0A0A] z-[200] isolate flex flex-col items-center justify-center pt-20 pb-8"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform'
        }}
      >
        <button
          aria-label="Close navigation menu"
          className="absolute top-5 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {(['overview', 'visitors', 'messages', 'engagement'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsOpen(false);
              }}
              className={`text-2xl transition-colors flex items-center ${activeTab === tab ? 'text-white' : 'text-[#A3A3A3] hover:text-white'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab === 'messages' && unreadMessages > 0 && (
                <span className="ml-3 bg-[#6366F1] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {unreadMessages}
                </span>
              )}
            </button>
          ))}
          
          <div className="mt-auto mb-8 w-full max-w-[280px]">
            <div className="border-t border-[#1F1F1F] w-full my-8" />
            <button
              onClick={() => {
                setIsOpen(false);
                onLock();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white px-5 py-3 rounded-xl text-sm font-medium transition-colors"
            >
              <Lock size={16} />
              Lock Panel
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-20">
        <>
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
            <h2 className="text-xl font-bold text-white mb-6">Visitor Analytics</h2>
            
            <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 mb-10">
              {visits.length === 0 ? (
                <EmptyState icon={BarChart3} message="No visitor data yet." />
              ) : (
                <div className="h-64 w-full">
                  {chartElement}
                </div>
              )}
            </div>

            {(() => {
              if (visits.length === 0) return null;
              
              const sessionsMap = new Map<string, {
                session_id: string;
                dateLabel: string;
                dateValue: Date;
                firstVisitTime: string;
                device: string;
                browser: string;
                pages: string[];
              }>();

              visits.forEach(visit => {
                const sid = visit.session_id || `unknown-${visit.id}`;
                if (!sessionsMap.has(sid)) {
                  sessionsMap.set(sid, {
                    session_id: sid,
                    dateLabel: getDateGroupLabel(visit.created_at),
                    dateValue: new Date(visit.created_at.split('T')[0]),
                    firstVisitTime: visit.created_at,
                    device: visit.device_type,
                    browser: visit.browser,
                    pages: [visit.page_path],
                  });
                } else {
                  const s = sessionsMap.get(sid)!;
                  s.firstVisitTime = visit.created_at;
                  s.device = visit.device_type;
                  s.browser = visit.browser;
                  s.pages.unshift(visit.page_path);
                }
              });

              const groups: Record<string, any[]> = {};
              Array.from(sessionsMap.values()).forEach(s => {
                if (!groups[s.dateLabel]) groups[s.dateLabel] = [];
                groups[s.dateLabel].push(s);
              });

              const sortedGroups = Object.entries(groups).sort((a, b) => b[1][0].dateValue.getTime() - a[1][0].dateValue.getTime());

              return (
                <div className="mb-10">
                  {sortedGroups.map(([label, sessions], i) => (
                    <details key={label} open className="group mb-6">
                      <summary className="cursor-pointer text-xs font-semibold uppercase tracking-widest text-[#6366F1] mb-3 select-none flex items-center">
                        {label} · {sessions.length} visitor{sessions.length === 1 ? '' : 's'}
                        <div className="ml-2 h-[1px] bg-[#1F1F1F] flex-grow"></div>
                      </summary>
                      <div className="flex flex-col">
                        {sessions.map((s: any) => (
                          <div key={s.session_id} className="bg-[#111111] border border-[#262626] rounded-xl p-3 mb-2 flex flex-col md:flex-row md:items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="text-[#A3A3A3]">
                                {s.device === 'Mobile' ? <Smartphone size={16} /> : s.device === 'Tablet' ? <Tablet size={16} /> : <Monitor size={16} />}
                              </div>
                              <div className="text-xs text-[#FAFAFA] whitespace-nowrap">{formatRelativeTime(s.firstVisitTime)}</div>
                              <div className="text-xs text-[#525252] truncate max-w-[120px]">{s.browser}</div>
                            </div>
                            <div className="flex flex-wrap items-center gap-1.5 justify-start md:justify-end">
                              {s.pages.slice(0, 3).map((page: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-1.5">
                                  <span className="bg-[#1A1A1A] border border-[#262626] text-[#A3A3A3] text-xs px-2 py-0.5 rounded-full truncate max-w-[150px]">{page}</span>
                                  {idx < Math.min(s.pages.length, 3) - 1 && <ArrowRight size={12} className="text-[#3F3F46]" />}
                                </div>
                              ))}
                              {s.pages.length > 3 && (
                                <>
                                  <ArrowRight size={12} className="text-[#3F3F46]" />
                                  <span className="text-[#525252] text-xs px-1">+{s.pages.length - 3} more</span>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              );
            })()}
          </FadeIn>
        )}

        {activeTab === 'messages' && (
          <FadeIn>
            <h2 className="text-xl font-bold text-white mb-6">Messages</h2>
            {messages.length === 0 ? (
              <EmptyState icon={Inbox} message="No messages yet." />
            ) : (
              <div className="mb-10">
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
                            onClick={() => setDeleteTarget(message)}
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
            <h2 className="text-xl font-bold text-white mb-6">Project Engagement</h2>
            {clicks.length === 0 ? (
              <EmptyState icon={MousePointerClick} message="No engagement data yet." />
            ) : (
              <div className="bg-[#111111] border border-[#262626] rounded-xl overflow-x-auto mb-10">
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
        </>
      </div>

      <AnimatePresence>
        {deleteTarget && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[300] flex items-center justify-center"
            onClick={() => setDeleteTarget(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111111] border border-[#262626] rounded-2xl p-6 max-w-sm mx-4 w-full"
            >
              <AlertTriangle size={28} color="#F59E0B" className="mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Delete this message?</h3>
              <p className="text-sm text-[#A3A3A3] mb-6">
                This will permanently delete the message from <span className="font-semibold text-white">{deleteTarget.name}</span>. This cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteTarget(null)}
                  className="flex-1 py-2 px-4 rounded-md text-sm font-medium text-[#A3A3A3] hover:text-white bg-transparent hover:bg-[#1F1F1F] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleDeleteMessage(deleteTarget.id);
                    setDeleteTarget(null);
                  }}
                  className="flex-1 py-2 px-4 rounded-md text-sm font-medium bg-red-600/10 border border-red-900/40 text-red-400 hover:bg-red-600/20 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AdminPage() {
  const [isUnlocked, setIsUnlocked] = useState(
    () => sessionStorage.getItem('admin_unlocked') === 'true'
  );
  const [pin, setPin] = useState('');
  const [shakeError, setShakeError] = useState(false);
  const [successFlash, setSuccessFlash] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

