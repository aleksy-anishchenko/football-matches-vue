<template>
  <h1>Football Matches</h1>
</template>

<script setup>
const response = await fetch('https://api.football-data.org/v4/competitions/CL/matches')
const data = await response.json()
console.log(data);
</script>

<style scoped>
</style>