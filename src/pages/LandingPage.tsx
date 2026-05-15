import { Search, ArrowLeftRight, Database, Zap, ChevronLeft, ChevronRight, Eye, Download, FileText, Beaker, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RECOMMENDED_KEYWORDS = ['바이오마커', 'COVID-19', '임상시험', '유전체 분석'];

const RESEARCH_CARDS = [
  {
    category: '의학',
    categoryColor: 'bg-[#00356a]',
    title: '인공지능 기반 의료 영상 판독의 정확도 향상 연구',
    author: '김의학, 박연구 · 대한의학회지',
    views: '1.2k',
    downloads: '340',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtfqecMiye7XbWxdFxqRYLbAWMaKCFNC341ieAir3WDFS6NUnxfQwnUtb-nO8TpYWq49IPRPI1PlgfLMVxT3ECJiDJbhnwaxd1V4Xxb2Rlb-_r1vifxWXSZfIUpE2w8KrU1w9sbCew8EmYTSoiMPFDq2bRMlPdWp4ZuE3yp7WHQpXcvARUhFMpoYSGWvxtjbEULMtnvGrJQfzW7hKMdHTnd7XwmcyXS2YnvlSuzjWQmcB7EKw2CSy5np-ZMFaSNs_tgflftmq_M_lp',
  },
  {
    category: '생명과학',
    categoryColor: 'bg-[#293740]',
    title: '차세대 염기서열 분석을 통한 희귀 유전질환 진단',
    author: '이생명, 최유전 · 한국유전체학회',
    views: '850',
    downloads: '210',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYUzZCYf-Fwh090gpKNXlns4c21zCvZpl62AobFW3gnl-GyhHWxd9Sty3-wQ7irD9K2dv7Z9YtwCuDL3l2_YkmFQs3sYpFN7lXz-sDgxhE5k8U-89YNyNHJdeFGKe0rB_vMGSxlWsjrikHgwa2a7TOZg4fUh7KbFNpJuJKzKw27-TMw9qMUB5ZRg4PZwdqmOwXs7usiafKamTKFeh49iIYd_6CKizU4VzWpbkXYrswB51snZfOAClea43SV9fb8bzrJrmefauC2E00',
  },
  {
    category: '임상약리',
    categoryColor: 'bg-[#5d5f5f]',
    title: '신규 항암제 후보물질의 전임상 효능 및 독성 평가',
    author: '정약학, 강임상 · 약학연구논문집',
    views: '920',
    downloads: '185',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_TqSZtgmgrirds0seh4nXALT56pBaJG49UGwHrzOgkEVYg-5m6s7UlNUHtHskUbQTUBvEizWQwu-fk8cpzbm1Su4aOVhV-0keSa5yGImEn0PGoDD6nsGNw-Quxl7JAHIEANWH-2xsZl0PJf1l-L6QomUnFFrSnEfDteI60Tb_Nz1ovQ6b6fFDTFM75ItXqWUoGlIM6xblR4_lN4jopXbUjnkhYQeFY7E7guEVTz7vkBDuAcI9QA6cSC-aX_i1tDZzs-E0ZM_Hk-Ak',
  },
  {
    category: '데이터과학',
    categoryColor: 'bg-[#004b93]',
    title: '대규모 임상 데이터 익명화 기법 및 활용 가이드라인',
    author: '조데이터, 윤정보 · 보건정보통계학회지',
    views: '1.5k',
    downloads: '450',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLboiL6pGSy6tOOmFEQ00_ScqpkhwfuOGMjAcCpIAwMzV4qDzp08XqHTElTcQUAv-yOkJeCXt-4NtoOzF2vfTD22u21wtMv5tR-PFUJ4UxXOBv6mQRtXB_rTlfHj2Nocmhaf0O51x7Dg91n2gfxt_LNcrem5Kxo177kbT4rG4g8FEKIHkZtsGghtFnZtg-fA4cfBdoqco7a5bSahUMRBHEnIp85892nnErvMMkusHIDLEbJTyXMGzqKMjTLc_BCpBUvqEiHwlLHtsS',
  },
];

const SERVICES = [
  {
    title: '의과학학술논문',
    description: '최신 국내외 의학 학술지 및 논문을 제공합니다.',
    statsLabel: '보유 데이터',
    statsValue: '120만+ 건',
    icon: FileText,
  },
  {
    title: '국가서지',
    description: '국가 차원의 신뢰할 수 있는 서지 정보를 통합 제공합니다.',
    statsLabel: '통합 색인',
    statsValue: '45만+ 건',
    icon: Database,
  },
  {
    title: '임상 데이터셋',
    description: 'AI 학습 및 연구를 위한 익명화된 임상 데이터를 지원합니다.',
    statsLabel: '활용 가능 셋',
    statsValue: '800+ 건',
    icon: Beaker,
  },
];

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-white">
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlUmxeyVJ9H6wtAqc6lDovtq68KPmMDCCUbbV2cC-bL7mMjRdUkwA-kH1alWJryMA5SlGPNNEa2wz22_Wp0Kbh1Gnu8Al0DAFoxNutp2UrewGj5eG5dLG544IVoQseGcr6SZBwVG3rgiOoafAas2Ex5dgBIjv955ACWsUz0p5SBZQGT1bgnbT5FXhzQvKiLyO9LgA2sd3C5I8FcAhXkDXEap6wkZ87b1-mG5HcxYVisIA59Xis-07A6cFXRMz4bmVG74H72Ns28cbJ')` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6"
          >
            지식의 창을 열어 <span className="text-[#00356a]">건강한 세상</span>을 만드는<br />
            AI 연구 파트너
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 mb-10 max-w-2xl"
          >
            신뢰할 수 있는 의학 데이터와 첨단 AI 기술의 만남. 더 빠르고 정확한 연구를 위해 NCMIK가 함께합니다.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50"
          >
            <form onSubmit={handleSearch} className="relative mb-6">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="검색어를 입력하세요 (예: 알츠하이머, 백신)"
                className="w-full pl-14 pr-6 py-4 rounded-full border border-slate-200 bg-slate-50 focus:border-[#00356a] focus:ring-1 focus:ring-[#00356a] outline-none text-lg transition-all"
              />
            </form>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-sm font-semibold text-slate-400">추천 검색어:</span>
              {RECOMMENDED_KEYWORDS.map(keyword => (
                <button
                  key={keyword}
                  onClick={() => navigate(`/search?q=${encodeURIComponent(keyword)}`)}
                  className="bg-slate-100 px-3 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:bg-[#00356a] hover:text-white transition-colors"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="bg-white border-b border-slate-100 py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-24">
            <QuickAccessItem icon={ArrowLeftRight} label="상호대차" />
            <QuickAccessItem icon={Database} label="데이터 센터" />
            <QuickAccessItem icon={Zap} label="연구 API" />
          </div>
        </div>
      </section>

      {/* Recommended Research */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">맞춤 추천 연구</h2>
              <p className="text-slate-500">연구자님의 관심 분야를 기반으로 큐레이션된 최신 논문입니다.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_CARDS.map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="flex flex-col group cursor-pointer"
                onClick={() => navigate('/search')}
              >
                <div className="h-48 rounded-2xl bg-slate-100 mb-4 overflow-hidden relative border border-slate-100">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-3 left-3 ${card.categoryColor} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider`}>
                    {card.category}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-[#00356a] transition-colors line-clamp-2 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 flex-grow">{card.author}</p>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {card.views}</span>
                  <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5" /> {card.downloads}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Services */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">주요 서비스</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:shadow-slate-200/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-[#d6e3ff] w-12 h-12 rounded-xl flex items-center justify-center text-[#00356a]">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="text-slate-300 group-hover:text-[#00356a] transition-colors w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 mb-8">{service.description}</p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{service.statsLabel}</span>
                  <span className="text-sm font-bold text-[#00356a]">{service.statsValue}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Reports */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">공지사항</h2>
              <button className="text-sm font-bold text-[#00356a] hover:underline">더보기</button>
            </div>
            <div className="space-y-6">
              <NoticeItem title="2024년 상반기 NCMIK 시스템 점검 안내" date="2024.05.20" description="시스템 안정화 작업을 위해 일시적으로 서비스가 중단됩니다." />
              <NoticeItem title="신규 의학 데이터셋 50종 추가 오픈" date="2024.05.15" description="연구자들의 다양한 분석을 지원하기 위해 신규 데이터가 추가되었습니다." />
              <NoticeItem title="제3회 AI 의료 연구 컨퍼런스 개최 안내" date="2024.05.02" description="AI 기반 의료 기술의 최신 동향을 나누는 자리에 초대합니다." />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">최신 연구 리포트</h2>
              <button className="text-sm font-bold text-[#00356a] hover:underline">더보기</button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#eff4ff] border border-[#d6e3ff] rounded-2xl p-5 flex gap-5 items-center hover:bg-[#d6e3ff]/50 cursor-pointer transition-colors group">
                <div 
                  className="w-20 h-20 bg-white rounded-xl flex-shrink-0 bg-cover bg-center border border-white/50" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDe2eBhKr6Kjed0yfJKAF7hQRGf1c9K_7C_qCHxy92TVgcnHV6iTtm7v5haWLT1ZWpt6A0fRURdxh9-aPf_9PXtQNOjOxrHmrizDmzcaVSKR7fRl-wTIb1hKvMPoLpQoL85KItMEnhLC7FwlFOBKzSg0eJjTtTImn0ewgJiBk5v_hQyfjZpdqlr-X_W54GvuGNb8mwTI2B3UOAYlSgT-eH1gNXmVBGU_vJK1VdoE4fdog3Qde7IwNvTCQOLPcMI1zCztCaL5o-QgUjf')` }}
                />
                <div>
                  <span className="inline-block bg-white text-[#00356a] text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 border border-[#d6e3ff] uppercase tracking-wider">AI 인사이트</span>
                  <h4 className="font-bold text-slate-900 group-hover:text-[#00356a] transition-colors line-clamp-2 leading-tight">차세대 유전자 편집 기술(CRISPR)의 임상 적용 최신 동향 분석 리포트</h4>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 flex gap-5 items-center hover:bg-slate-50 cursor-pointer transition-colors group">
                <div 
                  className="w-20 h-20 bg-slate-100 rounded-xl flex-shrink-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuANrqnyBrg5hrQTS63LCweFHccc1ErFhRAs9xyAHe0eWP67ALZlXK6bDx7LSxDCQN54West4Yux46JA11ehLpU7Z4V6508AcMG8MsqJMDCBCR5qcFkFSL-L2r58ZTPTtO_pTgFjHV9AbHu-3ju3uqEnzzeUEiq0sJLXHrUzWAZOKTNGAc91szFxVI6J4I9Bx5rqOtLyZB5CbxDgfkWSOBbO3wEeNDNkTSY8Mv9A-aJr8_gvds2RHaHATb8DQcx8YuEjTNOYxyXz3M48')` }}
                />
                <div>
                  <span className="inline-block bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 border border-slate-200 uppercase tracking-wider">데이터 리뷰</span>
                  <h4 className="font-bold text-slate-900 group-hover:text-[#00356a] transition-colors line-clamp-2 leading-tight">알츠하이머 조기 진단을 위한 멀티모달 바이오마커 연구 메타분석</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuickAccessItem({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <button className="flex flex-col items-center gap-4 group">
      <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#00356a] group-hover:border-[#00356a] group-hover:text-white transition-all text-[#00356a] shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
        <Icon className="w-8 h-8" />
      </div>
      <span className="text-sm font-bold text-slate-700 group-hover:text-[#00356a] transition-colors">{label}</span>
    </button>
  );
}

function NoticeItem({ title, date, description }: { title: string; date: string; description: string }) {
  return (
    <Link to="#" className="group block border-b border-slate-100 pb-5 last:border-0">
      <div className="flex justify-between items-start gap-4 mb-1">
        <h4 className="font-bold text-slate-800 group-hover:text-[#00356a] transition-colors line-clamp-1">{title}</h4>
        <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">{date}</span>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </Link>
  );
}
