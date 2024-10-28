<script lang="ts">
    
</script>
<template>
    <form class="w-full h-full flex flex-col items-center justify-center">
        <h1 class="text-back_violet text-5xl font-semibold">Iniciar Sesion</h1>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6 flex flex-col gap-2">
                <label for="">Email</label>
                <a-input v-model:value="value" placeholder="Basic usage" />
            </div>
            <div class="col-span-6 flex flex-col gap-2">
                <label for="">Contraseña</label>
                <a-input-password v-model:value="value"  placeholder="Basic usage" />
            </div>
            <div class="col-span-12 flex flex-col gap-2">
                <a-button type="primary">Ingresar</a-button>
            </div>
        </div>
    </form>  
</template>