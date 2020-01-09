(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{2194:function(e,t,i){"use strict";i.r(t);var n=i(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"on-prem-files-new-lines-in-csv-file-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#on-prem-files-new-lines-in-csv-file-trigger"}},[e._v("#")]),e._v(" On-prem files - New lines in CSV file trigger")]),e._v(" "),n("p",[e._v("This trigger picks up new lines added to the end of a selected CSV file. Lines from the file will be processed in batches in each job.")]),e._v(" "),n("p",[e._v("When the recipe is first started, the trigger will pick up all existing lines in the selected CSV file. Subsequently, new lines added to the end of the file will be processed as new job(s).")]),e._v(" "),n("p",[e._v("This trigger checks for new lines once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the "),n("a",{attrs:{href:"https://www.workato.com/pricing?audience=general",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pricing and Plans page"),n("OutboundLink")],1),e._v(" to find out more.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:i(730),alt:"New lines in CSV file trigger",width:"2206",height:"1954"}}),e._v(" "),n("em",[e._v("New lines in CSV file trigger")])],1),e._v(" "),n("h2",{attrs:{id:"input-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),n("table",{staticClass:"unchanged rich-diff-level-one"},[n("thead",[n("tr",[n("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("CSV file")]),e._v(" "),n("td",[e._v("\n        First, select a CSV file to process lines from. This CSV file must have a header line. The value of each column in the header will be used to generate the output schema of the trigger.\n      ")])]),e._v(" "),n("tr",[n("td",[e._v("Column delimiter")]),e._v(" "),n("td",[e._v("\n        Next, select a column delimiter for this selected CSV file. The delimiters available are: comma, semicolon, space and tab.\n      ")])]),e._v(" "),n("tr",[n("td",[e._v("Batch size")]),e._v(" "),n("td",[e._v("Determine the number of lines to process in each job. The default value is 100 and maximum is 2000."),n("br"),e._v("\n      Select a batch size based on the limit of your destination application.\n      ")])])])]),e._v(" "),n("h2",{attrs:{id:"output-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),n("table",{staticClass:"unchanged rich-diff-level-one"},[n("thead",[n("tr",[n("th",{attrs:{width:"25%"}},[e._v("Output field")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("First line number in batch")]),e._v(" "),n("td",[e._v("Line number of the first line in the batch currently being processed. Header lines are not processed, so the first line has the value 1.")])]),e._v(" "),n("tr",[n("td",[e._v("Last line number in batch")]),e._v(" "),n("td",[e._v("Line number of the last line in the batch currently being processed. Header lines are not processed, so the first line has the value 1.")])]),e._v(" "),n("tr",[n("td",[e._v("CSV lines")]),e._v(" "),n("td",[e._v("This is a list type datapill that contains the data of all lines in the batch. Columns of the selected CSV file will be available as datapills here.")])])])])])}),[],!1,null,null,null);t.default=s.exports},730:function(e,t,i){e.exports=i.p+"assets/img/new-lines-trigger.2f7d8052.png"}}]);