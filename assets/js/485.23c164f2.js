(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{2401:function(e,t,o){"use strict";o.r(t);var s=o(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"connector-planning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connector-planning"}},[e._v("#")]),e._v(" Connector planning")]),e._v(" "),o("p",[e._v("Before even beginning writing a single line of code, we highly recommend spending some time planning out all integration use cases for users of your custom connector on Workato. You’ll then be able to decompose them into the minimum set of actions and triggers in your connector to satisfy these use cases. This list of actions and triggers can always be expanded in the future.")]),e._v(" "),o("p",[e._v("Often, we’ve seen that connectors that are the most successful needn’t be the ones with the most actions or triggers but ones that power a wide range of business use cases from a prudent set of actions and triggers. If you’re building a connector to your platform as a way for your customers to integrate your services with the hundreds in Workato’s ecosystem, we would recommend going through this process with both a product manager and a developer to ensure the needs of your customers are met.")]),e._v(" "),o("h2",{attrs:{id:"detailing-down-your-integration-use-cases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#detailing-down-your-integration-use-cases"}},[e._v("#")]),e._v(" Detailing down your integration use cases.")]),e._v(" "),o("p",[e._v("Connectors can start small and grow big over time but it's always important to make sure that your connector can help you, your team or your customers find success in the integration use cases you have scouted out. This requires some time and effort thinking about how users would use your connector in recipes. First up, we highly recommend brainstorming to find out the exact use cases that you want to automate on Workato. For teams building connectors for internal use, this could be a tedious and manual process that you hope to automate. For teams building connectors on Workato to list on our platform so your customers can use Workato to include your application in their recipes, this should be something that you can foresee driving the most business value.")]),e._v(" "),o("h3",{attrs:{id:"example-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[e._v("#")]),e._v(" Example 1:")]),e._v(" "),o("p",[e._v("As a developer from XYZ labs tasked to build a connector to Salesforce on Workato, my company sees ourselves manually importing new leads from Marketo daily into Salesforce and poor response times to new signups to our platform. Customer data and orders also have to be routinely exported from Salesforce into NetSuite, taking up a significant amount of the business analyst's team. Often, new deals also contain line items for products not present in NetSuite which are present in Salesforce.")]),e._v(" "),o("p",[e._v("To save time and lower the chance of human error, the integrations team has settled on 5 integration use cases to solve the problems above:")]),e._v(" "),o("ol",[o("li",[e._v("Notifying your sales team in Slack about new leads in Salesforce")]),e._v(" "),o("li",[e._v("Syncing account data in Salesforce with customers in NetSuite")]),e._v(" "),o("li",[e._v("Syncing orders in Salesforce with sales receipts in NetSuite")]),e._v(" "),o("li",[e._v("Creating leads in Salesforce when leads arrive through Marketo")]),e._v(" "),o("li",[e._v("Syncing products in Salesforce with products in NetSuite")])]),e._v(" "),o("h3",{attrs:{id:"example-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[e._v("#")]),e._v(" Example 2:")]),e._v(" "),o("p",[e._v("XYZ lab’s main product is a cloud accounting software (XYZ accounting) that allows their customers to access and manage their financial accounts over any device. In order to expand the functionality of the platform, reduce customer churn and find new leads, the product team in XYZ labs is also looking to build an XYZ accounting connector on Workato. Users of XYZ accounting would then be able to use this connector to automate any of the tedious processes of exporting or importing accounting data out or into XYZ accounting.")]),e._v(" "),o("p",[e._v("After assessing the most heavily used portions of XYZ accounting as well as the variety of apps that people may use XYZ accounting with, a set of integration use cases were shortlisted as ones that would drive the most value for XYZ accounting customers.")]),e._v(" "),o("ol",[o("li",[e._v("New closed-won opportunities in Salesforce create invoices in XYZ accounting")]),e._v(" "),o("li",[e._v("New products in Salesforce create new products in XYZ accounting")]),e._v(" "),o("li",[e._v("New payments in XYZ accounting update opportunities in Salesforce")]),e._v(" "),o("li",[e._v("New vendors in XYZ accounting create new suppliers in Salesforce")]),e._v(" "),o("li",[e._v("New approved expense reports in Expensify create an expense in XYZ accounting")])]),e._v(" "),o("h2",{attrs:{id:"defining-your-base-set-of-objects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#defining-your-base-set-of-objects"}},[e._v("#")]),e._v(" Defining your base set of objects")]),e._v(" "),o("p",[e._v("After deciding on what integration use cases you want to solve, this often translates into actions and triggers in a connector that we want to implement on certain objects.")]),e._v(" "),o("p",[e._v("As a start, we would recommend shortlisting 4 or 5 objects which you want to interact with through a recipe in Workato. For smaller applications, this could mean all objects. For large applications with over hundreds of objects, this could mean shortlisting 5 of them which meet your integration use cases. It's completely fine to keep your scope small and iterate over time.")]),e._v(" "),o("h3",{attrs:{id:"example-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[e._v("#")]),e._v(" Example 3:")]),e._v(" "),o("p",[e._v("As an integration developer from XYZ labs, the integration use cases highlighted by the operations team revolves around multiple objects in Salesforce. Based on these use cases, it appears that support for "),o("code",[e._v("Orders")]),e._v(", "),o("code",[e._v("Leads")]),e._v(", "),o("code",[e._v("Accounts")]),e._v(", "),o("code",[e._v("Products")]),e._v(" will allow my team to build the recipes they are looking for.")]),e._v(" "),o("h3",{attrs:{id:"example-4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[e._v("#")]),e._v(" Example 4:")]),e._v(" "),o("p",[e._v("As a developer tasked to build the connector to XYZ accounting, we can see that support should be prioritized for "),o("code",[e._v("Invoices")]),e._v(", "),o("code",[e._v("Products")]),e._v(", "),o("code",[e._v("Payments")]),e._v(", "),o("code",[e._v("Vendors")]),e._v(" and "),o("code",[e._v("Expense reports")]),e._v(". When building a connector to your application for your customers, it's common to extend the number of objects supported when needed to ensure that a larger number of customers can use your connector beyond the use cases you have defined.")]),e._v(" "),o("h2",{attrs:{id:"exploring-possible-actions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exploring-possible-actions"}},[e._v("#")]),e._v(" Exploring possible actions")]),e._v(" "),o("p",[e._v("After you’ve decided on the objects, you now need to decide on what actions to support for your chosen objects. In most cases, we’ve found that starting with basic “Create”, “Read”, “Update”, “Delete” and “Search” (CRUDS) actions for your chosen objects cover most integration needs - especially when combined used together in recipes. In some cases, we have seen users forgo “Delete” actions in cases as the deletion of data via an automated recipe might be undesirable.")]),e._v(" "),o("p",[e._v("Another possible type of action to support would be batch actions. Batch actions are actions that work with more than a single object but multiple ones and are often used in scenarios where multiple objects need to be synced in and out of an application. Consider if your users need this functionality to fulfill a core use case or if this can functionality added on later.")]),e._v(" "),o("p",[e._v("Another misstep that we often see with new users of Workato would be to overcomplicate actions. By keeping actions simple and always focused on handling one single thing, it makes recipes for your user’s easier to troubleshoot when errors do occur. For example, instead of creating an action - “Create a customer and attach the invoice to a customer”, this should be broken down into 2 actions - “Create a customer” and “Attach invoice”. This decoupling of actions makes them more general and allows your users to mix and match actions to achieve more.")]),e._v(" "),o("blockquote",[o("p",[e._v("Take note of the possible limitations of the API you hope to build a connector to as well. Most well-built APIs would have endpoints to perform CRUDS actions whilst some may also support endpoints for batch actions for high volume use cases.")])]),e._v(" "),o("h2",{attrs:{id:"exploring-possible-triggers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exploring-possible-triggers"}},[e._v("#")]),e._v(" Exploring possible triggers")]),e._v(" "),o("p",[e._v("Besides actions, we also recommend implementing object-based triggers to allow end-users of your user to trigger off events in your application. While Workato supports 3 types of triggers (polling, static webhooks and dynamic webhooks), it's often enough to implement a single type of trigger based on your integration use cases.")]),e._v(" "),o("p",[e._v("When deciding between polling triggers or webhook triggers, it's important to focus on how quickly your end-users would need to get their hands on new events. In time-sensitive situations - such as when a user requests for assistance on your website, webhooks might be the most appropriate to build recipes around to send help their way quickly. On the other hand, new sales in your CRM might not need to have webhook triggers where polling triggers might suffice.")]),e._v(" "),o("blockquote",[o("p",[e._v("Another possible limitation of the API would be the presence of webhook functionality entirely. When absent, polling triggers are often good alternatives. If you were developing a connector to your own application, this would be the time to consider your need for a webhook trigger.")])]),e._v(" "),o("p",[e._v("For polling triggers, we often start with the basics such as triggers when objects are created or when objects created or updated.")]),e._v(" "),o("h2",{attrs:{id:"exploring-other-actions-triggers-that-should-be-included-or-highlighted"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exploring-other-actions-triggers-that-should-be-included-or-highlighted"}},[e._v("#")]),e._v(" Exploring other actions/triggers that should be included or highlighted")]),e._v(" "),o("p",[e._v("For some applications, there may some special actions that aren’t included in your current shortlist of object-based actions and triggers. Review all integration use cases you and your team have set up to accomplish and take stock of any gaps in actions or triggers.")]),e._v(" "),o("p",[e._v("A great exercise would be to envision building recipes around the integration use cases you hope to accomplish and scout out any actions that may be missing. What we have found useful in Workato would be to draw a simple skeleton of the recipe(s) that are needed to accomplish the use case.")]),e._v(" "),o("h3",{attrs:{id:"example-5"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[e._v("#")]),e._v(" Example 5:")]),e._v(" "),o("p",[e._v("As the developer at XYZ labs building the XYZ connector on Workato, another important integration use case for our customers was the ability to use XYZ’s integrated bank transfer functionality from a workplace messaging app like Slack. When drawing out the skeleton of the integration, we arrived at these steps:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Recipe: New command on Slackbot executes bank transfer on XYZ accounting")]),e._v(" "),o("th",[e._v("Action supported?")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Trigger: New “Post bank transfer” command on Slack")]),e._v(" "),o("td",[e._v("Yes")])]),e._v(" "),o("tr",[o("td",[e._v("1. Search for a supplier on XYZ accounting")]),e._v(" "),o("td",[e._v("Yes")])]),e._v(" "),o("tr",[o("td",[e._v("2. Execute bank transfer on XYZ accounting using supplier ID")]),e._v(" "),o("td",[e._v("No")])]),e._v(" "),o("tr",[o("td",[e._v("3. Post reply on Slack to notify user")]),e._v(" "),o("td",[e._v("Yes")])])])]),e._v(" "),o("p",[e._v("Using this skeleton, it’s easy to see that we’ve missed out on an “Execute bank transfer” action which would be critical in this use case.")]),e._v(" "),o("blockquote",[o("p",[e._v("We would recommend building some recipes yourself if you haven’t done so to get the hang of what actions might be required to build a recipe. In the case above, understanding that you would need a search supplier action to get the internal ID of the supplier on XYZ accounting helps you understand and take stock of any actions that you might be missing.")])]),e._v(" "),o("h2",{attrs:{id:"taking-stock-of-your-connector"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#taking-stock-of-your-connector"}},[e._v("#")]),e._v(" Taking stock of your connector")]),e._v(" "),o("p",[e._v("By the end of this exercise, you should have a list of actions and triggers that you plan to build. When placed into a table format, it should look something similar to this:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th"),e._v(" "),o("th",[e._v("New/updated trigger")]),e._v(" "),o("th",[e._v("Create action")]),e._v(" "),o("th",[e._v("Retrieve action")]),e._v(" "),o("th",[e._v("Update action")]),e._v(" "),o("th",[e._v("Delete action")]),e._v(" "),o("th",[e._v("Search action")]),e._v(" "),o("th",[e._v("Execute action")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Invoices")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[e._v("Products")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[e._v("Payments")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[e._v("Vendors")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[e._v("Expense reports")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[e._v("Bank Transfer")]),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td"),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Yes")]),e._v(" "),o("td",[e._v("Yes")])])])]),e._v(" "),o("h3",{attrs:{id:"connector-building-time"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connector-building-time"}},[e._v("#")]),e._v(" Connector building time")]),e._v(" "),o("p",[e._v("Now that you've sussed out what your connector generally looks like, its time to get building! The next chapter will go through how to organize and build your connector.")]),e._v(" "),o("h4",{attrs:{id:"next-chapter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-chapter"}},[e._v("#")]),e._v(" Next Chapter")]),e._v(" "),o("h5",{attrs:{id:"object-based-connector-architecture"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#object-based-connector-architecture"}},[e._v("#")]),e._v(" "),o("router-link",{attrs:{to:"/developing-connectors/cookbook/connector-building-defining-schema.html"}},[e._v("Object-based connector architecture")])],1),e._v(" "),o("h4",{attrs:{id:"previous-chapter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#previous-chapter"}},[e._v("#")]),e._v(" Previous Chapter")]),e._v(" "),o("h5",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" "),o("router-link",{attrs:{to:"/developing-connectors/cookbook/introduction.html"}},[e._v("Introduction")])],1)])}),[],!1,null,null,null);t.default=a.exports}}]);