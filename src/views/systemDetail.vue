<template>
    <h2>{{ this.system }}</h2>
    <div v-for='(character, i) in characters' :key='i'>
        <!-- : placeres forand to så at vi kan binde data fra chracter til character detain parametern name -->
        <router-link :to="{ name: 'characterDetail', params: {name: character.name, }}">
            <h3>{{ character.name }}</h3>
        </router-link>
    </div>
    <section id="Libary">
        <div class="infoContainer" v-for='(character, i) in characters' :key='i'>
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

<script>
    export default {

        props: ['system'],

        data() {
            return {
                //
                characters: []
            }
        },
        methods: {
            async getcharacter() {

                //fetch api
                let characters = await fetch(`http://localhost:3000/systems/${this.system}`);
                //
                let finalist = await characters.json();
                //
                this.characters = finalist.characters;
            }
        },

        created: function (){
            //
            this.getcharacter()
        }
    }
</script>

<style>
    #Libary img{
        width: 80%;
    }
    #Libary{
        display: grid;
        margin-top: 2vh;
        grid-template-columns: repeat(2, 50%);
        row-gap: 2vh;
        padding-left: 5%;
    }
    .infoContainer{
        display: grid;
        grid-template-columns: repeat(2, 50%);
    }
    li{
        list-style: none;
    }
</style>