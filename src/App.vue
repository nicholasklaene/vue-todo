<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: white;
  background: #2c3e50;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
}
</style>
