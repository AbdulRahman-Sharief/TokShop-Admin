import React from "react";
import * as dayjs from "dayjs";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";
import CustomeEditDelete from "../table/CustomeEditDelete";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";

const CouponsTable = ({ packages, openEdit, startDelete }) => {


  return (
    <>
      <TableBody>
        {packages?.map(packageData => (
          <TableRow key={packageData._id}>

            <TableCell>
              <span className="text-sm">{packageData.name}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{packageData.discount}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{dayjs(packageData.expire).format("MMM D, YYYY")}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {dayjs(packageData.createdAt).format("MMM D, YYYY")}
              </span>
            </TableCell>

            <TableCell>
              <CustomeEditDelete
                id={packageData._id}
                title={packageData.name}
                openEdit={openEdit}
                startDelete={startDelete}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CouponsTable;
