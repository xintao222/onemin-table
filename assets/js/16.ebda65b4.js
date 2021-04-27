(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{604:function(e,t,v){"use strict";v.r(t);var r={data:function(){return{foo:["a","b"],active:!0}},watch:{foo:function(){console.warn(this.foo)}},methods:{handleChange:function(e){console.warn(this.foo,e)},prefixSlotRender:function(){return(0,this.$createElement)("i",{class:"el-icon-time el-input__icon"})}}},n=v(61),o=Object(n.a)(r,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{align:"center"}},[e._v("elem-input")]),e._v(" "),v("p",[e._v("🚀 element-ui样式的schema-based输入框模板组件, 集成"),v("code",[e._v("el-popover")]),e._v("组件，实现关注点集中的反馈模式.")]),e._v(" "),v("h2",{attrs:{id:"安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("首先安装 "),v("a",{attrs:{href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"}},[e._v("Element v2.x"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[e._v("接着安装组件")])])]),e._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[e._v("$ "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i @onemin-table/elem-input\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR")]),e._v("\n$ "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @onemin-table/elem-input\n")])])]),v("h2",{attrs:{id:"用法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),v("Previewer",{attrs:{scope:!1,code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbutton%20%40click%3D%22active%20%3D%20!active%22%3E%E5%88%87%E6%8D%A2%3C%2Fbutton%3E%0A%20%20%20%20%3Cspan%3E%7B%7B%20!active%20%3F%20''%20%3A%20'%E6%BF%80%E6%B4%BB'%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%3Celem-input%0A%20%20%20%20%20%20v-model%3D%22foo%22%0A%20%20%20%20%20%20%3ApopoverVisible%3D%22active%22%0A%20%20%20%20%20%20%3Aborder-color%3D%22active%20%3F%20'red'%20%3A%20''%22%0A%20%20%20%20%20%20%3Aprefix-slot-render%3D%22prefixSlotRender%22%0A%20%20%20%20%20%20suffix-icon%3D%22date%22%0A%20%20%20%20%20%20append%3D%22.com%22%0A%20%20%20%20%20%20prepend%3D%22https%3A%2F%2F%22%0A%20%20%20%20%20%20popover-content%3D%22content%22%0A%20%20%20%20%20%20split%0A%20%20%20%20%20%20placeholder%3D%22%E7%A9%BA%E6%A0%BC%E5%88%86%E9%9A%94%22%0A%20%20%20%20%20%20%40change%3D%22handleChange%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20export%20default%20%7B%0A%20%20%20%20data()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20foo%3A%20%5B'a'%2C%20'b'%5D%2C%0A%0A%20%20%20%20%20%20%20%20active%3A%20true%2C%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20watch%3A%20%7B%0A%20%20%20%20%20%20foo()%20%7B%0A%20%20%20%20%20%20%20%20console.warn(this.foo)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20methods%3A%20%7B%0A%20%20%20%20%20%20handleChange(val)%20%7B%0A%20%20%20%20%20%20%20%20console.warn(this.foo%2C%20val)%3B%0A%20%20%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20prefixSlotRender()%20%7B%0A%20%20%20%20%20%20%20%20return%20%3Ci%20class%3D%22el-icon-time%20el-input__icon%22%20%2F%3E%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%3B%0A%3C%2Fscript%3E%0A"}},[v("template",{slot:"demo"},[[v("div",[v("button",{on:{click:function(t){e.active=!e.active}}},[e._v("切换")]),e._v(" "),v("span",[e._v(e._s(e.active?"激活":""))]),e._v(" "),v("elem-input",{attrs:{popoverVisible:e.active,"border-color":e.active?"red":"","prefix-slot-render":e.prefixSlotRender,"suffix-icon":"date",append:".com",prepend:"https://","popover-content":"content",split:"",placeholder:"空格分隔"},on:{change:e.handleChange},model:{value:e.foo,callback:function(t){e.foo=t},expression:"foo"}})],1)]],2)],2),e._v(" "),v("h2",{attrs:{id:"属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[e._v("#")]),e._v(" 属性")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("参数")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("prefix-slot-render")]),e._v(" "),v("td",[e._v("选择器头部内容渲染函数, 相当于"),v("code",[e._v("el-input")]),e._v("的prefix slot")]),e._v(" "),v("td",[e._v("Function")])]),e._v(" "),v("tr",[v("td",[e._v("suffix-slot-render")]),e._v(" "),v("td",[e._v("选择器尾部内容渲染函数, 相当于"),v("code",[e._v("el-input")]),e._v("的suffix slot")]),e._v(" "),v("td",[e._v("Function")])]),e._v(" "),v("tr",[v("td",[e._v("append-slot-render")]),e._v(" "),v("td",[e._v("选择器后置内容渲染函数, 相当于"),v("code",[e._v("el-input")]),e._v("的append slot")]),e._v(" "),v("td",[e._v("Function")])]),e._v(" "),v("tr",[v("td",[e._v("prepend-slot-render")]),e._v(" "),v("td",[e._v("选择器前置内容渲染函数, 相当于"),v("code",[e._v("el-input")]),e._v("的prepend slot")]),e._v(" "),v("td",[e._v("Function")])]),e._v(" "),v("tr",[v("td",[e._v("append")]),e._v(" "),v("td",[e._v("选择器后置内容字符串, 优先级低于"),v("code",[e._v("appendSlotRender")])]),e._v(" "),v("td",[e._v("String")])]),e._v(" "),v("tr",[v("td",[e._v("prepend")]),e._v(" "),v("td",[e._v("选择器前置内容字符串, 优先级低于"),v("code",[e._v("prependSlotRender")])]),e._v(" "),v("td",[e._v("String")])]),e._v(" "),v("tr",[v("td",[e._v("split")]),e._v(" "),v("td",[e._v("分隔模式，双向绑定值为根据"),v("code",[e._v("this.splitChar")]),e._v("分隔的数组, 默认值false")]),e._v(" "),v("td",[e._v("Boolean")])]),e._v(" "),v("tr",[v("td",[e._v("split-char")]),e._v(" "),v("td",[e._v("分隔模式分隔字符串，默认值"),v("code",[e._v('" "')])]),e._v(" "),v("td",[e._v("Boolean")])]),e._v(" "),v("tr",[v("td",[e._v("convert-number")]),e._v(" "),v("td",[e._v('type="number"时, 输入字符串是否转换为number类型，默认值true')]),e._v(" "),v("td",[e._v("Boolean")])]),e._v(" "),v("tr",[v("td",[e._v("data-prop")]),e._v(" "),v("td",[e._v("元素标识，会被绑定到DOM元素的"),v("code",[e._v("data-prop")]),e._v("属性上, 默认为空")]),e._v(" "),v("td",[e._v("String")])]),e._v(" "),v("tr",[v("td",[e._v("width")]),e._v(" "),v("td",[e._v("选择器宽度, 传入数字会被识别为像素值(px)")]),e._v(" "),v("td",[v("code",[e._v("String|Number")])])]),e._v(" "),v("tr",[v("td",[e._v("border-color")]),e._v(" "),v("td",[e._v("选择器边框颜色, 可用于校验不通过的提示，设为空字符串可还原")]),e._v(" "),v("td",[e._v("String")])]),e._v(" "),v("tr",[v("td",[e._v("background-color")]),e._v(" "),v("td",[e._v("选择器背景颜色, 可用于校验不通过的提示，设为空字符串可还原")]),e._v(" "),v("td",[e._v("String")])]),e._v(" "),v("tr",[v("td",[e._v("color")]),e._v(" "),v("td",[e._v("选择器字体颜色, 可用于校验不通过的提示，设为空字符串可还原")]),e._v(" "),v("td",[e._v("String")])]),e._v(" "),v("tr",[v("td",[e._v("popover-visible")]),e._v(" "),v("td",[v("code",[e._v("<el-popover>")]),e._v("弹出框是否显示")]),e._v(" "),v("td",[e._v("Boolean")])]),e._v(" "),v("tr",[v("td",[e._v("popover-content")]),e._v(" "),v("td",[v("code",[e._v("<el-popover>")]),e._v("弹出框内容")]),e._v(" "),v("td",[e._v("String")])]),e._v(" "),v("tr",[v("td",[e._v("popover-slot-render")]),e._v(" "),v("td",[e._v("弹出框渲染函数, 相当于"),v("code",[e._v("el-popover")]),e._v("的default slot")]),e._v(" "),v("td",[e._v("Function")])]),e._v(" "),v("tr",[v("td",[e._v("popover-attrs")]),e._v(" "),v("td",[v("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/popover#attributes",target:"_blank",rel:"noopener noreferrer"}},[v("code",[e._v("<el-popover>")]),e._v("的属性"),v("OutboundLink")],1)]),e._v(" "),v("td",[e._v("Object")])]),e._v(" "),v("tr",[v("td",[e._v("popover-listeners")]),e._v(" "),v("td",[v("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/popover#events",target:"_blank",rel:"noopener noreferrer"}},[v("code",[e._v("<el-popover>")]),e._v("的事件"),v("OutboundLink")],1)]),e._v(" "),v("td",[e._v("Object")])]),e._v(" "),v("tr",[v("td",[e._v("scroll-wrapper")]),e._v(" "),v("td",[e._v("滚动容器选择器, 用于解决"),v("code",[e._v("<el-popover>")]),e._v("不随目标元素滚动的问题, 滚动元素为window时传'window'字符串, 默认值空")]),e._v(" "),v("td",[e._v("String")])]),e._v(" "),v("tr",[v("td",[e._v("scroll-debounce")]),e._v(" "),v("td",[e._v("滚动容器滚动时更新"),v("code",[e._v("<el-popover>")]),e._v("的位置信息的延迟毫秒数, 仅当"),v("code",[e._v("scroll-wrapper")]),e._v("不为空时生效, 默认值0")]),e._v(" "),v("td",[e._v("Number")])]),e._v(" "),v("tr",[v("td",[e._v("duration")]),e._v(" "),v("td",[e._v("popover显示时间, 毫秒。设为 0 则不会自动关闭")]),e._v(" "),v("td",[e._v("Number")])])])]),e._v(" "),v("p",[e._v("其他继承自"),v("code",[e._v("el-input")]),e._v("的属性见"),v("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/input#input-attributes",target:"_blank",rel:"noopener noreferrer"}},[e._v("element-ui文档"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[e._v("#")]),e._v(" 事件")]),e._v(" "),v("p",[e._v("继承自"),v("code",[e._v("el-input")]),e._v("的事件见"),v("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/input#input-events",target:"_blank",rel:"noopener noreferrer"}},[e._v("element-ui文档"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),v("p",[e._v("继承自"),v("code",[e._v("el-input")]),e._v("的方法见"),v("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/input#input-methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("element-ui文档"),v("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=o.exports}}]);