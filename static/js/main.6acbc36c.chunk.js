(this["webpackJsonpreact-clock"]=this["webpackJsonpreact-clock"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),o=a.n(l),r=(a(14),a(4)),s=a(5),i=a(7),m=a(6),u=a(1),d=a(8),f=(a(15),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).clockInterval="",a.handleDate=a.handleDate.bind(Object(u.a)(a)),a.state={hours:"",minutes:"",seconds:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.clockInterval=setInterval(this.handleDate,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.clockInterval)}},{key:"render",value:function(){var e=this.state,t=e.hours,a=e.minutes,c=e.seconds,l={transform:"rotate(".concat(6*c,"deg)")},o={transform:"rotate(".concat(6*a,"deg)")},r={transform:"rotate(".concat(30*t,"deg)")},s=this.props.title;return n.createElement("div",{className:"clock"},n.createElement("h3",null,s),n.createElement("div",{className:"analog-clock"},n.createElement("div",{className:"dial seconds",style:l}),n.createElement("div",{className:"dial minutes",style:o}),n.createElement("div",{className:"dial hours",style:r})),n.createElement("div",{className:"digital-clock"},t,":",a,":",c))}},{key:"handleDate",value:function(){var e=this.props.datediff,t=new Date;t.setHours(t.getHours()+e);var a=this.formatTime(t.getHours()),n=this.formatTime(t.getMinutes()),c=this.formatTime(t.getSeconds());this.setState({hours:a,minutes:n,seconds:c})}},{key:"formatTime",value:function(e){return e<10?"0".concat(e):e}}]),t}(n.Component));a(16);var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("span",null,c.a.createElement(f,{title:"Los Angeles",datediff:-2})),c.a.createElement("span",null,c.a.createElement(f,{title:"Chicago",datediff:0})),c.a.createElement("span",null,c.a.createElement(f,{title:"New York",datediff:1})),c.a.createElement("span",null,c.a.createElement(f,{title:"London",datediff:5})),c.a.createElement("span",null,c.a.createElement(f,{title:"Moscow",datediff:8})),c.a.createElement("span",null,c.a.createElement(f,{title:"Tokyo",datediff:9})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.6acbc36c.chunk.js.map