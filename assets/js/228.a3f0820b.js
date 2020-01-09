(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{2174:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql-new-row-triggers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-new-row-triggers"}},[t._v("#")]),t._v(" MySQL - New row triggers")]),t._v(" "),s("h2",{attrs:{id:"new-row"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-row"}},[t._v("#")]),t._v(" New row")]),t._v(" "),s("p",[t._v("This trigger picks up rows that are inserted in the selected table or view. Each row is processed as a separate job. It checks for new rows once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the "),s("a",{attrs:{href:"https://www.workato.com/pricing?audience=general",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pricing and Plans page"),s("OutboundLink")],1),t._v(" to find out more.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(660),alt:"New row trigger",width:"2132",height:"1504"}}),t._v(" "),s("em",[t._v("New row trigger")])],1),t._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#table"}},[t._v("Table")])]),t._v(" "),s("td",[t._v("\n        First, select a table/view to process rows from.\n      ")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#unique-key"}},[t._v("Unique key")])]),t._v(" "),s("td",[t._v("\n        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#where-condition"}},[t._v("WHERE condition")])]),t._v(" "),s("td",[t._v("\n        Finally, provide an optional "),s("code",[t._v("WHERE")]),t._v(" condition to filter rows.\n      ")])])])]),t._v(" "),s("h2",{attrs:{id:"new-batch-of-rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-batch-of-rows"}},[t._v("#")]),t._v(" New batch of rows")]),t._v(" "),s("p",[t._v("This trigger picks up rows that are inserted in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the "),s("a",{attrs:{href:"https://www.workato.com/pricing?audience=general",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pricing and Plans page"),s("OutboundLink")],1),t._v(" to find out more.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(661),alt:"New batch of rows trigger",width:"2135",height:"1836"}}),t._v(" "),s("em",[t._v("New batch of rows trigger")])],1),t._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#table"}},[t._v("Table")])]),t._v(" "),s("td",[t._v("\n        First, select a table/view to process rows from.\n      ")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#unique-key"}},[t._v("Unique key")])]),t._v(" "),s("td",[t._v("\n        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#batch-size"}},[t._v("Batch size")])]),t._v(" "),s("td",[t._v("\n        Next, configure the batch size to process in each individual job for this recipe.\n      ")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#where-condition"}},[t._v("WHERE condition")])]),t._v(" "),s("td",[t._v("\n        Finally, provide an optional "),s("code",[t._v("WHERE")]),t._v(" condition to filter rows.\n      ")])])])]),t._v(" "),s("h2",{attrs:{id:"input-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),s("h3",{attrs:{id:"table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),s("p",[t._v("Select the table/view to process rows from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),t._v(" "),s("h3",{attrs:{id:"unique-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unique-key"}},[t._v("#")]),t._v(" Unique key")]),t._v(" "),s("p",[t._v("Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe.")]),t._v(" "),s("p",[t._v("As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. "),s("code",[t._v("ID")]),t._v("). It should be incremental and sortable. This column can also be indexed for better performance.")]),t._v(" "),s("p",[t._v("Only columns that have "),s("strong",[t._v("PRIMARY KEY")]),t._v(" or "),s("strong",[t._v("UNIQUE")]),t._v(" constraints can be used. Run this SQL query to find out which columns fulfill this requirement.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" kcu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_name\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" information_schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key_column_usage kcu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" information_schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_constraints tc\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n  kcu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v("\n  kcu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v("\n  kcu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_schema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_schema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v("\n  tc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"table_name"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v("\n  tc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PRIMARY KEY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNIQUE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" kcu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_name\n")])])]),s("h3",{attrs:{id:"batch-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#batch-size"}},[t._v("#")]),t._v(" Batch size")]),t._v(" "),s("p",[t._v("Batch size of rows to return in each job. This can be any number between "),s("strong",[t._v("1")]),t._v(" and the maximum batch size. Maximum batch size is "),s("strong",[t._v("100")]),t._v(" and default is "),s("strong",[t._v("100")]),t._v(".")]),t._v(" "),s("p",[t._v("In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.")]),t._v(" "),s("h3",{attrs:{id:"where-condition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[t._v("#")]),t._v(" WHERE condition")]),t._v(" "),s("p",[t._v("This condition is used to filter rows based on one or more column values.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'closed'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" priority "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),s("p",[t._v("Leave blank to process all rows from the selected table.")]),t._v(" "),s("p",[t._v("Complex "),s("code",[t._v("WHERE")]),t._v(" conditions with subqueries can also be used. Refer to the "),s("router-link",{attrs:{to:"/connectors/mysql.html#where-condition"}},[t._v("WHERE condition")]),t._v(" guide for more information.")],1)])}),[],!1,null,null,null);e.default=r.exports},660:function(t,e,a){t.exports=a.p+"assets/img/new-row-trigger.f135d80b.png"},661:function(t,e,a){t.exports=a.p+"assets/img/new-batch-of-rows-trigger.bd71ca3c.png"}}]);