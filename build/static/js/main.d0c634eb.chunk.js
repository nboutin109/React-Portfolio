(this.webpackJsonpnbportfolio=this.webpackJsonpnbportfolio||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/978A0641.0bb253e6.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/LI.e919b798.png"},25:function(e,a,t){e.exports=t.p+"static/media/GH.6cab5c0e.png"},31:function(e,a,t){e.exports=t.p+"static/media/Capture2.668c05eb.PNG"},32:function(e,a,t){e.exports=t.p+"static/media/Capture.50bd21e7.PNG"},33:function(e,a,t){e.exports=t.p+"static/media/Capture30.3c2f507e.png"},34:function(e,a,t){e.exports=t.p+"static/media/Capture4.237af299.PNG"},35:function(e,a,t){e.exports=t.p+"static/media/Capture18.46c18bb3.PNG"},36:function(e,a,t){e.exports=t.p+"static/media/Capturex.d87595cc.PNG"},40:function(e,a,t){e.exports=t(54)},50:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),m=t.n(r),c=t(11),i=t(5),o=(t(19),t(55)),s=t(56),u=t(26),p=t(57),h=t(23),d=t.n(h),E=t(24),g=t.n(E),y=t(25),b=t.n(y);var f=function(){return l.a.createElement("div",null,l.a.createElement(o.a,{style:{textAlign:"left"}},l.a.createElement("h1",{style:{paddingLeft:"0",paddingTop:"1rem"}},"About Me"),l.a.createElement(s.a,null,l.a.createElement(u.a,{md:3},l.a.createElement(p.a,{src:d.a,rounded:!0,style:{height:"15rem",width:"11rem"}})),l.a.createElement(u.a,{md:9},l.a.createElement("span",{style:{textAlign:"left"}},"My name is Nicholas Boutin and I am currently searching for a position to start my career in the technology industry. I am a recent graduate of"),l.a.createElement("span",{style:{textDecoration:"underline"}}," Georgia Institute of Technology's full-stack web design bootcamp"),l.a.createElement("span",null," and I also posess a Bachelor's in business administration from Georgia State University. I currently hold a position at the Coca-Cola Atlanta headquarters as an events/meetings ambassador and previously worked in the hotel industry."),l.a.createElement("p",null),l.a.createElement("p",null,"If you would like to know more about me:"),l.a.createElement("a",{href:"https://docs.google.com/document/d/1_xio8nKGWd4ElUFgK04P478Y-0rz552ATNiXRUqFtTc/edit?usp=sharing"},l.a.createElement("span",{style:{paddingLeft:"1rem"}},"View my full resume here")),l.a.createElement("p",null),l.a.createElement("a",{href:"https://linkedin.com/nboutin"},l.a.createElement("span",{style:{paddingLeft:"1rem"}},"View my Linkedin account here")),l.a.createElement("p",null),l.a.createElement("a",{href:"https://github.com/nboutin109"},l.a.createElement("span",{style:{paddingLeft:"1rem"}},"View my Github account here")))),l.a.createElement(s.a,null,l.a.createElement("a",{href:"https://linkedin.com/nboutin"},l.a.createElement(p.a,{src:g.a,style:{padding:"1rem",height:"5rem",width:"13rem"}}))),l.a.createElement(s.a,null,l.a.createElement("a",{href:"https://github.com/nboutin109"},l.a.createElement(p.a,{src:b.a,style:{padding:"1rem",height:"5rem",width:"13rem"}})))))},v=t(27),w=t(28),x=t(29),k=t(39),C=t(38),T=t(58),G=t(60),I=t(30),N=function(e){Object(k.a)(t,e);var a=Object(C.a)(t);function t(){var e;Object(w.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={name:"",company:"",email:"",message:"",errors:[]},e.handleChange=function(a,t){e.setState(Object(v.a)({},a,t.target.value))},e}return Object(x.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t={name:a.name,company:a.company,email:a.email,message:a.message};I.send("service_wuify9c","template_eysun2c",t,"user_vCKER3fc5KPLMVxrNRVQK").then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.log(e)})),this.resetForm()}},{key:"resetForm",value:function(){this.setState({name:"",company:"",email:"",message:""})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(o.a,{style:{textAlign:"left"}},l.a.createElement(u.a,{xs:"auto"},l.a.createElement("h1",{style:{paddingTop:"1rem"}},"Please use the form below to contact me"),l.a.createElement(T.a,{onSubmit:this.handleSubmit.bind(this)},l.a.createElement(T.a.Group,{controlId:"name"},l.a.createElement(T.a.Label,null,"Please enter your name"),l.a.createElement(T.a.Control,{type:"text",name:"name",placeholder:"Your name here",size:"lg",style:{maxWidth:"50rem"},value:this.state.name,onChange:this.handleChange.bind(this,"name"),required:!0})),l.a.createElement(T.a.Group,{controlId:"company"},l.a.createElement(T.a.Label,null,"What is the name of your company?"),l.a.createElement(T.a.Control,{type:"text",name:"company",placeholder:"Your companys' name (if applicable)",size:"lg",style:{maxWidth:"50rem"},value:this.state.company,onChange:this.handleChange.bind(this,"company")})),l.a.createElement(T.a.Group,{controlId:"email"},l.a.createElement(T.a.Label,null,"Please enter your email address"),l.a.createElement(T.a.Control,{type:"email",name:"email",placeholder:"Your email here",size:"lg",style:{maxWidth:"50rem"},value:this.state.email,onChange:this.handleChange.bind(this,"email")})),l.a.createElement(T.a.Group,{controlId:"message"},l.a.createElement(T.a.Label,null,"Please input your message here:"),l.a.createElement(T.a.Control,{as:"textarea",row:5,name:"message",placeholder:"Your message here",size:"lg",style:{maxWidth:"50rem"},value:this.state.message,onChange:this.handleChange.bind(this,"message")})),l.a.createElement(G.a,{variant:"primary",type:"submit",id:"submit"},"Send"),l.a.createElement("div",{className:"text-danger"}))),l.a.createElement(u.a,{xs:"auto"})))}}]),t}(n.Component),A=t(59),L=t(31),P=t.n(L),S=t(32),V=t.n(S),j=t(33),B=t.n(j),O=t(34),W=t.n(O),z=t(35),F=t.n(z),K=t(36),M=t.n(K);t(50);var Y=function(e){return l.a.createElement("main",Object.assign({className:"wrapper"},e))};var R=function(){return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(u.a,{xs:"auto"},l.a.createElement(s.a,null,l.a.createElement("h1",{style:{paddingTop:"1rem",paddingLeft:"1rem"}},"Samples from github")),l.a.createElement(s.a,null,l.a.createElement(Y,null,l.a.createElement(A.a,{style:{width:"18rem"}},l.a.createElement(A.a.Img,{variant:"top",src:P.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),l.a.createElement(A.a.Body,null,l.a.createElement(A.a.Title,null,"Daily weather memes"),l.a.createElement(A.a.Text,null,"A group project webpage which returns weather for a searched area and returns results along with a matching Gif"),l.a.createElement(G.a,{variant:"primary"},"View on Github")))),l.a.createElement(Y,null,l.a.createElement(A.a,{style:{width:"18rem"}},l.a.createElement(A.a.Img,{variant:"top",src:V.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),l.a.createElement(A.a.Body,null,l.a.createElement(A.a.Title,null,"Insert later"),l.a.createElement(A.a.Text,null,"xxx"),l.a.createElement(G.a,{variant:"primary"},"View on Github")))),l.a.createElement(Y,null,l.a.createElement(A.a,{style:{width:"18rem"}},l.a.createElement(A.a.Img,{variant:"top",src:B.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),l.a.createElement(A.a.Body,null,l.a.createElement(A.a.Title,null,"Stock tracker"),l.a.createElement(A.a.Text,null,"A group project webpage which searches for stocks and returns the latest numbers/company news."),l.a.createElement(G.a,{variant:"primary"},"View on Github"))))),l.a.createElement(s.a,null,l.a.createElement(Y,null,l.a.createElement(A.a,{style:{width:"18rem"}},l.a.createElement(A.a.Img,{variant:"top",src:W.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),l.a.createElement(A.a.Body,null,l.a.createElement(A.a.Title,null,"MySQL workplace manager"),l.a.createElement(A.a.Text,null,"A CLI application which allows one to manage a workplace by adding and removing employees and their details from a database."),l.a.createElement(G.a,{variant:"primary"},"View on Github")))),l.a.createElement(Y,null,l.a.createElement(A.a,{style:{width:"18rem"}},l.a.createElement(A.a.Img,{variant:"top",src:F.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),l.a.createElement(A.a.Body,null,l.a.createElement(A.a.Title,null,"Account tracker"),l.a.createElement(A.a.Text,null,"A webpage which can add and subtract numbers to show a current balance on a graph."),l.a.createElement(G.a,{variant:"primary"},"View on Github")))),l.a.createElement(Y,null,l.a.createElement(A.a,{style:{width:"18rem"}},l.a.createElement(A.a.Img,{variant:"top",src:M.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),l.a.createElement(A.a.Body,null,l.a.createElement(A.a.Title,null,"Fitness Tracker"),l.a.createElement(A.a.Text,null,"A webpage which can keep track of a user's past workouts using a mongo database and schemas"),l.a.createElement(G.a,{variant:"primary"},"View on Github"))))))))};var _=function(){var e=Object(i.e)();return l.a.createElement("ul",{className:"nav nav-tabs"},l.a.createElement("li",{className:"nav-item",style:{paddingRight:"1rem"}},l.a.createElement("h3",null,"Nicholas Boutin")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/",className:"/"===e.pathname?"nav-link active":"nav-link"},"About me")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/portfolio",className:"/portfolio"===e.pathname?"nav-link active":"nav-link"},"Portfolio")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/contact",className:"/contact"===e.pathname?"nav-link active":"nav-link"},"Contact")))};var q=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(_,null),l.a.createElement(Y,null,l.a.createElement(i.a,{exact:!0,path:"/",component:f}),l.a.createElement(i.a,{exact:!0,path:"/portfolio",component:R}),l.a.createElement(i.a,{path:"/contact",component:N}))))};m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d0c634eb.chunk.js.map