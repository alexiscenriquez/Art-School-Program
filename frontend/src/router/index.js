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
    component:()=>import("../views/viewStudents.vue"),
    },
    {path:"/parents",
    name:"parents",
    component:()=>import("../views/viewParents.vue"),
  },
    {path:"/faculty",
    name:"faculty",
    component:()=>import("../views/viewTeachers.vue")},
    {path:"/faculty/:FacultyID",
    name:"faculty2",
    component:()=>import("../views/viewTeachers.vue")},
    {path:"/classes",
    name:"classes",
    component:()=>import("../views/viewClasses.vue"),
  },
 // import add views   
    {path:"/addStudent",
    name:"addstudent",
    component:()=>import("../views/addStudent.vue"),
  },
  {
    path:"/addStudent/:GuardianID",
  name:"addStudent2",
  component:()=>import("../views/addStudent2.vue")
  },
    {path:"/addClass",
    name:"addclass",
    component:()=>import("../views/addClass.vue"),
  },
    {path:"/addCourse",
    name:"addcourse",
    component:()=>import("../views/addCourse.vue"),
  },
    {path:"/addfaculty",
    name:"addfaculty",
    component:()=>import("../views/addTeacher.vue"),
  },

    {path:"/addParent",
    name:"addparent",
    component:()=>import("../views/addParent.vue"),
   },

   {path:"/addParent/:studentID",
  name:"addParent2",
component:()=>import("../views/addParent.vue")},
  
  {path:"/addRoom",
    name:"addsRoom",
    component:()=>import("../views/addRoom.vue"),
  },
    {path:"/addLocation",
    name:"addLocation",
    component:()=>import("../views/addLocation.vue"),
  },
  
// Import Edit views
    {path:"/EditStudent/:StudentID",
    name:"EditStudent",
    component:()=>import("../views/EditStudent.vue"),
  },
    {path:"/EditParent/:GuardianID",
    name:"EditParent",
    component:()=>import("../views/EditParent.vue"),
  },
    {path:"/editFaculty/:FacultyID",
    name:"EditFaculty",
    component:()=>import("../views/EditTeacher.vue"),
   },
    {path:"/EditClass",
    name:"EditClass",
    component:()=>import("../views/EditClass.vue"),
  
  },
    {path:"/enroll",
  name:"enroll",
component:()=>import("../views/enroll.vue"),
},
{
  path:"/parents/:GuardianID",
  name:"viewParent",
  component:()=>import("../views/parentProfile.vue")
},
{
  path:"/students/:StudentID",
  name:"viewStudent",
  component:()=>import("../views/StudentProfile.vue")
},
  {path:"/EditRoom",
    name:"EditRoom",
    component:()=>import("../views/EditRoom.vue"),
  },
    {path:"/EditLocation",
    name:"EditLocation",
    component:()=>import("../views/EditLocation.vue"),
  },

]})



export default router
