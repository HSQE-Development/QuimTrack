<script setup lang="ts">
import { SignInRequest } from "@/models";
import { useAuthStore } from "@/store/authStore";
import {ref} from "vue"

const authStore = useAuthStore()
const credentials = ref<SignInRequest>({
    email: "",
    password: ""
})

const signIn = () => {
    authStore.signIn(credentials.value)
}

</script>
<template>
    <form class="w-full h-full flex flex-col items-center justify-center" @submit.prevent="signIn">
        <h1 class="text-back_violet text-5xl font-semibold">Iniciar Sesion</h1>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6 flex flex-col gap-2">
                <label for="email">Email</label>
                <a-input v-model:value="credentials.email" id="email"  placeholder="Basic usage" htmlType="email" />
            </div>
            <div class="col-span-6 flex flex-col gap-2">
                <label for="password">Contraseña</label>
                <a-input-password v-model:value="credentials.password" id="password"  placeholder="Basic usage" />
            </div>
            <div class="col-span-12 flex flex-col gap-2">
                <a-button type="primary" htmlType="submit" :loading="authStore.loading" >Ingresar</a-button>
            </div>
        </div>
    </form>  
</template>