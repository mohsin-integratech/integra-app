(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7786:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(5893),i=t(9008),s=t(3850),a=t(51),o=t(8017),l=t(9050),c=t(7093),u=t(6280),d=t(7294),h=t(6156),m=t(7757),p=t.n(m),x=t(2137),f=t(980),j=t(4848),g=t(6618),b=t(70),v=t(4057);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,h.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O=function(e){var n=e.initialRef,t=e.onClose,i=(0,f.useToast)(),s=(0,d.useState)({name:"",designation:"",companyname:"",email:"",phone:"",comments:""}),a=s[0],o=s[1],l=function(){var e=(0,x.Z)(p().mark((function e(n){var r,s,o,l,c,u;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.name,s=a.designation,o=a.companyname,l=a.email,c=a.phone,u=a.comments,!(r&&s&&o&&l&&c&&u)){e.next=15;break}return e.prev=3,e.next=6,v.b.graphql({query:"\n  mutation CreateCandidate(\n    $input: CreateCandidateInput!\n    $condition: ModelCandidateConditionInput\n  ) {\n    createCandidate(input: $input, condition: $condition) {\n      id\n      name\n      designation\n      companyname\n      email\n      phone\n      comments\n      createdAt\n      updatedAt\n    }\n  }\n",variables:{input:{name:r,designation:s,companyname:o,email:l,phone:c,comments:u}}});case 6:i({title:"Congratulations",position:"top-right",description:"Successfully submitted!",status:"success",duration:5e3,isClosable:!0}),t(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),i({title:"Error",position:"top-right",description:e.t0.message,status:"error",duration:5e3,isClosable:!0});case 13:e.next=16;break;case 15:i({title:"Uh-Oh \ud83d\ude25",position:"top-right",description:"Please verify all fields are filled out.",status:"error",duration:5e3,isClosable:!0});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.xB,{children:"Enter Your Details"}),(0,r.jsx)(u.ol,{}),(0,r.jsxs)("form",{onSubmit:l,children:[(0,r.jsxs)(u.fe,{pb:6,children:[(0,r.jsxs)(j.NI,{children:[(0,r.jsx)(g.l,{children:"Name"}),(0,r.jsx)(b.I,{ref:n,placeholder:"",value:a.name,onChange:function(e){return o(C(C({},a),{},{name:e.target.value}))}})]}),(0,r.jsxs)(j.NI,{mt:4,children:[(0,r.jsx)(g.l,{children:"Designation"}),(0,r.jsx)(b.I,{placeholder:"",value:a.designation,onChange:function(e){return o(C(C({},a),{},{designation:e.target.value}))}})]}),(0,r.jsxs)(j.NI,{mt:4,children:[(0,r.jsx)(g.l,{children:"Company Name"}),(0,r.jsx)(b.I,{placeholder:"",value:a.companyname,onChange:function(e){return o(C(C({},a),{},{companyname:e.target.value}))}})]}),(0,r.jsxs)(j.NI,{mt:4,children:[(0,r.jsx)(g.l,{children:"Email"}),(0,r.jsx)(b.I,{placeholder:"",type:"email",value:a.email,onChange:function(e){return o(C(C({},a),{},{email:e.target.value}))}})]}),(0,r.jsxs)(j.NI,{mt:4,children:[(0,r.jsx)(g.l,{children:"Phone Number"}),(0,r.jsx)(b.I,{placeholder:"",minLength:"10",value:a.phone,onChange:function(e){return o(C(C({},a),{},{phone:e.target.value}))}})]}),(0,r.jsxs)(j.NI,{mt:4,children:[(0,r.jsx)(g.l,{children:"Comments"}),(0,r.jsx)(b.I,{placeholder:"",value:a.comments,onChange:function(e){return o(C(C({},a),{},{comments:e.target.value}))}})]})]}),(0,r.jsxs)(u.mz,{children:[(0,r.jsx)(c.z,{colorScheme:"blue",mr:3,type:"submit",children:"Submit"}),(0,r.jsx)(c.z,{onClick:t,children:"Cancel"})]})]})]})},w=function(){var e=(0,l.q)(),n=e.isOpen,t=e.onOpen,i=e.onClose,s=(0,d.useRef)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Kq,{direction:"column",spacing:3,align:"center",alignSelf:"center",position:"relative",children:[(0,r.jsx)(c.z,{colorScheme:"green",bg:"green.400",rounded:"full",px:6,_hover:{bg:"green.500"},onClick:t,children:"Register Here"}),(0,r.jsxs)(u.u_,{initialFocusRef:s,isOpen:n,onClose:i,children:[(0,r.jsx)(u.ZA,{}),(0,r.jsx)(u.hz,{children:(0,r.jsx)(O,{initialRef:s,onClose:i})})]})]})})},I=t(336),N=t(4115),_=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(I.X,{fontWeight:800,fontSize:{base:"2xl",sm:"4xl",md:"6xl"},lineHeight:"150%",children:[(0,r.jsx)("br",{}),(0,r.jsx)(N.x,{as:"span",color:"blue.400",fontSize:{base:"4xl",sm:"6xl",md:"7xl"},children:"Thank you for visiting Integra's booth at GITEX 2021"})]})})};function k(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(P,{children:[(0,r.jsx)(_,{}),(0,r.jsx)(w,{})]})})}var P=function(e){var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap",rel:"stylesheet"})}),(0,r.jsx)(s.W,{maxW:"3xl",children:(0,r.jsx)(a.Kq,{as:o.xu,textAlign:"center",spacing:{base:8,md:14},py:{base:20,md:36},children:n})})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7786)}])}},function(e){e.O(0,[774,807,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);