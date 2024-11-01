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
    await trackingStore.userResourceByArl()
})

const chartData = computed<EChartsOption>(() => {
    const trackingData = trackingStore.trackings_user_resource_by_arl;
    if (!trackingData || typeof trackingData !== 'object' || Object.keys(trackingData).length === 0) {
        return {};
    }
    const userNames = Object.keys(trackingData);
    if (userNames.length === 0) {
        return {};
    }

    const arls = Array.from(new Set(userNames.flatMap(user => Object.keys(trackingData[user]))));

    const seriesData: BarSeriesOption[] = arls.map(arl => ({
        name: arl,
        type: 'bar',
        stack: "total",
        data: userNames.map(user => trackingData[user][arl] || 0),
        itemStyle: {
            borderRadius:[0, 0, 0, 0],
            borderWidth:0.3,
            borderColor:"#222831"
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
            data: arls,
            bottom: "5%"
        },
        xAxis: {
            type: 'category',
            data: userNames,
            
        },
        yAxis: {
            type: 'value',
            
        },
        series: seriesData,
    };
})

</script>
<template >
    <div class="w-full h-full flex items-center justify-center">
        <a-skeleton v-if="trackingStore.loading" active class="w-20 rotate-[270deg]"/>
        <VueEcharts  v-if="!trackingStore.loading && chartData && Object.keys(chartData).length > 0" :option="chartData  || []" style="width: 100%; height: 300px" autoresize />
    </div>
</template>