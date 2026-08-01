
<template>
    <h2>{{ pageName }}</h2>
    <section v-if="isLoading">
        <Spinner/>
    </section>
    <section id="gallery" v-for='(image, i) in gallery' :key='i'>
        <img :src="image.img">
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import Spinner from '../components/spinner.vue';

    const props = defineProps(['name'])

    const gallery = ref([])
    const pageName = ref(props.name
            ? `${props.name}'s Gallery`
            : "Gallery"
        )
    let isLoading = ref(false)
    
    const getgallery = async () => {
        isLoading.value = true
        const url = props.name
            ? `https://rpg-character-library-api.onrender.com/gallery/${props.name}`
            : `https://rpg-character-library-api.onrender.com/gallery`
        const response = await fetch(url)
        const images = await response.json()
        isLoading.value = false
        gallery.value = images.characters
    }

    console.log(gallery)
    onMounted(()=> {
        getgallery()
    })
</script>

<style>
    #gallery{
        display: grid;
        padding-left: 4vw;
        grid-template-columns: repeat(5, 20%);
        place-items: center;
    }
    #gallery img{
        width: 90%;
    }
</style>