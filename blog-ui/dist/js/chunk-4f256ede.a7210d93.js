(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f256ede"],{"0dfd":function(t,e,o){"use strict";o.r(e);var n=o("b0af"),i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"banner",style:t.cover},[e("h1",{staticClass:"banner-title"},[t._v(t._s(t.photoAlbumName))])]),e(n["a"],{staticClass:"blog-container"},[e("div",{staticClass:"photo-wrap"},t._l(t.photoList,(function(o,n){return e("img",{key:n,staticClass:"photo",attrs:{src:o},on:{click:function(e){return t.preview(n)}}})})),0),e("infinite-loading",{on:{infinite:t.infiniteHandler}},[e("div",{attrs:{slot:"no-more"},slot:"no-more"}),e("div",{attrs:{slot:"no-results"},slot:"no-results"})])],1)],1)},s=[],a=(o("14d9"),o("365c")),r={metaInfo:{meta:[{name:"keyWords",content:"北极星,www.chales.online,博客,个人博客,开源博客"},{name:"description",content:"一个专注于技术分享的博客平台,大家以共同学习,乐于分享,拥抱开源的价值观进行学习交流"}]},data:function(){return{photoAlbumName:"",photoAlbumCover:"",photoList:[],current:1,size:10}},methods:{preview(t){this.$imagePreview({images:this.photoList,index:t})},infiniteHandler(t){Object(a["p"])({albumId:this.$route.params.albumId,pageNo:this.current,pageSize:this.size}).then(e=>{this.photoAlbumCover=e.data.photoAlbumCover,this.photoAlbumName=e.data.photoAlbumName,e.data.photoList.length?(this.current++,this.photoList.push(...e.data.photoList),t.loaded()):t.complete()})}},computed:{cover(){return"background: url("+this.photoAlbumCover+") center center / cover no-repeat"}}},c=r,l=(o("24e7"),o("2877")),u=Object(l["a"])(c,i,s,!1,null,"32e0146a",null);e["default"]=u.exports},"24e7":function(t,e,o){"use strict";o("f2ac")},f2ac:function(t,e,o){}}]);
//# sourceMappingURL=chunk-4f256ede.a7210d93.js.map