<template>
  <header>
      <h1>This is our heading section</h1>
      <ul>
          <li v-for="stu in myStudents" :key="stu">{{ stu }}</li>
      </ul>
  </header>
</template>

<script>
export default {
    props:['myStudents']

}
</script>

<style>

</style>