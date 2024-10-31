<script  setup lang="ts">
import BentoCard from '@/components/common/BentoCard.vue';
import { ref } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent  } from 'echarts/components';
import { useAuthStore } from '@/store/authStore';
import { actualDateToString } from '@/utils/date-to-string.util';

const {authUser} = useAuthStore()

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent, LegendComponent]);

const chartOptions = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
   grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  xAxis: {
    type: 'category',
    data: ['Bolivar',  'Colsanitas']
  },
  series: [
    {
      name: 'En proceso',
      type: 'bar',
      data: [18203, 630230]
    },
    {
      name: 'Pendiente',
      type: 'bar',
      data: [19325, 681807]
    }
  ],
});
</script>
<template>
    <section class="w-full flex-1 flex flex-col px-4">
        <div class="flex w-full justify-between items-center">
            <div class="flex flex-col items-start justify-center">
              <h1 class="text-4xl">Hola 👋,{{ authUser?.user.firstName }} </h1>
              <div class="w-full flex items-center justify-between">
                  <h2 class="text-zinc-400">{{ actualDateToString() }}</h2>
              </div>
            </div>
            <a-button type="primary">Primary Button</a-button>
        </div>
        <div class="grid grid-cols-12 grid-rows-12 w-full h-full gap-4 ">
            <BentoCard class-name="col-span-4 row-span-12 bg-white relative">
                Hola
                <div class="w-12 h-12 bg-black absolute "></div>
            </BentoCard>
            <BentoCard class-name="col-span-3 row-span-4" title="Estado de recurso por ARL" icon="co-chart"></BentoCard>
            <BentoCard class-name="col-span-5 row-span-4" title="Estado de empresas por ARL" icon="co-chart">
                
                <VueEcharts :option="chartOptions" style="width: 100%; height: 100%;" />
            </BentoCard>
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

