(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{102:function(n,e,t){"use strict";t.r(e);var a=t(1),A=t.n(a),r=t(15),i=t.n(r),c=t(16),s=t.n(c),d=t(41),m=t(42),l=t(7),b=t(43),g=t.n(b).a.create({baseURL:"https://pokeapi.co/api/v2"}),o=t(0),j=Object(a.createContext)({});function p(n){var e=n.children,t=Object(a.useState)([]),A=Object(l.a)(t,2),r=A[0],i=A[1],c=Object(a.useState)([]),b=Object(l.a)(c,2),p=b[0],u=b[1];function h(){return(h=Object(m.a)(s.a.mark((function n(){var e,t,a,A,r,c,m,l,b,o,j,p,h,x;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get("pokemon?offset=0&limit=100");case 2:e=n.sent,t=e.data.results,a=[],A=Object(d.a)(t),n.prev=6,A.s();case 8:if((r=A.n()).done){n.next=18;break}return c=r.value,n.next=12,g.get(c.url);case 12:m=n.sent,l=m.data,b=l.name,o=l.id,j=l.sprites,p=l.types,h=l.stats,x={name:b,id:o,image:j.other["official-artwork"].front_default,types:p.map((function(n){return n.type.name})),baseStat:h.map((function(n){return n.base_stat})),nameStat:h.map((function(n){return n.stat.name}))},a.push(x);case 16:n.next=8;break;case 18:n.next=23;break;case 20:n.prev=20,n.t0=n.catch(6),A.e(n.t0);case 23:return n.prev=23,A.f(),n.finish(23);case 26:i(a),u(a);case 28:case"end":return n.stop()}}),n,null,[[6,20,23,26]])})))).apply(this,arguments)}return Object(o.jsx)(j.Provider,{value:{pokemons:p,getPokemonsList:function(){return h.apply(this,arguments)},searchPokemon:function(n){if(n)try{var e=p.filter((function(e){return e.name.includes(n)}));return void u(e)}catch(t){return void console.log(t)}else u(r)}},children:e})}var u,h,x,O=function(){return Object(a.useContext)(j)},v=t(44),k=t(45),I=t.n(k),S=t(3),Z=t(2),V=t(4),W=Z.c.div(u||(u=Object(S.a)(["\n  max-height: inherit;\n  text-align: center;\n  padding: 1.5rem;\n  background: var(--background);\n  border-radius: 20px;\n  text-transform: capitalize;\n\n  ","\n\n  strong {\n    display: inline-block;\n    margin: 10px 0;\n  }\n"])),V.a.lessThan("small")(h||(h=Object(S.a)(["\n      line-height: 1.5rem;\n      \n      margin-top: -1.5rem;\n      max-height: 39rem;\n  "])))),L=Z.c.span(x||(x=Object(S.a)(["\n  display: block;\n  width: ","%;\n  height: 1rem;\n  background: #62B957;\n\n"])),(function(n){return n.statsPercentage<100?n.statsPercentage:100}));function z(n){var e=n.name,t=n.image,a=n.types,A=n.nameStat,r=n.baseStat,i=n.isOpen,c=n.onRequestClose;return Object(o.jsxs)(I.a,{isOpen:i,onRequestClose:c,overlayClassName:"react-modal-overlay",className:"react-modal-content",ariaHideApp:!1,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e}),a.map((function(n){return Object(o.jsx)("h4",{children:n},n)})),Object(o.jsx)("img",{src:t,alt:"Imagem do pokemon"})]}),Object(o.jsxs)(W,{children:[Object(o.jsx)("h3",{children:"Stats"}),Object(o.jsx)("strong",{children:A[0]}),Object(o.jsx)(L,{statsPercentage:r[0]}),Object(o.jsx)("p",{children:r[0]}),Object(o.jsx)("strong",{children:A[1]}),Object(o.jsx)(L,{statsPercentage:r[1]}),Object(o.jsx)("p",{children:r[1]}),Object(o.jsx)("strong",{children:A[2]}),Object(o.jsx)(L,{statsPercentage:r[2]}),Object(o.jsx)("p",{children:r[2]}),Object(o.jsx)("strong",{children:A[3]}),Object(o.jsx)(L,{statsPercentage:r[3]}),Object(o.jsx)("p",{children:r[3]}),Object(o.jsx)("strong",{children:A[4]}),Object(o.jsx)(L,{statsPercentage:r[4]}),Object(o.jsx)("p",{children:r[4]}),Object(o.jsx)("strong",{children:A[5]}),Object(o.jsx)(L,{statsPercentage:r[5]}),Object(o.jsx)("p",{children:r[5]})]})]})}var B,Y,w,f,M,G=t.p+"static/media/pokeBg.53f9d34d.png",y=Z.c.div(B||(B=Object(S.a)(["\n  width: inherit;\n  padding: 1.5rem;\n  border-radius: 20px;\n  display: flex;\n  justify-content: space-between;\n\n  cursor: pointer;\n  transition: filter 0.2s;\n\n  background-color: ",";\n\n  \n\n  &:hover {\n    filter: brightness(0.9);\n  }\n\n  p {\n    max-width: 5rem;\n    text-align: center;\n    border: 1px solid ;\n    border-radius: 40px;\n\n    & + p {\n      margin-top: 10px;\n    }\n  }\n  \n  h2 {\n    text-transform: capitalize;\n    min-width: 12.5rem;\n    margin-bottom: 1rem;\n  }\n \n  .pokeBg {\n    width: 150px;\n    height: 150px;\n    margin-right: -9rem;\n\n    ","\n\n    ","\n  }\n\n  .pokeImg {  \n    width: 140px;\n    height: 140px;\n    margin-top: -10rem;\n\n    ","\n\n    ","\n  }\n"])),(function(n){return"#2b272c"!==n.dominantColorPokeImg?n.dominantColorPokeImg:"#777"}),V.a.lessThan("large")(Y||(Y=Object(S.a)(["\n      margin-right: -9rem;\n    "]))),V.a.lessThan("small")(w||(w=Object(S.a)(["\n      margin-bottom: -2rem;\n    "]))),V.a.lessThan("large")(f||(f=Object(S.a)(["\n      margin-left: -1rem;\n      \n    "]))),V.a.lessThan("small")(M||(M=Object(S.a)(["\n      margin-left: 0.5rem;\n    "]))));function N(n){var e=n.name,t=n.id,A=n.image,r=n.types,i=n.nameStat,c=n.baseStat,s=Object(a.useState)(!1),d=Object(l.a)(s,2),m=d[0],b=d[1],g=Object(v.useColor)(A,"hex",{crossOrigin:"CanvasRenderingContext2D"}).data;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(y,{onClick:function(){b(!0)},dominantColorPokeImg:g,children:[Object(o.jsxs)("div",{className:"cardInfo",children:[Object(o.jsxs)("span",{children:["#",t]}),Object(o.jsx)("h2",{children:e}),r.map((function(n){return Object(o.jsx)("p",{children:n},n)}))]}),Object(o.jsxs)("div",{className:"cardImgs",children:[Object(o.jsx)("img",{className:"pokeBg",src:G,alt:"Imagem da pokeball de background"}),Object(o.jsx)("img",{className:"pokeImg",src:A,alt:"Imagem do pokemon ".concat(e)})]})]}),Object(o.jsx)(z,{name:e,image:A,types:r,nameStat:i,baseStat:c,isOpen:m,onRequestClose:function(){b(!1)}})]})}var D,R,J,P,Q=t.p+"static/media/pokemonLogo.3a5b1bd5.png",U=Z.c.div(D||(D=Object(S.a)(["\n  margin-top: 20px;\n  text-align: center;\n  \n  img{ \n  width: 20rem;\n \n\n  }\n"])));function C(){return Object(o.jsx)(U,{children:Object(o.jsx)("img",{src:Q,alt:""})})}var T,X=Z.c.div(R||(R=Object(S.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 30px;\n  \n  padding: 100px;\n  \n  ",";\n \n  ","\n \n  \n"])),V.a.lessThan("huge")(J||(J=Object(S.a)(["\n    grid-template-columns: repeat(2, 1fr);\n    \n  "]))),V.a.lessThan("large")(P||(P=Object(S.a)(["\n    grid-template-columns: 1fr;\n    padding: 0.5rem;\n  "])))),E=Z.c.div(T||(T=Object(S.a)(["\n  margin: 0 2rem;\n  padding: 0 3rem;\n  text-align: center;\n\n  input {\n    width: 100%;\n    max-width: 720px;\n    height: 100%;\n\n    text-align: center;\n\n    padding: 0 0.5rem;\n  \n    font-size: 1.22rem;\n\n    border-radius: 8px;\n  }\n\n  img {\n    margin-left: -1.8rem;\n    margin-bottom: -5px;\n  }\n"])));function F(){var n=Object(a.useState)(!1),e=Object(l.a)(n,2),t=e[0],A=e[1],r=O().searchPokemon;return Object(o.jsxs)(E,{children:[Object(o.jsx)("input",{type:"text",placeholder:t?"":"Search a pok\xe9mon",onChange:function(n){var e=n.target;(e.value.length>1||!e.value)&&r(e.value.toLocaleLowerCase())},onFocus:function(){A(!0)},onBlur:function(){A(!1)}}),Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAABHNCSVQICAgIfAhkiAAAAWVJREFUOE+dlA1Rw0AQhakCQAFFATigKIAqoCgAFIADwEGqABy0VQASWgdFAbzvZrdzc38J2Zk3Se42X/bt3WVy1B8LpdxIl9JU2kvf0qe0tOcDZdLgAXiVZo0c4PcGD2k1ILCVdNJvIGQA7WpAIF9mz3lYezOrzN9KL9JZ9MFr3a9LFZL4bIk/ZpmepQF4LV3YxFbX8xKQvhxb0pNVVuCFIaCAPH+eArHyEVU3pIe04sHeWabA2O7G7Naq8/GZblhAYtMCvivhsY9mH60CAbD3wtcGVhi3KaswLh/oqcQitaLT5F2th4xvJd9fHK95g8YBYM96ZKvMRLxqPFMBJyEN3LAjfCfsdD9NF4VJGsyX46BqqnX7wFAc2UmpwQrFZUPZWR4LwyY7g+pDYLkF46fQSQv6I11JQDjbQOI2HIC84MseewEG6F9Bhb+FN0bB3DLl+y+IsdEwB7JFsE2PuA45v9U2/AHqg0o2mmARugAAAABJRU5ErkJggg==",alt:"Lupa"})]})}var q,H,K,_,$=t.p+"static/media/pokeball.7683993b.png",nn=Z.c.header(q||(q=Object(S.a)(["\n  width: 100%;\n  display: flex;\n  text-align: center;\n  .headerImg {\n    width: 98.9vw;\n  }\n\n  .pokeballImg {\n    align-self: center;\n    width: 100%;\n    max-width: 5rem;\n    height: 100%;\n    max-height: 5rem;\n\n    margin-left: -52.5vw;\n\n    ","\n  }\n"])),V.a.lessThan("small")(H||(H=Object(S.a)(["\n      margin-left: -15.5rem;\n    "]))));function en(){return Object(o.jsxs)(nn,{children:[Object(o.jsx)("img",{className:"headerImg",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABVYAAABkCAYAAABts2sTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJlmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYTg3MzFiOSwgMjAyMS8wOS8wOS0wMDozNzozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTExLTEwVDA4OjM2OjQ1LTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTExLTEwVDA4OjM4OjU1LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMS0xMFQwODozODo1NS0wMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Y2FlNmRmMmMtY2RjNC0wMTQxLTgxMzAtY2Y2NzkzM2VlZWVmIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NDdjZTM2MTEtNDc3NS0zODRmLThiMTAtZDc2ZGEzYjZiY2I2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZjQzNTBlMWYtMWIwOS00ZTY3LTlhOTYtOTNmZWM3NzgxOTliIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB0aWZmOk9yaWVudGF0aW9uPSIxIiB0aWZmOlhSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpDb2xvclNwYWNlPSI2NTUzNSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEzNjYiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIxMDAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY0MzUwZTFmLTFiMDktNGU2Ny05YTk2LTkzZmVjNzc4MTk5YiIgc3RFdnQ6d2hlbj0iMjAyMS0xMS0xMFQwODozNjo0NS0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjhkNDRmYjZjLWQ5ZjctYzY0ZS04NGU2LWEwNGRmMTIxOGQ0YSIgc3RFdnQ6d2hlbj0iMjAyMS0xMS0xMFQwODozODo1NS0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gZG9jdW1lbnQvdm5kLmFkb2JlLmNwc2QrZGN4IHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gZG9jdW1lbnQvdm5kLmFkb2JlLmNwc2QrZGN4IHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Y2FlNmRmMmMtY2RjNC0wMTQxLTgxMzAtY2Y2NzkzM2VlZWVmIiBzdEV2dDp3aGVuPSIyMDIxLTExLTEwVDA4OjM4OjU1LTAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhkNDRmYjZjLWQ5ZjctYzY0ZS04NGU2LWEwNGRmMTIxOGQ0YSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM1MGUxZi0xYjA5LTRlNjctOWE5Ni05M2ZlYzc3ODE5OWIiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM1MGUxZi0xYjA5LTRlNjctOWE5Ni05M2ZlYzc3ODE5OWIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5tLKJKAAAPHElEQVR4nO3dbYxcZ3kG4Puc2fXaG2MWx4rwh0C0ijcFVBXWlSAx2K4cJ0IRaVEIH1HiAIIqalUkKn5UbUX7C1G1UkWV/ihVITE0xYFUSopaRYRSBCVqRSq+0gJNk5bEEBHsJtDY2Lsz/bEz9vF4be84O3vOzF6XNDpnZo/PPDOzO/vuPY/ft8jSivPcDgAATdYZ8HjjXgAABtVJFgeSBpPAavO+A8BKO1+g2rvd7x6g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",alt:""}),Object(o.jsx)("img",{className:"pokeballImg",src:$,alt:""})]})}function tn(){var n=O(),e=n.getPokemonsList,t=n.pokemons;return Object(a.useEffect)((function(){e()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(en,{}),Object(o.jsx)(C,{}),Object(o.jsx)(F,{}),Object(o.jsx)(X,{children:t.map((function(n){return Object(o.jsx)(N,{id:n.id,name:n.name,image:n.image,types:n.types,baseStat:n.baseStat,nameStat:n.nameStat},n.name)}))})]})}var an=Object(Z.a)(K||(K=Object(S.a)(["\n  :root {\n    --background: #f8f2f5;  \n  }\n\n  * { \n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    @media (max-width: 1080px) {\n      font-size: 93.75%;\n    }\n    @media (max-width: 720px) {\n      font-size: 87.5%;\n    }\n  }\n\n  body {\n    background: #333;\n    -webkit-font-smoothing: antialiased;\n  }\n  \n  body, input, textarea, button {\n      font-family: 'Poppins', sans-serif;\n      font-weight: 400;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  [disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n\n  .react-modal-overlay {\n    background: rgba(0, 0, 0, 0.9);\n\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;  \n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .react-modal-content {\n    width: 100%;\n    height: 100%;\n    max-width: 60rem;\n    max-height: 41rem;\n\n    background: #a9a9a9;\n\n    padding: 2rem;\n    position: relative;\n    border-radius: 0.5rem;\n\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n\n  \n    h2 {\n      text-transform: capitalize;\n      margin-left:-5px;\n      margin-right: 10px;\n      margin-bottom: 5px;\n      font-size: 2.3rem;\n    }\n\n    h4 {\n      font-weight: 400;\n      text-align: center;\n      width: 5rem;\n      border: 1px solid;\n      border-radius: 40px;\n\n      & + h4 {\n        margin-top: 10px;\n      }\n    }\n\n    img {\n      max-width: 25rem;\n\n      ",";\n    }\n  }\n\n"])),V.a.lessThan("medium")(_||(_=Object(S.a)(["\n        width: 100%;\n    \n      "]))));function An(){return Object(o.jsxs)(p,{children:[Object(o.jsx)(tn,{}),Object(o.jsx)(an,{})]})}i.a.render(Object(o.jsx)(A.a.StrictMode,{children:Object(o.jsx)(An,{})}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.f16dc21b.chunk.js.map