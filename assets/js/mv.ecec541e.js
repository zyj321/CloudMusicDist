(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mv"],{e81b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mv-container"},[a("div",{staticClass:"mv-wrap"},[a("h3",{staticClass:"title"},[t._v("mv详情")]),a("div",{staticClass:"video-wrap"},[a("video",{attrs:{controls:"",src:t.url,autoplay:""}})]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"singer-info"},[a("div",{staticClass:"avatar-wrap"},[a("img",{attrs:{src:t.icon+"?param=250y150",alt:""}})]),a("span",{staticClass:"name"},[t._v(t._s(t.mvInfo.artistName))])]),a("div",{staticClass:"mv-info"},[a("h2",{staticClass:"title"},[t._v(t._s(t.mvInfo.name))]),a("span",{staticClass:"date"},[t._v("发布："+t._s(t.mvInfo.publishTime))]),a("span",{staticClass:"number"},[t._v("播放："+t._s(t.mvInfo.playCount)+" 次")]),a("p",{staticClass:"desc"},[t._v(" "+t._s(t.mvInfo.desc)+" ")])])]),void 0!==t.hotComments&&0!==t.hotComments.length?a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 精彩评论"),a("span",{staticClass:"number"},[t._v("("+t._s(t.hotComments.length)+")")])]),a("div",{staticClass:"comments-wrap"},t._l(t.hotComments,(function(s,e){return a("div",{key:e,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl+"?param=50y50",alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.content))])]),0!==s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(t._f("dateFormat")(s.time)))])])])})),0)]):t._e(),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 最新评论"),a("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),a("div",{staticClass:"comments-wrap"},t._l(t.comments,(function(s,e){return a("div",{key:e,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl+"?param=50y50",alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.content))])]),0!==s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname))]),a("span",{staticClass:"comment"},[t._v("："+t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(t._f("dateFormat")(s.time)))])])])})),0)]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.pageNum,"page-size":t.pageSize},on:{"current-change":t.handleCurrentChange}})],1),a("div",{staticClass:"mv-recommend"},[a("h3",{staticClass:"title"},[t._v("相关推荐")]),a("div",{staticClass:"mvs"},[a("div",{staticClass:"items"},t._l(t.simiMvs,(function(s,e){return a("div",{key:e,staticClass:"item",on:{click:function(a){return t.playMv(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.cover+"?param=250y150",alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(t._f("playNumFormat")(s.playCount)))])]),a("span",{staticClass:"time"},[t._v(t._s(t._f("playTimeFormat")(s.duration)))])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artistName))])])])})),0)])])])},i=[],n=(a("96cf"),a("1da1")),r=a("1bab"),c={name:"mv",data:function(){return{id:"",total:20,pageNum:1,pageSize:10,url:"",mvInfo:{},simiMvs:[],icon:"",hotComments:[],comments:[]}},created:function(){this.$pubSub.publish("pauseAudio"),this.id=this.$route.query.id,this._getMvUrl(),this._getMvDetail(),this._getSimiMvUrl(),this._getMvComment()},methods:{handleCurrentChange:function(t){this.pageNum=t,this._getMvComment()},_getMvUrl:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(r["f"])({id:t.id,r:1080});case 2:a=s.sent,e=a.data,t.url=e.data.url;case 5:case"end":return s.stop()}}),s)})))()},_getMvDetail:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,e,i,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(r["e"])({id:t.id});case 2:return a=s.sent,e=a.data,t.mvInfo=e.data,s.next=7,Object(r["a"])(t.mvInfo.artists[0].id);case 7:i=s.sent,n=i.data,t.icon=n.artist.picUrl;case 10:case"end":return s.stop()}}),s)})))()},_getMvComment:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(r["d"])(t.id,{rid:t.id,limit:t.pageSize,offset:(t.pageNum-1)*t.pageSize});case 2:a=s.sent,e=a.data,t.comments=e.comments,t.hotComments=e.hotComments,t.total=e.total;case 7:case"end":return s.stop()}}),s)})))()},_getSimiMvUrl:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(r["o"])({mvid:t.id});case 2:a=s.sent,e=a.data,t.simiMvs=e.mvs;case 5:case"end":return s.stop()}}),s)})))()},playMv:function(t){this.pageNum=1,this.id=t,this._getMvUrl(),this._getMvDetail(),this._getSimiMvUrl(),this._getMvComment()}}},m=c,o=a("2877"),l=Object(o["a"])(m,e,i,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=mv.ecec541e.js.map