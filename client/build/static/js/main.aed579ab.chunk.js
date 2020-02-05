(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{52:function(e,t,a){e.exports=a(89)},58:function(e,t,a){},59:function(e,t,a){},82:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(22),l=a.n(r),c=(a(57),a(58),a(5)),i=a(6),u=a(8),o=a(7),m=a(9),d=(a(59),a(18)),h=a(14),p=a(93),E=a(16),b=a.n(E),v=function(e,t){return b.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},g=function(e,t){return b.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},f=function(e){return s.a.createElement(p.a,{className:"nav justify-content-end",bg:"primary"},e.user?s.a.createElement("div",null,s.a.createElement(h.b,{to:"/"},"Welcome ",e.user.username),s.a.createElement(h.b,{to:"/training"},"Training"),s.a.createElement(h.b,{to:"/result"},"Result"),s.a.createElement(h.b,{to:"/resultlist"},"Resultlist"),s.a.createElement(h.b,{to:"/",onClick:function(){b.a.delete("/api/auth/logout"),e.setUser(null)}},"Logout")):s.a.createElement("div",null,s.a.createElement(h.b,{to:"/"},"Home"),s.a.createElement(h.b,{to:"/signup"},"Signup"),s.a.createElement(h.b,{to:"/login"},"Login")))},N=(a(82),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"homePage-container"},s.a.createElement("div",null,s.a.createElement("h1",null,"IQtty"),s.a.createElement("p",null,"Use our brain trainer"),s.a.createElement("p",null,"Prepare for Assessment Centers and Logic-Tests"),s.a.createElement("p",null,"Signup and try our amazing brain game")))}}]),t}(s.a.Component)),y=a(26),O=a(92),j=a(94),C=a(91),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),v(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/training"))}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props),s.a.createElement("div",null,s.a.createElement("h2",null,"Signup"),s.a.createElement(O.a,{onSubmit:this.handleSubmit},s.a.createElement(O.a.Group,null,s.a.createElement(O.a.Label,{htmlFor:"username"},"Username: "),s.a.createElement(O.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),s.a.createElement(O.a.Group,null,s.a.createElement(O.a.Label,{htmlFor:"password"},"Password: "),s.a.createElement(O.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&s.a.createElement(j.a,{variant:"danger"},this.state.error),s.a.createElement(C.a,{type:"submit"},"Sign up")))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),g(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/training"))}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"Login"),s.a.createElement(O.a,{onSubmit:this.handleSubmit},s.a.createElement(O.a.Group,null,s.a.createElement(O.a.Label,{htmlFor:"username"},"Username: "),s.a.createElement(O.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),s.a.createElement(O.a.Group,null,s.a.createElement(O.a.Label,{htmlFor:"password"},"Password: "),s.a.createElement(O.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&s.a.createElement(j.a,{variant:"danger"},this.state.error),s.a.createElement(C.a,{type:"submit"},"Log in")))}}]),t}(n.Component),w=(a(85),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"trainingsPage-container"},s.a.createElement("div",null,s.a.createElement("h1",null,"Welcome to IQtty training"),s.a.createElement("p",null,"Matrix tests are used in assessment centers to examine your skills in inductive reasoning."),s.a.createElement("p",null,"A matrix consists of nine boxes. One box is empty."),s.a.createElement("p",null,"Your task is to discover logical connections and compose the empty box based on the rule you found."),s.a.createElement("p",null,"Click here to start a test"),s.a.createElement("form",{className:"trainingsPage-button-box",action:"/test/new"},s.a.createElement("input",{className:"trainingsPage-button",type:"submit",value:"Start test"})),s.a.createElement("p",null,"Your results you can find under",s.a.createElement("a",{href:"/resultlist"}," Test Result List"))))}}]),t}(n.Component)),k=(a(86),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={results:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("AllResults --\x3e componentDidMount()"),b.a.get("/api/resultlist").then((function(t){console.log("AllResults --\x3e Promise resolved"),console.log("Promise resolved Data",t.data),e.setState({results:t.data})})).catch((function(e){console.log("Error occured: ",e)}))}},{key:"render",value:function(){var e=this.state.results.map((function(e){var t=e.numberOfCases,a=e.score,n=Math.round(a/t*100);return s.a.createElement("div",{className:"trResultlist",key:e._id},s.a.createElement("div",{className:"tdResultlist"},e.userName),s.a.createElement("div",{className:"tdResultlist"},e.testName),s.a.createElement("div",{className:"tdResultlist"},e.complexity),s.a.createElement("div",{className:"tdResultlist"},e.elapsedTime),s.a.createElement("div",{className:"tdResultlist"},e.numberOfCases),s.a.createElement("div",{className:"tdResultlist"},e.score),s.a.createElement("div",{className:"tdResultlist"},n," %"))}));return s.a.createElement("div",null,s.a.createElement("div",{className:"resultlistPage"},s.a.createElement("section",{className:"table-resultlist"},s.a.createElement("h1",{className:"header"},"Your Test Results"),s.a.createElement("div",{className:"tableResultlist-box"},s.a.createElement("div",{className:"tableResultlist"},s.a.createElement("div",{className:"trResultlist"},s.a.createElement("div",{className:"thResultlist"},"User"),s.a.createElement("div",{className:"thResultlist"},"Test"),s.a.createElement("div",{className:"thResultlist"},"Complexity"),s.a.createElement("div",{className:"thResultlist"},"Elapsed Time"),s.a.createElement("div",{className:"thResultlist"},"Number of Test Cases"),s.a.createElement("div",{className:"thResultlist"},"Score"),s.a.createElement("div",{className:"thResultlist"},"Result")),e)))))}}]),t}(n.Component)),S=(a(87),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={result:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("App --\x3e componentDidMount()"),b.a.get("/api/results").then((function(t){e.setState({result:t.data})})).catch((function(e){console.log("Fehler bei iq_result Component Did mount",e)}))}},{key:"render",value:function(){var e=this.state.result.score,t=this.state.result.numberOfCases,a=Math.round(e/t*100).toString();return console.log(typeof a),s.a.createElement("div",{className:"resultPage"},s.a.createElement("div",{className:"resultHeader"},s.a.createElement("h1",null,"Result of your current test")),s.a.createElement("div",{className:"tableresult"},s.a.createElement("div",{className:"resulttr1"},s.a.createElement("div",{className:"resultth"},"Name :"),s.a.createElement("div",{className:"resulttd"},this.state.result.userName)),s.a.createElement("div",{className:"resulttr"},s.a.createElement("div",{className:"resultth"},"Test Name :"),s.a.createElement("div",{className:"resulttd"},this.state.result.testName)),s.a.createElement("div",{className:"resulttr1"},s.a.createElement("div",{className:"resultth"},"Elapsed Time :"),s.a.createElement("div",{className:"resulttd"},this.state.result.elapsedTime)),s.a.createElement("div",{className:"resulttr"},s.a.createElement("div",{className:"resultth"},"Executed Cases :"),s.a.createElement("div",{className:"resulttd"},this.state.result.numberOfCases)),s.a.createElement("div",{className:"resulttr1"},s.a.createElement("div",{className:"resultth"},"Your Score :"),s.a.createElement("div",{className:"resulttd"},this.state.result.score)),s.a.createElement("div",{className:"resulttr"},s.a.createElement("div",{className:"resultth"},"Complexity :"),s.a.createElement("div",{className:"resulttd"},this.state.result.complexity)),s.a.createElement("div",{className:"resulttr1"},s.a.createElement("div",{className:"resultth"},"Percentage :"),s.a.createElement("div",{className:"resulttd"},a))),s.a.createElement("div",{className:"resultfooter"},s.a.createElement("h1",null,"You have reached : ",this.state.result.score,"  Points")),s.a.createElement("div",{className:"buttonbox"},s.a.createElement("form",{action:"/training"},s.a.createElement("input",{className:"rbutton",type:"submit",value:"Training"})),s.a.createElement("form",{action:"/resultlist"},s.a.createElement("input",{className:"rbutton",type:"submit",value:"Resultlist"}))))}}]),t}(n.Component)),T=(a(88),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Admin Page"),s.a.createElement("div",{className:"tableAdmin"},s.a.createElement("ul",null,s.a.createElement("p",null,s.a.createElement("li",null,s.a.createElement("button",{onclick:"generateComponents()"},"1. Components"))),s.a.createElement("p",null,s.a.createElement("li",null,s.a.createElement("button",{onclick:"generateCases()"},"2. Cases"),"Number of Components : ",s.a.createElement("input",{id:"compNumber",type:"number",max:"6",min:"1",alt:"Number of Components"}))),s.a.createElement("p",null,s.a.createElement("button",{onclick:"generateTests()"},"3. Tests"),"Number of Testcases : ",s.a.createElement("input",{id:"numbTc",type:"number",max:"10",min:"1"}),"Max case complexity : ",s.a.createElement("input",{id:"caseComplexity",type:"number",max:"3",min:"1"})))))}}]),t}(n.Component)),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a.trainingRoute=function(e){return a.state.user?s.a.createElement(w,e):s.a.createElement(d.a,{to:"/"})},a.resultListRoute=function(e){return a.state.user?s.a.createElement(k,e):s.a.createElement(d.a,{to:"/"})},a.resultRoute=function(e){return a.state.user?s.a.createElement(S,e):s.a.createElement(d.a,{to:"/"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(f,{user:this.state.user,setUser:this.setUser}),s.a.createElement(d.d,null,s.a.createElement(d.b,{exact:!0,path:"/",component:N}),s.a.createElement(d.b,{exact:!0,path:"/signup",render:function(t){return s.a.createElement(x,Object.assign({},t,{setUser:e.setUser}))}}),s.a.createElement(d.b,{exact:!0,path:"/login",render:function(t){return s.a.createElement(R,Object.assign({},t,{setUser:e.setUser}))}}),s.a.createElement(d.b,{exact:!0,path:"/training",render:this.trainingRoute}),s.a.createElement(d.b,{exact:!0,path:"/resultlist",render:this.resultListRoute}),s.a.createElement(d.b,{exact:!0,path:"/xadmin",component:T}),s.a.createElement(d.b,{exact:!0,path:"/result",render:function(t){return s.a.createElement(S,Object.assign({user:e.state.user},t))}}),s.a.createElement(d.b,{exact:!0,path:"/result",render:this.resultRoute})))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.get("/api/auth/loggedin").then((function(e){var t=e.data;l.a.render(s.a.createElement(h.a,null,s.a.createElement(P,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.aed579ab.chunk.js.map