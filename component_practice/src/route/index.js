import Home from '../view/Home.vue'
import Project from '../view/Project.vue'
import ProjectDetails from '../components/Project/projectDetails.vue'
export const routes=[
    {
        path:'',
        component:Home
    },
    {
        path:'/project',
        component:Project,  
    },
    {
        path:'/ProjectDetails/:id',
        component:ProjectDetails,  
    },
 
]