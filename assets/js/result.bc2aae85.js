(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["result"],{4638:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"result-container"},[s("div",{staticClass:"title-wrap"},[s("h2",{staticClass:"title",attrs:{keywords:t.keywords=t.$route.query.q}},[t._v(t._s(t.$route.query.q))]),s("span",{staticClass:"sub-title"},[t._v("共找到 "+t._s(t.count)+"个结果")])]),s("el-tabs",{model:{value:t.activeIndex,callback:function(a){t.activeIndex=a},expression:"activeIndex"}},[s("el-tab-pane",{attrs:{label:"歌曲",name:"songs"}},[s("table",{staticClass:"el-table"},[s("thead",[s("th"),s("th",[t._v("音乐标题")]),s("th",[t._v("歌手")]),s("th",[t._v("专辑")]),s("th",[t._v("时长")])]),s("tbody",t._l(t.songs,(function(a,e){return s("tr",{key:e,staticClass:"el-table__row",on:{click:function(s){return t.playMusic(a.id)}}},[s("td",[t._v(t._s(e+1))]),s("td",[s("div",{staticClass:"song-wrap"},[s("div",{staticClass:"name-wrap"},[s("span",[t._v(t._s(a.name))]),0!==a.mvid?s("span",{staticClass:"iconfont icon-mv"}):t._e()]),0!==a.alias.length?s("span",[t._v(t._s(a.alias[0]))]):t._e()])]),s("td",[t._v(t._s(a.artists[0].name))]),s("td",[t._v(t._s(a.album.name))]),s("td",[t._v(t._s(t._f("playTimeFormat")(a.duration)))])])})),0)])]),s("el-tab-pane",{attrs:{label:"歌单",name:"lists"}},[s("div",{staticClass:"items"},t._l(t.playlists,(function(a,e){return s("div",{key:e,staticClass:"item",on:{click:function(s){return t.toPlaylist(a.id)}}},[s("div",{staticClass:"img-wrap"},[s("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),s("span",{staticClass:"num"},[t._v(t._s(t._f("playNumFormat")(a.playCount)))])]),s("img",{attrs:{src:a.coverImgUrl+"?param=200y200",alt:""}}),s("span",{staticClass:"iconfont icon-play"})]),s("p",{staticClass:"name"},[t._v(t._s(a.name))])])})),0)]),s("el-tab-pane",{attrs:{label:"MV",name:"mv"}},[s("div",{staticClass:"items mv"},t._l(t.mvs,(function(a,e){return s("div",{key:e,staticClass:"item",on:{click:function(s){return t.toMv(a.id)}}},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.cover+"?param=250y150",alt:""}}),s("span",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num-wrap"},[s("div",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num"},[t._v(t._s(t._f("playNumFormat")(a.playCount)))])]),s("span",{staticClass:"time"},[t._v(t._s(t._f("playTimeFormat")(a.duration)))])]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.artistName))])])])})),0)])],1),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.pageNum,"page-size":t.pageSize},on:{"current-change":t.handleCurrentChange}})],1)},n=[],i=(s("96cf"),s("1da1")),r=s("1bab"),c={name:"result",data:function(){return{total:0,pageNum:1,pageSize:10,keywords:"",activeIndex:"songs",songs:[],count:0,playlists:[],mvs:[],songId:0,type:1}},created:function(){},watch:{keywords:function(){this._search()},activeIndex:function(){switch(this.activeIndex){case"songs":this.type=1,this.pageNum=1;break;case"lists":this.type=1e3,this.pageNum=1;break;case"mv":this.type=1004,this.pageNum=1;break;default:break}this._search()}},methods:{handleCurrentChange:function(t){this.pageNum=t,this._search()},_search:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(r["q"])({s:t.keywords,type:t.type,limit:1004===t.type?8:10,offset:(t.pageNum-1)*(1004===t.type?8:10)});case 2:if(s=a.sent,e=s.data,200===e.code){a.next=6;break}return a.abrupt("return");case 6:1===t.type?(t.songs=e.result.songs,t.count=e.result.songCount):1e3===t.type?(t.playlists=e.result.playlists,t.count=e.result.playlistCount):1004===t.type&&(t.mvs=e.result.mvs,t.count=e.result.mvCount),t.total=t.count;case 8:case"end":return a.stop()}}),a)})))()},playMusic:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var e,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(r["c"])(t);case 2:if(e=s.sent,n=e.data,n.data[0].url){s.next=6;break}return s.abrupt("return",a.$message.error("该资源为VIP专享，暂不支持播放 ！"));case 6:a.$parent.musicUrl=n.data[0].url;case 7:case"end":return s.stop()}}),s)})))()},toPlaylist:function(t){this.$router.push("/playlist?id=".concat(t))},toMv:function(t){this.$router.push("/mv?id=".concat(t))}}},l=c,u=s("2877"),o=Object(u["a"])(l,e,n,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=result.bc2aae85.js.map