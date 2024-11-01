import { createAdaptedTracking } from "@/adapters/tracking.adapter";
import {
  ApiResponse,
  AsignedResourceByArl,
  StateByArl,
  Tracking,
  TrackingResponse,
  ResourceByArl,
  UserAllocationByArl,
  UserResourceByArl,
  AsignedResourceByUser,
} from "@/models";
import axiosInstance from "@/utils/axiosInstance";
import { defineStore } from "pinia";

export const useTrackingStore = defineStore("trackingStore", {
  state: () => ({
    trackings: [] as Tracking[],
    trackings_state_by_arl: {} as StateByArl,
    trackings_user_allocation_by_arl: {} as UserAllocationByArl,
    trackings_asigned_resource_by_arl: {} as AsignedResourceByArl,
    trackings_user_resource_by_arl: {} as UserResourceByArl,
    trackings_resource_by_arl: {} as ResourceByArl,
    trackings_asigned_resource_by_user: {} as AsignedResourceByUser,
    loading: false,
  }),
  actions: {
    async getTracking(filters: any[]) {
      this.loading = true;
      try {
        const response = await axiosInstance.get<
          ApiResponse<{ trackings: TrackingResponse[] }>
        >("/tracking", {
          params: filters,
        });

        this.trackings = response.data.data.trackings.map((tracking) =>
          createAdaptedTracking(tracking)
        );
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
    async stateByArl(filters: any[] = []) {
      this.loading = true;
      try {
        const response = await axiosInstance.get<
          ApiResponse<{ trackings_state_by_arl: StateByArl }>
        >("/tracking/state_by_arl", {
          params: filters,
        });

        this.trackings_state_by_arl = response.data.data.trackings_state_by_arl;
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },

    async userAllocationByArl(filters: any[] = []) {
      this.loading = true;
      try {
        const response = await axiosInstance.get<
          ApiResponse<{
            trackings_user_allocation_by_arl: UserAllocationByArl;
          }>
        >("/tracking/user_allocation_by_arl", {
          params: filters,
        });
        this.trackings_user_allocation_by_arl =
          response.data.data.trackings_user_allocation_by_arl;
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },

    async asignedResourceByArl(filters: any[] = []) {
      this.loading = true;
      try {
        const response = await axiosInstance.get<
          ApiResponse<{
            trackings_asigned_resource_by_arl: AsignedResourceByArl;
          }>
        >("/tracking/asigned_resource_by_arl", {
          params: filters,
        });

        this.trackings_asigned_resource_by_arl =
          response.data.data.trackings_asigned_resource_by_arl;
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
    async userResourceByArl(filters: any[] = []) {
      this.loading = true;
      try {
        const response = await axiosInstance.get<
          ApiResponse<{
            trackings_user_resource_by_arl: UserResourceByArl;
          }>
        >("/tracking/user_resource_by_arl", {
          params: filters,
        });

        this.trackings_user_resource_by_arl =
          response.data.data.trackings_user_resource_by_arl;
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
    async resourceByArl(filters: any[] = []) {
      this.loading = true;
      try {
        const response = await axiosInstance.get<
          ApiResponse<{
            trackings_resource_by_arl: ResourceByArl;
          }>
        >("/tracking/resource_by_arl", {
          params: filters,
        });

        this.trackings_resource_by_arl =
          response.data.data.trackings_resource_by_arl;
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
    async asignedResourceByUser(filters: any[] = []) {
      this.loading = true;
      try {
        const response = await axiosInstance.get<
          ApiResponse<{
            trackings_asigned_resource_by_user: AsignedResourceByUser;
          }>
        >("/tracking/asigned_resource_by_user", {
          params: filters,
        });

        this.trackings_asigned_resource_by_user =
          response.data.data.trackings_asigned_resource_by_user;
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
  },
});
