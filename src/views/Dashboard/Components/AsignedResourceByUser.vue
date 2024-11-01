<script setup lang="ts">
import { useTrackingStore } from '@/store/trackingStore';
import { computed, onMounted } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { RadarChart  } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { EChartsOption  } from 'echarts';

use([CanvasRenderer, RadarChart , GridComponent, TooltipComponent, LegendComponent]);
const trackingStore = useTrackingStore()

onMounted( async() => {
    await trackingStore.asignedResourceByUser()
})

const chartData = computed<EChartsOption>(() => {
    const trackingData = trackingStore.trackings_asigned_resource_by_user;
    
    if (!trackingData || typeof trackingData !== 'object' || Object.keys(trackingData).length === 0) {
        return {};
    }

    const userNames = Object.keys(trackingData);
    if (userNames.length === 0) {
        return {};
    }
    const assignedResources = userNames.map(user => trackingData[user]["RECURSO ASIGNADO"]);
    const totalResources = userNames.map(user => trackingData[user]["TOTAL RECURSO"]);

    return {
        color: [
            "#222831",
            "#00FFCA",
            "#00ADB5",
            "#7752FE",
        ],
        legend: {
            data: userNames,
        },
        tooltip: {},
        radar: {
            indicator: userNames.map((user, index) => ({
        name: user,
        max: Math.max(assignedResources[index], totalResources[index]) + 100 // Ajustar el máximo según los datos
    })),
        },
        series: [{
            name: 'Recursos por Usuario',
            type: 'radar',
            data: [
                {
                    value: assignedResources,
                    name: 'Recursos Asignados',
                },
                {
                    value: totalResources,
                    name: 'Total Recursos',
                },
            ],
        }],
    };
});
</script>
<template >
    <div class="w-full h-full">
        <VueEcharts  v-if="chartData && Object.keys(chartData).length > 0" :option="chartData  || []" style="width: 100%; height: 300px" autoresize />
    </div>
</template>