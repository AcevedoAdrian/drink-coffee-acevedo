(this["webpackJsonpdrink-coffee-acevedo"]=this["webpackJsonpdrink-coffee-acevedo"]||[]).push([[0],{107:function(e,t,c){},111:function(e,t,c){},113:function(e,t,c){},115:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},119:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(43),i=c.n(a),s=c(17),o=c(14),j=c(30),l=c(12),d=c(5),b=Object(n.createContext)([]),u=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(l.a)(c,2),a=r[0],i=r[1],s=function(e){return!!a.find((function(t){return t.id===e}))},o=function(e,t){var c=a.map((function(c){return c.id===e&&(c.quantity+=t),c}));i(c)};return Object(d.jsx)(b.Provider,{value:{cartItems:a,setCart:i,addItem:function(e,t){s(e.id)?o(e.id,t):i([].concat(Object(j.a)(a),[{id:e.id,brand:e.brand,img:e.img,weight:e.weight,price:e.precie,quantity:t}]))},removeItem:function(e){return i(a.filter((function(t){return t.id!==e})))},clearCart:function(){i([])},isInCart:s,getTotalItems:function(){return a.reduce((function(e,t){return e+t.quantity}),0)},getTotalPrice:function(){return a.reduce((function(e,t){return e+t.price*t.quantity}),0)}},children:t})},O=c(51),h=c(32),m=c(63),x=(c(107),function(){var e=Object(n.useContext)(b).getTotalItems;return Object(d.jsx)("div",{className:"card-widget",children:Object(d.jsxs)(s.b,{to:"/cart",children:[e()>0&&Object(d.jsx)(m.a,{variant:"solid",colorScheme:"green",children:e()}),Object(d.jsx)(h.a,{as:O.a,w:6,h:6,color:"marron.200"})]})})}),p=c.p+"static/media/logo.4ceed3de.svg",f=(c(111),function(){return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)(s.b,{to:"/",className:"navbar-link",children:Object(d.jsx)("img",{className:"navbar-logo",src:p,alt:"Logo de la tienada drink coffe"})}),Object(d.jsxs)("ul",{className:"ul-navbar",children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/products",children:"Productos"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/category/Grano",children:"Grano"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/category/Molido",children:"Molido"})})]}),Object(d.jsx)(x,{})]})}),g=c(65),v=c(2),y=c.n(v),S=c(26),C=c(8),w=(c(113),function(e){var t=e.product,c=t.id,n=t.brand,r=t.country,a=t.region,i=t.img,o=t.precie;return Object(d.jsxs)(m.b,{className:"card",id:c,borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("img",{src:i,alt:""})}),Object(d.jsx)(m.d,{}),Object(d.jsxs)("div",{className:"card-texts",children:[Object(d.jsx)(m.h,{fontSize:"lg",as:"i",children:n}),Object(d.jsx)(m.h,{fontSize:"md",as:"i",children:"".concat(r," - ").concat(a)}),Object(d.jsx)(m.h,{fontSize:"xl",children:"$ ".concat(o)}),Object(d.jsx)(s.b,{to:"/item/".concat(c),children:Object(d.jsx)(g.a,{colorScheme:"brand",mt:"6",children:"Ver Producto"})})]})]})}),k=(c(115),function(e){var t=e.products;return Object(d.jsx)("div",{className:"container-card",children:t.map((function(e){return Object(d.jsx)(w,{product:e},e.id)}))})}),I=c(46),N=c(71),z=c(16),E=Object(N.a)({apiKey:"AIzaSyAH58410kL7xLllRNLRbSYWxn8UqxVbKlY",authDomain:"drink-coffee-web.firebaseapp.com",projectId:"drink-coffee-web",storageBucket:"drink-coffee-web.appspot.com",messagingSenderId:"528972108036",appId:"1:528972108036:web:75ce2998ec41d358ae0051"}),D=Object(z.e)(E),R=(c(117),function(e){var t=e.title,c=e.styleRender,r=Object(n.useState)([]),a=Object(l.a)(r,2),i=a[0],s=a[1],j=Object(o.g)().category,b=Object(n.useState)(!0),u=Object(l.a)(b,2),O=u[0],h=u[1],m=function(){var e=Object(C.a)(y.a.mark((function e(){var t,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(z.g)(Object(z.b)(D,"products")),c=[],e.next=4,Object(z.d)(t);case 4:e.sent.forEach((function(e){c.push(Object(S.a)(Object(S.a)({},e.data()),{},{id:e.id}))})),s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(C.a)(y.a.mark((function e(t){var c,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(z.g)(Object(z.b)(D,"products"),Object(z.h)("category","==",t)),n=[],e.next=4,Object(z.d)(c);case 4:e.sent.forEach((function(e){n.push(Object(S.a)(Object(S.a)({},e.data()),{},{id:e.id}))})),s(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(C.a)(y.a.mark((function e(t){var c,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(z.g)(Object(z.b)(D,"products"),Object(z.f)(3)),n=[],e.next=4,Object(z.d)(c);case 4:e.sent.forEach((function(e){n.push(Object(S.a)(Object(S.a)({},e.data()),{},{id:e.id}))})),s(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h(!0),"top"===c?p():"category"===c?x(j):"all"===c&&m(),setTimeout((function(){h(!1)}),2e3)}),[c,j]),Object(d.jsx)("section",{className:"secction-items-lists",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("h2",{className:"h2-items-lists",children:[t," ",j]}),O?Object(d.jsx)(I.a,{size:"xl",thickness:"4px",mt:"40px"}):Object(d.jsx)(k,{products:i})]})})}),T=(c(118),c.p+"static/media/home.7be8f2b2.jpg"),A=c(72),q=function(e){var t=e.title;return Object(d.jsxs)(m.b,{h:"100vh",bg:"marron.200",bgImage:"url(".concat(T,")"),bgRepeat:"no-repeat",bgSize:"cover",children:[Object(d.jsxs)(m.e,{direction:"column",alignItems:{base:"center",md:"flex-start"},justify:"center",h:"100%",bg:"rgba(0,0,0,0.7)",p:["0 10%",null,"0 10%"],children:[Object(d.jsx)(m.f,{color:"marron.900",textTransform:"uppercase",textAlign:"left",fontWeight:"bold",letterSpacing:"2px",as:"h1",size:"4xl",isTruncated:!0,children:t}),Object(d.jsx)(m.e,{w:"50%",marginTop:"2rem",children:Object(d.jsx)(m.h,{color:"marron.200",fontSize:"l",fontWeight:"light",letterSpacing:"1px",textAlign:"justify",children:"Invertimos en conocimiento e innovaci\xf3n, creamos relaciones de beneficio mutuo con los productores de caf\xe9 (Comercio Directo), intentamos y controlamos obsesivamente cada grano de caf\xe9, tostamos con arte modelando curvas de tueste ideales para cada caf\xe9 (Tostado Artesano)."})})]}),Object(d.jsx)(R,{title:"Algunos de Nuestros Productos",styleRender:"top"}),Object(d.jsx)(m.e,{flexDir:"column",alignContent:"center",position:"absolute",top:"150vh",left:"45vw",children:Object(d.jsx)(m.c,{children:Object(d.jsx)(m.g,{direction:"row",spacing:4,size:"xl",children:Object(d.jsx)(s.b,{to:"/products",children:Object(d.jsx)(g.a,{rightIcon:Object(d.jsx)(A.a,{}),colorScheme:"marron",variant:"outline",size:"lg",children:"Ver m\xe1s Productos"})})})})})]})},F=c(62),P=function(e){var t=e.stock,c=e.initial,n=e.onAdd,a=r.a.useState(c),i=Object(l.a)(a,2),s=i[0],o=i[1];return Object(d.jsxs)("div",{className:"card-add",children:[Object(d.jsxs)("div",{className:"item-count-container",children:[Object(d.jsx)(g.b,{"aria-label":"Search database",color:"marron.900",bg:"marron.200",onClick:function(){s>0&&o(s-1)},icon:Object(d.jsx)(F.b,{})}),Object(d.jsx)(m.h,{fontSize:"30px",as:"p",color:"marron.900",children:s}),Object(d.jsx)(g.b,{"aria-label":"Search database",color:"marron.900",bg:"marron.200",onClick:function(){s<t&&o(s+1)},icon:Object(d.jsx)(F.a,{})})]}),Object(d.jsx)(g.a,{colorScheme:"brand",leftIcon:Object(d.jsx)(O.b,{}),variant:"solid",onClick:t>0?function(){n(s)}:null,disabled:!(t>0),children:"Agregar al Carrito"})]})},W=c(67),B=c(68),L=(c(119),function(e){var t=e.product,c=Object(n.useContext)(b).addItem,r=Object(n.useState)({}),a=Object(l.a)(r,2),i=a[0],o=a[1],j=Object(n.useState)(!0),u=Object(l.a)(j,2),O=u[0],h=u[1],x=t.brand,p=t.category,f=t.country,v=t.region,y=t.description,S=t.img,C=t.precie,w=t.stock,k=t.weight;return Object(d.jsx)("div",{className:"product-detail",children:Object(d.jsxs)("div",{className:"product-container",children:[Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)(W.a,{boxSize:"300px",objectFit:"cover",src:S,alt:""})}),Object(d.jsxs)("div",{className:"product-detail-info",children:[Object(d.jsx)("h3",{children:x}),Object(d.jsxs)("span",{children:["Categoria: ",p]}),Object(d.jsxs)("span",{children:["Pais: ",f]}),Object(d.jsxs)("span",{children:["Region: ",v]}),Object(d.jsx)("p",{children:y}),Object(d.jsxs)("span",{children:["Peso: ",k,"g"]}),Object(d.jsxs)("span",{children:["Precio: $",C]}),Object(d.jsxs)("span",{children:["Stock: ",w]}),O?Object(d.jsx)(P,{stock:w,initial:1,onAdd:function(e){e>0?(c(t,e),h(!1),o({description:"Usted a seleccionado ".concat(e),type:"success"})):o({description:"Tiene que seleccionar una cantidad",type:"error"})}}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.b,{to:"/cart",children:Object(d.jsx)(g.a,{colorScheme:"brand",variant:"solid",children:"Finalizar Comprar"})}),Object(d.jsx)(s.b,{to:"/products",children:Object(d.jsx)(g.a,{colorScheme:"brand",variant:"solid",children:"Seguir Comprando"})})]}),i.description?Object(d.jsx)(m.g,{spacing:3,children:Object(d.jsxs)(B.a,{status:i.type,children:[Object(d.jsx)(B.c,{}),i.description]})}):null]})]})})}),H=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),s=i[0],j=i[1],b=Object(o.g)().id,u=function(){var e=Object(C.a)(y.a.mark((function e(t){var c,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(z.g)(Object(z.b)(D,"products"),Object(z.h)(Object(z.c)(),"==",t)),n=[],e.next=4,Object(z.d)(c);case 4:e.sent.forEach((function(e){n.push(Object(S.a)(Object(S.a)({},e.data()),{},{id:e.id}))})),j(n[0]),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u(b)}),[b]),Object(d.jsx)("div",{className:"container-prorduct-detail",children:c?Object(d.jsx)(I.a,{size:"xl",thickness:"4px",pt:"40px"}):Object(d.jsx)(L,{product:s})})},U=c(13),K=function(e){var t=e.cartItem,c=e.removeItem;return Object(d.jsxs)(m.b,{maxW:"100%",borderWidth:"1px",borderRadius:"m",display:"flex",flexDir:"row",alignContent:"stretch",children:[Object(d.jsx)(m.b,{children:Object(d.jsx)(W.a,{maxH:"200px",src:t.img})}),Object(d.jsxs)(m.b,{pt:"6",children:[Object(d.jsx)(m.b,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:t.brand}),Object(d.jsx)(m.b,{children:Object(d.jsxs)(m.h,{as:"em",children:[t.weight," g"]})}),Object(d.jsxs)(m.b,{pt:"2",children:[t.price,Object(d.jsx)(m.b,{as:"span",color:"gray.600",fontSize:"sm",children:" x ".concat(t.quantity)})]}),Object(d.jsx)(m.b,{pt:"6",children:Object(d.jsx)(g.a,{colorScheme:"red",onClick:function(){return c(t.id)},children:"Quitar"})})]})]})},M=c(48),V=c(69),$={name:"",phone:"",email:"",emailConfirm:""},G={status:"warning",title:"Usted no tiene ningun producto agregado."},J=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)($),i=Object(l.a)(a,2),o=i[0],j=i[1],u=Object(n.useState)(G),O=Object(l.a)(u,2),h=O[0],x=O[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),v=f[0],w=f[1],k=Object(n.useContext)(b),I=k.cartItems,N=k.clearCart,E=k.removeItem,R=k.getTotalPrice,T=function(e){var t=e.target,c=t.name,n=t.value;"email"!==c&&"emailConfirm"!==c||(n=n.toLowerCase()),j(Object(S.a)(Object(S.a)({},o),{},Object(U.a)({},c,n)))},A=function(){var e=Object(C.a)(y.a.mark((function e(t){var c,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o.email===o.emailConfirm){e.next=5;break}w(!0),e.next=18;break;case 5:return t.preventDefault(),w(!1),(c={}).buyer=o,c.total=R(),c.items=I.map((function(e){return{id:e.id,name:e.brand,price:e.price,quantity:e.quantity}})),console.log(c),e.next=14,Object(z.a)(Object(z.b)(D,"buyer"),{order:c});case 14:n=e.sent,x({satuts:"success",title:"Su id de producto es ".concat(n.id)}),j($),N();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){0===I.length?r(!1):r(!0)}),[I.length,r]),Object(d.jsx)(m.e,{flexDir:"row",justify:"space-between",align:"left",mt:"10%",children:c?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m.b,{w:"50vw",h:"100vh",children:I.map((function(e){return Object(d.jsx)(K,{cartItem:e,removeItem:E},e.id)}))}),Object(d.jsxs)(m.b,{w:"50vw",h:"100vh",color:"balck",children:[Object(d.jsxs)(m.b,{display:"flex",flexDir:"row",justifyContent:"space-between",padding:"2rem 2rem",bg:"gray.200",children:[Object(d.jsx)(m.h,{fontSize:"xl",children:"Totol Compra:"}),Object(d.jsxs)(m.h,{fontSize:"xl",as:"em",children:[" $",R()]})]}),Object(d.jsxs)(m.b,{w:"100%",display:"flex",flexDir:"column",padding:"1rem 2rem",mt:"1rem",children:[Object(d.jsx)(m.h,{fontSize:"xl",as:"h2",pb:"1rem",children:"Formulario de Compra"}),Object(d.jsxs)("form",{onSubmit:A,w:"100%",children:[Object(d.jsxs)(M.a,{w:"100%",isRequired:!0,children:[Object(d.jsx)(M.c,{htmlFor:"name",children:"Nombre"}),Object(d.jsx)(V.a,{name:"name",type:"text",placeholder:"Nombre",value:o.name,onChange:T})]}),Object(d.jsxs)(M.a,{isRequired:!0,children:[Object(d.jsx)(M.c,{htmlFor:"phone",children:"Telefono"}),Object(d.jsx)(V.a,{name:"phone",type:"number",placeholder:"3624213312",value:o.phone,onChange:T})]}),Object(d.jsxs)(M.a,{isRequired:!0,children:[Object(d.jsx)(M.c,{htmlFor:"email",children:"E-mail"}),Object(d.jsx)(V.a,{name:"email",type:"mail",placeholder:"email@email.com",value:o.email,onChange:T})]}),Object(d.jsxs)(M.a,{isRequired:!0,isInvalid:v,children:[Object(d.jsx)(M.c,{htmlFor:"emailConfirm",children:"Confirmacion de Email"}),Object(d.jsx)(V.a,{name:"emailConfirm",type:"email",placeholder:"email@email.com",value:o.emailConfirm,onChange:T}),v&&Object(d.jsx)(M.b,{children:"El email no coidice"})]}),Object(d.jsxs)(m.g,{direction:"row",spacing:4,mt:"2rem",children:[Object(d.jsx)(g.a,{type:"submit",colorScheme:"teal",children:"Comprar"}),Object(d.jsx)(g.a,{onClick:function(){return N()},colorScheme:"red",variant:"solid",children:"Limpiar Carrito"})]})]})]})]})]}):Object(d.jsxs)(B.a,{status:h.status,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",height:"200px ",children:[Object(d.jsx)(B.c,{boxSize:"40px",mr:0}),Object(d.jsx)(B.d,{mt:4,mb:1,fontSize:"lg",children:h.title}),Object(d.jsx)(s.b,{to:"/products",children:Object(d.jsx)(g.a,{colorScheme:"brand",variant:"solid",children:"Elegir Productos"})})]})})};var Y=function(){return Object(d.jsxs)(B.a,{status:"error",variant:"subtle",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",height:"100vh",children:[Object(d.jsx)(B.c,{boxSize:"40px",mr:0}),Object(d.jsx)(B.d,{mt:4,mb:1,fontSize:"lg",children:"Error 404"}),Object(d.jsx)(B.b,{maxWidth:"sm",children:"We're sorry we can't show the page"})]})},Q=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u,{children:Object(d.jsxs)(s.a,{basename:"/",children:[Object(d.jsx)(f,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",element:Object(d.jsx)(q,{title:"DRINK COFFEE"})}),Object(d.jsx)(o.a,{path:"/products",element:Object(d.jsx)(R,{title:"PRODUCTOS",styleRender:"all"})}),Object(d.jsx)(o.a,{path:"/category/:category",element:Object(d.jsx)(R,{title:"CAFEE ESTILO",styleRender:"category"})}),Object(d.jsx)(o.a,{path:"/item/:id",element:Object(d.jsx)(H,{})}),Object(d.jsx)(o.a,{path:"/cart",element:Object(d.jsx)(J,{})}),Object(d.jsx)(o.a,{path:"*",element:Object(d.jsx)(Y,{})})]})]})})})},_=c(21),X=Object(_.b)({colors:{marron:{900:"#bc9667",800:"#C4A37A",700:"#CDB08D",600:"#D5BDA0",500:"#DECBB3",400:"#E6D8C6",300:"#EEE5D9",200:"#ffffff"}},fonts:{body:"Nunito Sans, sans- serif"},components:{Button:{baseStyle:{backgroundColor:"marron.900",fontSize:"1.2rem",fontWeight:"bold",textTransform:"uppercase",_hover:{backgroundColor:"transparent",color:"marron.900",borderColor:"marron.900",border:"1px solid"}}},Spinner:{baseStyle:{speed:"0.65s",emptyColor:"gray.200",color:"marron.900"}}}});c(120);i.a.render(Object(d.jsx)(_.a,{theme:X,children:Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(Q,{})})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.0cd5d991.chunk.js.map