webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},s,!1,function(t){a("Uewn")},null,null).exports,r=a("/ocq"),o={name:"Main",data:function(){return{isHasExtension:"undefined"==typeof webExtensionWallet,search:"",add_value:"",isShowAdd:!1,hasResult:!1,fail_add:"",result:{}}},methods:{toSearch:function(){var t=this;this.$api.get({key:this.search}).then(function(e){e?(t.fail_add="",t.result=e):(t.fail_add=t.search,t.result={})}),this.isShowAdd=!1},toShow:function(){this.fail_add="",this.isShowAdd=!0},toAdd:function(){this.$api.save({key:this.search,content:this.add_value}).then(function(t){console.log("response of push: "+t)})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contenner"},[t._m(0),t._v(" "),t.isHasExtension?a("div",{staticClass:"noExtension",attrs:{id:"noExtension"}},[t._v("\n    NOTE: Please install "),a("a",{attrs:{target:"_blank",href:"https://github.com/ChengOrangeJu/WebExtensionWallet"}},[t._v("WebExtensionWallet")]),t._v("  to use SUPER DICTIONARY\n  ")]):t._e(),t._v(" "),a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{id:"search_value",type:"text",disabled:t.isHasExtension},domProps:{value:t.search},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.toSearch(e):null},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),a("button",{attrs:{id:"search",disabled:t.isHasExtension},on:{click:t.toSearch}},[t._v("search")])]),t._v(" "),Object.keys(t.result).length>0?a("div",{staticClass:"result_success"},[a("div",{attrs:{id:"search_banner"}}),t._v(" "),a("p",{attrs:{id:"search_result"}},[t._v(t._s(t.result.value))]),t._v(" "),a("div",{staticClass:"author"},[a("i",[a("p",[t._v(" Author:")]),t._v(" "),a("p",{attrs:{id:"search_result_author"}},[t._v(" "+t._s(t.result.author))])])])]):t._e(),t._v(" "),t.fail_add?a("div",{staticClass:"result_faile"},[t._v("\n    Failed to find related information. Do you want to "),a("button",{attrs:{id:"add"},on:{click:t.toShow}},[t._v("add")]),t._v(' infromation for "'),a("i",{attrs:{id:"result_faile_add"}},[t._v(t._s(t.fail_add))]),t._v('"?\n  ')]):t._e(),t._v(" "),t.isShowAdd?a("div",{staticClass:"add_banner"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.add_value,expression:"add_value"}],attrs:{type:"text",id:"add_value",placeholder:"input contents for your keyword"},domProps:{value:t.add_value},on:{input:function(e){e.target.composing||(t.add_value=e.target.value)}}}),t._v(" "),a("button",{attrs:{id:"push"},on:{click:t.toAdd}},[t._v("submit")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("div",{staticClass:"name"},[this._v("SUPER DICTIONARY")]),this._v(" "),e("div",{staticClass:"img logo_rotate"},[e("img",{attrs:{src:"img/logo.png",alt:""}})])])}]},d=a("VU/8")(o,l,!1,null,null,null).exports;n.a.use(r.a);var u=new r.a({routes:[{path:"/",name:"Main",component:d},{path:"*",redirect:"/"}]}),c=a("mvHQ"),v=a.n(c),_=a("//Fk"),h=a.n(_),p=a("rxTE"),f=new(a.n(p).a),m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new h.a(function(n,s){var i=v()(e);f[a?"call":"simulateCall"]("n1gtsZhNb5NSDa5xU6c8GZ4Q7SB9Ut2c5Jo","0",t,i,{listener:function(t){console.log("listener",t);try{n(JSON.parse(t.result))}catch(e){s(t.result)}}})})},g={save:function(t){var e=t.key,a=t.content;return m("save",[e,a],!0)},get:function(t){var e=t.key;return m("get",[e])}};n.a.config.productionTip=!1,n.a.prototype.$api=g,new n.a({el:"#app",router:u,components:{App:i},template:"<App/>"})},Uewn:function(t,e){}},["NHnr"]);