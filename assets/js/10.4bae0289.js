(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{545:function(e,t,r){"use strict";r.r(t);var a={data:function(){return{foo:[],active:!1}},methods:{rangeSeparatorSlotRender:function(){return(0,this.$createElement)("i",{class:"el-icon-time"})},onChange:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];console.warn(t)}}},n=r(58),o=Object(n.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{align:"center"}},[e._v("elem-date-picker")]),e._v(" "),r("p",[e._v("🚀 element-ui样式的schema-based日期时间选择器模板组件, 集成"),r("code",[e._v("el-popover")]),e._v("组件，实现关注点集中的反馈模式.")]),e._v(" "),r("h2",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("首先安装 "),r("a",{attrs:{href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"}},[e._v("Element v2.x"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("接着安装组件")])])]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i @onemin-table/elem-date-picker\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR")]),e._v("\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @onemin-table/elem-date-picker\n")])])]),r("h2",{attrs:{id:"用法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),r("Previewer",{attrs:{scope:!1,code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbutton%20%40click%3D%22active%20%3D%20!active%22%3E%E5%88%87%E6%8D%A2%3C%2Fbutton%3E%0A%20%20%20%20%3Celem-date-picker%0A%20%20%20%20%20%20v-model%3D%22foo%22%0A%20%20%20%20%20%20type%3D%22daterange%22%0A%20%20%20%20%20%20%3Awidth%3D%22300%22%0A%20%20%20%20%20%20%3Adisabled-date-start%3D%223%22%0A%20%20%20%20%20%20%3Adisabled-date-end%3D%2210%22%0A%20%20%20%20%20%20%3Adisabled-date-range%3D%22%5B1%2C%201%5D%22%0A%20%20%20%20%20%20%3Arange-separator-slot-render%3D%22rangeSeparatorSlotRender%22%0A%20%20%20%20%20%20%3Apopover-visible%3D%22active%22%0A%20%20%20%20%20%20%3Aborder-color%3D%22active%20%3F%20'red'%20%3A%20''%22%0A%20%20%20%20%20%20popover-content%3D%22content%22%0A%20%20%20%20%20%20%40change%3D%22onChange%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0A%20%20export%20default%20%7B%0A%20%20%20%20data()%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20foo%3A%20%5B%5D%2C%0A%0A%20%20%20%20%20%20%20%20active%3A%20false%2C%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20methods%3A%20%7B%0A%20%20%20%20%20%20rangeSeparatorSlotRender()%20%7B%0A%20%20%20%20%20%20%20%20return%20%3Ci%20class%3D%22el-icon-time%22%20%2F%3E%3B%0A%20%20%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20onChange(...args)%20%7B%0A%20%20%20%20%20%20%20%20console.warn(args)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%3B%0A%3C%2Fscript%3E%0A"}},[r("template",{slot:"demo"},[[r("div",[r("button",{on:{click:function(t){e.active=!e.active}}},[e._v("切换")]),e._v(" "),r("elem-date-picker",{attrs:{type:"daterange",width:300,"disabled-date-start":3,"disabled-date-end":10,"disabled-date-range":[1,1],"range-separator-slot-render":e.rangeSeparatorSlotRender,"popover-visible":e.active,"border-color":e.active?"red":"","popover-content":"content"},on:{change:e.onChange},model:{value:e.foo,callback:function(t){e.foo=t},expression:"foo"}})],1)]],2)],2),e._v(" "),r("h2",{attrs:{id:"属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[e._v("#")]),e._v(" 属性")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("参数")]),e._v(" "),r("th",[e._v("说明")]),e._v(" "),r("th",[e._v("类型")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("range-separator-slot-render")]),e._v(" "),r("td",[e._v("选择器分隔符内容渲染函数, 相当于"),r("code",[e._v("el-date-picker")]),e._v("的range-separator slot")]),e._v(" "),r("td",[e._v("Function")])]),e._v(" "),r("tr",[r("td",[e._v("disabled-date-start")]),e._v(" "),r("td",[e._v("禁用状态的日期距离当前时间之后的天数(开区间), 天数计算包含当前日期")]),e._v(" "),r("td",[e._v("Number")])]),e._v(" "),r("tr",[r("td",[e._v("disabled-date-end")]),e._v(" "),r("td",[e._v("禁用状态的日期距离当前时间之前的天数(开区间), 天数计算不含当前日期")]),e._v(" "),r("td",[e._v("Number")])]),e._v(" "),r("tr",[r("td",[e._v("disabled-date-range")]),e._v(" "),r("td",[e._v("禁用状态的日期距离当前时间的天数区间(闭区间), [start, end], start的天数计算包含当前日期")]),e._v(" "),r("td",[r("code",[e._v("Array<Number>")])])]),e._v(" "),r("tr",[r("td",[e._v("prop")]),e._v(" "),r("td",[e._v("元素标识，会被绑定到DOM元素的"),r("code",[e._v("data-prop")]),e._v("属性上, 默认为空")]),e._v(" "),r("td",[e._v("String")])]),e._v(" "),r("tr",[r("td",[e._v("width")]),e._v(" "),r("td",[e._v("选择器宽度, 传入数字会被识别为像素值(px)")]),e._v(" "),r("td",[r("code",[e._v("String|Number")])])]),e._v(" "),r("tr",[r("td",[e._v("border-color")]),e._v(" "),r("td",[e._v("选择器边框颜色, 可用于校验不通过的提示，设为空字符串可还原")]),e._v(" "),r("td",[e._v("String")])]),e._v(" "),r("tr",[r("td",[e._v("background-color")]),e._v(" "),r("td",[e._v("选择器背景颜色, 可用于校验不通过的提示，设为空字符串可还原")]),e._v(" "),r("td",[e._v("String")])]),e._v(" "),r("tr",[r("td",[e._v("color")]),e._v(" "),r("td",[e._v("选择器字体颜色, 可用于校验不通过的提示，设为空字符串可还原")]),e._v(" "),r("td",[e._v("String")])]),e._v(" "),r("tr",[r("td",[e._v("popover-visible")]),e._v(" "),r("td",[r("code",[e._v("<el-popover>")]),e._v("弹出框是否显示")]),e._v(" "),r("td",[e._v("Boolean")])]),e._v(" "),r("tr",[r("td",[e._v("popover-content")]),e._v(" "),r("td",[r("code",[e._v("<el-popover>")]),e._v("弹出框内容")]),e._v(" "),r("td",[e._v("String")])]),e._v(" "),r("tr",[r("td",[e._v("popover-attrs")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/popover#attributes",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("<el-popover>")]),e._v("的属性"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Object")])]),e._v(" "),r("tr",[r("td",[e._v("popover-listeners")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/popover#events",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("<el-popover>")]),e._v("的事件"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("Object")])]),e._v(" "),r("tr",[r("td",[e._v("popover-slot-render")]),e._v(" "),r("td",[e._v("弹出框渲染函数, 相当于"),r("code",[e._v("el-popover")]),e._v("的default slot")]),e._v(" "),r("td",[e._v("Function")])])])]),e._v(" "),r("p",[e._v("其他继承自"),r("code",[e._v("el-date-picker")]),e._v("的属性见"),r("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/date-picker#attributes",target:"_blank",rel:"noopener noreferrer"}},[e._v("element-ui文档"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"事件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[e._v("#")]),e._v(" 事件")]),e._v(" "),r("p",[e._v("继承自"),r("code",[e._v("el-date-picker")]),e._v("的事件见"),r("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/date-picker#events",target:"_blank",rel:"noopener noreferrer"}},[e._v("element-ui文档"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),r("p",[e._v("继承自"),r("code",[e._v("el-date-picker")]),e._v("的方法见"),r("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/date-picker#methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("element-ui文档"),r("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=o.exports}}]);