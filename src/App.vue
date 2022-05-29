<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useUserStore } from './stores/user';
const userStore = useUserStore()
</script>

<template>
<div>
<h1>App base</h1>

<nav v-if="!userStore.loadingSession">
  <router-link to="/" v-if="userStore.userData">Home</router-link> |
  <router-link to="/login" v-if="!userStore.userData">Login</router-link> |
  <router-link to="/register" v-if="!userStore.userData">Register</router-link> |
  <button @click="userStore.logoutUser" v-if="userStore.userData">Logout</button>
</nav>
<div v-else>loading user...</div>
<router-view></router-view>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
