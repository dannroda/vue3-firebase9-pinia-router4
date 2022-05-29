<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
const userStore = useUserStore()
// const router = useRouter()
const email = ref('')
const password = ref('')
const handleSubmit = async () => {
    if(!email.value || password.value.length < 6){
        return alert('rellena los campos')
        }
    await userStore.loginUser(email.value, password.value)
    // router.push('/')
}
</script>
<template>
    <div>
        <h1>Login</h1>
<form @submit.prevent="handleSubmit">
    <input type="email" placeholder="ingrese email" v-model.trim="email">
    <input type="password" placeholder="ingrese pass" v-model.trim="password">
    <button type="submit" :disabled="userStore.loadingUser">Ingresar</button>
</form>
    </div>
</template>
