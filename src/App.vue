<template>
  <div class="container">
    <h1 class="title">Football Scores</h1>
    <div v-if="footballMatches.competition" class="competition__header">
      <img
          src="https://crests.football-data.org/CL.png"
          width="75" height="75"
          alt="Логотип чемпионата"
      />
      <h2>{{ footballMatches.competition.name }}</h2>
    </div>
    <MatchList :matches="footballMatches.matches" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useFootballMatches } from "@/useFootballMatches.js";
import MatchList from "@/components/MatchList.vue";

const { footballMatches, getFootballMatches } = useFootballMatches();

onMounted(() => {
  getFootballMatches();
})
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

.competition__header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}
</style>