<template>
    <section id="gallery" v-for='(image, i) in gallery' :key='i'>
        <img :src="image.img">
    </section>
</template>

<script>
    export default {
        //
        props: ['name'],

        data(){
            return {
                //
                gallery: {}
            }
        },
        methods: {
            async getgallery() {
                // url
                if(this.name){
                    let url = `https://rpg-character-library-api.onrender.com/gallery/${this.name}`;
                    //fetch api with url
                    let gallery = await fetch(url);
                    // 
                    let finalist = await gallery.json();
                    //
                    this.gallery = finalist.character;
                }else{
                    let url = `https://rpg-character-library-api.onrender.com/gallery`;
                    //fetch api with url
                    let gallery = await fetch(url);
                    // 
                    let finalist = await gallery.json();
                    //
                    this.gallery = finalist.characters;
                }
            }
        },
        created: function (){
            //
            this.getgallery()
        }

    }
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