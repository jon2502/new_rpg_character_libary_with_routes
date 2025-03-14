<template>
    <h1>Downloads</h1>
    <p>Here you can find and download homebrewed material from classes to races.</p>
    <section v-for='(download, i) in downloads' :key='i'>
        <div class="flex">
            <!--run download funcion when a user click one of the buttons-->
            <img :src="download.link.replace('pdf', 'png')" :alt="download.name" class="thumbnail">
            <button @click="downloadFile(download.link, download.name)">
                Download {{ download.name }}
            </button>
        </div>
    </section>
</template>

<script>

//import and use SaveAS from file-saver package
import { saveAs } from 'file-saver';

export default {
        data() {
            return {
                //
                downloads: []
            }
        },
        methods: {
            async getcharacter() {

                //fetch api to get download info
                let downloads = await fetch('http://localhost:3000/downloads');
                //
                let finalist = await downloads.json();
                console.log(finalist)
                //
                this.downloads = finalist.downloads;
            },
            async downloadFile(link, name) {
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
        },

        created: function (){
            //
            this.getcharacter()
        }
    }
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