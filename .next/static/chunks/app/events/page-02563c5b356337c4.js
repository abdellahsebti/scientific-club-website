(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{6:(e,t,s)=>{Promise.resolve().then(s.bind(s,5804))},5804:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(5155),a=s(2115),n=s(4619),l=s(3315);function c(){let[e,t]=(0,a.useState)([]),[s,c]=(0,a.useState)(!0),[i,x]=(0,a.useState)("");return((0,a.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/events");if(!e.ok)throw Error("Failed to fetch events.");let s=await e.json();t(s)}catch(e){x("An error occurred while fetching events."),console.error(e)}finally{c(!1)}})()},[]),s)?(0,r.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark text-text",children:(0,r.jsx)("p",{className:"text-2xl",children:"Loading events..."})}):i?(0,r.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark text-text",children:(0,r.jsx)("p",{className:"text-red-500 text-2xl",children:i})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{}),(0,r.jsx)("main",{className:"min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark text-text",children:(0,r.jsxs)("div",{className:"max-w-4xl w-full p-8 bg-white/5 rounded-lg shadow-md",children:[(0,r.jsx)("h1",{className:"text-3xl md:text-4xl font-bold text-center mb-8",children:"Upcoming Events"}),0===e.length?(0,r.jsx)("p",{className:"text-center text-gray-400",children:"No events available."}):(0,r.jsx)("ul",{className:"space-y-6",children:e.map(e=>(0,r.jsxs)("li",{className:"bg-white/10 p-6 rounded-lg",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-2",children:e.title}),(0,r.jsx)("p",{className:"text-gray-400 mb-2",children:e.description}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:[(0,r.jsx)("strong",{children:"Date:"})," ",new Date(e.date).toLocaleDateString()]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:[(0,r.jsx)("strong",{children:"Location:"})," ",e.location]})]},e._id))})]})}),(0,r.jsx)(l.A,{})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,742,923,441,517,358],()=>t(6)),_N_E=e.O()}]);