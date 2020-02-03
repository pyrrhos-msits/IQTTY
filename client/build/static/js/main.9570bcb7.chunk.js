(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{52:function(e,t,a){e.exports=a(84)},58:function(e,t,a){},59:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),s=(a(57),a(58),a(5)),i=a(6),l=a(8),u=a(7),p=a(9),h=(a(59),a(19)),m=a(11),d=a(88),E=a(10),g=a.n(E),f=function(e,t){return g.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},b=function(e,t){return g.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},j=function(e){return r.a.createElement(d.a,{className:"nav justify-content-end",bg:"primary"},e.user?r.a.createElement("div",null,r.a.createElement(m.b,{to:"/"},"Welcome ",e.user.username),r.a.createElement(m.b,{to:"/projects"},"Projects"),r.a.createElement(m.b,{to:"/",onClick:function(){g.a.delete("/api/auth/logout"),e.setUser(null)}},"Logout")):r.a.createElement("div",null,r.a.createElement(m.b,{to:"/"},"Home"),r.a.createElement(m.b,{to:"/signup"},"Signup"),r.a.createElement(m.b,{to:"/login"},"Login")))},v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Startpage"),r.a.createElement("p",null," ... this is the homepage of the application ... "))}}]),t}(r.a.Component),y=function(e){return r.a.createElement("div",null,e.projects.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("h3",null,r.a.createElement(m.b,{to:"/projects/".concat(e._id)},e.title)))})))},O=a(17),C=a(87),k=a(86),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log("SUBMIT"),g.a.post("/api/projects",{title:a.state.title,description:a.state.description}).then((function(e){a.props.getData(),a.setState({title:"",description:""})})).catch((function(e){console.log(e)}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{onSubmit:this.handleSubmit},r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,{htmlFor:"title"},"Title: "),r.a.createElement(C.a.Control,{type:"text",name:"title",id:"title",onChange:this.handleChange,value:this.state.title})),r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,{htmlFor:"description"},"Description: "),r.a.createElement(C.a.Control,{type:"text",name:"description",id:"description",onChange:this.handleChange,value:this.state.description})),r.a.createElement(k.a,{type:"submit"},"Create a project"))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[]},a.getData=function(){g.a.get("/api/projects").then((function(e){a.setState({projects:e.data})})).catch((function(e){console.log(e)}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return console.log("Projects.render"+this.props.location.pathname),r.a.createElement("div",{className:"projects-container"},r.a.createElement(y,{projects:this.state.projects}),r.a.createElement(S,{getData:this.getData}))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(O.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.description;g.a.post("/api/tasks",{title:n,description:r,projectId:a.props.projectId}).then((function(){a.props.getData(),a.props.hideForm()})).catch((function(e){console.log(e)}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Add task: "),r.a.createElement(C.a,{onSubmit:this.handleSubmit},r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,"Title:"),r.a.createElement(C.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,"Description:"),r.a.createElement(C.a.Control,{type:"text",name:"description",value:this.state.description,onChange:this.handleChange})),r.a.createElement(k.a,{type:"submit"},"Add")))}}]),t}(n.Component),F=function(e){return r.a.createElement("div",null,e.tasks.length>0&&r.a.createElement("h2",null,"Tasks:"),e.tasks.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(m.b,{to:"/tasks/".concat(e._id)},r.a.createElement("h3",null,e.title)))})))},x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={project:null,error:"",editForm:!1,taskForm:!1,title:"",description:""},a.getData=function(){var e=a.props.match.params.id;g.a.get("/api/projects/".concat(e)).then((function(e){a.setState({project:e.data,title:e.data.title,description:e.data.description})})).catch((function(e){404===e.response.status&&a.setState({error:e.response.data.message})}))},a.deleteProject=function(){var e=a.props.match.params.id;g.a.delete("/api/projects/".concat(e)).then((function(e){console.log(a.props.history),a.props.history.push("/projects")})).catch((function(e){console.log(e)}))},a.toggleEdit=function(){a.setState({editForm:!a.state.editForm})},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props.match.params.id;g.a.put("/api/projects/".concat(t),{title:a.state.title,description:a.state.description}).then((function(e){a.setState({project:e.data,editForm:!1}),console.log(e)})).catch((function(e){console.log(e)}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;if(console.log(this.state,this.props),this.state.error)return r.a.createElement("p",null,this.state.error);if(null===this.state.project)return r.a.createElement("div",null);var t=!1;return this.state.project.owner===this.props.user._id&&(t=!0),console.log(t),r.a.createElement("div",null,r.a.createElement("h1",null,this.state.project.title),r.a.createElement("p",null,this.state.project.description),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{onClick:this.toggleEdit},"Show Edit Form"),r.a.createElement(k.a,{onClick:function(){return e.setState({taskForm:!e.state.taskForm})}},"Show Task form"),r.a.createElement(k.a,{variant:"danger",onClick:this.deleteProject},"Delete Project")),this.state.editForm&&r.a.createElement(C.a,{onSubmit:this.handleSubmit},r.a.createElement("h2",null,"Edit form"),r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,{htmlFor:"title"},"Title: "),r.a.createElement(C.a.Control,{type:"text",name:"title",id:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,{htmlFor:"description"},"Description: "),r.a.createElement(C.a.Control,{type:"text",name:"description",id:"description",value:this.state.description,onChange:this.handleChange})),r.a.createElement(k.a,{type:"submit"},"Edit")),this.state.taskForm&&r.a.createElement(D,{projectId:this.state.project._id,getData:this.getData,hideForm:function(){return e.setState({taskForm:!1})}}),r.a.createElement(F,{tasks:this.state.project.tasks}))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",project:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;return g.a.get("/api/tasks/".concat(t)).then((function(t){var a=t.data,n=a.title,r=a.description,o=a.project;e.setState({title:n,description:r,project:o})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e={title:this.state.title,description:this.state.description,project:this.state.project};return r.a.createElement("div",null,r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement(m.b,{to:"/projects/".concat(e.project)},"Back to project"))}}]),t}(n.Component),U=a(89),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),f(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/projects"))}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement("h2",null,"Signup"),r.a.createElement(C.a,{onSubmit:this.handleSubmit},r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(C.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(C.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&r.a.createElement(U.a,{variant:"danger"},this.state.error),r.a.createElement(k.a,{type:"submit"},"Sign up")))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),b(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/projects"))}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement(C.a,{onSubmit:this.handleSubmit},r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(C.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(C.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&r.a.createElement(U.a,{variant:"danger"},this.state.error),r.a.createElement(k.a,{type:"submit"},"Log in")))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a.projectsRoute=function(e){return a.state.user?r.a.createElement(w,e):r.a.createElement(h.a,{to:"/"})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(j,{user:this.state.user,setUser:this.setUser}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:v}),r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(A,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(G,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.b,{exact:!0,path:"/projects",render:this.projectsRoute}),r.a.createElement(h.b,{exact:!0,path:"/projects/:id",render:function(t){return r.a.createElement(x,Object.assign({user:e.state.user},t))}}),r.a.createElement(h.b,{exact:!0,path:"/tasks/:id",component:L})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.get("/api/auth/loggedin").then((function(e){var t=e.data;c.a.render(r.a.createElement(m.a,null,r.a.createElement(P,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.9570bcb7.chunk.js.map