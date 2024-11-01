import { Tracking } from "@/models";

export function transformTrackingDataForChart(trackings: Tracking[]) {
  const arlData: Record<string, Record<string, number>> = {};
  trackings.forEach((tracking) => {
    const arlName = tracking.arl.name;
    const stateName = tracking.state.name;

    if (!arlData[arlName]) {
      arlData[arlName] = {};
    }
    if (!arlData[arlName][stateName]) {
      arlData[arlName][stateName] = 0;
    }

    // Incrementa el conteo de estado para esta ARL
    arlData[arlName][stateName] += 1;
  });

  return arlData;
}
