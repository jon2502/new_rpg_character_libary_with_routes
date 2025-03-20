<template>
    <section>
        <h1>Welcome to my RPG character library</h1>
    </section>
</template>

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