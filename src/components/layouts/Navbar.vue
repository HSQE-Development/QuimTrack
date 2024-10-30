<script setup lang="ts">
import { useRoute } from 'vue-router'; 
import ProfileNavbar from '@/components/layouts/ProfileNavbar.vue';
import { useAuthStore } from '@/store/authStore';
const route = useRoute();
const {authUser} = useAuthStore()
const routerLinks = [
    {
        to:"/",
        text:"Dashboard",
        icon: "md-spacedashboard-round"
    },
    {
        to:"/users",
        text:"Usuarios",
        icon: "hi-user"
    },
]
</script>
<template>
    <nav class="w-full flex items-center justify-between px-4 h-20">
        <ul class="flex items-center justify-center gap-1">
                <li v-for="(link, index) in routerLinks"
                    :key="index" 
                >
                    <RouterLink 
                        :to="link.to" 
                        :class="{'bg-black text-white hover:bg-zinc-900 active:bg-zinc-800': route.path === link.to, 'bg-gray_primary hover:bg-zinc-100 active:bg-zinc-100/80': route.path !== link.to}" 
                        class="px-4 rounded-xl flex items-center gap-4 py-2 transition-all"
                    >
                        <v-icon :name="link.icon" />{{ link.text }}
                    </RouterLink>
                
            </li>
        </ul>
            
        <div class="flex items-center justify-center">
            <ProfileNavbar v-if="authUser?.user" :user="authUser.user"/>
        </div>
    </nav>
</template>