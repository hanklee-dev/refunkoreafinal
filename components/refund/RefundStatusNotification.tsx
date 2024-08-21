"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  subscribeToRefundUpdates,
  unsubscribeFromRefundUpdates,
} from "../../lib/slices/refundSlice";
import { RootState, AppDispatch } from "../../lib/store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RefundStatusNotification: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { latestUpdate } = useSelector((state: RootState) => state.refund);

  useEffect(() => {
    dispatch(subscribeToRefundUpdates());
    return () => {
      dispatch(unsubscribeFromRefundUpdates());
    };
  }, [dispatch]);

  useEffect(() => {
    if (latestUpdate) {
      toast.info(
        `환불 요청 "${latestUpdate.appName}"의 상태가 "${latestUpdate.status}"로 변경되었습니다.`
      );
    }
  }, [latestUpdate]);

  return <ToastContainer />;
};

export default RefundStatusNotification;
