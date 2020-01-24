(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a(16),s=a(11),i={isFetching:!1,userData:{},isError:!1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return Object(s.a)({},e,{isFetching:!0,userData:{},isError:!1});case"FETCHED_USER":return Object(s.a)({},e,{userData:t.data,isFetching:!1,isError:!1});case"RECEIVE_ERROR":return Object(s.a)({},e,{isError:!0,userData:{},isFetching:!1});default:return e}},o=Object(l.c)({gitSearch:u}),m=Object(l.d)(o,Object(l.a)(c.a)),E=a(3),d=a(5),h=a.n(d),p=a(6),b=a(7),f=a(9),g=a(8),N=a(10),v=function(e){var t=e.replace(/\s/g,"");return function(e,a){e({type:"FETCH_USER"}),fetch("https://api.github.com/users/".concat(t)).then((function(e){return e.json()})).then((function(t){if("Not Found"===t.message)throw new Error("No such user found!!");e(function(e){return{type:"FETCHED_USER",data:e}}(t))})).catch((function(t){return e({type:"RECEIVE_ERROR"})}))}},O=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.getUsername.current.value;a.props.dispatch(v(t)),a.getUsername.current.value="",a.getUsername.current.focus()},a.getUsername=Object(n.createRef)(),a}return Object(N.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getUsername.current.focus()}},{key:"render",value:function(){return r.a.createElement("div",{className:"field is-horizontal userid-label-field"},r.a.createElement("div",{className:"field-label is-normal"},r.a.createElement("label",{className:"label"},"User-Name:")),r.a.createElement("div",{className:"field-body userid-field"},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{id:"user_id",className:"input",ref:this.getUsername,type:"text",required:!0}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"button is-link",type:"submit",onClick:this.handleSubmit,value:"Submit"})))))}}]),t}(n.Component),j=Object(E.b)((function(e){return{data:e.gitSearch}}))(O),y=function(e){return r.a.createElement("div",{className:"box"},r.a.createElement("figure",{className:"avatar"},r.a.createElement("img",{id:"avatar",alt:"avatar",src:e.user.avatar_url})),r.a.createElement("h3",{className:"title has-text-black"},r.a.createElement("span",{id:"name"},"Name")," ",r.a.createElement("sup",null,r.a.createElement("i",{id:"pronoun"}))),r.a.createElement("div",{id:"bio"}),r.a.createElement("br",null),r.a.createElement("table",{className:"table details"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name:"),r.a.createElement("td",null,r.a.createElement("span",{id:"name"},e.user.name))),r.a.createElement("tr",null,r.a.createElement("td",null,"Location:"),r.a.createElement("td",null,r.a.createElement("span",{id:"points",className:"tag is-info"},e.user.location||"N.A"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Public Repos:"),r.a.createElement("td",null,r.a.createElement("span",{id:"posts",className:"tag is-warning"},e.user.public_repos))),r.a.createElement("tr",null,r.a.createElement("td",null,"Followers:"),r.a.createElement("td",null,r.a.createElement("span",{id:"reactions",className:"tag is-light"},e.user.followers))),r.a.createElement("tr",null,r.a.createElement("td",null,"Following:"),r.a.createElement("td",null,r.a.createElement("span",{id:"moderator",className:"tag is-danger"},e.user.following))))))},R=(a(28),function(){return r.a.createElement("div",{className:"progress-bar"},r.a.createElement("span",{className:"bar"},r.a.createElement("span",{className:"progress"})))}),w=(a(29),function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"hero is-success is-fullheight"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("div",{className:"column is-4 is-offset-4"},r.a.createElement("h3",{className:"title has-text-black"},r.a.createElement("a",{href:"https://webwide.io",rel:"noopener noreferrer",target:"_blank"},"Github")," Profile Viewer"),r.a.createElement("hr",{className:"login-hr"}),r.a.createElement(j,{isLoading:this.props.data.isFetching}),this.props.data.isFetching&&r.a.createElement(R,null),this.props.data.isError?r.a.createElement("h3",{className:"error"},"No such User exists."):null,Object.keys(this.props.data.userData).length>0?r.a.createElement(y,{user:this.props.data.userData}):null)))))}}]),t}(n.Component)),F=Object(E.b)((function(e){return{data:e.gitSearch}}))(w);h.a.render(r.a.createElement((function(){return r.a.createElement(E.a,{store:m},r.a.createElement(F,null))}),null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.034db747.chunk.js.map