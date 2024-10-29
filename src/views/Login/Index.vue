<script  setup lang="ts">
import LoginForm from "@/views/Login/Components/LoginForm.vue"
import LoginSvg from "/login.svg"
import LOGO_COLOR from "/LOGO_COLOR.png"
</script>
<template>
    <div class="bg-white w-screen h-screen flex items-center justify-center"  
    
    >
        
        <div class="w-[80%] h-[90%] border-4 border-primary_violet rounded-xl drop-shadow-xl flex items-start justify-between transition-all gap-2" 
            v-motion
            :initial="{
                opacity: 0,
            }"
            :enter="{
                opacity: 1,
            }"
        >
            <div class="w-1/2 h-full p-4">
                <div class="border-dashed border-2 border-back_violet w-full h-full rounded-3xl flex flex-col justify-between relative">
                    <img :src="LoginSvg" alt="login_image" class="absolute bottom-0 left-24">
                </div>
            </div>
            <div class="w-1/2 h-full flex flex-col justify-between">
                <div class="flex items-center justify-center w-full h-28">
                    <span class="bg-gradient-to-r from-violet-400 to-purple-900 bg-clip-text text-transparent text-7xl mt-8 font-extrabold">QuimTrack</span>
                </div>
                <LoginForm/>
                <div class="w-full h-24 flex items-center justify-center gap-4">
                    <span>By</span>
                    <img :src="LOGO_COLOR" alt="login_image" class="w-40">
                </div>
            </div>
        </div>
    </div>
</template>