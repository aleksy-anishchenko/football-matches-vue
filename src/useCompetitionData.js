import { useCompetitionStore } from "@/competitionStore.js";

export const useCompetitionData = () => {
    const store = useCompetitionStore()

    async function fetchCompetitionData() {
        try {
            const response = await fetch('/api/v4/competitions/CL/matches', {
                headers: {
                    'X-Auth-Token': '35a54fdd83344a17bdf1a99dfc384df8',
                }
            })
            const data = await response.json()
            store.setCompetition(data.competition)
            store.setMatches(data.matches)
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        matches: store.matches,
        competition: store.competition,
        fetchCompetitionData,
    }
}