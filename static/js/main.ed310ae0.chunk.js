(this["webpackJsonpcurrencyconverter-react"]=this["webpackJsonpcurrencyconverter-react"]||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,u,s,l,d,b=t(1),x=t.n(b),p=t(20),j=t.n(p),h=t(5),m=t(4),f=t(2),g=f.c.fieldset(r||(r=Object(m.a)(["\n    border: 1px solid rgba(0, 0, 0, 0.76);\n    margin: 30px;\n    background-color: ",";\n    margin: 0 auto;\n    align-items: center;\n    justify-content: center;\n    flex-basis: 700px;\n    margin: 20px;\n    padding: 40px;\n    border-radius: 20px;\n}\n  \n@media(max-width: ","px) {\n      max-width: 90%;\n      font-size: 12px; \n}\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobile})),O=f.c.legend(o||(o=Object(m.a)(["\n    border: solid 1px;\n    background-color: ",";\n    color: ",";\n    box-shadow: 1px 1px 17px 0px ",";\n    padding: 10px;\n    font-size: 34px;\n    text-transform: uppercase;\n    margin: auto;\n    align-items: center;\n}\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.boxShadow})),w=f.c.button(c||(c=Object(m.a)(["\n    display: block;\n    margin: auto;\n    border: none;\n    padding: 10px;\n    max-width: 200px;\n    width: 100%;\n    box-shadow: 1px 1px 17px 0px ",";\n    border: none;\n    border-radius: 5px;\n    background-color: ",";\n    color: ",";\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n    &: hover {\n    background-color: ",";\n  }\n  \n    &: active {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.boxShadow}),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.lightTeal}),(function(n){return n.theme.color.activeTeal})),v=f.c.p(a||(a=Object(m.a)(["\ncolor: ",";\n"])),(function(n){return n.theme.color.teal})),k=f.c.p(i||(i=Object(m.a)(["\ncolor: ",";\n"])),(function(n){return n.theme.color.crimson})),y=f.c.p(u||(u=Object(m.a)([" \n    border: 1px solid rgba(0, 0, 0, 0.76);\n    margin: 30px;\n    background-color: ",";\n    margin: 0 auto;\n    align-items: center;\n    justify-content: center;\n    flex-basis: 700px;\n    margin: 20px;\n    padding: 40px;\n    }\n\n@media(max-width: ","px) {\n      max-width: 90%;\n      font-size: 12px;\n}\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobile})),z=f.c.p(s||(s=Object(m.a)([" \n    font-size: 14px;\n    color: ",";\n    }\n\n@media(max-width: ","px) {\n    font-size: 8px;\n}\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.breakpoint.mobile})),S=t(0),C=function(n){var e=n.result;return Object(S.jsx)(y,{children:void 0!==e&&Object(S.jsxs)(S.Fragment,{children:[e.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",Object(S.jsxs)("strong",{children:[e.targetAmount.toFixed(2),"\xa0",e.currency]}),Object(S.jsx)(z,{children:"Kursy walut pobierane s\u0105 z Europejskiego Banku Centralnego na aktualny dzie\u0144."})]})})},F=function(n){var e=n.children;return Object(S.jsx)("main",{children:e})},P=f.c.div(l||(l=Object(m.a)(["\n    font-size: 14px;\n    display: flex;\n    justify-content: flex-end;\n    padding: 20px;\n}\n\n@media(max-width: ","px) {\n      font-size: 12px;\n}\n"])),(function(n){return n.theme.breakpoint.mobile})),T=function(n){return n.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long",year:"numeric"})},E=function(){var n=function(){var n=Object(b.useState)(new Date),e=Object(h.a)(n,2),t=e[0],r=e[1];return Object(b.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t}();return Object(S.jsxs)(P,{children:["Dzisiaj jest"," ",T(n)]})},L=t(8),D=t.n(L),A=function(){var n=Object(b.useState)(),e=Object(h.a)(n,2),t=e[0],r=e[1],o=function(){var n=Object(b.useState)({state:"loading"}),e=Object(h.a)(n,2),t=e[0],r=e[1];return Object(b.useEffect)((function(){setTimeout((function(){D()({method:"GET",url:"https://api.exchangerate.host/latest?base=PLN"}).then((function(n){r({status:n.data.rates?"success":"error",date:n.data.date,rates:n.data.rates})})).catch((function(n){r({state:"error"})}))}),1e3)}),[]),t}(),c=Object(b.useState)("EUR"),a=Object(h.a)(c,2),i=a[0],u=a[1],s=Object(b.useState)(),l=Object(h.a)(s,2),d=l[0],x=l[1];return Object(S.jsxs)("form",{onSubmit:function(n){n.preventDefault(),function(n,e){var t=o.rates[n];r({sourceAmount:+e,targetAmount:e*t,currency:n})}(i,d)},children:[Object(S.jsxs)(g,{children:[Object(S.jsx)(O,{children:"kantor"}),"loading"===o.state?Object(S.jsxs)(v,{children:["Poczekaj chwil\u0119... ",Object(S.jsx)("br",{}),"Pobieram kursy walut z Europejskiego Banku Centralnego \ud83d\ude09"]}):"error"===o.state?Object(S.jsx)(k,{children:"Ups... Co\u015b posz\u0142o nie tak. Sprawd\u017a po\u0142\u0105czenie z internetem \ud83d\ude41"}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(E,{}),Object(S.jsxs)("label",{children:[Object(S.jsx)("span",{children:"Kwota do wymiany (PLN)*\xa0"}),Object(S.jsx)("input",{value:d,onChange:function(n){var e=n.target;return x(e.value)},type:"number",step:"any",placeholder:"Wpisz kwot\u0119...",min:"1",required:!0})]}),Object(S.jsx)("p",{children:Object(S.jsxs)("label",{children:["Wybierz walut\u0119\xa0",Object(S.jsx)("select",{value:i,onChange:function(n){var e=n.target;return u(e.value)},children:Object.keys(o.rates).map((function(n){return Object(S.jsx)("option",{value:n,children:n},n)}))})]})})]})]}),Object(S.jsx)("p",{children:Object(S.jsx)(w,{children:"Policz kurs"})})," Otrzymasz:",Object(S.jsx)(C,{result:t})]})},B={color:{white:"#fff",teal:"hsl(180, 100%, 25%)",lightTeal:"hsl (180, 100%, 30%)",activeTeal:"hsl (180, 100%, 60%)",boxShadow:"hsl(208, 79%, 29%)"},breakpoint:{mobile:767}},I=Object(f.b)(d||(d=Object(m.a)(["\nhtml {\n    box-sizing: border-box;\n  }\n  \n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n  \n  body {\n    background-image: url(https://www.kobiecybialystok.pl/wp-content/uploads/2019/09/poradyprawne.jpg);\n    font-family: 'Montserrat', sans-serif;\n    text-align: center;\n    max-width: 1000px;\n    margin: 20px auto;\n    padding: 10px 10px;\n    font-size: 24px;\n    margin: 0 auto;\n  }\n"])));var N=function(){return Object(S.jsxs)(f.a,{theme:B,children:[Object(S.jsx)(I,{}),Object(S.jsx)(F,{children:Object(S.jsx)("div",{children:Object(S.jsx)(A,{})})})]})},J=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))};j.a.render(Object(S.jsx)(x.a.StrictMode,{children:Object(S.jsx)(N,{})}),document.getElementById("root")),J()}},[[47,1,2]]]);
//# sourceMappingURL=main.ed310ae0.chunk.js.map