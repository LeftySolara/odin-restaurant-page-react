(this["webpackJsonprestaurant-page-react"]=this["webpackJsonprestaurant-page-react"]||[]).push([[0],[,function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/bagel.ef580cba.jpg"},function(e,t,a){e.exports=a.p+"static/media/banana_nut_oatmeal.1a57dc5a.jpg"},function(e,t,a){e.exports=a.p+"static/media/egg_on_toast.285ace60.jpg"},function(e,t,a){e.exports=a.p+"static/media/french_toast.e07f64eb.jpg"},function(e,t,a){e.exports=a.p+"static/media/blueberry_pancakes.9fa4ccd4.jpg"},function(e,t,a){e.exports=a.p+"static/media/blueberry_waffles.f0e23c87.jpg"},function(e,t,a){e.exports=a.p+"static/media/breakfast_platter.45c52478.jpg"},function(e,t,a){e.exports=a.p+"static/media/tea.2d71ef4a.jpg"},function(e,t,a){e.exports=a.p+"static/media/coffee.cca65f65.jpg"},,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(5),o=a(6),s=a(2),u=a(17),m=a(16);a(23);function p(e){var t=e.navigate,a=e.text;return a=String(a),r.a.createElement("div",{className:"tabButton"},r.a.createElement("input",{id:a.toLowerCase(),type:"radio",name:"tabBar",value:a.toLowerCase(),onChange:function(){return t(a.toLowerCase())}}),r.a.createElement("label",{htmlFor:a.toLowerCase()},a))}var f=function(e){var t=e.navigate;return r.a.createElement("div",{id:"tabBar"},r.a.createElement(p,{text:"Home",navigate:t}),r.a.createElement(p,{text:"Menu",navigate:t}),r.a.createElement(p,{text:"Contact",navigate:t}))};a(1);var g=function(){return r.a.createElement("div",{className:"tabContent overlay"},r.a.createElement("p",null,"Located in the heart of the arts district, Julianne's Cafe is the perfect spot for a relaxing breakfast atmosphere."),r.a.createElement("p",null,"Established in 2020, our cafe strives to provide the best traditional, experimental, and fun options for the most important meal of the day!"))};var b=function(){return r.a.createElement("div",{className:"tabContent overlay"},r.a.createElement("p",null,"For questions, concerns, and reservations:"),r.a.createElement("p",null),r.a.createElement("p",null,"12345 Example St., Seattle, WA"),r.a.createElement("p",null,"julianne@example.com",r.a.createElement("br",null),"(123)456-7890"))},v=a(7),d=a.n(v),E=a(8),h=a.n(E),x=a(9),y=a.n(x),j=a(10),k=a.n(j),C=a(11),T=a.n(C),B=a(12),O=a.n(B),N=a(13),_=a.n(N),w=a(14),P=a.n(w),S=a(15),L=a.n(S),J={bagel:d.a,bananaNutOatmeal:h.a,eggOnToast:y.a,frenchToast:k.a,blueberryPancakes:T.a,blueberryWaffles:O.a,breakfastPlatter:_.a,tea:P.a,coffee:L.a},W=(a(24),[{title:"Bagel",image:J.bagel,price:1.99},{title:"Banana Nut Oatmeal",image:J.bananaNutOatmeal,price:2.99},{title:"Egg on Toast",image:J.eggOnToast,price:2.79},{title:"French Toast",image:J.frenchToast,price:6.99},{title:"Blueberry Pancakes",image:J.blueberryPancakes,price:6.79},{title:"Blueberry Waffles",image:J.blueberryWaffles,price:6.79},{title:"Breakfast Platter",image:J.breakfastPlatter,price:9.79},{title:"Tea",image:J.tea,price:1.99},{title:"Coffee",image:J.coffee,price:1.99}]);function F(e){var t=e.title,a=e.image,n=e.price;return r.a.createElement("div",{className:"menuItem"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t),r.a.createElement("p",null,"$",n))}var I=function(){return r.a.createElement("div",{id:"menuTab",className:"tabContent"},function(e){for(var t=[],a=0;a<e.length;++a)t.push(r.a.createElement(F,{key:e[a].title,title:e[a].title,image:e[a].image,price:e[a].price}));return t}(W))};function q(e){var t=e.text;return r.a.createElement("h1",{id:"header"},t)}var A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={currentTab:r.a.createElement(g,null)},n.navigate=n.navigate.bind(Object(s.a)(n)),n}return Object(o.a)(a,[{key:"navigate",value:function(e){"home"===e?this.setState({currentTab:r.a.createElement(g,null)}):"menu"===e?this.setState({currentTab:r.a.createElement(I,null)}):"contact"===e&&this.setState({currentTab:r.a.createElement(b,null)})}},{key:"render",value:function(){var e=this.state.currentTab;return r.a.createElement("div",null,r.a.createElement(q,{text:"Julianne's Breakfast Cafe"}),r.a.createElement(f,{navigate:this.navigate}),e)}}]),a}(r.a.Component);c.a.render(r.a.createElement(A,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.feae035a.chunk.js.map