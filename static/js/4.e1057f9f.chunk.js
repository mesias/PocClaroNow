(this.webpackJsonppoc_claro_now=this.webpackJsonppoc_claro_now||[]).push([[4],{100:function(e,t,a){e.exports=a.p+"static/media/player-remover-1.fb357324.png"},101:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,i=!1,A=void 0;try{for(var o,r=e[Symbol.iterator]();!(n=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(c){i=!0,A=c}finally{try{n||null==r.return||r.return()}finally{if(i)throw A}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.r(t);var A=a(0),o=a.n(A),r=a(61),c={Ano2015:{PanFinalRevezamento4x200:"9xAxYxRv-xw",CampeonatoPiscinaCurta:"790oQi9qQuE",Rio2016Natacao:"KT9U4T89PWg",Ginastica:"KWJ7pkYlLz0",Natacao:"gu2_sFFtT88"},Modalidades:{Esgrima:"2oDLEqi5160",ArcoFeminino:"YAocqs-FzJ4",AtletismoSalto:"_t-W3Vjb7C4",CiclismoIndoor:"RoTydC1j_yU",CiclismoBmx:"5k3wx7TJunQ",GinasticaRitmica:"KWJ7pkYlLz0",GinasticaSalto:"jiYaONGXA0o",LevantamentoPeso:"C076lmr-YWI",Natacao100:"EhT-Kvub2tE",Natacao200:"VOAk0gxIxnw",Corrida100:"0PY56riGBWc",Corrida200:"qCNFeN2oKe4"}},l=(a(89),{espnLogo:a(90),claroNow:a(91),logoNetClaro:a(92),logoOlimpiadas:a(93),playerMosaico:a(94),playerEstatistica:a(95),playerUp:a(96),playerDown:a(97),playerAdd1:a(98),playerAdd2:a(99),playerRem1:a(100)}),m=a(8),s=function(e){var t=[e.open,e.setOpen],a=t[0],n=t[1];return o.a.createElement("section",{className:"container-nav"},o.a.createElement("nav",{className:"navBar"},o.a.createElement("section",{className:"logo-back"},o.a.createElement(m.b,{className:"material-icons icon-left",to:"/home"},"keyboard_arrow_left")),o.a.createElement("h1",{className:"saudacao"},o.a.createElement("img",{src:l.espnLogo,className:"logo-claro logoEspn"}),o.a.createElement("a",{className:"estatisticas"},"BASQUETE: EUA X S\xc9RVIA - AO VIVO")),o.a.createElement("section",{className:"container-logo"},o.a.createElement("img",{src:l.playerEstatistica,className:"logo-estat"}),o.a.createElement("a",{className:"estatisticas"},"ESTAT\xcdSTICAS"),o.a.createElement("span",{onClick:function(){return n(!a)}},o.a.createElement("img",{src:l.playerMosaico,className:"logo-mosaic"}),o.a.createElement("a",{className:"no-ar"},"NO AR"),o.a.createElement("img",{src:a?l.playerUp:l.playerDown,className:"logo-arrow"})))))},d=(a(101),function(e){var t=e.open,a=e.screens,n=e.onImgClick;return console.log("Side",a),o.a.createElement("section",null,t&&o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"container-img ".concat(a>1?"container-img-over":"")},a>1&&o.a.createElement("img",{src:l.playerRem1,onClick:function(){return n(1)}}),o.a.createElement("img",{src:l.playerAdd1,onClick:function(){return n(2)}}),o.a.createElement("img",{src:l.playerAdd2,onClick:function(){return n(3)}}),o.a.createElement("img",{src:l.playerAdd1,onClick:function(){return n(4)}}))))});a(102);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(e){var t=i(Object(A.useState)(!1),2),a=t[0],n=t[1],l=i(Object(A.useState)(1),2),m=l[0],u=l[1],E=[c.Ano2015.PanFinalRevezamento4x200,c.Ano2015.CampeonatoPiscinaCurta,c.Ano2015.Rio2016Natacao],g=E.map((function(e){return o.a.createRef()})),h=window.innerWidth,p=window.innerHeight-function(e){var t=window,a=document,n=a.documentElement,i=a.getElementsByTagName("body")[0],A=t.innerWidth||n.clientWidth||i.clientWidth;t.innerHeight||n.clientHeight||i.clientHeight;return A*e/100}(5.4),R={height:p,width:h,playerVars:{showinfo:0,rel:0,fs:0,autoplay:1,modestbranding:1,enablejsapi:1,origin:"http://localhost:3000"}},y=function(e){};return console.log("SCreens:",m),o.a.createElement("main",{className:"container-main"},o.a.createElement("section",{className:"container-nav"},o.a.createElement(s,{open:a,setOpen:n})),1===m&&o.a.createElement("section",null,o.a.createElement("div",{className:"holder"},o.a.createElement(r.a,{videoId:E[0],id:"mainyoutube",ref:g[0],opts:R,onReady:y}))),2===m&&o.a.createElement("section",null,o.a.createElement("div",{className:"holder-side"},o.a.createElement(r.a,{videoId:E[0],id:"mainyoutube2",ref:g[0],opts:f({},R,{height:p,width:h/2}),onReady:y}),o.a.createElement(r.a,{videoId:E[1],id:"mainyoutube3",ref:g[0],opts:f({},R,{height:p,width:h/2}),onReady:y}))),3===m&&o.a.createElement("section",null,o.a.createElement("div",{className:"holder-side"},o.a.createElement(r.a,{videoId:E[0],id:"mainyoutube2",ref:g[0],opts:f({},R,{height:p/2,width:h/2}),onReady:y}),o.a.createElement(r.a,{videoId:E[1],id:"mainyoutube3",ref:g[0],opts:f({},R,{height:p/2,width:h/2}),onReady:y}),o.a.createElement(r.a,{videoId:E[2],id:"mainyoutube4",ref:g[0],opts:f({},R,{height:p/2,width:h}),onReady:y}))),4===m&&o.a.createElement("section",null,o.a.createElement("div",{className:"holder-side"},o.a.createElement(r.a,{videoId:E[0],id:"mainyoutube5",ref:g[0],opts:f({},R,{height:p/2,width:h/2}),onReady:y}),o.a.createElement(r.a,{videoId:E[1],id:"mainyoutube6",ref:g[0],opts:f({},R,{height:p/2,width:h/2}),onReady:y}),o.a.createElement(r.a,{videoId:E[2],id:"mainyoutube7",ref:g[0],opts:f({},R,{height:p/2,width:h/2}),onReady:y}),o.a.createElement(r.a,{videoId:E[0],id:"mainyoutube8",ref:g[0],opts:f({},R,{height:p/2,width:h/2}),onReady:y}))),o.a.createElement("section",null,o.a.createElement(d,{open:a,screens:m,onImgClick:function(e){console.log("New",e),n(!1),u(e)}})))}},89:function(e,t,a){},90:function(e,t){e.exports="data:image/png;base64,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"},91:function(e,t,a){e.exports=a.p+"static/media/claroNow.97a77e3b.png"},92:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAABrCAIAAACOrBKpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA96SURBVHhe7d17UBVlHwdwZ/qjqdQpNa0hmkydhpyQwWCIwiiULETl0kXwAmlxETUzSsk0TSyzhMAXX29hUaaZt5rMrnSZ0Sgt1Ky8ZA2gooIiXjKtfH8v+90ze9g9y54brPr9/OGcs7/n2V3P2e/us+fsHtoRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERE56dy5c2JiYoJGfHw8akRkZ/fdd995Z2fPnu3atSvKRGRbMTExSK2qsbGxU6dOKBORbfk8vdOmTcMjIvIr36a3sLBQ5lBdXd2hQwdMIiI/MUxv586dUXbHCy+8gFmcP19VVYWpROQn+vQeP368Y8eOKFs2b9489FfV1NR06dIFZSLyOcP0tm/fHmVrnn/+eXR2tn//frQgIp/zPr2vvvoqeuqkpaWhERH5nJfpnTFjBrrppKSkoBER+YP+ag3r6TU56qampqIREfmJx+mdOXMmOugMGzYMjYjIfzxLr8lRd8SIEWhERH7lQXpNznWHDx+ORkTkb+6md+7cuWinM3LkSDQiah0hISGDBw9OTEzs168fJrkjJyenqKioQCWPn3jiCdQuBAMHDkT4VCdPnnR1tcb06dPRSIdHXWolycnJ69evr6mpwaancerUqU2bNk2ePNniXXLSGD1VW7duRe1CEBkZuWXLlm+//XZzk4qKivLycsNjr8lRt7XPddeuXVtXV1erqqysXLhwIWruy8vLO3r0KOZVW3vs2LGkpCTUNA4fPowWNnbkyJGvvvoKa6xRWFhYX1+PRr4mr15ubi6W5E/jx483DK3emTNn3nrrLXRzTV4rdFBJElC7iLi6mkq0wVH366+/xsKdPffcc2jhjlmzZqG/yvBDc9Rsb+fOnVhjjdLSUpT9Q7YPLMk/QkND9+3bh4VZ9u+//5rvVi6F9Cp3DhlqmwHzl19+ieXrvPzyy2hkmfbuCsUFnd4dO3ZgjTVef/11lP1DzqmwJD/Izs4+d+4cluS+jz76CDPSuZTT22bnuibpFZMmTUI7a5he7/kvvSajPutcnc1eIiNn/bdEo0aNQq31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"},93:function(e,t,a){e.exports=a.p+"static/media/logoOlimpiadas.70e18ec5.png"},94:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+2SkUrgu0g4pChioMFURFHrUIRKoRaoVUHk0v/oElDkuLiKLgWHPxZrDq4OOvq4CoIgj8gLq5Oii5S4ndJoUWMdxz38N73vtx9B/jrZaaaHeOAqllGKhEXMtlVIfiKHoRp9mNUYqY+J4pJeI6ve/j4fhfjWd51f45eJWcywCcQzzLdsIg3iKc3LZ3zPnGEFSWF+Jx4zKALEj9yXXb5jXPBYT/PjBjp1DxxhFgotLHcxqxoqMRTxFFF1Sjfn3FZ4bzFWS1XWfOe/IWhnLayzHVaQ0hgEUsQIUBGFSWUYSFGu0aKiRSdxz38g45fJJdMrhIYORZQgQrJ8YP/we/emvnJCTcpFAc6X2z7YxgI7gKNmm1/H9t24wQIPANXWstfqQMzn6TXWlr0COjbBi6uW5q8B1zuAANPumRIjhSg5c/ngfcz+qYsEL4FutfcvjXPcfoApKlXyRvg4BAYKVD2use7u9r79m9Ns38/cxFyp3UBvVgAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfjCxMTFBBEAdD0AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAA5JJREFUWMPNWL1LK0EQ/+3exXj2fqAIaSNop2WE/A+ChZXaW4iFYimSKo2WNmJjoxhSiJa22njRFGlSasBG0RCOy84rHrvZ3O1eLuE9cODI3ezO7G8+dnY2DADhFxHHLyMFaH9/H+12G0SU+gnDEJeXl+Cco1gsotVqDSVPRPB9H3Nzc32gCAC1220ahYQQtLi4SJVKhYQQI+nY3d0liUN5yPM8owuJ7ClGRGCMwfM8eJ4HxthIYRofH1fvblQ5AKytraHRaCiePibp6ekJmUwmFgLGGMrlMs7Pz43y0sDT01MUCoWYwQqQvmCj0YDv+zFLdKVCCMVjjIFzrsbf39/h+77VGCLC19eXktdBuaYQJIXIFkoJUH+Xc0xh18f0NbnJA4N4Jr7+neZd5+mAB9ahpKROQ1I+urDJGMYYeFKIhvHYoHlRMCY9RAQ+aFun4ZmsT9LLGOvLub5KbUM6DAkhwDkfKoy23DJ6SG7hpJDpcowxdLvd1EmfBNA1TXh8fIy5NGpVNpvtG3McR32XSiUcHR3FZPRCOTY2Zgy5KxlhGMJ1/+LLZDJDuV0IgSAIFM9xnD6AgygIgv4cIiJcXV0NlTdSrl6v4/X1FTc3NyOVhe/vb9zd3fX0ygaNc46FhQVMTEykTsYwDFGv19HpdAAAuVwOU1NTqaq+nNNsNvHx8dE7ZiSgYrGInZ0ddWqn2WlhGOL6+hpnZ2eYn5/H8fExpqenBxqi82u1Gg4ODhAEQW/DAKBWq2XsdfRfE08IQblcji4uLoyytm+dtre34/2QdLWtpCfxJicnY54ZZtvrssZtXy6X8fb2BiEEHMeBEKKv/jDGUCqV4DiOaj10qlareHh4UAXT1A9tbW0hn88bCzH95fVoaWmJABBjTD1ynuR3Oh0ViuXlZbq/v1fye3t7al5UTj6VSkXJHx4eqjluUgIn8fXQ2Q7SpPNNl9eL8MjXINmypu0SBrUmiWdZWuW2sbSHs0meD3J1mgL3326uSU35v+4krYCGqRdJTdmoXoxdg2w7weYlCSTqyehNI6rD5uXoOq7J0pOTE3x+fiZ6Q+9nouHe3NzE6uqqtY8mIqysrBhTxDWhLhQKI98sACCfz6sqnKan6rsGyY+Xl5dUbo7Sz88Pms0marWatRDaapZcS78lq/ZjdnYW6+vr1j8dTNTtdnF7e4vn52dks1lsbGxgZmYmdfsiwVSr1Tig30J/AOy7ip6lN0MAAAAAAElFTkSuQmCC"},95:function(e,t){e.exports="data:image/png;base64,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"},96:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+2akUrDq0g4pChOlkQFXHUKhShQqgVWnUwufQPmjQkKS6OgmvBwZ/FqoOLs64OroIg+APi4uqk6CIlfpcUWsR4x3EP733vy913gL9eZqrZMQ6ommWkEnEhk10Vgq/oRZjmALokZupzopiE5/i6h4/vdzGe5V335+hTciYDfALxLNMNi3iDeHrT0jnvE0dYUVKIz4nHDLog8SPXZZffOBcc9vPMiJFOzRNHiIVCG8ttzIqGSjxFHFVUjfL9GZcVzluc1XKVNe/JXxjKaSvLXKc1jAQWsQQRAmRUUUIZFmK0a6SYSNF53MM/5PhFcsnkKoGRYwEVqJAcP/gf/O6tmZ+ccJNCcaDzxbY/RoDgLtCo2fb3sW03ToDAM3CltfyVOjDzSXqtpUWPgP5t4OK6pcl7wOUOMPikS4bkSAFa/nweeD+jb8oC4VugZ83tW/Mcpw9AmnqVvAEODoHRAmWve7y7u71v/9Y0+/cDJfRyiEaKXDoAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfjCxMTFgaC4wcnAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAQpJREFUWMPtlU2OhCAQhavmLF4AboGHkKOod9Qd3ADX6oJ6s6KTth3HkemJmfASQggFfLzih4kIdAN90E1UQApIAfkTEGb+sr3teysIgMP2pc39q5e1qqpHSnLShJxijMG6rmjbFplz/XwQM4OIUNc1lmVBUtd1u3Gp/nWQ5MQ8z9gqOXNy8TwQY8yTE1ttnXkLyBYixoi+7xFCyIW5DiEiaJoGRAStNUIIEJFdmBOpOnc4jyBS0VpjmqarznwflG6HiEBEEGOEtXb3ViilntIkImdhjgOUUhiGAc45eO/hvYe19nCM1hrjOMJ7D+ccnHMv7r24nvPEMzMBeNTlrykgBaSAFJACcmeQT3wFALedVOL/AAAAAElFTkSuQmCC"},97:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+2SkUrgu0g4pChioMFURFHrUIRKoRaoVUHk0v/oElDkuLiKLgWHPxZrDq4OOvq4CoIgj8gLq5Oii5S4ndJoUWMdxz38N73vtx9B/jrZaaaHeOAqllGKhEXMtlVIfiKHoRp9mNUYqY+J4pJeI6ve/j4fhfjWd51f45eJWcywCcQzzLdsIg3iKc3LZ3zPnGEFSWF+Jx4zKALEj9yXXb5jXPBYT/PjBjp1DxxhFgotLHcxqxoqMRTxFFF1Sjfn3FZ4bzFWS1XWfOe/IWhnLayzHVaQ0hgEUsQIUBGFSWUYSFGu0aKiRSdxz38g45fJJdMrhIYORZQgQrJ8YP/we/emvnJCTcpFAc6X2z7YxgI7gKNmm1/H9t24wQIPANXWstfqQMzn6TXWlr0COjbBi6uW5q8B1zuAANPumRIjhSg5c/ngfcz+qYsEL4FutfcvjXPcfoApKlXyRvg4BAYKVD2use7u9r79m9Ns38/cxFyp3UBvVgAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfjCxMTFDaWDFUJAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAVJJREFUWMPt1kGuREAQBuAqXnSvxyyxdwM3cTZLc4RJjKUTcAMSB7BwAf+siDZiejxP5iVdSS90mvqqJAoTEeiLwqIvCwMyIAMyoK8HMfMhiXSfw2eODmYmAOe9smUXltfvMEREPzqJwjCkKIqUvfv9Tl3XTVUvq7dtm+I4JiHEhGnbloqieJsP75aUElmWYRgGjFGWJS6Xi3KOmaeVpikATPc0TQPf96GRj3QOQQiBx+OBeVRVBdd1X1AjZoymaeB5Hpj5OJAOyrIs3G43pZMj5oM8+iBmhhACWZa9oK7Xq9KZYRhQ17Xua9oH2upU3/fKdV3XCIJAKeZQ0PKBa6g5xvf9TxD7OzRPIqVEnuermD2d1wZtVeo4zvRJOACzDZpD1lDjnpQSSZIomK3zmzn/YpbpzKxfzTKdST0/sxdzyrT/tFun/n6YX1gDMiAD+g+gJ/mUIRWCbsAtAAAAAElFTkSuQmCC"},98:function(e,t,a){e.exports=a.p+"static/media/player-adicionar-1.824b371b.png"},99:function(e,t,a){e.exports=a.p+"static/media/player-adicionar-2.2ffa69aa.png"}}]);
//# sourceMappingURL=4.e1057f9f.chunk.js.map