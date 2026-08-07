<template>
    <section v-if="isLoading">
        <Spinner/>
    </section>
     <section id="Grid">
        <div >
            <h1>{{ character.name }}</h1>
            <component v-for="text in character.text_content" :is="text.tag">{{ text.text }}</component>
        </div>
        <div>
            <img :src="character.img" :alt="character.name">
            <router-link :to="{ name: 'character gallery', params: {name: character.name, }}">
                <button>view character gallery</button>
            </router-link>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import Spinner from '../components/spinner.vue';

    const props = defineProps(['name'])

    const character = ref({})
    let isLoading = ref(false)

    const getcharacter = async () => {
        isLoading.value = true
        const response = await fetch(`https://rpg-character-library-api.onrender.com/characters/${props.name}`)
        const data = await response.json()
        isLoading.value = false
        character.value = data
    }

    onMounted(()=> {
        getcharacter()
    })
</script>

<style>
#Grid{
        display: grid;
        padding-left: 4vw;
        grid-template-columns: repeat(2, 50%);
        place-items: center;
    }
img{
    width: 90%;
}
</style>