<template>
  <div class="match-list">
    <MatchItem v-for="match in matches" :key="match.id" :match="match" />
  </div>
</template>

<script setup>
import MatchItem from "@/components/MatchItem.vue";

defineProps({
  matches: Array,
})
</script>

<style scoped>
.match-list {
  max-width: 700px;
  margin: 0 auto;
}
</style>