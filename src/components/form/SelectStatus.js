import React, { useContext } from "react";
import { Select } from "@windmill/react-ui";

import OrderServices from "../../services/OrderServices";
import { notifySuccess, notifyError } from "../../utils/toast";
import { SidebarContext } from "../../context/SidebarContext";

const SelectStatus = ({ id, order }) => {
  const { setIsUpdate } = useContext(SidebarContext);
  const handleChangeStatus = (id, status) => {
    OrderServices.updateOrder(id, { status: status })
      .then((res) => {
        notifySuccess(res.message);
        setIsUpdate(true);
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      <Select
        onChange={(e) => handleChangeStatus(id, e.target.value)}
        className="border border-gray-50 bg-gray-50 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none"
      >
        <option value="status" defaultValue hidden>
          {order?.status}
        </option>
        <option defaultValue={order?.status === "completed"} value="completed">
          Completed
        </option>
        <option defaultValue={order?.status === "pending"} value="pending">
          Pending
        </option>
        <option
          defaultValue={order?.status === "processing"}
          value="processing"
        >
          Processing
        </option>
        <option defaultValue={order?.status === "refunded"} value="refunded">
          Refunded
        </option>
        <option defaultValue={order?.status === "on-hold"} value="on-hold">
          On Hold
        </option>
        <option defaultValue={order?.status === "failed"} value="failed">
          Failed
        </option>
        <option defaultValue={order?.status === "cancelled"} value="cancelled">
          Cancelled
        </option>
      </Select>
    </>
  );
};

export default SelectStatus;
