(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{1163:function(t,e,r){t.exports=r.p+"assets/img/upsert-record-action.46a4f2f5.png"},2380:function(t,e,r){"use strict";r.r(e);var o=r(0),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("hr"),t._v(" "),o("h2",{attrs:{id:"title-workato-connectors-zendesk-create-update-record-actiondate-2019-06-03-18-00-00-zistocvisible-true"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#title-workato-connectors-zendesk-create-update-record-actiondate-2019-06-03-18-00-00-zistocvisible-true"}},[t._v("#")]),t._v(" title: Workato connectors - Zendesk create/update record action\ndate: 2019-06-03 18:00:00 Z\nisTocVisible: true")]),t._v(" "),o("h1",{attrs:{id:"zendesk-create-update-record-action"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zendesk-create-update-record-action"}},[t._v("#")]),t._v(" Zendesk - Create/update record action")]),t._v(" "),o("p",[t._v("This action identifies specific records in your Zendesk instance and updates them. "),o("strong",[t._v("Tickets")]),t._v(" will be identified with their unique Zendesk ID. For "),o("strong",[t._v("Organization")]),t._v(" and "),o("strong",[t._v("Users")]),t._v(", email and external ID can be used.")]),t._v(" "),o("p",[t._v("For existing records, this action will update the record with the data provided. If no records are found, it will create a new record.")]),t._v(" "),o("p",[t._v("This action accepts a list of maximum of 100 records.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(1163),alt:"Create/update record action",width:"2515",height:"1926"}}),t._v(" "),o("em",[t._v("Create/update record action")])],1),t._v(" "),o("h2",{attrs:{id:"input-field"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-field"}},[t._v("#")]),t._v(" Input field")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Input field")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Object")]),t._v(" "),o("td",[t._v("Select the object to be monitored - "),o("strong",[t._v("User")]),t._v(", "),o("strong",[t._v("Ticket")]),t._v(", or "),o("strong",[t._v("Organization")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("Object input")])]),t._v(" "),o("td",[t._v("The input fields for the object you have selected. "),o("em",[t._v("See below.")])])]),t._v(" "),o("tr",[o("td",[t._v("Wait for Zendesk to process all records")]),t._v(" "),o("td",[t._v("Select "),o("strong",[t._v("Yes")]),t._v(" to wait for the action to complete before moving to the next action. You can use the status messages in subsequent steps. "),o("a",{attrs:{href:"#output-field"}},[o("em",[t._v("See here")])]),t._v(". "),o("br"),t._v("Otherwise, select "),o("strong",[t._v("No")]),t._v(". The recipe will move to the next step once Zendesk starts processing.")])])])]),t._v(" "),o("p",[t._v("Click here for a full list of "),o("router-link",{attrs:{to:"/connectors/zendesk/user-fields.html#user-input-fields"}},[t._v("user inputs")]),t._v(", "),o("router-link",{attrs:{to:"/connectors/zendesk/ticket-fields.html#ticket-input-fields"}},[t._v("ticket inputs")]),t._v(", or "),o("router-link",{attrs:{to:"/connectors/zendesk/organization-fields.html#organization-input-fields"}},[t._v("organization inputs")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"output-field"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-field"}},[t._v("#")]),t._v(" Output field")]),t._v(" "),o("p",[t._v("If you selected to "),o("strong",[t._v("wait for the action to complete")]),t._v(" before moving to the next step, you will be able to use the following datapills from the output.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Output field")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("All records successfully upserted?")]),t._v(" "),o("td",[t._v("This returns "),o("code",[t._v("True")]),t._v(" if all records have been successfully processed.")])]),t._v(" "),o("tr",[o("td",[t._v("Number of records created")]),t._v(" "),o("td",[t._v("The number of records created.")])]),t._v(" "),o("tr",[o("td",[t._v("Number of records updated")]),t._v(" "),o("td",[t._v("The number of records updated.")])]),t._v(" "),o("tr",[o("td",[t._v("Number of records failed")]),t._v(" "),o("td",[t._v("The number of records that failed to be processed successfully.")])]),t._v(" "),o("tr",[o("td",[t._v("Create job results")]),t._v(" "),o("td",[t._v("An array of records created with this action. The full list of "),o("strong",[t._v("object attributes")]),t._v(" will be returned for each record.")])]),t._v(" "),o("tr",[o("td",[t._v("Update job results")]),t._v(" "),o("td",[t._v("An array of records updated with this action. The full list of "),o("strong",[t._v("object attributes")]),t._v(" will be returned for each record.")])]),t._v(" "),o("tr",[o("td",[t._v("Failed job results")]),t._v(" "),o("td",[t._v("An array of records that failed to be processed successfully. The full list of "),o("strong",[t._v("object attributes")]),t._v(" will be returned for each record.")])])])]),t._v(" "),o("p",[t._v("Click here for a full list of "),o("router-link",{attrs:{to:"/connectors/zendesk/user-fields.html#user-output-fields"}},[t._v("user outputs")]),t._v(", "),o("router-link",{attrs:{to:"/connectors/zendesk/ticket-fields.html#ticket-output-fields"}},[t._v("ticket outputs")]),t._v(", or "),o("router-link",{attrs:{to:"/connectors/zendesk/organization-fields.html#organization-output-fields"}},[t._v("organization outputs")]),t._v(".")],1),t._v(" "),o("blockquote",[o("p",[t._v("If you selected "),o("strong",[t._v("not to wait for the action to complete")]),t._v(", Workato will generate an array of Zendesk IDs of all the records. You can view the output array for this action in the "),o("strong",[t._v("Job")]),t._v(" tab.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);