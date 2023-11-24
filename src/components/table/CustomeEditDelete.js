import React, { useContext } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Tooltip from "../tooltip/Tooltip";

const CustomeEditDelete = ({ id, openEdit, startDelete, title }) => {
  return (
    <>
      <div className="flex justify-end text-right">
        <div
          onClick={() => openEdit(id)}
          className="p-2 cursor-pointer text-gray-400 hover:text-green-600"
        >
          <Tooltip id="edit" Icon={FiEdit} title="Edit" bgColor="#10B981" />
        </div>

        <div
          onClick={() => startDelete(id, title)}
          className="p-2 cursor-pointer text-gray-400 hover:text-red-600"
        >
          <Tooltip
            id="delete"
            Icon={FiTrash2}
            title="Delete"
            bgColor="#EF4444"
          />
        </div>
      </div>
    </>
  );
};

export default CustomeEditDelete;
