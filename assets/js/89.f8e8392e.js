(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1499:function(e,t,a){e.exports=a.p+"assets/img/run-through-list-for-highest-arr.a21e9210.png"},1500:function(e,t,a){e.exports=a.p+"assets/img/variables-by-workato.8ca38fe2.png"},1501:function(e,t,a){e.exports=a.p+"assets/img/create-variable-action.718707dd.png"},1502:function(e,t,a){e.exports=a.p+"assets/img/update-variable-action.0247b1ac.png"},1503:function(e,t,a){e.exports=a.p+"assets/img/retrieve-name-from-png.b032a04e.png"},1504:function(e,t,a){e.exports=a.p+"assets/img/create-list-action.bd92bcd1.png"},1505:function(e,t,a){e.exports=a.p+"assets/img/add-new-field.2d0277d5.png"},1506:function(e,t,a){e.exports=a.p+"assets/img/add-item-to-list-action.2065142e.png"},2474:function(e,t,a){"use strict";a.r(t);var i=a(0),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"variables-by-workato"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#variables-by-workato"}},[e._v("#")]),e._v(" Variables by Workato")]),e._v(" "),i("p",[e._v("Workato variable is a user-declared "),i("router-link",{attrs:{to:"/recipes/data-pills-and-mapping.html"}},[e._v("datapill")]),e._v(" that contains a data value. These user-declared variables are different from a standard datapill in that your declared variables are mutable - the value of the variable can be changed within a recipe.")],1),e._v(" "),i("p",[e._v("The lifetime of a variable is for the duration of a single job (job scope) - there is no persistence, and no mechanism can access this across different jobs.")]),e._v(" "),i("p",[e._v("Workato variables are typed. In order to use variables, you will first have to declare it using the "),i("a",{attrs:{href:"#create-variable-action"}},[e._v("create variable")]),e._v(" action. To update the variable, use "),i("a",{attrs:{href:"#update-variable"}},[e._v("update variable")]),e._v(" action.")]),e._v(" "),i("h3",{attrs:{id:"examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),i("p",[e._v("If you want to find a particular entry within a report - the entry with the "),i("em",[e._v("largest ARR")]),e._v(".")]),e._v(" "),i("ol",[i("li",[e._v("Create a variable called "),i("code",[e._v("ARR")]),e._v(".")]),e._v(" "),i("li",[e._v("Run the "),i("router-link",{attrs:{to:"/recipes/steps.html#repeat-step"}},[e._v("for each")]),e._v(" action, and update "),i("code",[e._v("ARR")]),e._v(" whenever it finds a higher value.")],1),e._v(" "),i("li",[e._v("Subsequently, use the "),i("code",[e._v("ARR")]),e._v(" value to call up that specific entry.")])]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(1499),alt:"Iterate through the report for highest ARR",width:"1269",height:"370"}}),e._v(" "),i("em",[e._v("Iterate through the report for highest ARR")])],1),e._v(" "),i("h3",{attrs:{id:"connection-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#connection-setup"}},[e._v("#")]),e._v(" Connection setup")]),e._v(" "),i("p",[e._v("No connection setup is required. Simply select "),i("strong",[e._v("App")]),e._v(" > "),i("strong",[e._v("Variables by Workato")]),e._v(" to get started.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(1500),alt:"Variables by Workato",width:"1269",height:"370"}}),e._v(" "),i("em",[e._v("Variables by Workato")])],1),e._v(" "),i("h2",{attrs:{id:"create-variable-action"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#create-variable-action"}},[e._v("#")]),e._v(" Create variable action")]),e._v(" "),i("p",[e._v("This action creates a variable in the specified data type. You should configure this variable to match the data type that it will be used for (e.g. "),i("code",[e._v("integer")]),e._v(", "),i("code",[e._v("string")]),e._v(").")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(1501),alt:"Create variable",width:"1265",height:"739"}}),e._v(" "),i("em",[e._v("Create variable")])],1),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Input field")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Variable name")]),e._v(" "),i("td",[e._v("The name of the variable.")])]),e._v(" "),i("tr",[i("td",[e._v("Variable type")]),e._v(" "),i("td",[e._v("The "),i("router-link",{attrs:{to:"/recipes/data-pills-and-mapping.html#data-types"}},[e._v("data type")]),e._v(" of the variable.")],1)]),e._v(" "),i("tr",[i("td",[e._v("Default value")]),e._v(" "),i("td",[e._v("The default value of the variable. Leave this blank to set the default value as "),i("code",[e._v("null")]),e._v(".")])])])]),e._v(" "),i("h3",{attrs:{id:"update-variable"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#update-variable"}},[e._v("#")]),e._v(" Update variable")]),e._v(" "),i("p",[e._v("This action updates an existing variable. You can only update variables managed by "),i("strong",[e._v("Variables by Workato")]),e._v(".")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(1502),alt:"Update variable",width:"1265",height:"673"}}),e._v(" "),i("em",[e._v("Update variable")])],1),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Input field")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Variable name")]),e._v(" "),i("td",[e._v("Select the variable to update.")])]),e._v(" "),i("tr",[i("td",[e._v("Value")]),e._v(" "),i("td",[e._v("The new value of the variable.")])])])]),e._v(" "),i("blockquote",[i("p",[e._v("Note: This action does not generate a datapill. To call your custom variable, use the output of the "),i("strong",[e._v("Create variable")]),e._v(" step.")])]),e._v(" "),i("h3",{attrs:{id:"example-creating-a-name-variable-from-an-image-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example-creating-a-name-variable-from-an-image-file"}},[e._v("#")]),e._v(" Example: Creating a name variable from an image file")]),e._v(" "),i("p",[e._v("Suppose you want to read a name from an image file (e.g. PNG). You can generate a "),i("code",[e._v("Name")]),e._v(" variable and add the values for "),i("strong",[e._v("First name")]),e._v(", "),i("strong",[e._v("Middle name")]),e._v(", and "),i("strong",[e._v("Last Name")]),e._v(".")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(1503),alt:"Create a name variable from an image file",width:"1262",height:"1235"}}),e._v(" "),i("em",[e._v("Create a name variable from an image file")])],1),e._v(" "),i("p",[e._v("See the full example recipe "),i("a",{attrs:{href:"https://www.workato.com/recipes/867047-new-driver-id-card-in-dropbox-will-read-the-card-with-google-vision-and-save-user-info-to-google-sheets",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"create-list-action"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#create-list-action"}},[e._v("#")]),e._v(" Create list action")]),e._v(" "),i("p",[e._v("This action creates an empty list with its item schema. The list item schema will apply to every item in the list.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(1504),alt:"Create list",width:"1265",height:"852"}}),e._v(" "),i("em",[e._v("Create list")])],1),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Input field")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("List name")]),e._v(" "),i("td",[e._v("The name of the list.")])]),e._v(" "),i("tr",[i("td",[e._v("List item schema")]),e._v(" "),i("td",[e._v("Define the properties of each item on this list.")])])])]),e._v(" "),i("h4",{attrs:{id:"define-list-item-schema"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#define-list-item-schema"}},[e._v("#")]),e._v(" Define list item schema")]),e._v(" "),i("p",[e._v("The list item schema will show up as a list of usable variables in the output datatree. These variables can be mapped unto subsequent recipe steps. Use "),i("strong",[e._v("Add field")]),e._v(" to define a new field.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(1505),alt:"Add new field",width:"1265",height:"813"}}),e._v(" "),i("em",[e._v("Add new field")])],1),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Input field")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Name")]),e._v(" "),i("td",[e._v("The name of the new field.")])]),e._v(" "),i("tr",[i("td",[e._v("Data type")]),e._v(" "),i("td",[e._v("The data type of the new field.")])]),e._v(" "),i("tr",[i("td",[e._v("Optional")]),e._v(" "),i("td",[e._v("Select if this new field is mandatory.")])]),e._v(" "),i("tr",[i("td",[e._v("Hint")]),e._v(" "),i("td",[e._v("A description of this new field.")])])])]),e._v(" "),i("h3",{attrs:{id:"add-item-to-list"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#add-item-to-list"}},[e._v("#")]),e._v(" Add item to list")]),e._v(" "),i("p",[e._v("This action appends a new item entry to an existing list. You can only update lists managed by "),i("strong",[e._v("Variables by Workato")]),e._v(".")]),e._v(" "),i("p",[e._v("Some item fields are mandatory. Check that you have valid inputs for the required fields before using this action.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(1506),alt:"Add item to list",width:"1252",height:"961"}}),e._v(" "),i("em",[e._v("Add item to list")])],1),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Input field")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("List name")]),e._v(" "),i("td",[e._v("Select the list to add your new entry.")])]),e._v(" "),i("tr",[i("td",[e._v("Insert location")]),e._v(" "),i("td",[e._v("Select the location of the new entry.")])]),e._v(" "),i("tr",[i("td",[e._v("List item")]),e._v(" "),i("td",[e._v("Define the values of the new entry.")])])])]),e._v(" "),i("blockquote",[i("p",[e._v("Note: This action does not generate a datapill. To call your list, use the output of the "),i("strong",[e._v("Create list")]),e._v(" step.")])]),e._v(" "),i("p",[e._v("For more information on list management, see "),i("router-link",{attrs:{to:"/features/list-management.html"}},[e._v("here")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);