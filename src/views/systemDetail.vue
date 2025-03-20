<template>
    <h2>{{ this.system }}</h2>
    <section id="characteSelctor">
        <div v-for='(character) in SortedCharacters' :key='character.name' class="character-item">
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

<script>
    export default {

        props: ['system'],

        data() {
            return {
                //
                characters: []
            }
        },

        computed:{
            SortedCharacters(){
                return [...this.characters].sort((a,b)=> a.name.localeCompare(b.name))
            }
        },

        methods: {
            async getcharacter() {

                //fetch api
                let characters = await fetch(`https://rpg-character-library-api.onrender.com/systems/${this.system}`);
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

