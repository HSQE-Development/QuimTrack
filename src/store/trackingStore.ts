import { createAdaptedTracking } from "@/adapters/tracking.adapter";
import {
  ApiResponse,
  StateByArl,
  Tracking,
  TrackingResponse,
  UserAllocationByArl,
} from "@/models";
import axiosInstance from "@/utils/axiosInstance";
import { defineStore } from "pinia";

export const useTrackingStore = defineStore("trackingStore", {
  state: () => ({
    trackings: [] as Tracking[],
    trackings_state_by_arl: {} as StateByArl,
    trackings_user_allocation_by_arl: {} as UserAllocationByArl,
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
          ApiResponse<{ trackings_user_allocation_by_arl: UserAllocationByArl }>
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
  },
  getters: {
    getTrackingStateByArlAndState: (state) => {
      return state.trackings.reduce((result, tracking) => {
        const arlName = tracking.arl.name;
        const stateName = tracking.state.name;

        if (!result[arlName]) {
          result[arlName] = {};
        }
        if (!result[arlName][stateName]) {
          result[arlName][stateName] = 0;
        }
        result[arlName][stateName]++;
        return result;
      }, {} as Record<string, Record<string, number>>);
    },
    getCompanyCountForUserByArl: (state) => {
      return state.trackings.reduce((result, tracking) => {
        const arlName = tracking.arl.name;
        const userId = tracking.user.id;

        if (!result[arlName]) {
          result[arlName] = {};
        }

        if (!result[arlName][userId]) {
          result[arlName][userId] = {
            userName: `${tracking.user.firstName} ${tracking.user.lastName}`,
            companyCount: 0,
          };
        }
        result[arlName][userId].companyCount++;
        return result;
      }, {} as Record<string, Record<string, { userName: string; companyCount: number }>>);
    },
  },
});
