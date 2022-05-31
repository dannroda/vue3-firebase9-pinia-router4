<script setup>
import { ref } from 'vue';
import { useDatabaseStore } from '../stores/database';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
const router = useRouter()
const userStore = useUserStore()
const databaseStore = useDatabaseStore()
databaseStore.getUrls()
const url = ref('')
const handleSubmit = () => {
    // hay que validar urls [pendiente]
    databaseStore.addUrl(url.value)
}
</script>

<template>
    <div>
        <h1>Home</h1>
        <p>{{userStore.userData.email}} </p>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Ingrese URL" v-model="url">
            <button type="submit">Agregar</button>
        </form>
        <p v-if="databaseStore.loadingDoc">loading docs...</p>
        <ul v-else>
            <li v-for="item of databaseStore.documents" :key="item.id">
                {{item.id}} - {{item.name}} - {{item.short}}
                <button @click="router.push(`/editar/${item.id}`)">Editar</button>
                <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>