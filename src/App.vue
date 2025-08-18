<template>
  <div class="container">
    <h1 class="title">Football Scores</h1>
    <Competition />
    <MatchList />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useCompetitionData } from '@/useCompetitionData.js'
import MatchList from "@/components/MatchList.vue";
import Competition from "@/components/Competition.vue";

const { fetchCompetitionData } = useCompetitionData();

onMounted(() => {
  fetchCompetitionData();
});

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>