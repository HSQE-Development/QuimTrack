import { User } from "./user.model";

export interface TrackingClassification {
  id: number;
  name: string;
  identify: string;
}

export interface ServiceType {
  id: number;
  name: string;
  identify: string;
}

export interface Company {
  id: number;
  name: string;
  nit: string | null;
}

export interface Arl {
  id: number;
  name: string;
  identify: string;
}

export interface TrackingState {
  id: number;
  name: string;
}

export interface Tracking {
  id: number;
  user: User;
  classification: TrackingClassification;
  serviceType: ServiceType;
  company: Company;
  arl: Arl;
  resourceHours: number;
  asignedResource: number;
  expirationDate: string;
  state: TrackingState;
  dateRadicate: string | null;
}

export interface TrackingResponse {
  id: number;
  user: User;
  classification: TrackingClassification;
  service_type: ServiceType;
  company: Company;
  arl: Arl;
  resource_hours: number;
  asigned_resource: number;
  expiration_date: string;
  state: TrackingState;
  date_radicate: string | null;
}

export interface StateByArl {
  [arlName: string]: {
    [stateName: string]: number;
  };
}


export interface UserAllocationByArl {
  [userName: string]: {
    [arlName: string]: number;
  };
}