<template>
<a-row>
    <a-col :xs="{span: 24}" :sm="{span:18, offset: 3}">
        <a-form name="basicRegister" autocomplete="off" layout="vertical" :model="formState" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item name="email" label="Ingresa tu correo" :rules="[{ required: true, message: 'Ingrese un email', type: 'email'}]">
                <a-input v-model:value="formState.email"></a-input>
            </a-form-item>
            <a-form-item name="password" label="Ingresa tu contraseña" :rules="[{ required: true, message: 'Ingrese una contraseña de 6 caracteres', min: 6}]">
                <a-input-password v-model:value="formState.password"></a-input-password>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit" :disable="userStore.loadingUser">Crear</a-button>
            </a-form-item>
        </a-form>
    </a-col>
</a-row>
</template>

<script setup>
import { reactive} from 'vue';
import { useUserStore } from '../stores/user';
const userStore = useUserStore()
const formState = reactive({
    email: '',
    password: ''
})

const onFinish = async (values) => {
    console.log('Completado', values)
    await userStore.registerUser(formState.email, formState.password)
}
const onFinishFailed = errorInfo => {
    console.log('Ha Fallado', errorInfo)
}
</script>
