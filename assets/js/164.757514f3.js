(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{2071:function(e,t,n){"use strict";n.r(t);var a=n(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"managing-api-clients-and-access-policies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#managing-api-clients-and-access-policies"}},[e._v("#")]),e._v(" Managing API Clients and Access Policies")]),e._v(" "),a("p",[e._v("API owners can manage and monitor clients' usage of their APIs from\nthe API Platform page.")]),e._v(" "),a("p",[e._v("The API Platform tool is accessible from the Tools menu. Once in the main API Platform page, select the "),a("strong",[e._v("Clients")]),e._v(" tab to create and manage API clients. A typical screen would look like this:")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:n(399),alt:"Create API Client",width:"1079",height:"820"}}),e._v(" "),a("em",[e._v("Create API Client")])],1),e._v(" "),a("p",[e._v("A client must have a name, and may have a description and an associated\nlogo or image.")]),e._v(" "),a("p",[e._v("Note that there is actually no requirement that an API client be a human individual. A client is associated with an API token, which grants access to a certain group of APIs, under the control of certain policies.  The actual API caller might be a script or automated program, rather than a person. However, as a best practice, it is recommended that you distribute one API token per person you permit to access your API, so that you can identify the users who are making calls to your API endpoints.")]),e._v(" "),a("p",[e._v("Once a client is created in the "),a("strong",[e._v("Client")]),e._v(" tab, the API owner will then be prompted to create a new access profile for that client.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:n(400),alt:"New Access Profile",width:"808",height:"963"}}),e._v(" "),a("em",[e._v("New Access Profile")])],1),e._v(" "),a("p",[e._v("The access profile screen has the following fields:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Field name")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Name"),a("br"),a("em",[e._v("(Required)")])]),e._v(" "),a("td",[e._v("Provide a meaningful access profile name.")])]),e._v(" "),a("tr",[a("td",[e._v("API collections"),a("br"),a("em",[e._v("(Required)")])]),e._v(" "),a("td",[e._v("One or more API collections to which the client has access.")])]),e._v(" "),a("tr",[a("td",[e._v("Policy")]),e._v(" "),a("td",[e._v("The policy that applies to this client.")])]),e._v(" "),a("tr",[a("td",[e._v("IP Whitelist")]),e._v(" "),a("td",[e._v("One or more IP addresses to be whitelisted. When this is set, only requests initiated from these addresses will be allowed: all other access will be denied.")])]),e._v(" "),a("tr",[a("td",[e._v("Authentication method"),a("br"),a("em",[e._v("(Required)")])]),e._v(" "),a("td",[e._v("This can be an Auth Token or a JSON Web Token (JWT).")])])])]),e._v(" "),a("p",[e._v('If "JSON Web Token (JWT)" is selected there are two additional fields available: '),a("strong",[e._v("signing method")]),e._v(", and "),a("strong",[e._v("secret or key")]),e._v(". See "),a("router-link",{attrs:{to:"/api-mgmt/access-tokens.html"}},[e._v("Access Tokens")]),e._v(" for details.")],1),e._v(" "),a("p",[e._v("Once the access profile fields have been filled in, click on "),a("strong",[e._v("Add profile")]),e._v(" to create the client and save that client's associated profile. After this step, the screen will look something like this:")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:n(401),alt:"API client creation",width:"1035",height:"567"}}),e._v(" "),a("em",[e._v("API client creation")])],1),e._v(" "),a("p",[e._v("Note the "),a("strong",[e._v("API token")]),e._v(" field. A unique API token is generated for each client. This token is a long string of characters. It needs to be supplied to the client so that the client can connect to the API. Treat this API key as confidential information: it should be known only to the API owner and the client.")]),e._v(" "),a("p",[e._v("An API token can be revoked, and a new one issued, by clicking on the "),a("strong",[e._v("Refresh")]),e._v(" button next to the token.")]),e._v(" "),a("p",[e._v("A client can be "),a("strong",[e._v("Disabled")]),e._v(" or "),a("strong",[e._v("Enabled")]),e._v(". A disabled client cannot call any APIs. Moving the slider right will switch the client's status to "),a("strong",[e._v("Enabled")]),e._v(", after which he/she will be allowed to make API calls.")])])}),[],!1,null,null,null);t.default=i.exports},399:function(e,t,n){e.exports=n.p+"assets/img/api-new-client.fe4a6c80.png"},400:function(e,t,n){e.exports=n.p+"assets/img/api-new-access-profile.47fc05e8.png"},401:function(e,t,n){e.exports=n.p+"assets/img/api-client-creation.ff653902.png"}}]);