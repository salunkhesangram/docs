(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{2151:function(e,t,s){"use strict";s.r(t);var a=s(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"jdbc-select-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdbc-select-actions"}},[e._v("#")]),e._v(" JDBC - Select actions")]),e._v(" "),a("h2",{attrs:{id:"select-rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-rows"}},[e._v("#")]),e._v(" Select rows")]),e._v(" "),a("p",[e._v("This action lets you select rows based on certain criteria defined by a "),a("code",[e._v("WHERE")]),e._v(" condition. Rows from the selected table that match the "),a("code",[e._v("WHERE")]),e._v(" condition will be returned as the output of this action.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(563),alt:"Select rows action",width:"2176",height:"2281"}}),e._v(" "),a("em",[e._v("Select rows action")])],1),e._v(" "),a("h3",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[e._v("#")]),e._v(" Table")]),e._v(" "),a("p",[e._v("First, select a table/view to work with. This can be done either by selecting a table from the pick list, or toggling the input to text mode and typing the full table name. Case sensitivity of table name depends on the database you are connected to.")]),e._v(" "),a("h3",{attrs:{id:"where-condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[e._v("#")]),e._v(" WHERE condition")]),e._v(" "),a("p",[e._v("Next, provide a "),a("code",[e._v("WHERE")]),e._v(" condition to filter rows. This condition can be as simple as filtering a single record by its "),a("code",[e._v("ID")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("123")]),e._v("\n")])])]),a("p",[e._v("Alternatively, it can be used to select multiple rows based on values in one or more columns.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("STATUS")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'closed'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" PRIORITY "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),a("p",[e._v("Complex "),a("code",[e._v("WHERE")]),e._v(" conditions with subqueries can also be used. Refer to the "),a("router-link",{attrs:{to:"/connectors/jdbc.html#where-condition"}},[e._v("WHERE condition")]),e._v(" guide for more information.")],1),e._v(" "),a("h3",{attrs:{id:"order-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-by"}},[e._v("#")]),e._v(" Order by")]),e._v(" "),a("p",[e._v("Rows returned from this action can be ordered based on the "),a("strong",[e._v("Order by")]),e._v(" input field. This field is used to change the default ordering of rows from your JDBC database.")]),e._v(" "),a("p",[e._v("You can also define the direction of order for each column you wish to order by. The following order by statement will order rows by "),a("code",[e._v("priority")]),e._v(" in ascending order followed by "),a("code",[e._v("created_date")]),e._v(" in descending order (latest first).")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("PRIORITY "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("asc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" CREATED_DATE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("desc")]),e._v("\n")])])]),a("h3",{attrs:{id:"limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit"}},[e._v("#")]),e._v(" Limit")]),e._v(" "),a("p",[e._v("This input field determines the maximum number of rows to return. The default limit is 100 and capped at a maximum of 1000 rows for a single "),a("strong",[e._v("Select rows")]),e._v(" action.")]),e._v(" "),a("h3",{attrs:{id:"offset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offset"}},[e._v("#")]),e._v(" Offset")]),e._v(" "),a("p",[e._v("This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input "),a("code",[e._v("100")]),e._v(" to this field. The default is "),a("code",[e._v("0")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"select-rows-using-custom-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-rows-using-custom-sql"}},[e._v("#")]),e._v(" Select rows using custom SQL")]),e._v(" "),a("p",[e._v("This action lets you select rows based on a custom SQL query. Rows that are returned from the query will be returned as the output of this action.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(564),alt:"Select rows using custom SQL action",width:"2204",height:"1650"}}),e._v(" "),a("em",[e._v("Select rows using custom SQL action")])],1),e._v(" "),a("h3",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[e._v("#")]),e._v(" SQL")]),e._v(" "),a("p",[e._v("Provide the SQL to be executed to select rows. The SQL here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes ("),a("code",[e._v("''")]),e._v(").")]),e._v(" "),a("p",[e._v("Avoid using limit clauses ("),a("code",[e._v("LIMIT")]),e._v(") in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the "),a("strong",[e._v("Limit")]),e._v(". Adding your own limit clause will cause the action to fail.")]),e._v(" "),a("h3",{attrs:{id:"limit-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit-2"}},[e._v("#")]),e._v(" Limit")]),e._v(" "),a("p",[e._v("This input field determines the maximum number of rows to return. The default limit is 100 and capped at a maximum of 1000 rows for a single "),a("strong",[e._v("Select rows using custom SQL")]),e._v(" action.")]),e._v(" "),a("p",[e._v("If this field is left blank, "),a("code",[e._v("LIMIT 100")]),e._v(" will be used.")])])}),[],!1,null,null,null);t.default=o.exports},563:function(e,t,s){e.exports=s.p+"assets/img/select-rows-action.5118604c.png"},564:function(e,t,s){e.exports=s.p+"assets/img/custom-sql-action.e6c8f10f.png"}}]);