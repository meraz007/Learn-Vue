<template>
  <footer>
      <h1>This is our footer section</h1>
      <ul>
          <li v-for="stu in myStudents" :key="stu">{{ stu }}</li>
      </ul>
  </footer>
</template>

<script>
export default {
    props:['myStudents']

}
</script>

<style>

</style>