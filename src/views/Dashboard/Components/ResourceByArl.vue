<script setup lang="ts">
import { useTrackingStore } from '@/store/trackingStore';
import { computed, onMounted } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { BarSeriesOption, EChartsOption  } from 'echarts';
use([CanvasRenderer, BarChart, GridComponent, TooltipComponent, LegendComponent]);

const trackingStore = useTrackingStore()
onMounted( async() => {
    await trackingStore.resourceByArl()
})

const chartData = computed<EChartsOption>(() => {
    const trackingData = trackingStore.trackings_resource_by_arl;
    
    if (!trackingData || typeof trackingData !== 'object' || Object.keys(trackingData).length === 0) {
        return {};
    }

    const arlNames = Object.keys(trackingData);
    if (arlNames.length === 0) {
        return {};
    }
    const states = Array.from(new Set(arlNames.flatMap(arl => Object.keys(trackingData[arl]))));
    const seriesData: BarSeriesOption[] = states.map(state => ({
        name: state,
        type: 'bar',
        data: arlNames.map(arl => trackingData[arl][state] || 0),
        itemStyle: {
            borderRadius:[10, 10, 0 ,0],
            borderWidth:0.5,
            borderColor:"#000"
        }
    }));

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
            data: states,
            bottom: "5%"
        },
        xAxis: {
            type: 'category',
            data: arlNames,
        },
        yAxis: {
            type: 'value',
            
        },
        series: seriesData,
    };
});
</script>
<template >
    <div class="w-full h-full">
        <VueEcharts  v-if="chartData && Object.keys(chartData).length > 0" :option="chartData  || []" style="width: 100%; height: 300px" autoresize />
    </div>
</template>