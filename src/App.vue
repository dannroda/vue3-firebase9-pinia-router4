<template>
  <a-layout>
    <a-layout-header v-if="!userStore.loadingSession">
      <a-menu theme="dark" mode="horizontal" :style=" { lineHeight: '64px' } " v-model:selectedKeys="selectedKeys">
        <a-menu-item v-if="userStore.userData" key="home">
          <router-link to="/" >Home</router-link>
        </a-menu-item>
        <a-menu-item v-if="!userStore.userData" key="login">
          <router-link to="/login" >Login</router-link>
        </a-menu-item>
        <a-menu-item v-if="!userStore.userData" key="register">
          <router-link to="/register">Register</router-link>
        </a-menu-item>
        <a-menu-item @click="userStore.logoutUser" v-if="userStore.userData" key="logout">
          Logout
        </a-menu-item>
      </a-menu>
    </a-layout-header>

    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <div v-if="userStore.loadingSession">loading user...</div>
        <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, watch } from 'vue';
import { useUserStore } from './stores/user';
import { useRoute } from 'vue-router';
const route = useRoute()
const userStore = useUserStore()
const selectedKeys = ref([''])
watch(() => route.name, () => {
  selectedKeys.value = [route.name]
})

</script>

<style>
</style>
