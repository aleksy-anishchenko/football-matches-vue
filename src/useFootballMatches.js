import { ref } from 'vue';

export const useFootballMatches = () => {
    const footballMatches = ref([])

    async function getFootballMatches() {
        try {
            const response = await fetch('/api/v4/competitions/CL/matches', {
                headers: {
                    'X-Auth-Token': '35a54fdd83344a17bdf1a99dfc384df8'
                }
            })
            const data = await response.json()
            footballMatches.value = data
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        footballMatches,
        getFootballMatches
    }
}