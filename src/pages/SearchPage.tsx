import { Search, RefreshCcw, ChevronDown, Download, FolderPlus, Quote, Share2, FileText, Sparkles, Target, FlaskConical, Lightbulb, X, LockOpen, School, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '최신 백신 트렌드';
  const [selectedResearch, setSelectedResearch] = useState<null | any>(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Search Header */}
        <div className="mb-8 border-b border-slate-200 pb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">"{query}" 검색 결과</h1>
          <p className="text-slate-500">총 1,248건의 관련 연구 자료가 발견되었습니다.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar (Filters) */}
          <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900">상세검색</h2>
              <button className="text-[#00356a] hover:text-[#004b93] text-xs font-bold flex items-center gap-1 transition-colors">
                <RefreshCcw className="w-3 h-3" /> 초기화
              </button>
            </div>

            <FilterSection title="주제분류" open>
              <div className="space-y-3">
                <FilterItem label="의학 (542)" />
                <FilterItem label="예방의학 (210)" checked />
                <FilterItem label="감염내과 (156)" checked />
                <FilterItem label="약학 (320)" />
                <FilterItem label="생명과학 (185)" />
                <button className="text-[#00356a] text-xs font-bold hover:underline w-full text-center mt-2">더보기</button>
              </div>
            </FilterSection>

            <FilterSection title="발행년도" open>
              <div className="space-y-3">
                <RadioItem label="2024 (156)" name="year" />
                <RadioItem label="2023 (342)" name="year" checked />
                <RadioItem label="2022 (410)" name="year" />
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
                  <input type="text" placeholder="YYYY" className="w-20 px-2 py-1.5 text-xs border border-slate-200 rounded outline-none focus:border-[#00356a]" />
                  <span className="text-slate-300">-</span>
                  <input type="text" placeholder="YYYY" className="w-20 px-2 py-1.5 text-xs border border-slate-200 rounded outline-none focus:border-[#00356a]" />
                  <button className="bg-slate-100 hover:bg-slate-200 px-2 py-1.5 rounded text-xs transition-colors font-bold">적용</button>
                </div>
              </div>
            </FilterSection>

            <FilterSection title="자료유형" open>
              <div className="space-y-3">
                <FilterItem label="학술논문 (854)" checked />
                <FilterItem label="연구보고서 (210)" />
                <FilterItem label="학위논문 (120)" />
                <FilterItem label="단행본 (64)" />
              </div>
            </FilterSection>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 space-y-6">
            {/* AI Summary Box */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#eff4ff] border border-[#d6e3ff] rounded-2xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#00356a] text-white p-2.5 rounded-xl flex-shrink-0 shadow-lg shadow-[#00356a]/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold text-[#00356a]">AI 통합 요약</h2>
                      <span className="bg-[#00356a]/10 text-[#00356a] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Beta</span>
                    </div>
                    <button className="text-[#00356a] text-xs font-bold hover:underline flex items-center gap-1">
                      더보기 <ChevronDown className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
                    최근 백신 연구는 mRNA 기술의 최적화와 범용 코로나바이러스 백신 개발에 집중되고 있습니다. [1] 특히 지질나노입자(LNP) 전달 시스템의 안정성 향상이 주요 과제로 다뤄지며, 부작용 감소를 위한 저용량 고효율 백신 설계가 임상 2상 단계에서 긍정적인 결과를 보이고 있습니다...
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Results Controls */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <div className="flex items-center gap-5">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="rounded border-slate-300 text-[#00356a] focus:ring-[#00356a] h-4 w-4" />
                  <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">전체선택</span>
                </label>
                <div className="h-4 w-px bg-slate-200" />
                <button className="text-sm font-semibold text-slate-500 hover:text-[#00356a] flex items-center gap-1.5 transition-colors"><Download className="w-4 h-4" /> 내보내기</button>
                <button className="text-sm font-semibold text-slate-500 hover:text-[#00356a] flex items-center gap-1.5 transition-colors"><FolderPlus className="w-4 h-4" /> 서재 담기</button>
              </div>
              <div className="flex gap-4">
                <Select placeholder="정확도순" />
                <Select placeholder="10개씩 보기" />
              </div>
            </div>

            {/* Results List */}
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <ResultCard key={i} onOpenSummary={() => setSelectedResearch({ id: i })} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 pt-10 pb-20">
              <button disabled className="p-2 border border-slate-200 rounded hover:bg-white text-slate-400 disabled:opacity-30"><ChevronLeft className="w-4 h-4" /></button>
              {[1, 2, 3, '...', 125].map((page, i) => (
                <button 
                  key={i} 
                  className={cn(
                    "w-9 h-9 flex items-center justify-center rounded text-sm font-bold transition-all",
                    page === 1 ? "bg-[#00356a] text-white" : "hover:bg-white text-slate-500"
                  )}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 border border-slate-200 rounded hover:bg-white text-slate-600"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Summary Sidebar */}
      <AnimatePresence>
        {selectedResearch && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResearch(null)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60]"
            />
            <motion.aside 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-[480px] bg-white shadow-2xl z-[70] flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div className="flex items-center gap-3 text-[#00356a]">
                  <Sparkles className="w-5 h-5" />
                  <h2 className="text-lg font-bold">AI 요약</h2>
                </div>
                <button 
                  onClick={() => setSelectedResearch(null)}
                  className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-10">
                <div className="pb-10 border-b border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">차세대 mRNA 백신의 LNP 전달 시스템 최적화 연구</h3>
                  <div className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                    <span>Journal of Medical Virology</span>
                    <div className="w-1 h-1 rounded-full bg-slate-200" />
                    <span>2024</span>
                  </div>
                </div>

                <SummarySection icon={Target} title="연구 목적">
                  기존 지질나노입자(LNP) 기반 mRNA 백신의 주요 한계점인 극저온 보관(콜드체인) 의존성을 탈피하기 위해, 상온에서도 안정성을 유지할 수 있는 새로운 LNP 지질 조성을 개발하고 검증함.
                </SummarySection>

                <SummarySection icon={FlaskConical} title="연구 방법">
                  콜레스테롤 유도체와 신규 이온화 지질을 조합한 다양한 LNP 포뮬레이션을 스크리닝함. 최적화된 후보군을 마우스 모델(in vivo)에 주입하여, 상온(25°C)에서 4주간 보관 전후의 mRNA 발현 효율 및 면역원성(중화항체 역가)을 비교 분석함.
                </SummarySection>

                <SummarySection icon={Lightbulb} title="주요 결과">
                  신규 LNP 조성(Formulation-X)은 상온 4주 보관 시에도 초기 발현 효율의 95% 이상을 유지함. 면역원성 평가에서도 기존 저온 보관 백신과 통계적으로 유의미한 차이 없이 동등한 수준의 중화항체를 형성함.
                </SummarySection>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                <button className="w-full bg-[#00356a] text-white py-4 rounded-2xl font-bold hover:bg-[#004b93] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#00356a]/20">
                  <FileText className="w-5 h-5" /> 원문보기
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultCard({ onOpenSummary }: { onOpenSummary: () => void }) {
  return (
    <article className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#00356a]/30 transition-all group relative flex gap-6">
      <div className="pt-1.5">
        <input type="checkbox" className="rounded border-slate-300 text-[#00356a] focus:ring-[#00356a] h-4 w-4 cursor-pointer" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold text-slate-400">
            <span className="text-[#00356a] uppercase">학술논문</span>
            <div className="w-1 h-1 rounded-full bg-slate-200" />
            <span>KCI등재</span>
            <div className="w-1 h-1 rounded-full bg-slate-200" />
            <span>Journal of Medical Virology</span>
            <div className="w-1 h-1 rounded-full bg-slate-200" />
            <span>2024</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
            <LockOpen className="w-3 h-3" /> OPEN ACCESS
          </span>
        </div>
        
        <h3 
          className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00356a] transition-colors cursor-pointer leading-tight"
          onClick={onOpenSummary}
        >
          차세대 mRNA 백신의 LNP 전달 시스템 최적화 연구
        </h3>
        
        <div className="text-sm text-slate-500 mb-4 flex flex-wrap gap-2.5 items-center font-medium">
          <span className="text-slate-900">김지훈, 이수진, 박민수</span>
          <div className="w-1 h-1 rounded-full bg-slate-200" />
          <span>대한바이러스학회</span>
        </div>
        
        <p className="text-sm text-slate-500 mb-5 line-clamp-2 leading-relaxed">
          본 연구는 기존 지질나노입자(LNP)의 열 안정성 문제를 해결하기 위해 새로운 지질 조성을 제안한다. in vivo 실험 결과, 상온에서 4주간 보관 시에도 mRNA의 발현 효율이 95% 이상 유지됨을 확인하였으며, 이는 콜드체인 의존도를 크게 낮출 수 있는 혁신적인 결과이다...
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {['#mRNA', '#LNP', '#백신안정성'].map(tag => (
            <span key={tag} className="bg-slate-50 text-slate-500 px-2.5 py-1 rounded-lg text-xs font-bold border border-slate-100 hover:bg-slate-100 cursor-pointer transition-colors">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-5 border-t border-slate-100">
          <button 
            onClick={onOpenSummary}
            className="flex items-center gap-2 text-sm text-[#00356a] hover:bg-[#d6e3ff]/30 transition-all font-bold bg-[#eff4ff] px-4 py-2 rounded-full"
          >
            <Sparkles className="w-4 h-4" /> AI 요약
          </button>
          <div className="flex gap-2">
            <ActionButton icon={Quote} label="인용" />
            <ActionButton icon={FolderPlus} label="서재 담기" />
            <ActionButton icon={Share2} label="공유" />
            <button className="flex items-center gap-1.5 text-xs text-[#00356a] font-bold hover:bg-[#00356a] hover:text-white transition-all px-4 py-2 border border-[#00356a]/20 rounded-xl">
              <FileText className="w-4 h-4" /> 원문보기
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ActionButton({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#00356a] hover:bg-slate-50 transition-all px-3 py-2 rounded-xl">
      <Icon className="w-4 h-4" /> {label}
    </button>
  );
}

function FilterSection({ title, children, open = false }: { title: string; children: React.ReactNode; open?: boolean }) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-900">{title}</span>
        <ChevronDown className={cn("w-4 h-4 text-slate-400 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="p-5 pt-0 border-t border-slate-50 animate-in fade-in duration-300">
          <div className="mt-4">{children}</div>
        </div>
      )}
    </div>
  );
}

function FilterItem({ label, checked = false }: { label: string; checked?: boolean }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <input type="checkbox" defaultChecked={checked} className="rounded border-slate-300 text-[#00356a] focus:ring-[#00356a] h-4 w-4" />
      <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">{label}</span>
    </label>
  );
}

function RadioItem({ label, name, checked = false }: { label: string; name: string; checked?: boolean }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <input type="radio" name={name} defaultChecked={checked} className="border-slate-300 text-[#00356a] focus:ring-[#00356a] h-4 w-4" />
      <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">{label}</span>
    </label>
  );
}

function Select({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <select className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2 pr-10 text-sm font-bold text-slate-600 outline-none focus:border-[#00356a] cursor-pointer shadow-sm shadow-slate-100">
        <option>{placeholder}</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
    </div>
  );
}

function SummarySection({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-[#00356a] mb-4 flex items-center gap-2">
        <Icon className="w-4 h-4" /> {title}
      </h4>
      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-sm text-slate-600 leading-relaxed font-medium">
        {children}
      </div>
    </div>
  );
}
