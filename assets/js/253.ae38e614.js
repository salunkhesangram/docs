(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{1289:function(t,s,a){t.exports=a.p+"assets/img/network_tab.e569498b.png"},1290:function(t,s,a){t.exports=a.p+"assets/img/response_with_headers.8ce095a2.png"},2430:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"http-requests-and-post-response-processing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-requests-and-post-response-processing"}},[t._v("#")]),t._v(" HTTP Requests and post-response processing")]),t._v(" "),n("p",[t._v("In this section we cover the various HTTP methods that Workato supports. You should already be familiar with most of them. We also cover how you can do post-response processing of your HTTP calls to manipulate data into formats that are easier to use later on in your connector code.")]),t._v(" "),n("h2",{attrs:{id:"http-verb-methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-verb-methods"}},[t._v("#")]),t._v(" HTTP verb methods")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("HTTP verb")]),t._v(" "),n("th",[t._v("Method")]),t._v(" "),n("th",[t._v("Example")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("GET")]),t._v(" "),n("td",[n("code",[t._v("get()")])]),t._v(" "),n("td",[n("code",[t._v('get("url", parameters)')])])]),t._v(" "),n("tr",[n("td",[t._v("POST")]),t._v(" "),n("td",[n("code",[t._v("post()")])]),t._v(" "),n("td",[n("code",[t._v('post("url", payload)')])])]),t._v(" "),n("tr",[n("td",[t._v("PUT")]),t._v(" "),n("td",[n("code",[t._v("put()")])]),t._v(" "),n("td",[n("code",[t._v('put("url", payload)')])])]),t._v(" "),n("tr",[n("td",[t._v("PATCH")]),t._v(" "),n("td",[n("code",[t._v("patch()")])]),t._v(" "),n("td",[n("code",[t._v('patch("url", payload)')])])]),t._v(" "),n("tr",[n("td",[t._v("DELETE")]),t._v(" "),n("td",[n("code",[t._v("delete()")])]),t._v(" "),n("td",[n("code",[t._v('delete("url", parameters)')])])]),t._v(" "),n("tr",[n("td",[t._v("OPTIONS")]),t._v(" "),n("td",[n("code",[t._v("options()")])]),t._v(" "),n("td",[n("code",[t._v('options("url", parameters)')])])])])]),t._v(" "),n("h3",{attrs:{id:"forming-a-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#forming-a-request"}},[t._v("#")]),t._v(" Forming a request")]),t._v(" "),n("p",[t._v("Each HTTP verb method must be provided a "),n("code",[t._v("url")]),t._v(" string as the first argument. The second argument (optional) can be in 2 forms.")]),t._v(" "),n("p",[t._v("Firstly, "),n("code",[t._v("input")]),t._v(" can be passed as a single hash. This hash can simply be the "),n("code",[t._v("input")]),t._v(" of the "),n("code",[t._v("execute")]),t._v(" or "),n("code",[t._v("poll")]),t._v(" argument, such as the following:")]),t._v(" "),n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[t._v("execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.some_api_endpoint.com/api"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),n("p",[t._v("The hash can also be formed before like this:")]),t._v(" "),n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[t._v("execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  params "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.some_api_endpoint.com/api"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),n("p",[t._v("The Workato SDK framework processes this hash value and transforms it into the respective data format. For GET, DELETE OPTIONS requests, the hash data is converted to URL query parameters.")]),t._v(" "),n("p",[t._v("For POST, PUT and PATCH, the payload is formed into the request body into a format that you specify. Learn how to work with the various data formats "),n("router-link",{attrs:{to:"/developing-connectors/sdk/data-format.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),n("p",[t._v("The other method of passing request data is as a series of key/value pairs.")]),t._v(" "),n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[t._v("execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.some_api_endpoint.com/api"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" email"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),n("p",[t._v("All arguments after the first will be transformed into request data. In this case, since the default data format is JSON, the following request body is formed:")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ee Shan"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eeshan@workato.com"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("For a GET request, the following URL parameters are formed.")]),t._v(" "),n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[t._v("execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.some_api_endpoint.com/api"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" email"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),n("p",[t._v("The full request URL string will be:")]),t._v(" "),n("p",[n("code",[t._v("https://www.some_api_endpoint.com/api?name%3DEe%20Shan%26email%3Deeshan%40workato.com")])]),t._v(" "),n("blockquote",[n("p",[t._v("Any other forms of authentication will also be appended. For the case of the example above, we have assumed no authentication is needed. Authentications are applied through the "),n("code",[t._v("apply")]),t._v(" block defined in the "),n("code",[t._v("connection")]),t._v(" object.")])]),t._v(" "),n("h3",{attrs:{id:"testing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),n("p",[t._v("Verify your HTTP requests directly on the code editor UI by heading over to the "),n("code",[t._v("Network")]),t._v(" tab. Over there you'll be able to see all HTTP requests sent during the test run of the action or trigger.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(1289),alt:"Network tab",width:"1266",height:"1226"}}),t._v(" "),n("center",[t._v("View HTTP calls directly from the network tab")])],1),t._v(" "),n("h2",{attrs:{id:"post-response-processing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post-response-processing"}},[t._v("#")]),t._v(" Post-response processing")]),t._v(" "),n("h3",{attrs:{id:"default-response-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#default-response-data"}},[t._v("#")]),t._v(" Default response data")]),t._v(" "),n("p",[t._v("By default, all HTTP verb methods will return the response body of the request. For example, the following request creates a user in "),n("strong",[t._v("Okta")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[t._v("execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  response "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/v1/users"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" profile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" login"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" displayName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),n("p",[n("code",[t._v("response")]),t._v(" variable will a hash that looks like this:")]),t._v(" "),n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00ub0oNGTSWTBKOLGLNR"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STAGED"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"created"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-13T21:36:25.344Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"activated"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statusChanged"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lastLogin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lastUpdated"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"22018-03-13T21:36:25.344Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"passwordChanged"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"profile"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firstName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ee Shan"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lastName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sim"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eeshan@workato.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"login"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eeshan@workato.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mobilePhone"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" null\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"credentials"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"provider"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OKTA"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OKTA"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"response-handling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response-handling"}},[t._v("#")]),t._v(" Response handling")]),t._v(" "),n("p",[n("code",[t._v("after_response")]),t._v(" is an optional block that can be chained to the HTTP verb methods to handle the various parts of a HTTP response. Let's take a look at an example, again using the "),n("strong",[t._v("Okta")]),t._v(" API.")]),t._v(" "),n("p",[t._v("When a request is sent to the "),n("a",{attrs:{href:"https://developer.okta.com/docs/api/resources/users#list-all-users",target:"_blank",rel:"noopener noreferrer"}},[t._v("List all users"),n("OutboundLink")],1),t._v(" endpoint, the truncated response looks like this.")]),t._v(" "),n("div",{staticClass:"language-http extra-class"},[n("pre",{pre:!0,attrs:{class:"language-http"}},[n("code",[n("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("200 OK")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/json\n"),n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Link:")]),t._v(' <https://workatotest.okta.com/api/v1/users?limit=200>; rel="self"'),n("span",{pre:!0,attrs:{class:"token application/json"}},[t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00utti9t3j1xO9jOm2p6"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACTIVE"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-15T08:23:05.000Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"activated"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusChanged"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-15T08:39:39.000Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastLogin"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-15T08:39:40.000Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-15T08:39:40.000Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"passwordChanged"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-15T08:39:39.000Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"profile"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"credentials"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_links"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),n("p",[t._v("This response can be broken down into 3 parts. The HTTP response "),n("strong",[t._v("code")]),t._v(", "),n("strong",[t._v("header")]),t._v(" and "),n("strong",[t._v("body")]),t._v(".")]),t._v(" "),n("p",[n("code",[t._v("after_response")]),t._v(" can be used to handle all these parts of the HTTP response. Suppose I have an action that lists all users and outputs the entire response, including the link to the existing page from the header.")]),t._v(" "),n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[t._v("execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/v1/users"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("after_response "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      next_link"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      users"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" body\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),n("p",[t._v("The resultant output of this action will contain all 3 parts of the response.")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next_link"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<https://workatotest.okta.com/api/v1/users?limit=200>; rel=\\"self\\""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00utti9t3j1xO9jOm2p6"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACTIVE"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-15T08:23:05.000Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"activated"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusChanged"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-15T08:39:39.000Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastLogin"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-15T08:39:40.000Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-15T08:39:40.000Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"passwordChanged"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-15T08:39:39.000Z"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"profile"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"credentials"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_links"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"testing-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#testing-2"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),n("p",[t._v("You can easily verify this while developing your custom connector. When you include post-request handling, the output tab should reflect the expected JSON object.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(1290),alt:"Output with response code and header values",width:"551",height:"393"}}),t._v(" "),n("center",[t._v("Output with response code and header values*")])],1),t._v(" "),n("h3",{attrs:{id:"next-section"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-section"}},[t._v("#")]),t._v(" Next section")]),t._v(" "),n("p",[t._v("Check out our object_definitions section, which details how you can use it to reduce the amount of redundant code in your connector. We also go through the different types of parameters you can declare in each input and output field hash. "),n("router-link",{attrs:{to:"/developing-connectors/sdk/object-definition.html"}},[t._v("Go to our object definitions documentation")]),t._v(" or check our our "),n("router-link",{attrs:{to:"/developing-connectors/sdk/best-practices.html"}},[t._v("best practices")]),t._v(" for some tips.")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);