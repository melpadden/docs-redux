"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[37643],{35124:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(96540);var s=a(34164),r=a(44586),n=a(45500),i=a(17559),l=a(28027),o=a(47713),c=a(41463),d=a(33892),m=a(5260),g=a(44096),u=a(74848);function h(e){const t=(0,g.kJ)(e);return(0,u.jsx)(m.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.A)(),{blogDescription:s,blogTitle:i,permalink:l}=t,o="/"===l?a:i;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.be,{title:o,description:s}),(0,u.jsx)(c.A,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:a,sidebar:s}=e;return(0,u.jsxs)(l.A,{sidebar:s,children:[(0,u.jsx)(d.A,{items:a}),(0,u.jsx)(o.A,{metadata:t})]})}function j(e){return(0,u.jsxs)(n.e3,{className:(0,s.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,u.jsx)(p,{...e}),(0,u.jsx)(h,{...e}),(0,u.jsx)(x,{...e})]})}},47713:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var s=a(21312),r=a(39022),n=a(74848);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(r.A,{permalink:a,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,n.jsx)(r.A,{permalink:i,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},82907:(e,t,a)=>{a.d(t,{A:()=>C});a(96540);var s=a(34164),r=a(44096),n=a(74848);function i(e){let{children:t,className:a}=e;return(0,n.jsx)("article",{className:a,children:t})}var l=a(28774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.e7)(),{permalink:c,title:d}=a,m=i?"h1":"h2";return(0,n.jsx)(m,{className:(0,s.A)(o.title,t),children:i?d:(0,n.jsx)(l.A,{to:c,children:d})})}var d=a(21312),m=a(53465),g=a(36266);const u={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,n.jsx)(n.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,n.jsx)("time",{dateTime:t,children:a})}function x(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:i,readingTime:l}=a,o=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,s.A)(u.container,"margin-vert--md",t),children:[(0,n.jsx)(p,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),(0,n.jsx)(h,{readingTime:l})]})]});var c}var A=a(56913);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,n.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,n.jsx)("div",{className:(0,s.A)(!l&&(o?"col col--12":"col col--6"),l?b.imageOnlyAuthorCol:b.authorCol),children:(0,n.jsx)(A.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(j,{}),(0,n.jsx)(f,{})]})}var N=a(70440),T=a(88509);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.e7)();return(0,n.jsx)("div",{id:i?N.LU:void 0,className:(0,s.A)("markdown",a),children:(0,n.jsx)(T.A,{children:t})})}var y=a(17559),k=a(4336),P=a(62053);function U(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function _(e){const{blogPostTitle:t,...a}=e;return(0,n.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,n.jsx)(U,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,g=a.length>0;if(!(g||m||l))return null;if(t){const e=!!(l||d||c);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,n.jsx)("div",{className:(0,s.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(P.A,{tags:a})})}),e&&(0,n.jsx)(k.A,{className:(0,s.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,n.jsx)("div",{className:(0,s.A)("col",{"col--9":m}),children:(0,n.jsx)(P.A,{tags:a})}),m&&(0,n.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":g}),children:(0,n.jsx)(_,{blogPostTitle:i,to:e.permalink})})]})}function C(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(i,{className:(0,s.A)(l,a),children:[(0,n.jsx)(v,{}),(0,n.jsx)(w,{children:t}),(0,n.jsx)(R,{})]})}},33892:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var s=a(44096),r=a(82907),n=a(74848);function i(e){let{items:t,component:a=r.A}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,n.jsx)(s.in,{content:t,children:(0,n.jsx)(a,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}}}]);