(this["webpackJsonpshopify-challenge"]=this["webpackJsonpshopify-challenge"]||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rfilter.47b3ff8a.png"},70:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/sfilter.4779ca1a.png"},71:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bg.ca729135.jpg"},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n(0),a=n.n(o),r=n(15),s=n.n(r),c=n(4),l=n(5),u=n(8),d=n(7),p=n(3),h=n(6),m="SEARCH",j="UPDATERESULT",b="UPDATENOMINATION",f="REMOVENOMINATION",v="CAROUSELNEXT",O="CAROUSELPREV",g="UPDATENOMIMGDATA",x="REQUESTNOMIMGDATA",y=n(81),_=n(21),C=n.n(_),N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).width=window.innerWidth,i.fSize=.07*i.width-.005*i.width*((i.width-300)/100),i.makeRequest=i.makeRequest.bind(Object(p.a)(i)),i.handleChange=i.handleChange.bind(Object(p.a)(i)),i}return Object(l.a)(n,[{key:"makeRequest",value:function(){console.log(this.props.input),this.props.dispatchMakeRequest(this.props.input)}},{key:"handleChange",value:function(e){this.props.dispatchHandleChange(e.target.value)}},{key:"comp",value:function(){var e=this;return Object(i.jsx)(y.a,{in:this.props.showCarousel,timeout:1e3,classNames:"search-bar",children:Object(i.jsx)("div",{className:"search-bar",children:Object(i.jsx)(y.a,{in:this.props.showCarousel,timeout:1e3,classNames:"search-bar-field",children:Object(i.jsxs)("div",{className:"search-bar-field",children:[Object(i.jsx)("h2",{style:{fontSize:this.fSize},children:"Search, Pick, Share!"}),Object(i.jsxs)("div",{id:"SearchField",children:[Object(i.jsx)("input",{type:"text",placeholder:"Search..",name:"search",onChange:this.handleChange}),Object(i.jsx)("button",{type:"submit",onClick:function(){e.makeRequest()},children:"Search"})]})]})})})})}},{key:"render",value:function(){return this.comp()}}]),n}(a.a.Component),w=Object(h.b)((function(e){return{input:e.input,showCarousel:e.carousel_state.showCarousel}}),(function(e){return{dispatchMakeRequest:function(t){console.log("dispatchMakeRequest called: "+t);var n="https://www.omdbapi.com/?apikey=9be93168&s="+t;C.a.get(n).catch((function(e){return console.log("Error Get: "+e)})).then((function(e){return e.data})).catch((function(e){return console.log("Error Data: "+e)})).then((function(t){e({type:j,payload:t})}))},dispatchHandleChange:function(t){e(function(e){return{type:m,payload:e}}(t))}}}))(N),S=n(70),I=n(38),k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).core_movie_data={Title:o.props.movie_info.Title,imdbID:o.props.movie_info.imdbID,Poster:o.props.movie_info.Poster},o.handle_nomination=function(){o.props.dispatchNominate(o.core_movie_data)},o.handle_remove_nomination=function(){o.props.dispatchRemoveNomination(o.core_movie_data)},o.SelectableButton=Object(i.jsxs)("button",{className:o.props.parentPanel,onClick:function(){o.handle_nomination()},children:[Object(i.jsx)("img",{src:o.props.movie_info.Poster,alt:"Title: ".concat(o.props.movie_info.Title)}),Object(i.jsx)("img",{className:"filter filter-hover",src:S.default})]}),o.RemovableButton=Object(i.jsxs)("button",{className:o.props.parentPanel,onClick:function(){o.handle_remove_nomination()},children:[Object(i.jsx)("img",{src:o.props.movie_info.Poster,alt:"Title: ".concat(o.props.movie_info.Title)}),Object(i.jsx)("img",{className:"filter filter-active",src:S.default}),Object(i.jsx)("img",{className:"filter filter-hover",src:I.default})]}),o.InactiveButton=Object(i.jsx)("button",{className:o.props.parentPanel,disabled:!0,children:Object(i.jsx)("img",{className:"greyscale",src:o.props.movie_info.Poster,alt:"Title: ".concat(o.props.movie_info.Title)})}),o.AppropriateButton=function(){return o.props.nominations.filter((function(e){return e.imdbID==o.props.movie_info.imdbID})).length>0?o.RemovableButton:o.props.nominations.length>=5?o.InactiveButton:o.SelectableButton},o.handle_nomination=o.handle_nomination.bind(Object(p.a)(o)),o.AppropriateButton=o.AppropriateButton.bind(Object(p.a)(o)),o}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"MovieElement",children:Object(i.jsx)("div",{title:this.props.movie_info.Title,children:Object(i.jsx)(this.AppropriateButton,{})})})}}]),n}(a.a.Component),R=Object(h.b)((function(e){return{nominations:e.nominations}}),(function(e){return{dispatchNominate:function(t){e(function(e){return{type:b,payload:e}}(t))},dispatchRemoveNomination:function(t){e(function(e){return{type:f,payload:e}}(t))}}}))(k),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).Success_Search_Result=function(){return o.props.data.Search.map((function(e){return Object(i.jsx)(R,{parentPanel:"search-result-btn",movie_info:e},"search_"+e.imdbID)}))},o.Success_Search_Result=o.Success_Search_Result.bind(Object(p.a)(o)),o}return Object(l.a)(n,[{key:"render",value:function(){if(null!=this.props.data)return this.props.data.hasOwnProperty("Search")?Object(i.jsx)("div",{className:"search-result",children:Object(i.jsx)("div",{id:"search-result-elements-container",children:Object(i.jsx)(this.Success_Search_Result,{})})}):Object(i.jsx)("div",{className:"search-result",children:Object(i.jsxs)("p",{children:[" ",this.props.data.Error," "]})})}}]),n}(a.a.Component),T=Object(h.b)((function(e){return{data:e.result}}),null)(D),P=n(17),E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).btnSelector=function(e){return Object(i.jsx)(P.a,{variant:"primary",size:"lg",onClick:o.props.dispatchCarouselNext,active:!0,children:"("+o.props.progress.length+"/5) Next"})},o.btnSelector=o.btnSelector.bind(Object(p.a)(o)),o}return Object(l.a)(n,[{key:"render",value:function(){return this.btnSelector(this.props.progress)}}]),n}(a.a.Component),A=Object(h.b)((function(e){return{progress:e.nominations}}),(function(e){return{dispatchCarouselNext:function(){e({type:v})}}}))(E),B=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).btnSelector=function(e){return Object(i.jsx)(P.a,{variant:"primary",size:"lg",onClick:o.props.dispatchCarouselPrev,active:!0,children:"("+o.props.progress.length+"/5) Prev"})},o.btnSelector=o.btnSelector.bind(Object(p.a)(o)),o}return Object(l.a)(n,[{key:"render",value:function(){return this.btnSelector(this.props.progress)}}]),n}(a.a.Component),q=Object(h.b)((function(e){return{progress:e.nominations}}),(function(e){return{dispatchCarouselPrev:function(){e({type:O})}}}))(B),J=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).requestImgJson=function(){return JSON.stringify(o.props.nominations)},o.requestImgGeneration=function(){if(console.log("nom: "+o.props.nominations.toString()+"nom json: "+o.props.nomination_img.json.toString()),o.props.nominations.toString()!=o.props.nomination_img.json.toString()){var e=o.requestImgJson();o.props.dispatchDownload(e)}else H(o.props.nomination_img.data)},o.downloadBtn=Object(i.jsx)(P.a,{onClick:function(){o.requestImgGeneration()},variant:"primary",size:"lg",active:!0,children:"Download"}),o.loadingBtn=Object(i.jsxs)(P.a,{className:"rel transparent-font",variant:"primary",size:"lg",disabled:!0,children:["Download",Object(i.jsx)("div",{className:"lds-dual-ring"})]}),o.requestImgJson=o.requestImgJson.bind(Object(p.a)(o)),o.requestImgGeneration=o.requestImgGeneration.bind(Object(p.a)(o)),o}return Object(l.a)(n,[{key:"render",value:function(){return this.props.awaiting?this.loadingBtn:this.downloadBtn}}]),n}(a.a.Component);function H(e){var t="data:image/jpeg;base64, ";t+=e;var n=document.createElement("a");n.href=t,n.download="result.jpeg",document.body.appendChild(n),n.click(),document.body.removeChild(n)}var M=Object(h.b)((function(e){return{nominations:e.nominations,nomination_img:e.nomination_img_meta,awaiting:e.awaiting_nomination_img}}),(function(e){return{dispatchDownload:function(t){e({type:x});C.a.post("https://nod4m44snb.execute-api.us-east-2.amazonaws.com/production/nominationImage/generate",{data:t}).then((function(t){var n;return console.log(t),e((n=t.data,{type:g,payload:n})),t.data.img})).then((function(e){H(e)}))}}}))(J),z=n(29),U=n(71),F=n(38),L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).handle_remove_nomination=function(e){o.props.dispatchRemoveNomination(e)},o.nominated_element=function(e,t){var n=13+17*t,a={padding:"0px",position:"absolute",width:"21%",height:"17%",left:"0px",top:n+"%",zIndex:5},r={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",width:"79%",height:"17%",left:"21%",top:n+"%"},s=Object(i.jsxs)("button",{style:a,className:"nomination-list-btn",onClick:function(){o.handle_remove_nomination(e)},children:[Object(i.jsx)("img",{src:e.Poster,alt:e.Title}),Object(i.jsx)("img",{className:"filter filter-hover",src:F.default})]}),c=Object(i.jsx)("div",{className:"nomination-list-text",style:r,children:Object(i.jsx)("p",{children:e.Title})});return Object(i.jsxs)("div",{className:"nomination-elements-container",children:[s,c]},"nomination_"+e.imdbID)},o.handle_remove_nomination=o.handle_remove_nomination.bind(Object(p.a)(o)),o.nominated_element=o.nominated_element.bind(Object(p.a)(o)),o}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{id:"NominationList",children:Object(i.jsxs)("div",{id:"preview-container",children:[Object(i.jsx)("img",{id:"bg",src:U.default}),this.props.nominations.map((function(t,n){return e.nominated_element(t,n)}))]})})}}]),n}(a.a.Component),G=Object(h.b)((function(e){return{nominations:e.nominations}}),(function(e){return{dispatchRemoveNomination:function(t){e(function(e){return{type:f,payload:e}}(t))}}}))(L),Q=n(23),K=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(y.a,{in:this.props.showCarousel,timeout:1e3,classNames:"main-content",children:Object(i.jsx)("div",{className:"main-content",children:Object(i.jsxs)(Q.a,{controls:!1,activeIndex:this.props.index,interval:null,indicators:!1,slide:this.props.animate,children:[Object(i.jsx)(Q.a.Item,{children:Object(i.jsxs)("div",{id:"search-result-container",children:[Object(i.jsxs)("div",{className:"page-header",children:[Object(i.jsx)("h2",{children:"Search Results"}),Object(i.jsx)(A,{})]}),Object(i.jsx)(T,{})]})}),Object(i.jsx)(Q.a.Item,{children:Object(i.jsxs)("div",{id:"nomination-list-container",children:[Object(i.jsxs)("div",{className:"page-header",children:[Object(i.jsx)("h2",{children:"Your Nominations"}),Object(i.jsxs)("div",{children:[Object(i.jsx)(q,{}),Object(i.jsx)(M,{})]})]}),Object(i.jsx)(G,{})]})})]})})})}}]),n}(a.a.Component),V=Object(h.b)((function(e){return{index:e.carousel_state.index,animate:e.carousel_state.animate,showCarousel:e.carousel_state.showCarousel}}),null)(K),W=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).HistoryDisplay=function(){if(o.props.history.length>0)return o.props.history.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(R,{parentPanel:"history-list-btn",movie_info:e})},e.imdbID)}));var e=localStorage.getItem("recent_nominations");return null!=e?JSON.parse(e).map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(R,{parentPanel:"history-list-btn",movie_info:e})},e.imdbID)})):Object(i.jsx)("br",{})},o.HistoryDisplay=o.HistoryDisplay.bind(Object(p.a)(o)),o}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{id:"HistoryList",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Recent Nominations"}),Object(i.jsx)("ul",{children:Object(i.jsx)(this.HistoryDisplay,{})})]})})}}]),n}(a.a.Component),X=Object(h.b)((function(e){return{history:e.history}}),null)(W),Y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"main",children:[Object(i.jsx)(w,{}),Object(i.jsx)(V,{}),Object(i.jsx)(X,{})]})}}]),n}(a.a.Component),Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),o(e),a(e),r(e)}))},$=n(18),ee=Object($.b)({input:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.payload;default:return e}},result:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:console.log("Search event: update search ".concat(JSON.stringify(t.payload)));var n=t.payload;return n;default:return e}},nominations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:console.log("Nominate event: nominated ".concat(t.payload.Title));var n=t.payload,i=e.filter((function(e){return e.imdbID==n.imdbID}));if(0==i.length){var o=[].concat(Object(z.a)(e),[n]);return o}return e;case f:console.log("Remove event: removal target ".concat(t.payload.Title));var a=e.indexOf(t.payload);if(-1!=a){var r=Object(z.a)(e);return r.splice(a,1),r}return e;default:return e}},history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:console.log("History event: update history ".concat(t.payload));var n=localStorage.getItem("recent_nominations"),i=e,o=t.payload;if(null!=n&&(console.log("History event: storage not null"),i=JSON.parse(n)),i.length>5){var a=i.length;i=i.slice(a-5,a-1)}var r=i.filter((function(e){return e.imdbID==o.imdbID}));return 0==r.length&&(5==i.length&&(i=i.slice(1,5)),i.push(o),localStorage.setItem("recent_nominations",JSON.stringify(i)),console.log("History event: history updated ".concat(i))),i;default:return e}},carousel_state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{index:0,animate:!0,showCarousel:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return console.log("Carousel event: next"),{index:1,animate:!0,showCarousel:!0};case O:return console.log("Carousel event: prev"),{index:0,animate:!0,showCarousel:!0};case b:return e.showCarousel?e:{index:1,animate:!0,showCarousel:!0};case j:return{index:0,animate:!0,showCarousel:!0};default:return e}},nomination_img_meta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:"",json:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{data:t.payload.img,json:t.payload.event};default:return e}},awaiting_nomination_img:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return!0;case g:return!1;default:return e}}}),te=(n(72),n(73),n(74),n(75),n(76),n(77),n(78),n(79),Object($.c)(ee));s.a.render(Object(i.jsxs)(h.a,{store:te,children:[Object(i.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossOrigin:"anonymous"}),Object(i.jsx)(Y,{})]}),document.getElementById("root")),Z()}},[[80,1,2]]]);
//# sourceMappingURL=main.c85d1a67.chunk.js.map