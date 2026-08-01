<template>
    <h1>Downloads</h1>
    <p>Here you can find and download homebrewed material from classes to races.</p>
    <section v-if="isLoading">
        <Spinner/>
    </section>
    <section v-else v-for='(download, i) in downloads' :key='i'>
        <div class="flex">
            <!--run download funcion when a user click one of the buttons-->
            <img :src="download.link.replace('pdf', 'png')" :alt="download.name" class="thumbnail">
            <button @click="downloadFile(download.link, download.name)">
                Download {{ download.name }}
            </button>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { saveAs } from 'file-saver';
    import Spinner from '../components/spinner.vue';

    const downloads = ref([])
    let isLoading = ref(false)
    
    const getfiles = async () => {
        isLoading = true
        const response = await fetch(`https://rpg-character-library-api.onrender.com/downloads`)
        const files = await response.json()
        isLoading = false
        downloads.value = files.downloads
    }

    const downloadFile= async (link, name) => {
                try{
                    //fetch link
                    let response = await fetch(link);
                    //return response as a blob
                    let blob = await response.blob();
                    //then save blob as filemane.pdf to get the file data as a pdf
                    saveAs(blob, name+".pdf");
                }catch(error){
                    alert("oh no!");
                }
            }

    onMounted(()=> {
        getfiles()
    })
</script>

<style>
    .flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .thumbnail{
        width: 7.5vw;
        padding: 1.5vw;
    }
</style>