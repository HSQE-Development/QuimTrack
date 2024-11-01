<script setup lang="ts">
import Navbar from '@/components/layouts/Navbar.vue';
</script>

<template>
    <div class="bg-back_primary w-screen h-screen flex flex-col ">
        <Navbar/>
        <main class="relative h-full flex-1 flex flex-col w-full overflow-auto">
            <router-view></router-view>
        </main>
    </div>
</template>