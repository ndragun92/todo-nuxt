(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{213:function(t,e,r){var content=r(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("1b7833da",content,!0,{sourceMap:!1})},214:function(t,e,r){"use strict";var n=r(213);r.n(n).a},215:function(t,e,r){(e=r(80)(!1)).push([t.i,".clickable{cursor:pointer}.list-enter-active{transition:all 1s}.list-enter{opacity:0;transform:translateX(-30px)}",""]),t.exports=e},216:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{taskName:"",filterBy:"all",tasks:[],loading:!0}},computed:{returnCompletedTasks:function(){return this.tasks.filter((function(t){return t.completed})).length},returnTasks:function(){var t=this.filterBy;return"completed"===t?this.tasks.filter((function(t){return t.completed})):"in-progress"===t?this.tasks.filter((function(t){return!t.completed})):this.tasks}},watch:{tasks:{handler:function(t){t.length&&t.length===this.returnCompletedTasks&&this.$bvToast.toast("Completed all tasks!",{title:"Success",taster:"b-toaster-top-center",variant:"success",autoHideDelay:2e3,solid:!0}),localStorage.setItem("tasks",JSON.stringify(t))},deep:!0}},mounted:function(){var t=this;localStorage.getItem("tasks")&&(this.tasks=JSON.parse(localStorage.getItem("tasks"))),setTimeout((function(){t.loading=!1}),2e3)},methods:{filterTasks:function(t){this.filterBy=t},addNewTask:function(){this.taskName.trim()&&(this.tasks.push({completed:!1,name:this.taskName}),this.taskName="")},deleteTask:function(t){var e=this.tasks.indexOf(t);e>-1&&this.tasks.splice(e,1),this.$bvToast.toast("Deleted task!",{title:"Success",taster:"b-toaster-top-center",variant:"success",autoHideDelay:1e3,solid:!0})}}},l=(r(214),r(65)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container d-flex justify-content-center align-items-center min-vh-100"},[t.loading?[r("b-spinner",{attrs:{type:"grow",variant:"primary"}})]:[r("b-row",{staticClass:"pt-4 pb-4 w-100"},[r("b-col",{staticClass:"mb-2",attrs:{sm:"12"}},[r("h3",[t._v("\n          My todo list\n        ")])]),t._v(" "),r("b-col",{staticClass:"mb-2",attrs:{sm:"12"}},[r("b-form-input",{attrs:{placeholder:"Enter new task..."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewTask(e)}},model:{value:t.taskName,callback:function(e){t.taskName=e},expression:"taskName"}})],1),t._v(" "),r("b-col",{staticClass:"mb-2",attrs:{sm:"12"}},[r("b-progress",{attrs:{value:t.returnCompletedTasks,max:t.tasks.length,variant:t.returnCompletedTasks===t.tasks.length?"success":"primary","show-progress":"",animated:""}})],1),t._v(" "),r("b-col",{staticClass:"mb-1",attrs:{sm:"12"}},[r("b-tabs",[r("b-tab",{class:{active:"all"===t.filterBy},attrs:{title:"All"},on:{click:function(e){return t.filterTasks("all")}}}),t._v(" "),r("b-tab",{class:{active:"completed"===t.filterBy},attrs:{title:"Completed"},on:{click:function(e){return t.filterTasks("completed")}}}),t._v(" "),r("b-tab",{class:{active:"in-progress"===t.filterBy},attrs:{title:"In progress"},on:{click:function(e){return t.filterTasks("in-progress")}}})],1)],1),t._v(" "),t.returnTasks.length?[r("b-col",{attrs:{sm:"12"}},[r("b-list-group",[r("transition-group",{attrs:{name:"list"}},t._l(t.returnTasks,(function(e,n){return r("b-list-group-item",{key:"taskItem_"+n,staticClass:"d-flex justify-content-between align-items-center"},[r("div",{staticClass:"d-flex align-items-center"},[r("b-form-checkbox",{attrs:{id:"task_"+n},model:{value:e.completed,callback:function(r){t.$set(e,"completed",r)},expression:"task.completed"}}),t._v(" "),r("label",{staticClass:"ml-2 mb-0 clickable",attrs:{for:"task_"+n}},[t._v(t._s(e.name))])],1),t._v(" "),r("b-icon",{staticClass:"clickable",attrs:{icon:"trash-fill","aria-hidden":"true",variant:"danger"},on:{click:function(r){return t.deleteTask(e)}}})],1)})),1)],1)],1)]:[r("b-col",{attrs:{sm:"12"}},[r("b-alert",{attrs:{show:"",variant:"primary"}},[r("b-icon",{staticClass:"mr-2",attrs:{icon:"exclamation-circle-fill",variant:"primary"}}),t._v(" "),"completed"===t.filterBy?r("span",[t._v("You do not have any completed task.")]):"in-progress"===t.filterBy?r("span",[t._v("You do not have any task that you can complete.")]):r("span",[t._v("Please add task in your list")])],1)],1)],t._v(" "),r("footer",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"12"}},[r("span",[t._v("2020 © "),r("a",{attrs:{href:"https://ndragun92.github.io/portfolio/",target:"_blank"}},[t._v("Nemanja Dragun.")]),t._v(" All Rights Reserved")])])],1)],2)]],2)}),[],!1,null,null,null);e.default=component.exports}}]);