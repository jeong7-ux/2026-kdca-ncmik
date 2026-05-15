import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="text-xl font-bold text-[#00356a] mb-4">질병관리청 국립의과학지식센터</div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              국립의학정보지식센터는 신뢰할 수 있는 의학 정보를 제공하여 국민 건강 증진에 기여합니다.
            </p>
            <p className="text-xs text-slate-400 mt-6 font-medium">
              © 2024 National Center for Medical Information and Knowledge. All rights reserved.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8">
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-4">바로가기</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-slate-500 hover:text-[#00356a] hover:underline">문의처</Link></li>
                <li><Link to="#" className="text-sm text-slate-500 hover:text-[#00356a] hover:underline">관련 기관</Link></li>
                <li><Link to="#" className="text-sm text-slate-500 hover:text-[#00356a] hover:underline">웹 접근성</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-4">고객지원</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-slate-500 hover:text-[#00356a] hover:underline">공지사항</Link></li>
                <li><Link to="#" className="text-sm text-slate-500 hover:text-[#00356a] hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-4">문의처</h4>
              <p className="text-sm text-slate-500 mb-1">Tel: 02-1234-5678</p>
              <p className="text-sm text-slate-500">Email: info@ncmik.re.kr</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
