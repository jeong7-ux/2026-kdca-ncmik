import { Link, useNavigate } from 'react-router-dom';
import { Bell, UserCircle, Menu, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-slate-100 h-20">
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto h-full">
        <div className="flex items-center gap-10">
          <Link to="/" className="text-xl font-bold text-[#00356a] whitespace-nowrap">
            질병관리청 국립의과학지식센터
          </Link>
          <nav className="hidden lg:flex gap-8">
            <Link to="#" className="text-slate-600 font-semibold hover:text-[#00356a] transition-colors">서비스</Link>
            <Link to="#" className="text-slate-600 font-semibold hover:text-[#00356a] transition-colors">연구</Link>
            <Link to="#" className="text-slate-600 font-semibold hover:text-[#00356a] transition-colors">데이터</Link>
            <Link to="#" className="text-slate-600 font-semibold hover:text-[#00356a] transition-colors">센터 안내</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative items-center">
            <form onSubmit={handleSearch}>
              <Search className="absolute left-3 text-slate-400 w-4 h-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="검색어를 입력하세요..."
                className="pl-10 pr-4 py-2 bg-slate-50 rounded-full border border-slate-200 focus:border-[#00356a] focus:ring-1 focus:ring-[#00356a] outline-none text-sm w-64 transition-all"
              />
            </form>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
              <UserCircle className="w-6 h-6" />
            </button>
          </div>
          
          <button className="hidden sm:block bg-[#004b93] text-white font-semibold px-5 py-2.5 rounded-full hover:bg-[#00356a] transition-colors text-sm">
            포털 접속
          </button>
          
          <button className="lg:hidden p-2 text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
