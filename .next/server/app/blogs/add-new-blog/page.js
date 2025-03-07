(()=>{var e={};e.id=900,e.ids=[900],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7790:e=>{"use strict";e.exports=require("assert")},7702:e=>{"use strict";e.exports=require("events")},2048:e=>{"use strict";e.exports=require("fs")},2615:e=>{"use strict";e.exports=require("http")},8791:e=>{"use strict";e.exports=require("https")},9801:e=>{"use strict";e.exports=require("os")},5315:e=>{"use strict";e.exports=require("path")},6162:e=>{"use strict";e.exports=require("stream")},4175:e=>{"use strict";e.exports=require("tty")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},1568:e=>{"use strict";e.exports=require("zlib")},3576:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>n}),t(4108),t(2454),t(2029),t(5866);var a=t(3191),s=t(8716),l=t(7922),o=t.n(l),i=t(5231),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);t.d(r,d);let n=["",{children:["blogs",{children:["add-new-blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,4108)),"/Users/taimoorhamza/Desktop/admin-dashbaord-next/src/app/blogs/add-new-blog/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,2454)),"/Users/taimoorhamza/Desktop/admin-dashbaord-next/src/app/blogs/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,2029)),"/Users/taimoorhamza/Desktop/admin-dashbaord-next/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/taimoorhamza/Desktop/admin-dashbaord-next/src/app/blogs/add-new-blog/page.tsx"],u="/blogs/add-new-blog/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/blogs/add-new-blog/page",pathname:"/blogs/add-new-blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},5081:(e,r,t)=>{Promise.resolve().then(t.bind(t,4800))},5303:()=>{},4800:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m});var a=t(326),s=t(5905),l=t(8776),o=t(7577),i=t(9227),d=t(4944),n=t(4099),c=t(8087);t(5996);var u=t(8244),p=t(19);let m=()=>{let[e,r]=(0,o.useState)(["Animation Courses"]),[t,m]=(0,o.useState)(["Courses"]),[x,b]=(0,o.useState)("Learn Drawing & Animation: A Beginner's Guide to Creative Expression"),[h,g]=(0,o.useState)("Unleash your creative potential with our step-by-step guide on learning drawing and animation for beginners. Explore the world of visual arts."),[f,v]=(0,o.useState)(""),[y,j]=(0,o.useState)("Learn Drawing & Animation: A Beginner's Guide to Creative Expression"),[k,w]=(0,o.useState)("html"),[C,N]=(0,o.useState)(""),[S,Z]=(0,o.useState)(!1),P=(0,o.useCallback)(e=>{v(e)},[]),D=async r=>{r.preventDefault();let a=y.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-"),s=c.Am.loading("Blog Saving...");Z(!0);let l={title:y,content:f,metaTitle:x,metaDescription:h,metaTags:t,coverImage:C,postedBy:"Taimoor",postedDate:new Date().toISOString(),categories:e,friendlyUrl:a};try{await n.Z.post("http://localhost:5002/blogs",l,{headers:{"Content-Type":"application/json"}}),Z(!1),c.Am.update(s,{render:"Blog posted successfully!",type:"success",isLoading:!1,autoClose:3e3})}catch(e){Z(!1),c.Am.update(s,{render:"Error posting blog!",type:"error",isLoading:!1,autoClose:3e3}),console.error("Error posting blog:",e)}};return a.jsx(u.default,{children:(0,a.jsxs)("div",{className:"mx-auto max-w-[1920px]",children:[a.jsx(p.Z,{pageName:"Create A New Blog Post"}),(0,a.jsxs)("div",{className:"grid grid-cols-5 gap-8",children:[a.jsx("div",{className:"col-span-5 xl:col-span-3",children:(0,a.jsxs)("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[a.jsx("div",{className:"border-b border-stroke px-7 py-4 dark:border-strokedark",children:a.jsx(s.Z,{label:"Blog Title:",placeholder:"Enter Blog Title",value:y,onChange:e=>j(e.target.value)})}),(0,a.jsxs)("div",{className:"p-7",children:[(0,a.jsxs)("div",{className:"mb-5.5",children:[a.jsx("label",{className:"mb-0 block font-bold text-lg text-black dark:text-white",children:"Content Section"}),(0,a.jsxs)("div",{className:"flex flex-row flex-wrap gap-1 mb-2 justify-end",children:[a.jsx("button",{onClick:()=>w("html"),className:`text-gray-500 ${"html"==k?"bg-gray-300":"bg-gray-100"} bg-gray-100 border-[1.34px] shadow-gray-2 border-gray-300 py-0.5 text-[0.55rem] lg:text-[0.65rem] font-medium px-2 rounded-[6px] font-impact-regular bg-opacity-45 shadow-2xl `,children:"Code"}),a.jsx("button",{onClick:()=>w("editor.js"),className:`text-gray-500 ${"editor.js"==k?"bg-gray-300":"bg-gray-100"} border-[1.34px] shadow-gray-2 border-gray-300 py-0.5 text-[0.55rem] lg:text-[0.65rem] font-medium px-2 rounded-[6px] font-impact-regular bg-opacity-45 shadow-2xl `,children:"Editor"})]})]}),(0,a.jsxs)("form",{onSubmit:D,children:[a.jsx("div",{children:"editor.js"===k?a.jsx("div",{className:"mt-5.5",children:a.jsx(d.Z,{data:f,onChange:P})}):a.jsx("div",{className:"mt-5.5  ",children:a.jsx("textarea",{rows:20,className:"w-full bg-gray-100 rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",value:f,onChange:e=>P(e.target.value)})})}),(0,a.jsxs)("div",{className:"flex justify-end gap-4.5",children:[a.jsx("button",{className:"flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-stroke dark:text-white hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out",type:"button",children:"Cancel"}),(0,a.jsxs)("button",{className:"cursor-pointer flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-black-2 transition-all duration-300 ease-in-out",type:"submit",children:[S&&a.jsx("div",{className:"spinner-border animate-spin h-5 w-5 border-[3px] border-t-transparent border-white rounded-full mr-2"}),S?"Saving....":"Save"]})]})]})]})]})}),a.jsx("div",{className:"col-span-5 xl:col-span-2",children:(0,a.jsxs)("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[a.jsx("div",{className:"border-b border-stroke px-7 py-4 dark:border-strokedark",children:a.jsx("h3",{className:"font-bold text-lg text-black dark:text-white",children:"Choose Blog Format"})}),a.jsx("div",{className:"p-7",children:(0,a.jsxs)("form",{children:[a.jsx("div",{className:"mb-5.5",children:a.jsx(s.Z,{label:"Blog Cover:",placeholder:"Enter Blog Cover Picture URL",value:C,onChange:e=>N(e.target.value)})}),a.jsx(i.Z,{label:"Click to upload an image",accept:"image/jpeg, image/png",maxSize:5e5,maxDimensions:{width:500,height:500},onFileChange:e=>console.log("File uploaded:",e),disabled:!1}),a.jsx("div",{className:"mb-5.5",children:a.jsx(l.Z,{label:"Categories",name:"categories",placeholder:"Separate with comma or enter.",values:e,onItemAdded:t=>r([...e,t]),onItemDeleted:t=>r(e.filter(e=>e!==t))})}),a.jsx("div",{className:"mb-5.5",children:a.jsx(s.Z,{label:"Meta Title",placeholder:"Enter Meta Title",value:x,onChange:e=>b(e.target.value)})}),a.jsx("div",{className:"mb-5.5",children:a.jsx(s.Z,{label:"Meta Description",placeholder:"Enter Meta Description",value:h,onChange:e=>g(e.target.value)})}),a.jsx("div",{className:"mb-5.5",children:a.jsx(l.Z,{label:"Meta Tags",name:"metaTags",placeholder:"Separate with comma or enter.",values:t,onItemAdded:e=>m([...t,e]),onItemDeleted:e=>m(t.filter(r=>r!==e))})})]})})]})})]}),a.jsx(c.Ix,{})]})})}},19:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var a=t(326),s=t(434);let l=({pageName:e})=>(0,a.jsxs)("div",{className:"mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[a.jsx("h2",{className:"text-title-md2 font-semibold text-black dark:text-white",children:e}),a.jsx("nav",{children:(0,a.jsxs)("ol",{className:"flex items-center gap-2",children:[a.jsx("li",{children:a.jsx(s.default,{className:"font-medium",href:"/",children:"Dashboard /"})}),a.jsx("li",{className:"font-medium text-primary",children:e})]})})]})},4944:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var a=t(326),s=t(7577),l=t(9328),o=t(8070),i=t(9598),d=t(1674),n=t(2341);let c=({data:e,onChange:r})=>{let t=(0,s.useRef)(null),c=(0,s.useRef)(null);return(0,s.useEffect)(()=>(t.current||(t.current=new l.Z({holder:c.current,data:e,onChange:async()=>{r(await t.current.save())},tools:{header:o.Z,list:i.Z,raw:d.Z,image:{class:n.Z,config:{endpoints:{byFile:"http://localhost:5002/uploadFile",byUrl:"http://localhost:5002/fetchImage"}}}}})),()=>{t.current&&"function"==typeof t.current.destroy&&(t.current.destroy(),t.current=null)}),[]),a.jsx("div",{className:"border-[1.5px] border-gray-300/80 bg-slate-300/35 rounded-lg shadow-lg lg:pl-3 py-3",ref:c})}},9227:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var a=t(326),s=t(7577);let l=({label:e="Click to upload or drag and drop",accept:r="image/*",maxSize:t=8e5,maxDimensions:l={width:800,height:800},onFileChange:o,disabled:i=!1})=>{let[d,n]=(0,s.useState)(null);return(0,a.jsxs)("div",{id:"FileUpload",className:`relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5 ${i?"opacity-50 cursor-not-allowed":""}`,children:[a.jsx("input",{type:"file",accept:r,className:"absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none",onChange:e=>{let r=e.target.files?.[0];if(r){if(r.size>t){n("File is too large.");return}let e=new Image;e.onload=()=>{e.width>l.width||e.height>l.height?n(`Image dimensions exceed the maximum size of ${l.width}x${l.height}.`):(n(null),o&&o(r))},e.src=URL.createObjectURL(r)}},disabled:i}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-3",children:[a.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark",children:(0,a.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z",fill:"#f0f"}),a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z",fill:"#f0f"}),a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z",fill:"#f0f"})]})}),a.jsx("p",{children:a.jsx("span",{className:"text-primary",children:e})}),a.jsx("p",{className:"mt-1.5",children:"SVG, PNG, JPG or GIF"}),(0,a.jsxs)("p",{children:["(max ",l.width," X ",l.height,"px)"]}),d&&a.jsx("p",{className:"text-red-500 mt-2",children:d})]})]})}},5905:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var a=t(326);t(7577);let s=({label:e,type:r="text",placeholder:t,value:s,onChange:l,disabled:o=!1})=>(0,a.jsxs)("div",{children:[a.jsx("label",{className:"mb-3 block text-lg font-bold text-black dark:text-white",children:e}),a.jsx("input",{type:r,placeholder:t,value:s,onChange:l,disabled:o,className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"})]})},8776:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var a=t(326),s=t(7577);let l=({label:e,name:r,placeholder:t,values:l=[],onItemAdded:o,onItemDeleted:i,disabled:d=!1})=>{let[n,c]=(0,s.useState)(""),[u,p]=(0,s.useState)(l),m=e=>{let r=u.filter(r=>r!==e);p(r),i(e,r)};return(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:r,className:"mb-3 block text-lg font-bold text-black dark:text-white",children:e}),a.jsx("div",{className:"flex flex-wrap ",children:u.map((e,r)=>(0,a.jsxs)("span",{className:"bg-gray-300/45 text-sm text-gray-500 dark:text-white px-3 py-1 rounded-full mr-2 mb-2 flex items-center",children:[e,a.jsx("button",{type:"button",onClick:()=>m(e),className:"ml-2 text-red-600 shadow-6",children:"x"})]},r))}),a.jsx("input",{type:"text",name:r,value:n,placeholder:t,onChange:e=>c(e.target.value),onKeyDown:e=>{if("Enter"===e.key||","===e.key){e.preventDefault();let r=n.trim();if(r&&!u.includes(r)){let e=[...u,r];p(e),c(""),o(r,e)}}},disabled:d,className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"})]})}},4108:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});let a=(0,t(8570).createProxy)(String.raw`/Users/taimoorhamza/Desktop/admin-dashbaord-next/src/app/blogs/add-new-blog/page.tsx#default`)},2454:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l,metadata:()=>s});var a=t(9510);t(1159);let s={title:"MSA-Academy | Dashboard",description:"MSA-Academy | Dashboard"},l=({children:e})=>a.jsx("div",{className:"taimoor__",children:e})}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[948,110,401,293,31,881],()=>t(3576));module.exports=a})();