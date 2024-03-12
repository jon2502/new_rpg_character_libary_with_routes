<template>
    <h2>Systems</h2>
    <div v-for='(system, i) in systems' :key='i'>
        <!-- : placeres forand to så at vi kan binde data fra chracter til character detain parametern name -->
        <router-link :to="{ name: 'systemDetail', params: {system: system.System_name, }}">
            <h3>{{ system.System_name }}</h3>
        </router-link>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                //
                systems: []
            }
        },
        methods: {
            async getsystems() {

                //fetch api
                let systems = await fetch(`http://localhost:3000/systems`);
                //
                let finalist = await systems.json();
                //
                this.systems = finalist.systems;
                console.log(this.systems)
            }
        },

        created: function (){
            //
            this.getsystems()
        }
    }
</script>