import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router= createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      component: Home,
    },  // import main views
    {path:"/students",
    name:"students",
    component:()=>import("../views/viewStudents.vue")},
    {path:"/parents",
    name:"parents",
    component:()=>import("../views/viewParents.vue")},
    {path:"/teachers",
    name:"teachers",
    component:()=>import("../views/viewTeachers.vue")},
    {path:"/classes",
    name:"classes",
    component:()=>import("../views/viewClasses.vue")},
    {path:"/invoices",
    name:"invoices",
    component:()=>import("../views/viewInvoices.vue")},
 // import add views   
    {path:"/addStudent",
    name:"addstudent",
    component:()=>import("../views/addStudent.vue")},
    {path:"/addClass",
    name:"addclass",
    component:()=>import("../views/addClass.vue")},
    {path:"/addsTeacher",
    name:"addteacher",
    component:()=>import("../views/addTeacher.vue")},
    {path:"/addInvoice",
   name:"addinvoice",
   component:()=>import("../views/addInvoice.vue")},
    {path:"/addParent",
    name:"addparent",
    component:()=>import("../views/addParent.vue")},
// Import Edit views
    {path:"/EditStudent",
    name:"EditStudent",
    component:()=>import("../views/EditStudent.vue")},
    {path:"/EditParent",
    name:"EditParent",
    component:()=>import("../views/EditParent.vue")},
    {path:"/EditTeacher",
    name:"EditTeacher",
    component:()=>import("../views/EditTeacher.vue")},
    {path:"/EditClass",
    name:"EditClass",
    component:()=>import("../views/EditClass.vue")},
    {path:"/EditInvoice",
    name:"EditInvoice",
    component:()=>import("../views/EditInvoice.vue")},
  ]
<<<<<<< HEAD:frontend/src/router/index.js
})
// Import create views
=======
  



>>>>>>> 9f8ad45ff1afae5510710b4656db26e7ace0dafa:frondend/src/router/index.js

export default router
