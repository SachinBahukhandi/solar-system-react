(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,,,,,,function(t,i,s){},function(t,i,s){},function(t,i,s){},,function(t,i,s){"use strict";s.r(i);var n=s(1),e=s.n(n),h=s(5),a=s.n(h),o=(s(10),s.p,s(11),s(12),s.p,s(0));var c=s(2),r=s(3),l=function(){function t(i,s,n,e,h,a,o){Object(c.a)(this,t),this.context=i,this.x=s,this.y=n,this.radius=e,this.color=h,this.velocity=a,this.orbitRadius=o,this.startingPos={x:s,y:n},this.radian=0,this.moon={x:this.x+this.orbitRadius+this.radius,y:n,radian:0,velocity:(Math.random()+.1)/30}}return Object(r.a)(t,[{key:"draw",value:function(){this.context.beginPath(),this.context.lineWidth=2,this.context.arc(this.startingPos.x,this.startingPos.y,this.orbitRadius,0,2*Math.PI,!1),this.context.strokeStyle="rgba(255, 255, 255, 0.35)",this.context.stroke(),this.context.closePath(),this.context.beginPath(),this.context.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.context.fillStyle=this.color,this.context.fill(),this.context.closePath(),this.velocity>0&&(this.context.beginPath(),this.context.arc(this.moon.x,this.moon.y,2,0,2*Math.PI,!1),this.context.fillStyle="gray",this.context.fill())}},{key:"update",value:function(){this.draw(),this.radian+=this.velocity,this.x=this.startingPos.x+Math.cos(this.radian)*this.orbitRadius,this.y=this.startingPos.y+Math.sin(this.radian)*this.orbitRadius,this.moon.radian+=this.moon.velocity,this.moon.x=this.x+Math.cos(this.moon.radian)*(this.radius+5),this.moon.y=this.y+Math.sin(this.moon.radian)*(this.radius+5)}}]),t}(),u=function(){function t(i,s){Object(c.a)(this,t),this.context=i,this.canvas=s,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.radius=2*Math.random()}return Object(r.a)(t,[{key:"draw",value:function(){this.context.beginPath(),this.context.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.context.fillStyle="white",this.context.fill()}}]),t}(),d=function(){function t(i,s){Object(c.a)(this,t),this.cvs=i,this.context=s,this.planets=[],this.cvs.width=window.innerWidth,this.cvs.height=window.innerHeight}return Object(r.a)(t,[{key:"colorPlanets",value:function(){}},{key:"getPlanetForOptions",value:function(t,i,s,n){return new l(this.context,this.cvs.width/2,this.cvs.height/2,t,n,i/1e3,s)}},{key:"init",value:function(){this.planets=[],this.stars=[],this.planets.push(this.getPlanetForOptions(35,0,0,"yellow")),this.planets.push(this.getPlanetForOptions(5,6,65,"gray")),this.planets.push(this.getPlanetForOptions(10,5,90,"orange")),this.planets.push(this.getPlanetForOptions(15,4,125,"blue")),this.planets.push(this.getPlanetForOptions(20,3.5,175,"red")),this.planets.push(this.getPlanetForOptions(25,3,225,"orange")),this.planets.push(this.getPlanetForOptions(20,2.25,275,"yellow")),this.planets.push(this.getPlanetForOptions(15,2,325,"blue")),this.planets.push(this.getPlanetForOptions(25,1.5,375,"purple")),this.planets.push(this.getPlanetForOptions(7,1,450,"gray"));for(var t=0;t<400;t++)this.stars.push(new u(this.context,this.cvs))}},{key:"animate",value:function(){var t=this;requestAnimationFrame((function(){return t.animate()})),this.context.clearRect(0,0,this.cvs.width,this.cvs.height),this.context.fillStyle="rgb(0, 0, 0)",this.context.fillRect(0,0,this.cvs.width,this.cvs.height),this.stars.forEach((function(t){t.draw()})),this.planets.forEach((function(t){t.update()}))}}]),t}();var x=function(){var t=Object(n.useRef)(null),i=Object(n.useRef)(null);return Object(n.useEffect)((function(){var s=t.current,n=s.getContext("2d");i.current=new d(s,n);i.current.init(),i.current.animate()}),[]),Object(o.jsx)("div",{className:"h-screen w-screen my-canvas",children:Object(o.jsx)("canvas",{ref:t})})};var p=function(){return Object(o.jsx)("div",{className:"px-0  h-100",children:Object(o.jsx)(x,{})})},f=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(i){var s=i.getCLS,n=i.getFID,e=i.getFCP,h=i.getLCP,a=i.getTTFB;s(t),n(t),e(t),h(t),a(t)}))};a.a.render(Object(o.jsx)(e.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),f()}],[[14,1,2]]]);
//# sourceMappingURL=main.0b82082f.chunk.js.map