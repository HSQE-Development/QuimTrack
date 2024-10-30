<script setup lang="ts">
import { User } from '@/models';
import { firstLettersInNameUser } from '@/utils/first-letters-in-name-user.util';

defineProps<{user:User}>()
</script>

<template>
    <a-tooltip placement="bottom">
        <template #title>
            <span>{{ user.firstName }} {{ user.lastName }}</span>
        </template>
        <div class="flex items-center justify-center bg-gray_primary h-12 w-12 rounded-full">
            <span>{{ firstLettersInNameUser(user.firstName ?? "", user.lastName ?? "") }}</span>
        </div>
    </a-tooltip>
</template>