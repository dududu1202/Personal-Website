const caseData={
  merchant:{overline:'EP.01 · 得物 × 商家经营工作台',title:'80+品牌，怎么找到下一步经营动作？',description:'从品牌分层、供给缺口与商品经营出发，把类目机会、商家承接、活动执行和复盘任务串成可解释的经营链路。',url:'experience/dewu/',cta:'查看完整案例',metrics:[['80+','潮流服装品牌'],['P0—P3','品牌分层方法'],['97%+','商品质量分达标率'],['独立完成','业务逻辑 × 设计 × AI Coding']]},
  kol:{overline:'EP.02 · SHEIN × KOL运营工作台',title:'达人合作，怎样从一次执行变成增长闭环？',description:'从韩国市场达人运营出发，把策略、Brief、内容审校、筛选、建联、履约CRM与数据复盘连接起来。',url:'experience/shein/',cta:'查看完整案例',metrics:[['1,000+','达人筛选'],['86位','合作上线'],['$67→$16','社媒渠道CAC'],['10环节','KOL运营闭环']]}
};
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-case]').forEach(item=>item.setAttribute('aria-pressed','false'));
  button.setAttribute('aria-pressed','true');
  const data=caseData[button.dataset.case];
  document.querySelector('#case-overline').textContent=data.overline;
  document.querySelector('#case-title').textContent=data.title;
  document.querySelector('#case-description').textContent=data.description;
  const link=document.querySelector('#case-link');link.href=data.url;link.textContent=data.cta;
  if(data.url.startsWith('http')){link.target='_blank';link.rel='noopener noreferrer'}else{link.removeAttribute('target');link.removeAttribute('rel')}
  document.querySelector('#evidence-board').innerHTML=data.metrics.map(item=>`<div class="evidence"><strong>${item[0]}</strong><span>${item[1]}</span></div>`).join('');
}));
