(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{549:function(e,t,o){var r=o(2),v=o(550),n=o(124);r({target:"Array",proto:!0},{fill:v}),n("fill")},550:function(e,t,o){"use strict";var r=o(24),v=o(125),n=o(18);e.exports=function(e){for(var t=r(this),o=n(t.length),_=arguments.length,a=v(_>1?arguments[1]:void 0,o),l=_>2?arguments[2]:void 0,c=void 0===l?o:v(l,o);c>a;)t[a++]=e;return t}},601:function(e,t,o){"use strict";o.r(t);o(123),o(47),o(549),o(12);var r={data:function(){return{foo:"a",active:!0}},watch:{foo:function(){console.warn(this.foo)}},methods:{handleChange:function(e){console.warn(this.foo,e)},prefixSlotRender:function(){return(0,this.$createElement)("i",{class:"el-icon-time el-input__icon"})},fetchSuggestions:function(e,t){e.length>4?setTimeout((function(){t(new Array(10).fill(0).map((function(t,o){return{value:"".concat(e,"_").concat(o)}})))}),1e3):t([])}}},v=o(63),n=Object(v.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{align:"center"}},[e._v("elem-autocomplete")]),e._v(" "),o("p",[e._v("🚀 schema-based输入匹配框模板组件, 集成"),o("code",[e._v("el-popover")]),e._v("组件，实现关注点集中的反馈模式.")]),e._v(" "),o("h2",{attrs:{id:"安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("首先安装 "),o("a",{attrs:{href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"}},[e._v("Element v2.x"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("接着安装组件")])])]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("$ "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i @onemin-table/elem-autocomplete\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR")]),e._v("\n$ "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @onemin-table/elem-autocomplete\n")])])]),o("h2",{attrs:{id:"用法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),o("Previewer",{attrs:{scope:!1,code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbutton%20%40click%3D%22active%20%3D%20!active%22%3E%E5%88%87%E6%8D%A2%3C%2Fbutton%3E%0A%20%20%20%20%3Cspan%3E%7B%7B%20!active%20%3F%20''%20%3A%20'%E6%BF%80%E6%B4%BB'%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%3Celem-autocomplete%0A%20%20%20%20%20%20ref%3D%22autocomplete%22%0A%20%20%20%20%20%20v-model%3D%22foo%22%0A%20%20%20%20%20%20%3ApopoverVisible%3D%22active%22%0A%20%20%20%20%20%20%3Aborder-color%3D%22active%20%3F%20'red'%20%3A%20''%22%0A%20%20%20%20%20%20%3Aprefix-slot-render%3D%22prefixSlotRender%22%0A%20%20%20%20%20%20%3Afetch-suggestions%3D%22fetchSuggestions%22%0A%20%20%20%20%20%20append%3D%22.com%22%0A%20%20%20%20%20%20prepend%3D%22https%3A%2F%2F%22%0A%20%20%20%20%20%20popover-content%3D%22content%22%0A%20%20%20%20%20%20%40change%3D%22handleChange%22%0A%20%20%20%20%20%20lite%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20export%20default%20%7B%0A%20%20%20%20data()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20foo%3A%20'a'%2C%0A%0A%20%20%20%20%20%20%20%20active%3A%20true%2C%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20watch%3A%20%7B%0A%20%20%20%20%20%20foo()%20%7B%0A%20%20%20%20%20%20%20%20console.warn(this.foo)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20methods%3A%20%7B%0A%20%20%20%20%20%20handleChange(val)%20%7B%0A%20%20%20%20%20%20%20%20console.warn(this.foo%2C%20val)%3B%0A%20%20%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20prefixSlotRender()%20%7B%0A%20%20%20%20%20%20%20%20return%20%3Ci%20class%3D%22el-icon-time%20el-input__icon%22%20%2F%3E%3B%0A%20%20%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20fetchSuggestions(queryString%2C%20cb)%20%7B%0A%20%20%20%20%20%20%20%20if%20(queryString.length%20%3E%204)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20cb(new%20Array(10).fill(0).map((e%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20%60%24%7BqueryString%7D_%24%7Bi%7D%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)))%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%201e3)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20eslint-disable-next-line%0A%20%20%20%20%20%20%20%20%20%20cb(%5B%5D)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%3B%0A%3C%2Fscript%3E%0A"}},[o("template",{slot:"demo"},[[o("div",[o("button",{on:{click:function(t){e.active=!e.active}}},[e._v("切换")]),e._v(" "),o("span",[e._v(e._s(e.active?"激活":""))]),e._v(" "),o("elem-autocomplete",{ref:"autocomplete",attrs:{popoverVisible:e.active,"border-color":e.active?"red":"","prefix-slot-render":e.prefixSlotRender,"fetch-suggestions":e.fetchSuggestions,append:".com",prepend:"https://","popover-content":"content",lite:""},on:{change:e.handleChange},model:{value:e.foo,callback:function(t){e.foo=t},expression:"foo"}})],1)]],2)],2),e._v(" "),o("h2",{attrs:{id:"属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[e._v("#")]),e._v(" 属性")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("参数")]),e._v(" "),o("th",[e._v("说明")]),e._v(" "),o("th",[e._v("类型")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("prefix-slot-render")]),e._v(" "),o("td",[e._v("输入匹配框头部内容渲染函数, 相当于"),o("code",[e._v("el-autocomplete")]),e._v("的prefix slot")]),e._v(" "),o("td",[e._v("Function")])]),e._v(" "),o("tr",[o("td",[e._v("suffix-slot-render")]),e._v(" "),o("td",[e._v("输入匹配框尾部内容渲染函数, 相当于"),o("code",[e._v("el-autocomplete")]),e._v("的suffix slot")]),e._v(" "),o("td",[e._v("Function")])]),e._v(" "),o("tr",[o("td",[e._v("append-slot-render")]),e._v(" "),o("td",[e._v("输入匹配框后置内容渲染函数, 相当于"),o("code",[e._v("el-autocomplete")]),e._v("的append slot")]),e._v(" "),o("td",[e._v("Function")])]),e._v(" "),o("tr",[o("td",[e._v("prepend-slot-render")]),e._v(" "),o("td",[e._v("输入匹配框前置内容渲染函数, 相当于"),o("code",[e._v("el-autocomplete")]),e._v("的prepend slot")]),e._v(" "),o("td",[e._v("Function")])]),e._v(" "),o("tr",[o("td",[e._v("append")]),e._v(" "),o("td",[e._v("输入匹配框后置内容字符串, 优先级低于"),o("code",[e._v("appendSlotRender")])]),e._v(" "),o("td",[e._v("String")])]),e._v(" "),o("tr",[o("td",[e._v("prepend")]),e._v(" "),o("td",[e._v("输入匹配框前置内容字符串, 优先级低于"),o("code",[e._v("prependSlotRender")])]),e._v(" "),o("td",[e._v("String")])]),e._v(" "),o("tr",[o("td",[e._v("option-slot-render")]),e._v(" "),o("td",[e._v("输入匹配框自定义备选项渲染函数, 相当于"),o("code",[e._v("el-autocomplete")]),e._v("的scoped slot, 参数为当前输入建议对象")]),e._v(" "),o("td",[e._v("Function")])]),e._v(" "),o("tr",[o("td",[e._v("data-prop")]),e._v(" "),o("td",[e._v("元素标识，会被绑定到DOM元素的"),o("code",[e._v("data-prop")]),e._v("属性上, 默认为空")]),e._v(" "),o("td",[e._v("String")])]),e._v(" "),o("tr",[o("td",[e._v("width")]),e._v(" "),o("td",[e._v("输入匹配框宽度, 传入数字会被识别为像素值(px)")]),e._v(" "),o("td",[o("code",[e._v("String|Number")])])]),e._v(" "),o("tr",[o("td",[e._v("border-color")]),e._v(" "),o("td",[e._v("输入匹配框边框颜色, 可用于校验不通过的提示，设为空字符串可还原")]),e._v(" "),o("td",[e._v("String")])]),e._v(" "),o("tr",[o("td",[e._v("background-color")]),e._v(" "),o("td",[e._v("输入匹配框背景颜色, 可用于校验不通过的提示，设为空字符串可还原")]),e._v(" "),o("td",[e._v("String")])]),e._v(" "),o("tr",[o("td",[e._v("color")]),e._v(" "),o("td",[e._v("输入匹配框字体颜色, 可用于校验不通过的提示，设为空字符串可还原")]),e._v(" "),o("td",[e._v("String")])]),e._v(" "),o("tr",[o("td",[e._v("popover-visible")]),e._v(" "),o("td",[o("code",[e._v("<el-popover>")]),e._v("弹出框是否显示")]),e._v(" "),o("td",[e._v("Boolean")])]),e._v(" "),o("tr",[o("td",[e._v("popover-content")]),e._v(" "),o("td",[o("code",[e._v("<el-popover>")]),e._v("弹出框内容")]),e._v(" "),o("td",[e._v("String")])]),e._v(" "),o("tr",[o("td",[e._v("popover-slot-render")]),e._v(" "),o("td",[e._v("弹出框渲染函数, 相当于"),o("code",[e._v("el-popover")]),e._v("的default slot")]),e._v(" "),o("td",[e._v("Function")])]),e._v(" "),o("tr",[o("td",[e._v("popover-attrs")]),e._v(" "),o("td",[o("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/popover#attributes",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("<el-popover>")]),e._v("的属性"),o("OutboundLink")],1)]),e._v(" "),o("td",[e._v("Object")])]),e._v(" "),o("tr",[o("td",[e._v("popover-listeners")]),e._v(" "),o("td",[o("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/popover#events",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("<el-popover>")]),e._v("的事件"),o("OutboundLink")],1)]),e._v(" "),o("td",[e._v("Object")])]),e._v(" "),o("tr",[o("td",[e._v("scroll-wrapper")]),e._v(" "),o("td",[e._v("滚动容器输入匹配框, 用于解决"),o("code",[e._v("<el-popover>")]),e._v("不随目标元素滚动的问题, 滚动元素为window时传'window'字符串, 默认值空")]),e._v(" "),o("td",[e._v("String")])]),e._v(" "),o("tr",[o("td",[e._v("scroll-debounce")]),e._v(" "),o("td",[e._v("滚动容器滚动时更新"),o("code",[e._v("<el-popover>")]),e._v("的位置信息的延迟毫秒数, 仅当"),o("code",[e._v("scroll-wrapper")]),e._v("不为空时生效, 默认值0")]),e._v(" "),o("td",[e._v("Number")])]),e._v(" "),o("tr",[o("td",[e._v("duration")]),e._v(" "),o("td",[e._v("popover显示时间, 毫秒。设为 0 则不会自动关闭")]),e._v(" "),o("td",[e._v("Number")])])])]),e._v(" "),o("p",[e._v("其他继承自"),o("code",[e._v("el-autocomplete")]),e._v("的属性见"),o("RouterLink",{attrs:{to:"hhttps://element.eleme.cn/#/zh-CN/component/input#autocomplete-attributes"}},[e._v("element-ui文档")])],1),e._v(" "),o("h2",{attrs:{id:"事件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[e._v("#")]),e._v(" 事件")]),e._v(" "),o("p",[e._v("继承自"),o("code",[e._v("el-autocomplete")]),e._v("的事件见"),o("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/input#autocomplete-events",target:"_blank",rel:"noopener noreferrer"}},[e._v("element-ui文档"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"方法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),o("p",[e._v("继承自"),o("code",[e._v("el-autocomplete")]),e._v("的方法见"),o("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/input#autocomplete-methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("element-ui文档"),o("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=n.exports}}]);