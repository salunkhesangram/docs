(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{1106:function(t,e,r){t.exports=r.p+"assets/img/search-projects-action.16d83a58.png"},2328:function(t,e,r){"use strict";r.r(e);var o=r(0),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"wrike-search-projects-action"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wrike-search-projects-action"}},[t._v("#")]),t._v(" Wrike - Search projects action")]),t._v(" "),o("p",[t._v("Projects are one of the main ways to organize, manage, and report on work within Wrike. In essence, Wrike projects are folders with additional properties.")]),t._v(" "),o("p",[t._v("This action retrieves a list of projects that matches your search criteria. Only records in your Wrike instance that match all the criteria will be returned. A maximum of 100 projects can be retrieved per job.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(1106),alt:"Search projects action",width:"1249",height:"762"}}),t._v(" "),o("em",[t._v("Search projects action")])],1),t._v(" "),o("h3",{attrs:{id:"input-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("thead",[o("tr",[o("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Custom field list")]),t._v(" "),o("td",[t._v("\n        Select a custom field to open the corresponding input fields. This will be blank by default.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Metadata")]),t._v(" "),o("td",[t._v("\n        The metadata details to use in your search. You can define metadata with a metadata source list or manually input the "),o("code",[t._v("Key")]),t._v("/"),o("code",[t._v("Value")]),t._v(" pair information.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Permalink")]),t._v(" "),o("td",[t._v("\n        The link to open the project in a web workspace. This is only accessible if the user has the appropriate access.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Descendants")]),t._v(" "),o("td",[t._v("\n        Select "),o("code",[t._v("Yes")]),t._v(" to add all descendant projects to search scope, otherwise select "),o("code",[t._v("No")]),t._v(".\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Retrieve deleted projects only")]),t._v(" "),o("td",[t._v("\n        Select "),o("code",[t._v("True")]),t._v(" to return deleted projects only, otherwise select "),o("code",[t._v("False")]),t._v(".\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Updated date")]),t._v(" "),o("td",[t._v("\n        Retrieve projects created after this date.\n      ")])])])]),t._v(" "),o("h3",{attrs:{id:"output-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("thead",[o("tr",[o("th",{attrs:{width:"25%"}},[t._v("Output field")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Project ID")]),t._v(" "),o("td",[t._v("\n        The ID of the project.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Account ID")]),t._v(" "),o("td",[t._v("\n        The ID of the account.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Title")]),t._v(" "),o("td",[t._v("\n        The title of the project.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Updated date")]),t._v(" "),o("td",[t._v("\n        The date this project was updated.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Created date")]),t._v(" "),o("td",[t._v("\n        The date this project was created.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Description")]),t._v(" "),o("td",[t._v("\n        The description of the project. Will be blank if not specified.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Users who share the project")]),t._v(" "),o("td",[t._v("\n        The list of users who share the project.\n        "),o("table",[o("tbody",[o("tr",[o("td",[t._v("User ID")]),t._v(" "),o("td",[t._v("The ID of the user who shares this project.")])]),t._v(" "),o("tr",[o("td",[t._v("List size")]),t._v(" "),o("td",[t._v("The size of the list, corresponding to the number of users retrieved.")])])])])])]),t._v(" "),o("tr",[o("td",[t._v("Parent project")]),t._v(" "),o("td",[t._v("\n        The list of parent projects of this project.\n        "),o("table",[o("tbody",[o("tr",[o("td",[t._v("Project ID")]),t._v(" "),o("td",[t._v("The project ID of the parent project.")])]),t._v(" "),o("tr",[o("td",[t._v("List size")]),t._v(" "),o("td",[t._v("The size of the list, corresponding to the number of parent projects retrieved.")])])])])])]),t._v(" "),o("tr",[o("td",[t._v("Child project")]),t._v(" "),o("td",[t._v("\n        The list of child projects to this project.\n        "),o("table",[o("tbody",[o("tr",[o("td",[t._v("Project ID")]),t._v(" "),o("td",[t._v("The project ID of the child project.")])]),t._v(" "),o("tr",[o("td",[t._v("List size")]),t._v(" "),o("td",[t._v("The size of the list, corresponding to the number of child projects retrieved.")])])])])])]),t._v(" "),o("tr",[o("td",[t._v("Super parent project")]),t._v(" "),o("td",[t._v("\n        The list of super parent project to this project.\n        "),o("table",[o("tbody",[o("tr",[o("td",[t._v("Project ID")]),t._v(" "),o("td",[t._v("The project ID of the super parent project.")])]),t._v(" "),o("tr",[o("td",[t._v("List size")]),t._v(" "),o("td",[t._v("The size of the list, corresponding to the number of super parent projects retrieved.")])])])])])]),t._v(" "),o("tr",[o("td",[t._v("Scope")]),t._v(" "),o("td",[t._v("\n        The scope of the project.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Has attachments")]),t._v(" "),o("td",[t._v("\n        Indicates if the project has attachments.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Permalink")]),t._v(" "),o("td",[t._v("\n        The link to open the project in a web workspace. This is only accessible if the user has the appropriate access.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Workflow ID")]),t._v(" "),o("td",[t._v("\n        The ID of the project workflow.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Metadata")]),t._v(" "),o("td",[t._v("\n        The metadata of this project. The metadata list size corresponds to the number of metadata entries retrieved.\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("Project")]),t._v(" "),o("td",[t._v("\n        The project properties of this project.\n        "),o("table",[o("tbody",[o("tr",[o("td",[t._v("Author")]),t._v(" "),o("td",[t._v("The author who created the project.")])]),t._v(" "),o("tr",[o("td",[t._v("Owner ID")]),t._v(" "),o("td",[t._v("\n                The list of IDs of project owners.\n                "),o("table",[o("tbody",[o("tr",[o("td",[t._v("User ID")]),t._v(" "),o("td",[t._v("The user ID of the project owner.")])]),t._v(" "),o("tr",[o("td",[t._v("List size")]),t._v(" "),o("td",[t._v("The size of the list, corresponding to the number of project owners retrieved.")])])])])])]),t._v(" "),o("tr",[o("td",[t._v("Status")]),t._v(" "),o("td",[t._v("The status of the project.")])]),t._v(" "),o("tr",[o("td",[t._v("Start date")]),t._v(" "),o("td",[t._v("The date this project was started.")])]),t._v(" "),o("tr",[o("td",[t._v("End date")]),t._v(" "),o("td",[t._v("The date this project was ended.")])]),t._v(" "),o("tr",[o("td",[t._v("Created date")]),t._v(" "),o("td",[t._v("The date this project was created.")])]),t._v(" "),o("tr",[o("td",[t._v("Completed date")]),t._v(" "),o("td",[t._v("The date this project was completed.")])])])])])]),t._v(" "),o("tr",[o("td",[t._v("Custom fields")]),t._v(" "),o("td",[t._v("\n        Includes data from custom field(s).\n      ")])]),t._v(" "),o("tr",[o("td",[t._v("List size")]),t._v(" "),o("td",[t._v("\n        The size of the list, corresponding to the number of projects retrieved.\n      ")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);