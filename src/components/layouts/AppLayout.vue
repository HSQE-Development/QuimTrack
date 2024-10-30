<script setup lang="ts">
import Navbar from '@/components/layouts/Navbar.vue';
</script>

<template>
    <div class="bg-back_primary w-screen h-screen flex flex-col items-center justify-start relative overflow-auto">
        <Navbar/>
        <main class="w-full flex flex-col ">
            <router-view></router-view>
        </main>
    </div>
</template>