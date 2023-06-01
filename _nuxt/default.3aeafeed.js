import{_ as g}from"./nuxt-link.5972728e.js";import{a as u,m as v,o as i,b as l,f as e,e as s,w as _,F as f,r as h,i as d,t as x,k as b,p as y}from"./entry.d5442ddf.js";const w={data(){return{isDark:this.$colorMode.preference==="dark",isOpen:!1,NavList:[{name:"프로필",link:"/about",icon:"user"},{name:"스킬",link:"/skill",icon:"code"},{name:"포트폴리오",link:"/portfolio",icon:"folder-open"}]}},methods:{toggleTheme(){this.$colorMode.preference=this.isDark?"light":"dark",this.isDark=!this.isDark}}},$={class:"w-full px-[2%] sticky top-0 bg-white py-2.5 z-50 darkMode"},C={class:"max-w-7xl mx-auto flex justify-between items-center"},N=e("img",{src:"https://via.placeholder.com/120x50",alt:"logo"},null,-1),D={class:"basis-3/4 hidden md:block"},B={class:"flex justify-around"},M={class:"basis-1/12 hidden md:block"},O={class:"flex justify-between"},L={class:"basis-2/4 text-center cursor-pointer text-2xl"},j={class:"basis-2/4 text-center cursor-pointer text-2xl"},z=e("div",{class:"text-center mt-6"},[e("img",{src:"https://via.placeholder.com/100",alt:"img",class:"mx-auto rounded-full mb-4"}),e("p",null,"프론트엔드 개발자 홍길동")],-1),F={class:"mt-12"};function T(c,o,m,p,n,k){const a=g,r=v("font-awesome-icon");return i(),l("div",null,[e("div",$,[e("div",C,[s(a,{to:"/"},{default:_(()=>[N]),_:1}),e("div",D,[e("ul",B,[(i(!0),l(f,null,h(n.NavList,t=>(i(),l("li",{key:t},[s(a,{to:t.link},{default:_(()=>[d(x(t.name),1)]),_:2},1032,["to"])]))),128))])]),e("div",M,[e("ul",O,[e("li",L,[s(r,{icon:["fas",n.isDark?"moon":"sun"],onClick:k.toggleTheme},null,8,["icon","onClick"])]),e("li",j,[s(r,{icon:["fas","globe"]})])])]),e("div",null,[s(r,{icon:["fas","bars"],class:"!text-3xl cursor-pointer md:!hidden",onClick:o[0]||(o[0]=t=>n.isOpen=!0)})]),e("div",{class:b(["w-72 h-full fixed darkMode bg-gray-100 z-50 p-12 box-border transition-all duration-500 top-0 -right-80 md:hidden",n.isOpen&&"!right-0"])},[s(r,{icon:["fas","xmark"],class:"absolute top-5 right-5 !text-3xl cursor-pointer md:hidden",onClick:o[1]||(o[1]=t=>n.isOpen=!1)}),z,e("ul",F,[(i(!0),l(f,null,h(n.NavList,t=>(i(),l("li",{class:"py-5 border-b",key:t},[s(r,{icon:["fas",t.icon],class:"mr-1"},null,8,["icon"]),d(),s(a,{onClick:o[2]||(o[2]=J=>n.isOpen=!1),to:t.link},{default:_(()=>[d(x(t.name),1)]),_:2},1032,["to"])]))),128))])],2)])])])}const V=u(w,[["render",T]]),R={},S={class:"w-full bg-white darkMode py-7 text-center"},A=e("p",null,"Copyright 2023. HongGilDong. All Right Reserved.",-1),E=[A];function G(c,o){return i(),l("div",S,E)}const H=u(R,[["render",G]]),q={};function I(c,o){const m=V,p=H;return i(),l("div",null,[s(m),y(c.$slots,"default"),s(p)])}const Q=u(q,[["render",I]]);export{Q as default};
