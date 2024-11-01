import { Tracking, TrackingResponse } from "@/models";

export const createAdaptedTracking = (tracking: TrackingResponse): Tracking => {
  const adaptedTracking: Tracking = {
    id: tracking.id,
    user: tracking.user,
    classification: tracking.classification,
    serviceType: tracking.service_type,
    company: tracking.company,
    arl: tracking.arl,
    resourceHours: tracking.resource_hours,
    asignedResource: tracking.asigned_resource,
    expirationDate: tracking.expiration_date,
    state: tracking.state,
    dateRadicate: tracking.date_radicate,
  };
  return adaptedTracking;
};
