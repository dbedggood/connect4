(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(18)},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(2),l=t(4),u=t(3),c=t(5),i=t(0),o=t.n(i),s=t(7),m=t.n(s);t(16);var v=function(e){var n=e.value?o.a.createElement("img",{src:e.value,alt:"coin"}):null;return o.a.createElement("div",{className:"square"},o.a.createElement("div",{className:"circle"},n))};var d=function(e){return o.a.createElement("div",{className:"column",onClick:function(){return e.onClick()}},o.a.createElement(v,{value:e.value[5]}),o.a.createElement(v,{value:e.value[4]}),o.a.createElement(v,{value:e.value[3]}),o.a.createElement(v,{value:e.value[2]}),o.a.createElement(v,{value:e.value[1]}),o.a.createElement(v,{value:e.value[0]}))},f=t(8),h=t.n(f),p=t(9),E=t.n(p),C=h.a,b=E.a,k=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).state={columns:new Array(7).fill(0).map(function(){return new Array(6).fill(null)}),turn:C},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"renderColumn",value:function(e){var n=this;return o.a.createElement(d,{value:this.state.columns[e],onClick:function(){return n.handleClick(e)}})}},{key:"handleClick",value:function(e){var n=this.state.columns.slice(),t=this.state.turn,a=n[e].filter(function(e){return null!==e}).length;a>=6||(n[e][a]=t,t=t==C?b:C,this.setState({columns:n,turn:t}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"game-board"},this.renderColumn(0),this.renderColumn(1),this.renderColumn(2),this.renderColumn(3),this.renderColumn(4),this.renderColumn(5),this.renderColumn(6))}}]),n}(o.a.Component),j=function(e){function n(){return Object(a.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"game-board"},o.a.createElement(k,null))}}]),n}(o.a.Component);m.a.render(o.a.createElement(j,null),document.getElementById("root"))},8:function(e,n,t){e.exports=t.p+"static/media/c4r.90fdc204.png"},9:function(e,n,t){e.exports=t.p+"static/media/c4y.7d207dc0.png"}},[[10,2,1]]]);
//# sourceMappingURL=main.feba9725.chunk.js.map