(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{852:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(206),i=n(43),l=n(216),u=n(214),o=n.n(u),s=n(7),d=n(40),f=Object(c.a)({featuredItems:{display:"flex",padding:"0 9%"}});t.default=Object(i.b)(function(e){return{featuredItems:e.collection.items,featuredArticles:e.feed.featuredArticles,tips:e.feed.tips}},function(e){return{initFeaturedArticles:function(){try{d.a.Feeds.getFeaturedArticles().then(function(t){e({type:s.a,payload:t.data.data.rows||[]})}).catch(function(e){})}catch(t){}},initTips:function(){try{d.a.Feeds.getTips().then(function(t){e({type:s.b,payload:t.data.data.rows||[]})}).catch(function(e){})}catch(t){}}}})(Object(l.f)(function(e){var t=f(),n=e.featuredItems,c=e.featuredArticles,i=e.tips,l=e.history;return Object(a.useEffect)(function(){return void 0===c&&e.initFeaturedArticles(),void 0===i&&e.initTips(),function(){}},[c,i]),r.a.createElement("div",null,r.a.createElement("div",null,(c||[]).map(function(e,t){return r.a.createElement("li",{key:t,style:{backgroundImage:"url(".concat(e.sections[0].media[0].url,")"),backgroundSize:"cover",height:390}})})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",{style:{padding:"0 3%",margin:0,display:"flex",flexWrap:"wrap"}},(i||[]).map(function(e,t){return r.a.createElement("li",{key:t,style:{display:"flex",width:"calc(50% - 20px)",backgroundColor:"#f7f7f7",margin:10}},(e.sections[0]||{}).media.length>0&&r.a.createElement("div",{style:{flex:4,height:250,backgroundImage:"url(".concat(e.sections[0].media[0].url,")"),backgroundSize:"cover",backgroundPosition:"center"}}),r.a.createElement("div",{style:{flex:6,display:"flex",flexDirection:"column",padding:25,alignItems:"center",justifyContent:"center"}},r.a.createElement("h5",{style:{margin:0}},e.sections[0].title),r.a.createElement("p",null,o()(e.sections[0].description))))})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:t.featuredItems},n.map(function(e,t){return r.a.createElement("button",{key:t,type:"button",onClick:function(){return l.push("/products/".concat(e.id))}},e.name)})))}))}}]);
//# sourceMappingURL=5.62b17ca6.chunk.js.map