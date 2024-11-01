<script  setup lang="ts">
import BentoCard from '@/components/common/BentoCard.vue';
import { onMounted } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent  } from 'echarts/components';
import { useAuthStore } from '@/store/authStore';
import { actualDateToString } from '@/utils/date-to-string.util';
import { useTrackingStore } from '@/store/trackingStore';
import StateCompanyByArl from './Components/StateCompanyByArl.vue';
import CompanyCountForUserByArl from './Components/CompanyCountForUserByArl.vue';

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent, LegendComponent]);
const {authUser} = useAuthStore()
const trackingStore = useTrackingStore()

onMounted(async () => {
  const filters: any[] = [];
  await trackingStore.getTracking(filters)
})

</script>
<template>
    <section class="w-full flex-1 flex flex-col px-4 gap-4">
        <div class="flex w-full justify-between items-center">
            <div class="flex flex-col items-start justify-center">
              <h1 class="text-4xl">Hola 👋,{{ authUser?.user.firstName }} </h1>
              <div class="w-full flex items-center justify-between">
                  <h2 class="text-zinc-400">{{ actualDateToString() }}</h2>
              </div>
            </div>
            <a-button type="primary">Primary Button</a-button>
        </div>
        <a-skeleton active v-if="trackingStore.loading"/>
        <div class="w-full flex items-center justify-between gap-4 my-4">
          <BentoCard class-name="bg-white relative w-[30%] border-0 drop-shadow-md">
            s
            s
          </BentoCard>
          <div class="flex-1 grid grid-cols-8 h-auto gap-4">
            <BentoCard class-name="col-span-3 row-span-12 bg-white relative" title="Horas asignadas por ARL" icon="io-pie-chart-outline">
              s
              s
            </BentoCard>
            <BentoCard class-name="col-span-5 row-span-12 bg-white relative" title="Asignación empresas por ARL" icon="co-chart">
              <CompanyCountForUserByArl/>
              
            </BentoCard>
            <BentoCard class-name="col-span-4 row-span-12 bg-white relative" title="Estado de empresas por ARL" icon="co-chart">
              <StateCompanyByArl/>
            </BentoCard>
            <BentoCard class-name="col-span-4 row-span-12 bg-white relative" title="Recurso asignado por ARL" icon="co-chart">
              s
              s
            </BentoCard>
          </div>

        </div>
            <!-- <div class="flex flex-col items-start justify-center">
                <h1 class="text-4xl">Hola 👋,{{ authUser?.user.firstName }} </h1>
                <div class="w-full flex items-center justify-between">
                    <h2 class="text-zinc-400">{{ actualDateToString() }}</h2>
                </div>
            </div>

        <div class="grid grid-cols-12 h-full gap-4 ">
            <BentoCard class-name="col-span-4 bg-white relative">
                Hola
                <div class="w-12 h-12 bg-black absolute "></div>
            </BentoCard>
            <div class="col-span-8 grid grid-cols-12 grid-rows-4 gap-4">
                <BentoCard class-name="col-span-6 row-span-3" title="Estado de recurso por ARL" icon="co-chart"></BentoCard>
                <BentoCard class-name="col-span-6 row-span-3 bg-blue_primary" title="Estado de empresas por ARL" icon="co-chart">
                    
                    <VueEcharts :option="chartOptions" style="width: 100%; height: 400px;" />
                </BentoCard>
                <BentoCard class-name="col-span-12 row-span-3 bg-blue_primary">Hola</BentoCard>
                <BentoCard class-name="col-span-5 row-span-3" title="Horas asignadas por ARL" icon="co-chart-pie">Hola</BentoCard>
            </div>
        </div> -->
    </section>
</template>

