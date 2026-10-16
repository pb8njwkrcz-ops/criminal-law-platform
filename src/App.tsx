import { useState } from 'react'
import './App.css'
import { caseStudy } from './data/cases'

type Tab = 'overview' | 'timeline' | 'evidence' | 'law' | 'flow'

function App() {
  const [tab, setTab] = useState<Tab>('overview')
  const [step, setStep] = useState(0)
  const [saved, setSaved] = useState(false)
  const next = () => setStep((value) => Math.min(value + 1, caseStudy.flow.length - 1))
  const previous = () => setStep((value) => Math.max(value - 1, 0))
  const tabs: [Tab, string][] = [['overview', '案件介绍'], ['timeline', '案件时间线'], ['evidence', '证据材料'], ['law', '法律分析'], ['flow', '办理流程']]
  return <div className="site-shell">
    <header className="site-header"><div className="brand"><span className="brand-bar" /><div><b>刑法空间</b><strong>LAW-X.com</strong><small>刑事案件办理全流程虚拟仿真实验</small></div></div><nav><a href="#top">⌂<span>首页</span></a><a className="active" href="#overview">⚖<span>案例中心</span></a><a href="#flow">▣<span>智能实训</span></a><a href="#sources">▤<span>资料库</span></a></nav><button className="language">Language</button><button className="login">登录/注册</button></header>
    <main>
      <section className="hero" id="top"><div className="hero-copy"><div className="eyebrow">国家级案例实训 · 刑法分论</div><h1>{caseStudy.title}</h1><p className="byline">{caseStudy.prosecutor}　|　{caseStudy.court}　|　起诉日期：{caseStudy.date}</p><p className="classification">所属专业类：法学类　对应专业：法学　课程类型：专业核心课　实验类型：综合设计型</p><p className="hero-text">{caseStudy.summary}</p><div className="hero-actions"><button className="primary" onClick={() => setTab('flow')}>▣ 开始实验</button><button className="hero-link" onClick={() => setSaved(!saved)}>{saved ? '♥ 已收藏' : '♡ 收藏'}　　↗ 分享</button></div></div><div className="video-card"><div className="video-heading">案例简介视频　|　教学引导视频</div><div className="video-cover"><div className="gavel">⚖</div><button className="play" aria-label="播放案例介绍">▶</button><span>案件办理全流程训练</span></div><div className="video-caption">基于公开起诉书的刑事案件分析实验</div></div></section>
      <section className="stats"><div className="rating"><span>案例评价</span><b>—</b><strong>暂无评分</strong><small>首批教学案例</small></div><div className="stat-items"><div><span>▣ 文书编号</span><b>1775号</b></div><div><span>♧ 手机价值</span><b>5,620元</b></div><div><span>♙ 销赃价格</span><b>2,000元</b></div><div><span>◷ 案件节点</span><b>9个</b></div><div><span>⊙ 证据组</span><b>8组</b></div><div><span>♢ 建议刑期</span><b>6个月</b></div></div><div className="case-badge"><span>案件状态</span><b>公开起诉书</b><small>沪青检一部刑诉〔2019〕1775号</small></div></section>
      <div className="detail-layout" id="overview"><section className="content-card"><div className="main-tabs">{tabs.map(([key, label]) => <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key)}>{label}</button>)}</div><div className="content-body">{tab === 'overview' && <Overview />}{tab === 'timeline' && <Timeline />}{tab === 'evidence' && <Evidence />}{tab === 'law' && <Law />}{tab === 'flow' && <Flow step={step} next={next} previous={previous} />}</div></section><aside className="sidebar"><section><h3>实验浏览器要求</h3><div className="browser-icons">🌐　🟢　🦊</div></section><section><h3>教学支持</h3><p>☎　刑法案例教研组</p><p>◎　适用于刑法分论课程</p><p>◷　建议用时：45分钟</p></section><section id="sources"><h3>资料来源</h3><p className="source-note">本实验依据上海市青浦区人民检察院公开起诉书整理，公开材料不包含对应法院判决书。</p><a className="source-link" href="https://www.sh.jcy.gov.cn/qpjc/jwgk/flwsgk/66643.jhtml" target="_blank" rel="noreferrer">查看官方起诉书 ↗</a><a className="source-link" href="https://www.court.gov.cn/fabu/xiangqing/5228.html" target="_blank" rel="noreferrer">查看盗窃司法解释 ↗</a></section></aside></div>
    </main>
  </div>
}

function Overview() { return <><h2>案件教学目标</h2><div className="intro-box"><p>通过本实验，学习者将围绕李某甲盗窃案完成从事实识别、证据审查、罪名判断到量刑建议的完整刑事案件办理训练。</p><ol><li>掌握盗窃罪构成要件及“数额较大”的判断方法。</li><li>训练监控、辨认、交易照片、价格认定和被告人供述的证据审查。</li><li>理解盗窃后出售赃物的法律性质，并区分盗窃罪与掩饰、隐瞒犯罪所得罪。</li><li>区分检察机关量刑建议与法院最终判决，形成规范的法律表达。</li></ol></div><div className="fact-grid"><div><span>案件名称</span><b>李某甲盗窃案</b></div><div><span>指控罪名</span><b>盗窃罪</b></div><div><span>审理程序</span><b>速裁程序建议</b></div><div><span>涉案物品</span><b>iPhone XR A2108</b></div></div></> }
function Timeline() { return <><h2>案件时间线</h2><div className="timeline">{caseStudy.timeline.map((item) => <div className="timeline-item" key={item.time}><span>{item.time}</span><div><b>{item.title}</b><p>{item.detail}</p></div></div>)}</div></> }
function Evidence() { return <><h2>八组关键证据</h2><p className="section-lead">请按照“证明对象—证据来源—证明力”的思路审查证据链。</p><div className="evidence-grid">{caseStudy.evidence.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></> }
function Law() { return <><h2>法律分析</h2><div className="law-callout"><b>核心结论</b><p>公开起诉书指控李某甲构成盗窃罪，手机价值5,620元达到“数额较大”的追诉标准。起诉书提出有期徒刑六个月并处罚金1,000元的量刑建议，不等同于法院最终判决。</p></div><div className="law-table"><div><span>构成要件</span><b>未经同意，秘密进入房间取走他人手机</b></div><div><span>主观方面</span><b>具有非法占有目的，盗窃后立即出售</b></div><div><span>数额认定</span><b>价格认定为人民币5,620元</b></div><div><span>特别争议</span><b>居住房间是否属于“户”及入户盗窃认定</b></div></div></> }
function Flow({ step, next, previous }: { step: number; next: () => void; previous: () => void }) { const item = caseStudy.flow[step]; return <><div className="flow-head"><div><span>案件办理全流程</span><h2>{item.title}</h2></div><b>{step + 1} / {caseStudy.flow.length}</b></div><div className="flow-progress"><i style={{ width: `${((step + 1) / caseStudy.flow.length) * 100}%` }} /></div><p className="flow-prompt">{item.prompt}</p><div className="flow-task">{item.task}</div><div className="flow-actions"><button disabled={step === 0} onClick={previous}>← 上一步</button><button className="primary" onClick={next}>{step === caseStudy.flow.length - 1 ? '完成实验 ✓' : '进入下一步 →'}</button></div></> }

export default App
