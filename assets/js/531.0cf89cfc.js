(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{2548:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ip-whitelists"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ip-whitelists"}},[t._v("#")]),t._v(" IP whitelists")]),t._v(" "),e("p",[t._v("IP whitelisting allows you to ensure traffic to/from Workato is not hijacked by a malicious website.")]),t._v(" "),e("h3",{attrs:{id:"traffic-from-workato"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#traffic-from-workato"}},[t._v("#")]),t._v(" Traffic from Workato")]),t._v(" "),e("p",[t._v("All traffic from Workato comes through the following IP addresses:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("52.5.142.59")])]),t._v(" "),e("li",[e("strong",[t._v("34.226.132.221")])]),t._v(" "),e("li",[e("strong",[t._v("52.54.43.157")])])]),t._v(" "),e("p",[t._v("You can add these IP addresses to your application/firewall whitelist. Add all three IP addresses to the whitelist to ensure continuous access.")]),t._v(" "),e("h4",{attrs:{id:"example-whitelist-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-whitelist-configuration"}},[t._v("#")]),t._v(" Example whitelist configuration")]),t._v(" "),e("p",[t._v("If you have a recipe that accesses a MySQL server running on an Amazon EC2 machine, with a special user called "),e("strong",[t._v("integrationuser")]),t._v(", you can run the following SQL command on your database to whitelist the Workato IP addresses.")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GRANT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" db1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'integrationuser'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'52.5.142.59'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'integrationuser'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'34.226.132.221'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'integrationuser'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'52.54.43.157'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"traffic-to-workato"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#traffic-to-workato"}},[t._v("#")]),t._v(" Traffic to Workato")]),t._v(" "),e("h4",{attrs:{id:"on-premise-agent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-premise-agent"}},[t._v("#")]),t._v(" On-premise agent")]),t._v(" "),e("p",[t._v("Workato's "),e("router-link",{attrs:{to:"/on-prem.html"}},[t._v("on-premise agent")]),t._v(" provides a secure way for Workato to selectively access customer-authorized on-prem apps, databases and folders without having to open inbound ‘ports’ in the corporate firewall. The on-premise agent makes an outbound connection to Workato via an on-premise gateway.")],1),t._v(" "),e("p",[t._v("If your organization has strict outbound traffic rules, you should whitelist the on-premise gateway IP address:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("34.192.94.13")])]),t._v(" "),e("li",[e("strong",[t._v("34.195.128.7")])]),t._v(" "),e("li",[e("strong",[t._v("34.226.84.130")])]),t._v(" "),e("li",[e("strong",[t._v("52.206.58.244")]),t._v(" (Deprecated on 28 March 2018)")])]),t._v(" "),e("h4",{attrs:{id:"general-browsers-webhooks-api-endpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general-browsers-webhooks-api-endpoints"}},[t._v("#")]),t._v(" General (browsers, webhooks, API endpoints)")]),t._v(" "),e("p",[t._v("All other traffic to Workato:")]),t._v(" "),e("ul",[e("li",[t._v("Browser based user interaction and webhooks at "),e("code",[t._v("www.workato.com")])]),t._v(" "),e("li",[t._v("API endpoint requests at "),e("code",[t._v("apim.workato.com")])])]),t._v(" "),e("p",[t._v("may be served by a different set of IP addresses, distinct from IP addresses mentioned in the previous sections. This set may expand and contract based on overall platform utilization, so it is not completely static.")])])}),[],!1,null,null,null);a.default=r.exports}}]);