<script setup lang="ts">
import { cn } from '@/utils/class-merge.util';
defineProps<{className?:string, title?:string, icon?:string,desc?:string}>()

</script>
<template>
    <div :class="cn('border p-4 border-zinc-300 w-full h-full rounded-3xl',className)">
        <div class="flex items-center justify-between gap-2" v-if="title">
           <div class="flex items-center justify-center gap-2">
                <div class="p-2 border rounded-full border-zinc-400">
                    <v-icon :name="icon" />
                </div>
                <div class="flex items-start justify-start flex-col">
                    <span class="font-semibold ">{{ title }}</span>
                    <span v-if="desc" class="text-zinc-500">{{ desc }}</span>
                </div>
           </div>
           <a-popover title="Title" placement="bottom" trigger="click">
                <template #content>
                    <p>Content</p>
                    <p>Content</p>
                </template>
                <a-button type="dashed">
                    <template #icon>
                        <v-icon name="bi-three-dots-vertical"/>
                    </template>
                </a-button>
            </a-popover>
        </div>
        <slot></slot>
    </div>
</template>