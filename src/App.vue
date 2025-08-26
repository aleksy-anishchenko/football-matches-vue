<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useCompetitionData } from '@/useCompetitionData.js'

const { fetchCompetitionData } = useCompetitionData();

onMounted(() => {
  fetchCompetitionData();
});
</script>

<style>
</style>