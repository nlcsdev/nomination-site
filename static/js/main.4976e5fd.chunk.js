(this["webpackJsonpshopify-challenge"]=this["webpackJsonpshopify-challenge"]||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rfilter.47b3ff8a.png"},70:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/sfilter.4779ca1a.png"},71:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg.ca729135.jpg"},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),r=n.n(a),o=n(15),s=n.n(o),c=n(4),l=n(5),u=n(8),d=n(7),h=n(2),p=n(6),m="SEARCH",j="UPDATERESULT",b="UPDATENOMINATION",f="REMOVENOMINATION",O="CAROUSELNEXT",v="CAROUSELPREV",g="UPDATENOMIMGDATA",x="REQUESTNOMIMGDATA",y=n(81),_=n(22),C=n.n(_),N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).makeRequest=i.makeRequest.bind(Object(h.a)(i)),i.handleChange=i.handleChange.bind(Object(h.a)(i)),i}return Object(l.a)(n,[{key:"makeRequest",value:function(){this.props.dispatchMakeRequest(this.props.input)}},{key:"handleChange",value:function(e){this.props.dispatchHandleChange(e.target.value)}},{key:"comp",value:function(){var e=this;return Object(i.jsx)(y.a,{in:this.props.showCarousel,timeout:1e3,classNames:"search-bar",children:Object(i.jsx)("div",{className:"search-bar",children:Object(i.jsx)(y.a,{in:this.props.showCarousel,timeout:1e3,classNames:"search-bar-field",children:Object(i.jsxs)("div",{className:"search-bar-field",children:[Object(i.jsx)("h2",{children:"Search Here!"}),Object(i.jsxs)("div",{id:"SearchField",children:[Object(i.jsx)("input",{type:"text",placeholder:"Search..",name:"search",onChange:this.handleChange}),Object(i.jsx)("button",{type:"submit",onClick:function(){e.makeRequest()},children:"Search"})]})]})})})})}},{key:"render",value:function(){return this.comp()}}]),n}(r.a.Component),I=Object(p.b)((function(e){return{input:e.input,showCarousel:e.carousel_state.showCarousel}}),(function(e){return{dispatchMakeRequest:function(t){var n="https://nlcsdev-proxy.herokuapp.com/search?i="+t;C.a.get(n).catch((function(e){return console.log("Error Get: "+e)})).then((function(t){var n;e((n=t.data,{type:j,payload:n}))}))},dispatchHandleChange:function(t){e(function(e){return{type:m,payload:e}}(t))}}}))(N),w=n(70),S=n(38),k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).core_movie_data={Title:a.props.movie_info.Title,imdbID:a.props.movie_info.imdbID,Poster:a.props.movie_info.Poster},a.handle_nomination=function(){a.props.dispatchNominate(a.core_movie_data)},a.handle_remove_nomination=function(){console.log("Removal Handler Called: ".concat(a.core_movie_data.Title)),a.props.dispatchRemoveNomination(a.core_movie_data)},a.SelectableButton=Object(i.jsxs)("button",{className:a.props.parentPanel,onClick:function(){a.handle_nomination()},children:[Object(i.jsx)("img",{src:a.props.movie_info.Poster,alt:"Title: ".concat(a.props.movie_info.Title)}),Object(i.jsx)("img",{className:"filter filter-hover",src:w.default})]}),a.RemovableButton=Object(i.jsxs)("button",{className:a.props.parentPanel,onClick:function(){a.handle_remove_nomination()},children:[Object(i.jsx)("img",{src:a.props.movie_info.Poster,alt:"Title: ".concat(a.props.movie_info.Title)}),Object(i.jsx)("img",{className:"filter filter-active",src:w.default}),Object(i.jsx)("img",{className:"filter filter-hover",src:S.default})]}),a.InactiveButton=Object(i.jsx)("button",{className:a.props.parentPanel,disabled:!0,children:Object(i.jsx)("img",{className:"greyscale",src:a.props.movie_info.Poster,alt:"Title: ".concat(a.props.movie_info.Title)})}),a.AppropriateButton=function(){return a.props.nominations.filter((function(e){return e.imdbID==a.props.movie_info.imdbID})).length>0?a.RemovableButton:a.props.nominations.length>=5?a.InactiveButton:a.SelectableButton},a.handle_nomination=a.handle_nomination.bind(Object(h.a)(a)),a.handle_remove_nomination=a.handle_remove_nomination.bind(Object(h.a)(a)),a.AppropriateButton=a.AppropriateButton.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"MovieElement",children:Object(i.jsx)("div",{title:this.props.movie_info.Title,children:Object(i.jsx)(this.AppropriateButton,{})})})}}]),n}(r.a.Component),R=Object(p.b)((function(e){return{nominations:e.nominations}}),(function(e){return{dispatchNominate:function(t){e(function(e){return{type:b,payload:e}}(t))},dispatchRemoveNomination:function(t){e(function(e){return{type:f,payload:e}}(t))}}}))(k),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).Success_Search_Result=function(){return a.props.data.Search.map((function(e){return Object(i.jsx)(R,{parentPanel:"search-result-btn",movie_info:e},"search_"+e.imdbID)}))},a.Success_Search_Result=a.Success_Search_Result.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){if(null!=this.props.data)return this.props.data.hasOwnProperty("Search")?Object(i.jsx)("div",{className:"search-result",children:Object(i.jsx)("div",{id:"search-result-elements-container",children:Object(i.jsx)(this.Success_Search_Result,{})})}):Object(i.jsx)("div",{className:"search-result",children:Object(i.jsxs)("p",{children:[" ",this.props.data.Error," "]})})}}]),n}(r.a.Component),T=Object(p.b)((function(e){return{data:e.result}}),null)(D),P=n(17),E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).btnSelector=function(e){return Object(i.jsx)(P.a,{variant:"primary",size:"lg",onClick:a.props.dispatchCarouselNext,active:!0,children:"("+a.props.progress.length+"/5) Next"})},a.btnSelector=a.btnSelector.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){return this.btnSelector(this.props.progress)}}]),n}(r.a.Component),A=Object(p.b)((function(e){return{progress:e.nominations}}),(function(e){return{dispatchCarouselNext:function(){e({type:O})}}}))(E),B=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).btnSelector=function(e){return Object(i.jsx)(P.a,{variant:"primary",size:"lg",onClick:a.props.dispatchCarouselPrev,active:!0,children:"("+a.props.progress.length+"/5) Prev"})},a.btnSelector=a.btnSelector.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){return this.btnSelector(this.props.progress)}}]),n}(r.a.Component),q=Object(p.b)((function(e){return{progress:e.nominations}}),(function(e){return{dispatchCarouselPrev:function(){e({type:v})}}}))(B),J=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).requestImgJson=function(){return JSON.stringify(a.props.nominations)},a.requestImgGeneration=function(){if(a.props.nominations.toString()!=a.props.nomination_img.json.toString()){var e=a.requestImgJson();a.props.dispatchDownload(e)}else H(a.props.nomination_img.data)},a.downloadBtn=Object(i.jsx)(P.a,{onClick:function(){a.requestImgGeneration()},variant:"primary",size:"lg",active:!0,children:"Download"}),a.loadingBtn=Object(i.jsxs)(P.a,{className:"rel transparent-font",variant:"primary",size:"lg",disabled:!0,children:["Download",Object(i.jsx)("div",{className:"lds-dual-ring"})]}),a.requestImgJson=a.requestImgJson.bind(Object(h.a)(a)),a.requestImgGeneration=a.requestImgGeneration.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){return this.props.awaiting?this.loadingBtn:this.downloadBtn}}]),n}(r.a.Component);function H(e){var t="data:image/jpeg;base64, ";t+=e;var n=document.createElement("a");n.href=t,n.download="result.jpeg",document.body.appendChild(n),n.click(),document.body.removeChild(n)}var M=Object(p.b)((function(e){return{nominations:e.nominations,nomination_img:e.nomination_img_meta,awaiting:e.awaiting_nomination_img}}),(function(e){return{dispatchDownload:function(t){e({type:x});C.a.post("https://nod4m44snb.execute-api.us-east-2.amazonaws.com/production/nominationImage/generate",{data:t}).then((function(t){var n;return e((n=t.data,{type:g,payload:n})),t.data.img})).then((function(e){H(e)}))}}}))(J),U=n(20),z=n(71),G=n(38),L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handle_remove_nomination=function(e){a.props.dispatchRemoveNomination(e)},a.nominated_element=function(e,t){var n=13+17*t,r={padding:"0px",position:"absolute",width:"21%",height:"17%",left:"0px",top:n+"%",zIndex:5},o={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",width:"79%",height:"17%",left:"21%",top:n+"%"},s=Object(i.jsxs)("button",{style:r,className:"nomination-list-btn",onClick:function(){a.handle_remove_nomination(e)},children:[Object(i.jsx)("img",{src:e.Poster,alt:e.Title}),Object(i.jsx)("img",{className:"filter filter-hover",src:G.default})]}),c=Object(i.jsx)("div",{className:"nomination-list-text",style:o,children:Object(i.jsx)("p",{children:e.Title})});return Object(i.jsxs)("div",{className:"nomination-elements-container",children:[s,c]},"nomination_"+e.imdbID)},a.handle_remove_nomination=a.handle_remove_nomination.bind(Object(h.a)(a)),a.nominated_element=a.nominated_element.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{id:"NominationList",children:Object(i.jsxs)("div",{id:"preview-container",children:[Object(i.jsx)("img",{id:"bg",src:z.default}),this.props.nominations.map((function(t,n){return e.nominated_element(t,n)}))]})})}}]),n}(r.a.Component),Q=Object(p.b)((function(e){return{nominations:e.nominations}}),(function(e){return{dispatchRemoveNomination:function(t){e(function(e){return{type:f,payload:e}}(t))}}}))(L),F=n(24),K=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(y.a,{in:this.props.showCarousel,timeout:1e3,classNames:"main-content",children:Object(i.jsx)("div",{className:"main-content",children:Object(i.jsxs)(F.a,{controls:!1,activeIndex:this.props.index,interval:null,indicators:!1,slide:this.props.animate,children:[Object(i.jsx)(F.a.Item,{children:Object(i.jsxs)("div",{id:"search-result-container",children:[Object(i.jsxs)("div",{className:"page-header",children:[Object(i.jsx)("h2",{children:"Search Results"}),Object(i.jsx)(A,{})]}),Object(i.jsx)(T,{})]})}),Object(i.jsx)(F.a.Item,{children:Object(i.jsxs)("div",{id:"nomination-list-container",children:[Object(i.jsxs)("div",{className:"page-header",children:[Object(i.jsx)("h2",{children:"Your Nominations"}),Object(i.jsxs)("div",{children:[Object(i.jsx)(q,{}),Object(i.jsx)(M,{})]})]}),Object(i.jsx)(Q,{})]})})]})})})}}]),n}(r.a.Component),V=Object(p.b)((function(e){return{index:e.carousel_state.index,animate:e.carousel_state.animate,showCarousel:e.carousel_state.showCarousel}}),null)(K),W=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).HistoryDisplay=function(){if(a.props.history.length>0)return a.props.history.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(R,{parentPanel:"history-list-btn",movie_info:e})},e.imdbID)}));var e=localStorage.getItem("recent_nominations");return null!=e?JSON.parse(e).map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(R,{parentPanel:"history-list-btn",movie_info:e})},e.imdbID)})):Object(i.jsx)("br",{})},a.HistoryDisplay=a.HistoryDisplay.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{id:"HistoryList",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Recent Nominations"}),Object(i.jsx)("ul",{children:Object(i.jsx)(this.HistoryDisplay,{})})]})})}}]),n}(r.a.Component),X=Object(p.b)((function(e){return{history:e.history}}),null)(W),Y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"main",children:[Object(i.jsx)(I,{}),Object(i.jsx)(V,{}),Object(i.jsx)(X,{})]})}}]),n}(r.a.Component),Z=n(18),$=Object(Z.b)({input:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.payload;default:return e}},result:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=t.payload;return n;default:return e}},nominations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var n=t.payload,i=e.filter((function(e){return e.imdbID==n.imdbID}));if(0==i.length){var a=[].concat(Object(U.a)(e),[n]);return a}return e;case f:var r=e.findIndex((function(e){return e.imdbID==t.payload.imdbID}));if(-1!=r){var o=Object(U.a)(e);return o.splice(r,1),o}return e;default:return e}},history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var n=localStorage.getItem("recent_nominations"),i=Object(U.a)(e),a=t.payload;if(null!=n&&(i=JSON.parse(n)),i.length>5){var r=i.length;i=i.slice(r-5,r-1)}var o=i.filter((function(e){return e.imdbID==a.imdbID}));return 0==o.length&&(5==i.length&&(i=i.slice(1,5)),i.push(a),localStorage.setItem("recent_nominations",JSON.stringify(i))),i;default:return e}},carousel_state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{index:0,animate:!0,showCarousel:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{index:1,animate:!0,showCarousel:!0};case v:return{index:0,animate:!0,showCarousel:!0};case b:return e.showCarousel?e:{index:1,animate:!0,showCarousel:!0};case j:return{index:0,animate:!0,showCarousel:!0};default:return e}},nomination_img_meta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:"",json:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{data:t.payload.img,json:t.payload.event};default:return e}},awaiting_nomination_img:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return!0;case g:return!1;default:return e}}}),ee=(n(72),n(73),n(74),n(75),n(76),n(77),n(78),n(79),Object(Z.c)($));s.a.render(Object(i.jsxs)(p.a,{store:ee,children:[Object(i.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossOrigin:"anonymous"}),Object(i.jsx)(Y,{})]}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.4976e5fd.chunk.js.map