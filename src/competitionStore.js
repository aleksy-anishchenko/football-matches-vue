import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCompetitionStore = defineStore('competitionStore', () => {
    const matches = ref([])
    const competition = ref([])

    function setMatches(newMatches) {
        matches.value = newMatches
    }

    function setCompetition(newCompetition) {
        competition.value = newCompetition
    }

    return {
        matches,
        competition,
        setMatches,
        setCompetition,
    }
})