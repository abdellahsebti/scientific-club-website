(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{4386:(e,t,r)=>{Promise.resolve().then(r.bind(r,9172))},9172:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(5155),n=r(2115),s=r(4619),d=r(3315);function l(){let[e,t]=(0,n.useState)(""),[r,l]=(0,n.useState)(""),[o,i]=(0,n.useState)(""),[c,u]=(0,n.useState)(""),[m,x]=(0,n.useState)(null),[p,b]=(0,n.useState)(""),[h,g]=(0,n.useState)(""),v=async a=>{if(a.preventDefault(),b(""),g(""),!e||!r||!o||!c||!m)return b("All fields are required.");try{let a=new FormData;a.append("title",e),a.append("description",r),a.append("date",o),a.append("location",c),m&&a.append("image",m);let n=await fetch("/api/events/add",{method:"POST",body:a}),s=await n.json();n.ok?(g(s.message),t(""),l(""),i(""),u(""),x(null)):b(s.message||"An unexpected error occurred.")}catch(e){console.error(e),b("An unexpected error occurred.")}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{}),(0,a.jsx)("main",{className:"min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark text-text",children:(0,a.jsxs)("div",{className:"max-w-md w-full p-8 bg-white/5 rounded-lg shadow-md",children:[(0,a.jsx)("h1",{className:"text-3xl md:text-4xl font-bold text-center mb-8",children:"Add New Event"}),p&&(0,a.jsx)("p",{className:"text-red-500 text-center mb-4",children:p}),h&&(0,a.jsx)("p",{className:"text-green-500 text-center mb-4",children:h}),(0,a.jsxs)("form",{onSubmit:v,encType:"multipart/form-data",children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"title",className:"block text-text mb-2",children:"Event Title"}),(0,a.jsx)("input",{type:"text",id:"title",value:e,onChange:e=>t(e.target.value),placeholder:"Enter event title",className:"w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"description",className:"block text-text mb-2",children:"Description"}),(0,a.jsx)("textarea",{id:"description",value:r,onChange:e=>l(e.target.value),placeholder:"Enter event description",rows:4,className:"w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"date",className:"block text-text mb-2",children:"Date"}),(0,a.jsx)("input",{type:"datetime-local",id:"date",value:o,onChange:e=>i(e.target.value),className:"w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"location",className:"block text-text mb-2",children:"Location"}),(0,a.jsx)("input",{type:"text",id:"location",value:c,onChange:e=>u(e.target.value),placeholder:"Enter event location",className:"w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300",required:!0})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{htmlFor:"image",className:"block text-text mb-2",children:"Upload Event Photo"}),(0,a.jsx)("input",{type:"file",id:"image",accept:"image/*",onChange:e=>{var t;return x((null===(t=e.target.files)||void 0===t?void 0:t[0])||null)},className:"w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300",required:!0})]}),(0,a.jsx)("button",{type:"submit",className:"w-full py-3 px-6 bg-secondary hover:bg-secondary-light text-text font-medium rounded-md shadow-secondary-glow transition duration-300",children:"Add Event"})]})]})}),(0,a.jsx)(d.A,{})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,742,923,441,517,358],()=>t(4386)),_N_E=e.O()}]);