(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{2238:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"redshift-upsert-actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redshift-upsert-actions"}},[e._v("#")]),e._v(" Redshift - Upsert actions")]),e._v(" "),r("h2",{attrs:{id:"upsert-row"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upsert-row"}},[e._v("#")]),e._v(" Upsert row")]),e._v(" "),r("p",[e._v("This action upserts a single row into the selected table.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(856),alt:"Upsert row action",width:"2146",height:"2612"}}),e._v(" "),r("em",[e._v("Upsert row action")])],1),e._v(" "),r("h3",{attrs:{id:"table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[e._v("#")]),e._v(" Table")]),e._v(" "),r("p",[e._v("First, select a table to upsert rows in. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),e._v(" "),r("h3",{attrs:{id:"columns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#columns"}},[e._v("#")]),e._v(" Columns")]),e._v(" "),r("p",[e._v("Columns in the selected table are then presented as input fields here. Map the required fields from the output datatree here to upsert a row with data from preceding trigger or actions.")]),e._v(" "),r("h4",{attrs:{id:"unique-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unique-key"}},[e._v("#")]),e._v(" Unique key")]),e._v(" "),r("p",[e._v("Unique key values will be used to determine whether an update or an insert is executed in your Redshift database. If the unique key value of the given set of values exists in your table, that row will be updated with the values provided. In the absence of a row with the unique key value, a new row will be inserted with the values provided.")]),e._v(" "),r("h2",{attrs:{id:"upsert-batch-of-rows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upsert-batch-of-rows"}},[e._v("#")]),e._v(" Upsert batch of rows")]),e._v(" "),r("p",[e._v("This action allows you to upsert multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to Redshift. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(857),alt:"Upsert batch of rows action",width:"1101",height:"1343"}}),e._v(" "),r("em",[e._v("Upsert batch of rows action")])],1),e._v(" "),r("h3",{attrs:{id:"table-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-2"}},[e._v("#")]),e._v(" Table")]),e._v(" "),r("p",[e._v("Just like with the single row upsert action, you need to select the target table first.")]),e._v(" "),r("h3",{attrs:{id:"rows-source-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rows-source-list"}},[e._v("#")]),e._v(" Rows source list")]),e._v(" "),r("p",[e._v("Unlike the "),r("strong",[e._v("Upsert row")]),e._v(" action (where we deal with a single row), we are now dealing with a batch of rows. Hence, the next datapill to input is the "),r("em",[e._v("source")]),e._v(" of the batch of rows to upsert to the table. This can come from any trigger or action that outputs a list datapill.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(52),alt:"A list datapill from the datatree",width:"722",height:"944"}}),e._v(" "),r("em",[e._v("A list datapill from the datatree")])],1),e._v(" "),r("p",[e._v("If you do not map a list datapill to this field, this action will upsert only 1 row and will behave like the "),r("strong",[e._v("Upsert row")]),e._v(" action.")]),e._v(" "),r("h3",{attrs:{id:"columns-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#columns-2"}},[e._v("#")]),e._v(" Columns")]),e._v(" "),r("p",[e._v("Finally, you will need to map the required fields from the output datatree here to upsert rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated (mappings like this will become a constant value for all rows).")]),e._v(" "),r("p",[e._v("Similar to the "),r("strong",[e._v("Upsert row")]),e._v(" action, primary key values provided will be used to determine an update or create for each row.")]),e._v(" "),r("h4",{attrs:{id:"unique-key-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unique-key-2"}},[e._v("#")]),e._v(" Unique key")]),e._v(" "),r("p",[e._v("Unique key values will be used to determine whether an update or an insert is executed in your Redshift database. If the unique key value of the given set of values exists in your table, that row will be updated with the values provided. In the absence of a row with the unique key value, a new row will be inserted with the values provided.")]),e._v(" "),r("p",[e._v("Refer to the "),r("router-link",{attrs:{to:"/features/list-management.html"}},[e._v("List management")]),e._v(" guide for more information about working with batches.")],1)])}),[],!1,null,null,null);t.default=s.exports},52:function(e,t,a){e.exports=a.p+"assets/img/list_datapill_in_output_tree.20c81ae4.png"},856:function(e,t,a){e.exports=a.p+"assets/img/upsert-row-action.a28d8552.png"},857:function(e,t,a){e.exports=a.p+"assets/img/upsert-rows-batch-action.3eebeeb2.png"}}]);