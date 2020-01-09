(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{119:function(e,t,A){e.exports=A.p+"assets/img/connection-error.ccf20a9d.png"},2074:function(e,t,A){"use strict";A.r(t);var n=A(0),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"app-connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-connections"}},[e._v("#")]),e._v(" App connections")]),e._v(" "),n("p",[e._v("For every app your recipe interacts with, Workato needs to be authorized to communicate with the apps on your behalf. Workato typically uses the app's API, and it may require OAuth based authorization, API keys, etc.")]),e._v(" "),n("p",[e._v("This authorization is referred to as an "),n("strong",[e._v("app connection")]),e._v(".")]),e._v(" "),n("p",[e._v("In many cases recipes will require a valid app connection before triggers and actions can be configured, to retrieve custom objects and fields, picklist values and other information ('meta-data') that helps with recipe construction.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:A(403),alt:"Unconnected Salesforce action",width:"1121",height:"564"}}),e._v(" "),n("em",[e._v("Recipe prompts user to connect to their Salesforce organization. You will notice that the picklist is greyed out. This is because the recipe needs a valid connection to Salesforce to get the list of available Salesforce objects.")])],1),e._v(" "),n("p",[e._v("A connection is created when a user authenticates with the app via Workato, and gives Workato permission to access the data. Each connection should correspond to one app instance, hence multiple recipes can and should utilize the same connection if working with the same app instance.")]),e._v(" "),n("h2",{attrs:{id:"authentication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),n("p",[e._v("Authentication (or authorization) usually occurs in the following standard ways, although there are some apps with custom authentication flows.")]),e._v(" "),n("ul",[n("li",[e._v("OAuth2")]),e._v(" "),n("li",[e._v("OAuth1 (and variations)")]),e._v(" "),n("li",[e._v("Basic authentication")]),e._v(" "),n("li",[e._v("API key or secret")])]),e._v(" "),n("p",[e._v("In each of the highlighted authentication flows, an app user has to authorize Workato with the permission to access app data. The exact permissions Workato will get to read from and write to the app usually corresponds with the permissions of the connected app user.")]),e._v(" "),n("p",[e._v("For more information on connecting to a specific app, refer to the specific "),n("router-link",{attrs:{to:"/connectors.html"}},[e._v("app connector documentation")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"example-authentication-flow-for-salesforce"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-authentication-flow-for-salesforce"}},[e._v("#")]),e._v(" Example: Authentication flow for Salesforce")]),e._v(" "),n("p",[e._v("The following recipe requires both Salesforce and a Zendesk connections, which are both OAuth2. The "),n("strong",[e._v("Connection")]),e._v(" tab within the recipe shows further details about the app connections.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:A(404),alt:"Example recipe",width:"1035",height:"513"}}),e._v(" "),n("em",[e._v("Recipe syncing new/updated Salesforce accounts to Zendesk as organizations. "),n("a",{attrs:{href:"https://www.workato.com/recipes/480360",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example recipe"),n("OutboundLink")],1)])],1),e._v(" "),n("p",[e._v("The following shows the "),n("strong",[e._v("Connections")]),e._v(" tab. Zendesk has been connected, but the Salesforce connector has no connection established yet.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:A(405),alt:"Unconnected Salesforce",width:"1084",height:"801"}}),e._v(" "),n("em",[e._v("Recipe without a Salesforce connection established")])],1),e._v(" "),n("p",[e._v("Clicking on the "),n("strong",[e._v("Connect")]),e._v(" button generates a popup that requests for Salesforce login credentials. Because Salesforce utilizes the standard OAuth2 authentication flow, usernames and passwords are provided only to Salesforce. Providing these credentials assure Salesforce that the user is giving permission for Workato to access their Salesforce data.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:A(406),alt:"Salesforce connection popup",width:"1059",height:"723"}}),e._v(" "),n("em",[e._v("OAuth2 authentication popup for Salesforce")])],1),e._v(" "),n("p",[e._v("After providing credentials, Salesforce will show up as connected. Now the recipe can use this connection for construction and running.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:A(407),alt:"Connected Salesforce",width:"1051",height:"807"}}),e._v(" "),n("em",[e._v("Recipe with Salesforce and Zendesk connections established")])],1),e._v(" "),n("h2",{attrs:{id:"integration-user"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#integration-user"}},[e._v("#")]),e._v(" Integration user")]),e._v(" "),n("p",[e._v("Workato recipes typically automate workflows for a company or a department on behalf of many users. i.e. the integrations will work no matter who created an invoice or a ticket. This requires that the connection used has broader permission that spans multiple users. As a result, the connected user is typically a special integration user created just for integration purposes.")]),e._v(" "),n("p",[e._v("For example:")]),e._v(" "),n("ul",[n("li",[e._v("A recipe that moves new accounts in Salesforce to Zendesk as new organizations will need read access to Salesforce accounts and write access for Zendesk organizations.")]),e._v(" "),n("li",[e._v("A recipe that moves new cases in Salesforce to JIRA as new issues will need read access to Salesforce cases and write access for JIRA issues.")])]),e._v(" "),n("p",[e._v("Apps have different granularity when it comes to defining user roles and permissions. Refer to the specific connector documentation "),n("router-link",{attrs:{to:"/connectors.html"}},[e._v("here")]),e._v(" for more information on required permissions to connect to the app.")],1),e._v(" "),n("h2",{attrs:{id:"using-connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-connections"}},[e._v("#")]),e._v(" Using connections")]),e._v(" "),n("p",[e._v("Typically a company may only have a single instance of an app and they may have another instance a sandbox for testing, etc. So a user would need just one connection for multiple recipes that work with the same app instance.")]),e._v(" "),n("p",[e._v("In cases whereby there are more than one app instance to connect to, e.g. when working with sandboxes and production organizations or teams, multiple connections should be created, with each connection authenticated with each separate instance.")]),e._v(" "),n("p",[e._v("Most Workato connectors allow only one connection to an app within a recipe.There are some connectors which allows you to work with two app instances within the same recipe.")]),e._v(" "),n("p",[e._v("Here is an example where the same recipe works with two Saleforce instances i.e. primary and secondary connectors.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:A(408),alt:"Secondary Salesforce connections",width:"600",height:"422"}}),e._v(" "),n("em",[e._v("Recipe with primary and secondary Salesforce connectors. "),n("a",{attrs:{href:"https://www.workato.com/recipes/487648",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example recipe"),n("OutboundLink")],1)])],1),e._v(" "),n("p",[e._v("The recipe requires two separate Salesforce connections.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:A(409),alt:"Secondary Salesforce connections",width:"1188",height:"459"}}),e._v(" "),n("em",[e._v("Primary and secondary Salesforce connections")])],1),e._v(" "),n("p",[e._v("Refer to the "),n("router-link",{attrs:{to:"/features/secondary-connectors.html"}},[e._v("secondary connectors article")]),e._v(" to find out more.")],1),e._v(" "),n("h2",{attrs:{id:"app-connection-errors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-connection-errors"}},[e._v("#")]),e._v(" App connection errors")]),e._v(" "),n("p",[e._v("On occasions, app connections can become invalid due to several reasons:")]),e._v(" "),n("ul",[n("li",[e._v("app credentials were changed and the connection was not updated correspondingly in Workato")]),e._v(" "),n("li",[e._v("connected user doesn't have the right set of permissions to read/write selected records")]),e._v(" "),n("li",[e._v("permissions of the connected user was changed to a reduced scope")])]),e._v(" "),n("p",[e._v("In such cases, reconnecting or verifying that the connected user has permissions to read/write records used in the recipes should successfully re-establish the connection.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:A(119),alt:"Design-time errors for app connection errors",width:"948",height:"321"}}),e._v(" "),n("em",[e._v("Design-time errors for app connection errors")])],1)])}),[],!1,null,null,null);t.default=o.exports},403:function(e,t,A){e.exports=A.p+"assets/img/unconnected-salesforce-action.b57364b8.png"},404:function(e,t,A){e.exports=A.p+"assets/img/example-recipe.2c287374.png"},405:function(e,t,A){e.exports=A.p+"assets/img/unconnected-salesforce.9dd17884.png"},406:function(e,t,A){e.exports=A.p+"assets/img/salesforce-connection-popup.b85bb425.png"},407:function(e,t,A){e.exports=A.p+"assets/img/connected-salesforce.c57d1632.png"},408:function(e,t,A){e.exports=A.p+"assets/img/primary-secondary-connectors.9841f6fc.gif"},409:function(e,t){e.exports="data:image/png;base64,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"}}]);