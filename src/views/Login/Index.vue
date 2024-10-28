<script  setup lang="ts">
import LoginForm from "@/views/Login/Components/LoginForm.vue"
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
                <div class="bg-back_violet w-full h-full rounded-3xl flex flex-col justify-between relative">
                    <div class="absolute inset-x-auto h-40 w-40 bg-white rounded-2xl"></div>
                </div>
            </div>
            <div class="w-1/2 h-full">
                <LoginForm/>
            </div>
        </div>
    </div>
</template>