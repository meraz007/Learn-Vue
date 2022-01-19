<template>
  <div>
      <h1>This is practice project!!</h1>
      <ProjectDetails :items='items'></ProjectDetails>
      <ProjectList :items='items'></ProjectList>
  </div>
</template>

<script>
import ProjectList from '../components/Project/projectList.vue'
import ProjectDetails from '../components/Project/projectDetails.vue'
export default {
    name:'Project',
    components:{
        ProjectList,
        ProjectDetails
    },
    data(){
        return{
            items:[
                {
                    title:'project one',
                    details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
                },
                {
                    title:'project one',
                    details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
                },
                {
                    title:'project one',
                    details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
                },
            ]
        }
    }


}
</script>

<style>

</style>