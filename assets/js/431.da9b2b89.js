(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{2093:function(t,e,v){"use strict";v.r(e);var _=v(0),i=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"box-action-upload-file-using-file-contents"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#box-action-upload-file-using-file-contents"}},[t._v("#")]),t._v(" Box Action - Upload file using file contents")]),t._v(" "),v("p",[t._v("Upload a file to Box by providing contents of the file. Input file ID to update an existing file, or input file name to upload a new file.")]),t._v(" "),v("h2",{attrs:{id:"input-fields"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Field name")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("File contents")]),t._v(" "),v("td",[t._v("Contents of the file. File contents can be obtained by using Box's Download file action, or from other actions/trigger.")])]),t._v(" "),v("tr",[v("td",[t._v("File size")]),t._v(" "),v("td",[t._v("Only required if file is more than 20 MB. File size can be found in the output of other triggers/actions. You can also enter the value in bytes.")])]),t._v(" "),v("tr",[v("td",[t._v("Destination folder / Folder ID")]),t._v(" "),v("td",[t._v("Only input "),v("code",[t._v("Destination folder")]),t._v(" to upload a new file. Leave blank if you want to upload new version of an existing file.")])]),t._v(" "),v("tr",[v("td",[t._v("File name")]),t._v(" "),v("td",[t._v("Only input "),v("code",[t._v("File name")]),t._v(" to upload a new file. Leave blank if you want to upload new version of an existing file. File name should include extension, e.g. my_report.csv.")])]),t._v(" "),v("tr",[v("td",[t._v("File ID")]),t._v(" "),v("td",[t._v("Only input "),v("code",[t._v("File ID")]),t._v(" to upload new version of an existing file. Leave blank if you want to upload a new file. File ID can be found in other Box's triggers/actions, or in the file URL in Box. For example: \""),v("a",{attrs:{href:"https://app.box.com/file/310024886990",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://app.box.com/file/310024886990"),v("OutboundLink")],1),t._v('", then file ID is '),v("code",[t._v("310024886990")]),t._v(".")])])])]),t._v(" "),v("h2",{attrs:{id:"output-fields"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Field name")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("File version")]),t._v(" "),v("td",[t._v("Include details of current version of the file. Useful when you use the action to upload a new version of an existing file.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Type of this object, which in this case is "),v("code",[t._v("file_version")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of this file version.")])]),t._v(" "),v("tr",[v("td",[t._v("- Sha 1")]),t._v(" "),v("td",[t._v("SHA-1 hash value of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("ID")]),t._v(" "),v("td",[t._v("ID of the file.")])]),t._v(" "),v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("File name.")])]),t._v(" "),v("tr",[v("td",[t._v("Type")]),t._v(" "),v("td",[t._v("Type of this object, which in this case is "),v("code",[t._v("file")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("Description")]),t._v(" "),v("td",[t._v("Description of file.")])]),t._v(" "),v("tr",[v("td",[t._v("Size")]),t._v(" "),v("td",[t._v("Size of file.")])]),t._v(" "),v("tr",[v("td",[t._v("Shared link")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("- URL")]),t._v(" "),v("td",[t._v("Shared link URL for viewing file.")])]),t._v(" "),v("tr",[v("td",[t._v("- Download URL")]),t._v(" "),v("td",[t._v("Shared link URL for downloading file.")])]),t._v(" "),v("tr",[v("td",[t._v("Created at")]),t._v(" "),v("td",[t._v("Date/time file is created.")])]),t._v(" "),v("tr",[v("td",[t._v("Modified at")]),t._v(" "),v("td",[t._v("Date/time file is modified.")])]),t._v(" "),v("tr",[v("td",[t._v("Trashed at")]),t._v(" "),v("td",[t._v("Date/time file is trashed.")])]),t._v(" "),v("tr",[v("td",[t._v("Purged at")]),t._v(" "),v("td",[t._v("Date/time file is purged.")])]),t._v(" "),v("tr",[v("td",[t._v("Content created at")]),t._v(" "),v("td",[t._v("Date/time file content is created.")])]),t._v(" "),v("tr",[v("td",[t._v("Content modified at")]),t._v(" "),v("td",[t._v("Date/time file content is modified.")])]),t._v(" "),v("tr",[v("td",[t._v("Sequence ID")]),t._v(" "),v("td",[t._v("Position of this object in the folder hierarchy.")])]),t._v(" "),v("tr",[v("td",[t._v("Etag")]),t._v(" "),v("td",[t._v("Entity tag of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("Sha 1")]),t._v(" "),v("td",[t._v("SHA-1 hash value of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("Parent")]),t._v(" "),v("td",[t._v("Includes details about the file's parent folder.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of parent folder.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of parent folder.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Object type, which in this case is "),v("code",[t._v("folder")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("- Sequence ID")]),t._v(" "),v("td",[t._v("Position of this object in the folder hierarchy.")])]),t._v(" "),v("tr",[v("td",[t._v("- Etag")]),t._v(" "),v("td",[t._v("Entity tag of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("Path")]),t._v(" "),v("td",[t._v("File path.")])]),t._v(" "),v("tr",[v("td",[t._v("Path collection")]),t._v(" "),v("td",[t._v("Includes details of all paths this file belongs to.")])]),t._v(" "),v("tr",[v("td",[t._v("- Total count")]),t._v(" "),v("td",[t._v("Number of file paths.")])]),t._v(" "),v("tr",[v("td",[t._v("- Entries")]),t._v(" "),v("td",[t._v("File path entries.")])]),t._v(" "),v("tr",[v("td",[t._v("-- ID")]),t._v(" "),v("td",[t._v("ID of file path.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Name")]),t._v(" "),v("td",[t._v("File path.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Type")]),t._v(" "),v("td",[t._v("Type of file path.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Sequence ID")]),t._v(" "),v("td",[t._v("Position of this object in the folder hierarchy.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Etag")]),t._v(" "),v("td",[t._v("Entity tag of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("-- List size")]),t._v(" "),v("td",[t._v("Number of items in this "),v("code",[t._v("Entries")]),t._v(" list.")])]),t._v(" "),v("tr",[v("td",[t._v("Created by")]),t._v(" "),v("td",[t._v("Includes details about user who created this file.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Type of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Login")]),t._v(" "),v("td",[t._v("Login email of user.")])]),t._v(" "),v("tr",[v("td",[t._v("Modified by")]),t._v(" "),v("td",[t._v("Includes details about user who modified this file.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Type of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Login")]),t._v(" "),v("td",[t._v("Login email of user.")])]),t._v(" "),v("tr",[v("td",[t._v("Owned by")]),t._v(" "),v("td",[t._v("Includes details about user who owned this file.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Type of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Login")]),t._v(" "),v("td",[t._v("Login email of user.")])]),t._v(" "),v("tr",[v("td",[t._v("Item status")]),t._v(" "),v("td",[t._v("Status of this file, e.g. active.")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);