import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram } from 'lucide-react';
import XLogo from './XLogo';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1F1F1F] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LEFT COLUMN */}
          <div>
            <div className="font-bold text-lg text-white mb-2">Prince Patel</div>
            <div className="text-sm text-[#A3A3A3] mb-6">
              AI Builder. Product Developer.
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/Pro-Prince" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#111111] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/prince-patel476/" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#111111] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/Pro_Prince_1" aria-label="X / Twitter profile" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#111111] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <XLogo size={18} />
              </a>
              <a href="https://www.instagram.com/pro.prince.1/" aria-label="Instagram profile" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#111111] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#525252] mb-4">NAVIGATION</div>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Home</Link>
              <Link to="/projects" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Projects</Link>
              <Link to="/about" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">About</Link>
              <Link to="/blog" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#525252] mb-4">PROJECTS</div>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/Pro-Prince/HoverPick" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">HoverPick</a>
              <a href="https://github.com/Pro-Prince/vtt-vision-to-text" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">VTT Vision to Text</a>
              <a href="https://github.com/Pro-Prince/yoursoulsync" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Soul Sync Web</a>
              <a href="https://github.com/Pro-Prince/yourlifetracker" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Life Tracker</a>
              <a href="https://github.com/Pro-Prince/Soul-Sync-Android-App" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Soul Sync Android</a>
              <a href="https://github.com/Pro-Prince/Amul-Kool-Website" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Amul Kool Gold</a>
              <a href="https://github.com/Pro-Prince/PDF-Craft" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">PDF Craft</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1F1F1F] mt-12 pt-8 flex flex-col md:flex-row justify-start items-center gap-4">
          <div className="text-xs text-[#525252]">© 2026 Prince Patel. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
