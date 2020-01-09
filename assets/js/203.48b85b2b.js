(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1512:function(t,e,a){t.exports=a.p+"assets/img/formula-static-array-input.e0b7485a.png"},1513:function(t,e,a){t.exports=a.p+"assets/img/formula-dynamic-array-input.8bf4baba.png"},1514:function(t,e,a){t.exports=a.p+"assets/img/formula-array-job-details.1abb1ca5.png"},2478:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"complex-data-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#complex-data-types"}},[t._v("#")]),t._v(" Complex data types")]),t._v(" "),s("p",[t._v("Up to this point, we have only discussed primitive data types like Strings and Integers. With most APIs, data is represented with more complex structures. These can be broadly classified into JSON Objects and Arrays.")]),t._v(" "),s("h2",{attrs:{id:"mapping-complex-data-in-formula-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapping-complex-data-in-formula-mode"}},[t._v("#")]),t._v(" Mapping complex data in formula mode")]),t._v(" "),s("p",[t._v("Benefits")]),t._v(" "),s("ul",[s("li",[t._v("Deal with primitive arrays")]),t._v(" "),s("li",[t._v("You may not have prior knowledge of schema")]),t._v(" "),s("li",[t._v("Too many fields in a single object to map")])]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("In the following example, we apply tags to Zendesk tickets for associated campaigns, which are tracked in Salesforce. For the purpose of demonstration, we will perform this using a custom action. According to Zendesk API "),s("a",{attrs:{href:"https://developer.zendesk.com/rest_api/docs/core/tickets#update-ticket",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),s("OutboundLink")],1),t._v(", tags should be sent as an array of strings. The payload should look like this:")]),t._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ticket"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tags"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WorkJam"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ProductHour"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Now, this presents a problem for us, because Workato input field mapping exist primary as key/value pairs. This required format is a primitive array of strings. This requires a complex data type (Array of Strings).")]),t._v(" "),s("p",[t._v("To do this, simply toggle the "),s("strong",[t._v("Tags")]),t._v(" input field to formula mode, and form the required structure. This can be done in a few ways.")]),t._v(" "),s("p",[t._v("First, we can perform a test with a statically defined array of strings. Make sure that the input value observes proper JSON syntax. Invalid values in formula mode will raise "),s("router-link",{attrs:{to:"/recipes/recipe-design-time-errors.html#design-time-formula-errors"}},[t._v("design time formula errors")]),t._v(".")],1),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(1512),alt:"Static array input",width:"1125",height:"641"}}),t._v(" "),s("em",[t._v("Static array input in formula mode")])],1),t._v(" "),s("p",[t._v("Next, it is a good idea to perform some tests to make sure that the custom action updates the ticket with the new tags as expected. At this point, you can improve the recipe further to update tickets with tags dynamically. Since Zendesk API expect an Array of Strings, we need to retrieve only the "),s("kbd",[t._v("Name")]),t._v(" values from the "),s("kbd",[t._v("Campaigns")]),t._v(" returned from a previous action.")]),t._v(" "),s("p",[t._v("We do this by using the "),s("router-link",{attrs:{to:"/formulas/array-list-formulas.html#pluck"}},[s("code",[t._v("pluck")])]),t._v(" formula, which conveniently returns an array of "),s("kbd",[t._v("Name")]),t._v(" values, perfect!")],1),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(1513),alt:"Dynamic array input",width:"1118",height:"642"}}),t._v(" "),s("em",[t._v("Dynamic array input in formula mode")])],1),t._v(" "),s("p",[t._v("Finally, make sure that the right data is sent by checking the job details.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(1514),alt:"Data structure preserved in formula mode",width:"1229",height:"655"}}),t._v(" "),s("em",[t._v("Data structure preserved in formula mode")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);