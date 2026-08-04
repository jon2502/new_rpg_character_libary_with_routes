
<template>
    <h2>Systems</h2>
    <section v-if="isLoading">
        <Spinner/>
    </section>
    <section v-else v-for='(system, i) in systems' :key='i'>
        <!-- : placeres forand to så at vi kan binde data fra chracter til character detain parametern name -->
        <router-link :to="{ name: 'system Detail', params: {system: system.System_name, }}">
            <h3>{{ system.System_name }}</h3>
        </router-link>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import Spinner from '../components/spinner.vue';
    
    const systems = ref([])
    let isLoading = ref(false)
    
    const getsystems = async () => {
        isLoading.value = true
        const response = await fetch(`https://rpg-character-library-api.onrender.com/systems`)
        const data = await response.json()
        isLoading.value = false
        systems.value = data
    }
        
    onMounted(()=> {
        getsystems()
    })
</script>