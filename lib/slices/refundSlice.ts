import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getRefundProgress } from "../api/refundApi";

export interface RefundRequest {
  id: string;
  userId: string;
  store: "google" | "apple";
  appName: string;
  purchaseDate: string;
  refundAmount: number;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  reason: string;
  updatedAt: string;
  email: string;
  rejectionReason?: string;
}

interface RefundState {
  currentStep: number;
  formData: {
    [key: string]: string | string[];
  };
  latestUpdate: {
    appName: string;
    status: string;
  } | null;
  isSubscribed: boolean;
  requests: RefundRequest[];
  userRequests: RefundRequest[];
  loading: boolean;
  error: string | null;
}

const initialState: RefundState = {
  currentStep: 0,
  formData: {},
  latestUpdate: null,
  isSubscribed: false,
  requests: [],
  userRequests: [],
  loading: false,
  error: null,
};

export const fetchUserRefundRequestsAsync = createAsyncThunk(
  "refund/fetchUserRequests",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await getRefundProgress(userId);
      return response;
    } catch (error) {
      return rejectWithValue("환불 요청을 불러오는데 실패했습니다.");
    }
  }
);

const refundSlice = createSlice({
  name: "refund",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setFormData: (
      state,
      action: PayloadAction<{ key: string; value: string | string[] }>
    ) => {
      state.formData[action.payload.key] = action.payload.value;
    },
    resetForm: (state) => {
      state.currentStep = 0;
      state.formData = {};
    },
    updateRefundStatus: (
      state,
      action: PayloadAction<{ appName: string; status: string }>
    ) => {
      state.latestUpdate = action.payload;
    },
    subscribeToRefundUpdates: (state) => {
      state.isSubscribed = true;
    },
    unsubscribeFromRefundUpdates: (state) => {
      state.isSubscribed = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRefundRequestsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserRefundRequestsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userRequests = action.payload;
      })
      .addCase(fetchUserRefundRequestsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setCurrentStep,
  setFormData,
  resetForm,
  updateRefundStatus,
  subscribeToRefundUpdates,
  unsubscribeFromRefundUpdates,
} = refundSlice.actions;

export default refundSlice.reducer;
