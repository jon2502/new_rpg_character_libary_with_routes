<template>
    <h1>Downloads</h1>
    <p>Here you can find and download homebrewed material from classes to races.</p>
    <section v-for='(download, i) in downloads' :key='i'>
        <button @click="downloadFile(download.link, download.name)">
            Download {{ download.name }}
        </button>
    </section>
</template>

<script>
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

                //fetch api
                let downloads = await fetch('http://localhost:3000/downloads');
                //
                let finalist = await downloads.json();
                console.log(finalist)
                //
                this.downloads = finalist.downloads;
            },
            async downloadFile(link, name) {
                try{
                    let response = await fetch(link);
                    let blob = await response.blob();
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
</style>