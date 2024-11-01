<script setup lang="ts">
import { useTrackingStore } from '@/store/trackingStore';
import { EChartsOption, PieSeriesOption } from 'echarts';
import { PieChart, BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { computed, onMounted } from 'vue';

use([CanvasRenderer,BarChart, PieChart, GridComponent, TooltipComponent, LegendComponent]);
const trackingStore = useTrackingStore()

onMounted( async() => {
    await trackingStore.asignedResourceByArl()
})

const chartData = computed<EChartsOption>(() => {
    const trackingData = trackingStore.trackings_asigned_resource_by_arl;
    
    if (!trackingData || typeof trackingData !== 'object' || Object.keys(trackingData).length === 0) {
        return {};
    }

    const arlNames = Object.keys(trackingData);
    if (arlNames.length === 0) {
        return {};
    }
    const dataForChart = Object.entries(trackingData).map(([name, value]) => ({
        name,
        value
    }));

    if (dataForChart.length === 0) {
        return {};
    }

    const series: PieSeriesOption = {
        name: 'Recursos Asignados por ARL',
        type: 'pie',
        radius: [20, 120],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
            borderWidth:0.5,
        },
        data:dataForChart,
        label: {
            show: true,
            formatter: '{c}%', // Muestra solo el valor como porcentaje
            fontSize: 12,
        },

    }
    return {
        color: [
            "#222831",
            "#00FFCA",
            "#00ADB5",
            "#7752FE",
        ],
        tooltip: {
            trigger:"axis",
            axisPointer: {
                type: "shadow"
            }

        },
        legend:{
            data: arlNames,
            top: "-2%"
        },
        series:series
    };

})

</script>
<template>
    <div class="w-full h-full flex items-center justify-center">
        <a-skeleton v-if="trackingStore.loading" active class="w-20 rotate-[270deg]"/>

        <VueEcharts  v-if="!trackingStore.loading && chartData && Object.keys(chartData).length > 0" :option="chartData  || []" style="width: 100%; height: 300px" autoresize />

    </div>
</template>