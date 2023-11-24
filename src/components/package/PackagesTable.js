import React from "react";
import * as dayjs from "dayjs";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";
import CustomeEditDelete from "../table/CustomeEditDelete";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FiZoomIn } from "react-icons/fi";

const PackagesTable = ({ packages, openEdit, startDelete, openDetails }) => {


  return (
    <>
      <TableBody>
        {packages?.map(packageData => (
          <TableRow key={packageData._id}>

            <TableCell>
              <span className="text-sm">{packageData.title}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{packageData.plan}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{packageData.price}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {dayjs(packageData.createdAt).format("MMM D, YYYY")}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{packageData.numberOfProducts}</span>{" "}
            </TableCell>

            <TableCell>
            <span>{packageData.isActive ? <IoCheckmarkCircleOutline className="text-green-500 text-2xl" /> : <FaRegCircleXmark className="text-red-500 text-xl" />}</span>{" "}
            </TableCell>

            <TableCell>
              <span onClick={() => openDetails(packageData)} className="text-lg hover:text-yellow-300 duration-300 cursor-pointer"><FiZoomIn /></span>{" "}
            </TableCell>

            <TableCell>
              <CustomeEditDelete
                id={packageData._id}
                title={packageData.title}
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

export default PackagesTable;
