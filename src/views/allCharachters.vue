<template>
    <div v-for='(character, i) in characters' :key='i'>
        <!-- : placeres forand to så at vi kan binde data fra chracter til character detain parametern name -->
        <router-link :to="{ name: 'character Detail', params: {name: character.name, }}">
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
        data() {
            return {
                //
                characters: []
            }
        },
        methods: {
            async getcharacter() {

                //fetch api
                let characters = await fetch('http://localhost:3000/characters');
                //
                let finalist = await characters.json();
                console.log(finalist)
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

