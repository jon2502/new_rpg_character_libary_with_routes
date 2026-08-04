<template>
    <h2>{{ this.system }}</h2>
    <section v-if="isLoading">
        <Spinner/>
    </section>
    <section v-else id="characteSelctor">
        <div v-for='(character) in characters' :key='character.name' class="character-item">
            <!-- : placeres forand to så at vi kan binde data fra chracter til character detain parametern name -->
            <router-link :to="{ name: 'character Detail', params: {name: character.name, }}">
                <h3>{{ character.name }}</h3>
            </router-link>
        </div>
    </section>
    <section id="Libary">
        <div class="infoContainer" v-for='(character) in SortedCharacters' :key='character.name'>
        <div>
            <h2>{{ character.name }}</h2>
            <ul>
                <li>{{ character.race }}</li>
                <li>{{ character.culture_background }}</li>
                <li>{{ character.profession_class }}</li>
                <li>{{ character.place_of_birth }}</li>
            </ul>
        </div>
        <img :src="character.img" :alt="character.name">
        </div>
    </section>
</template>


<script setup>
    import { ref, onMounted } from 'vue'
    import Spinner from '../components/spinner.vue';

    const props = defineProps(['system'])

    const characters = ref([])
    let isLoading = ref(false)
    
    const getcharacters = async () => {
        isLoading.value = true
        const response = await fetch(`https://rpg-character-library-api.onrender.com/systems/${props.system}`)
        const data = await response.json()
        isLoading.value = false
        characters.value = data
    }

    onMounted(()=> {
        getcharacters()
    })
</script>