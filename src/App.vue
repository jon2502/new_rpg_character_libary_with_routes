<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/characters">characters</router-link> |
    <router-link to="/gallery">gallery</router-link> |
    <router-link to="/systems">systems</router-link> |
    <router-link to="/downloads">downloads</router-link>
  </nav>
  <router-view/>
</template>

<style>
body{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  gap: 1vw;
  padding: 30px;
  background-color: #2b353e;
}

nav a {
  font-weight: bold;
  color: #6fb9c1;
}

nav a.router-link-exact-active {
  color: #42b983;
}

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
