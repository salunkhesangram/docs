(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{2559:function(t,e,r){"use strict";r.r(e);var a=r(0),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"workato-api-1-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workato-api-1-0"}},[t._v("#")]),t._v(" Workato API 1.0")]),t._v(" "),r("p",[t._v("Workato's REST API provides you with access to Workato resources. With this, you can manage recipes, connections and jobs programmatically to expand the functionality of your Workato account. This API also allows you to author new recipes and modify existing ones.")]),t._v(" "),r("h2",{attrs:{id:"authentication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),r("p",[t._v("All API requests must contain:")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("X-USER-TOKEN")]),t._v(" and "),r("code",[t._v("X-USER-EMAIL")]),t._v(" in the request headers\nOR")]),t._v(" "),r("li",[r("code",[t._v("user_token")]),t._v(" & "),r("code",[t._v("user_email")]),t._v(" in the query parameters")])]),t._v(" "),r("p",[t._v("The "),r("code",[t._v("user_token")]),t._v("/"),r("code",[t._v("X-USER-TOKEN")]),t._v(" can be found in your "),r("a",{attrs:{href:"https://www.workato.com/users/current/edit#api_key",target:"_blank",rel:"noopener noreferrer"}},[t._v("settings page"),r("OutboundLink")],1),t._v(". Alternatively, navigate to your account settings by clicking on "),r("code",[t._v("Account Settings")]),t._v(" in the dropdown of the top right of your homepage in Workato. Your API key can be found in the left navigation panel in the subsequent page.")]),t._v(" "),r("h3",{attrs:{id:"supported-formats"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-formats"}},[t._v("#")]),t._v(" Supported Formats")]),t._v(" "),r("p",[t._v("Workato API supports sending request body with the "),r("code",[t._v("application/json")]),t._v(" content-type. All replies are also encoded in "),r("code",[t._v("application/json; charset=utf-8")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"http-response-codes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-response-codes"}},[t._v("#")]),t._v(" HTTP response codes")]),t._v(" "),r("div",{staticClass:"api_input"}),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Description")]),t._v(" "),r("th",[t._v("Sample reply")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("200")])]),t._v(" "),r("td",[t._v("Success")]),t._v(" "),r("td",[r("code",[t._v('{"Success": true}')])])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("400")])]),t._v(" "),r("td",[t._v("Bad request")]),t._v(" "),r("td",[r("code",[t._v('{"message": "Bad request"}')])])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("401")])]),t._v(" "),r("td",[t._v("Unauthorized")]),t._v(" "),r("td",[r("code",[t._v('{"message": "Unauthorized"}')])])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("404")])]),t._v(" "),r("td",[t._v("Not found")]),t._v(" "),r("td",[r("code",[t._v('{"message": "Not found"}')])])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("500")])]),t._v(" "),r("td",[t._v("Server error")]),t._v(" "),r("td",[r("code",[t._v('{"message":"Server error","id":"3188c2d0-29a4-4080-908e-582e7ed82580"}')])])])])]),t._v(" "),r("h2",{attrs:{id:"connectors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connectors"}},[t._v("#")]),t._v(" Connectors")]),t._v(" "),r("div",{staticClass:"api_quick_reference"}),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Resource")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/adapters.html#list-connector-metadata"}},[t._v("/api/integrations")])],1),t._v(" "),r("td",[t._v("Query connector metadata.")])])])]),t._v(" "),r("h2",{attrs:{id:"connections"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[t._v("#")]),t._v(" Connections")]),t._v(" "),r("div",{staticClass:"api_quick_reference"}),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Resource")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/connections.html"}},[t._v("/api/connections")])],1),t._v(" "),r("td",[t._v("List connections belonging to user.")])])])]),t._v(" "),r("h2",{attrs:{id:"jobs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[t._v("#")]),t._v(" Jobs")]),t._v(" "),r("div",{staticClass:"api_quick_reference"}),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Resource")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/jobs.html#list-jobs-from-a-recipe"}},[t._v("/api/recipes/:recipe_id/jobs")])],1),t._v(" "),r("td",[t._v("List jobs belonging to recipe.")])])])]),t._v(" "),r("h2",{attrs:{id:"managed-users"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#managed-users"}},[t._v("#")]),t._v(" Managed Users")]),t._v(" "),r("div",{staticClass:"api_quick_reference"}),t._v(" "),r("div",{staticClass:"api_quick_reference"}),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Resource")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("POST")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/managed-users.html#create-customer-account"}},[t._v("/api/managed_users")])],1),t._v(" "),r("td",[t._v("Create customer account.")])]),t._v(" "),r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/managed-users.html#get-customer-account"}},[t._v("/api/managed_users/:id")])],1),t._v(" "),r("td",[t._v("Get customer account.")])]),t._v(" "),r("tr",[r("td",[t._v("PUT")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/managed-users.html#upgrade-customer-account"}},[t._v("/api/managed_users/:id/upgrade")])],1),t._v(" "),r("td",[t._v("Upgrade customer account.")])]),t._v(" "),r("tr",[r("td",[t._v("PUT")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/managed-users.html#downgrade-customer-account"}},[t._v("/api/managed_users/:id/downgrade")])],1),t._v(" "),r("td",[t._v("Downgrade customer account.")])]),t._v(" "),r("tr",[r("td",[t._v("POST")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/managed-users.html#add-member-to-customer-account"}},[t._v("/api/managed_users/:id/member")])],1),t._v(" "),r("td",[t._v("Add member to customer account.")])]),t._v(" "),r("tr",[r("td",[t._v("DELETE")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/managed-users.html#remove-member-from-customer-account"}},[t._v("/api/managed_users/:id/member")])],1),t._v(" "),r("td",[t._v("Remove member from customer account.")])]),t._v(" "),r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/managed-users.html#list-customer-connections"}},[t._v("/api/managed_users/:id/connections")])],1),t._v(" "),r("td",[t._v("List customer connections.")])])])]),t._v(" "),r("h2",{attrs:{id:"recipes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipes"}},[t._v("#")]),t._v(" Recipes")]),t._v(" "),r("div",{staticClass:"api_quick_reference"}),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Resource")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipes.html#get-recipe-details"}},[t._v("api/recipes/:id")])],1),t._v(" "),r("td",[t._v("Get recipe details.")])]),t._v(" "),r("tr",[r("td",[t._v("POST")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipes.html#create-a-recipe"}},[t._v("api/recipes")])],1),t._v(" "),r("td",[t._v("Create recipe.")])]),t._v(" "),r("tr",[r("td",[t._v("PUT")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipes.html#update-a-recipe"}},[t._v("api/recipes/:id")])],1),t._v(" "),r("td",[t._v("Update recipe.")])]),t._v(" "),r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipes.html#list-recipes-belonging-to-user"}},[t._v("api/recipes")])],1),t._v(" "),r("td",[t._v("List recipes belonging to user.")])]),t._v(" "),r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipes.html#search-for-public-recipes"}},[t._v("api/recipes/search")])],1),t._v(" "),r("td",[t._v("Search for public recipes.")])]),t._v(" "),r("tr",[r("td",[t._v("PUT")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipes.html#start-recipe"}},[t._v("api/recipes/:id/start")])],1),t._v(" "),r("td",[t._v("Start recipe.")])]),t._v(" "),r("tr",[r("td",[t._v("PUT")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipes.html#stop-recipe"}},[t._v("api/recipes/:id/stop")])],1),t._v(" "),r("td",[t._v("Stop recipe.")])]),t._v(" "),r("tr",[r("td",[t._v("DELETE")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipes.html#delete-recipe"}},[t._v("api/recipes/:id")])],1),t._v(" "),r("td",[t._v("Delete recipe.")])])])]),t._v(" "),r("h2",{attrs:{id:"user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[t._v("#")]),t._v(" User")]),t._v(" "),r("div",{staticClass:"api_quick_reference"}),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Resource")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/users.html#get-user-details"}},[t._v("api/users/me")])],1),t._v(" "),r("td",[t._v("Get details of authenticated user.")])])])]),t._v(" "),r("h2",{attrs:{id:"recipe-lifecycle-management"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipe-lifecycle-management"}},[t._v("#")]),t._v(" Recipe lifecycle management")]),t._v(" "),r("div",{staticClass:"api_quick_reference"}),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Resource")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("POST")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipe-lifecycle-management.html#export-package-based-on-a-manifest"}},[t._v("api/packages/export/:manifest_id")])],1),t._v(" "),r("td",[t._v("Export package based on a manifest.")])]),t._v(" "),r("tr",[r("td",[t._v("POST")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipe-lifecycle-management.html#import-package-into-a-folder"}},[t._v("api/packages/import/:folder_id")])],1),t._v(" "),r("td",[t._v("Import package into a folder.")])]),t._v(" "),r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipe-lifecycle-management.html#get-package-by-id"}},[t._v("api/packages/:id")])],1),t._v(" "),r("td",[t._v("Get package by ID.")])]),t._v(" "),r("tr",[r("td",[t._v("GET")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/workato-api/recipe-lifecycle-management.html#download-package"}},[t._v("api/packages/:id/download")])],1),t._v(" "),r("td",[t._v("Download package.")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);