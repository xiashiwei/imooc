(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-669b5357"],{"0ffb":function(t,a,e){"use strict";var i=e("290c"),n=e.n(i);n.a},"1eaa":function(t,a,e){"use strict";var i=e("848d"),n=e.n(i);n.a},"23ad":function(t,a,e){"use strict";var i=e("c6b6"),n=e.n(i);n.a},"27c6":function(t,a,e){},"290c":function(t,a,e){},"524b":function(t,a,e){"use strict";var i=e("dac7"),n=e.n(i);n.a},"779e":function(t,a,e){},"848d":function(t,a,e){},"8d06":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("detail-banner",{attrs:{bannerImg:t.bannerImg,gallaryImgs:t.gallaryImgs,sightName:t.sightName}}),e("detail-header",{attrs:{sightName:t.sightName}}),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:t.list}})],1)],1)},n=[],s=(e("cadf"),e("551c"),e("097d"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[e("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),e("div",{staticClass:"banner-info"},[e("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),e("div",{staticClass:"banner-number"},[e("span",{staticClass:"iconfont icon-banner"},[t._v("")]),t._v(t._s(this.gallaryImgs.length))])])]),e("fade-animate",[e("gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.gallaryImgs},on:{close:t.handleClose}})],1)],1)}),r=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container",on:{click:t.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.imgs,function(t,a){return e("swiper-slide",{key:a},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},o=[],c={name:"Gallry",data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},props:{imgs:{type:Array,default:function(){return[]}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},d=c,u=(e("0ffb"),e("2877")),h=Object(u["a"])(d,l,o,!1,null,"0b3f03d8",null);h.options.__file="Gallary.vue";var m=h.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",[t._t("default")],2)},v=[],p={name:"FadeAnimation"},g=p,b=(e("9f80"),Object(u["a"])(g,f,v,!1,null,"d2a9588a",null));b.options.__file="Fade.vue";var y=b.exports,_={name:"DetailBanner",components:{Gallary:m,FadeAnimate:y},props:{bannerImg:String,gallaryImgs:Array,sightName:String},data:function(){return{showGallary:!1}},methods:{handleBannerClick:function(){this.showGallary=!0},handleClose:function(){this.showGallary=!1}}},w=_,C=(e("da37"),Object(u["a"])(w,s,r,!1,null,"1eca96f2",null));C.options.__file="Banner.vue";var I=C.exports,k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",style:t.opacityStyleAbs,attrs:{to:"/",tag:"div"}},[e("div",{staticClass:"iconfont header-abs-back"},[t._v("")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyle},[t._v("\n    "+t._s(t.sightName)+"\n    "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[t._v("")])])],1)],1)},A=[],N={name:"DetailHeader",props:{sightName:String},data:function(){return{showAbs:!0,opacityStyle:{opacity:0},opacityStyleAbs:{opacity:1}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t<60){var a=1-t/140;this.opacityStyleAbs={opacity:a}}if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},S=N,D=(e("524b"),Object(u["a"])(S,k,A,!1,null,"54e53a7e",null));D.options.__file="Header.vue";var G=D.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.list,function(a,i){return e("div",{key:i,staticClass:"item"},[e("div",{staticClass:"item-title border-bottom"},[e("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(a.title)+"\n    ")]),a.children?e("div",{staticClass:"item-children"},[e("detail-list",{attrs:{list:a.children}})],1):t._e()])}),0)},E=[],j={name:"DetailList",props:{list:Array}},O=j,$=(e("23ad"),Object(u["a"])(O,x,E,!1,null,"1f2885f9",null));$.options.__file="List.vue";var L=$.exports,B=e("bc3a"),F=e.n(B),H={name:"Detail",components:{DetailBanner:I,DetailHeader:G,DetailList:L},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){F.a.get("/imooc/travel/project/dist/mock/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if(t=t.data,t.ret&&t.data){var a=t.data;this.sightName=a.sightName,this.bannerImg=a.bannerImg,this.gallaryImgs=a.gallaryImgs,this.list=a.categoryList}}},mounted:function(){this.getDetailInfo()}},J=H,T=(e("1eaa"),Object(u["a"])(J,i,n,!1,null,"28132d0f",null));T.options.__file="Detail.vue";a["default"]=T.exports},"9f80":function(t,a,e){"use strict";var i=e("779e"),n=e.n(i);n.a},c6b6:function(t,a,e){},da37:function(t,a,e){"use strict";var i=e("27c6"),n=e.n(i);n.a},dac7:function(t,a,e){}}]);
//# sourceMappingURL=chunk-669b5357.057a41b1.js.map