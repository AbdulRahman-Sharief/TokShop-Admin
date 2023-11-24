import React from "react";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";
import dayjs from "dayjs";


const SubsTable = ({ subs }) => {
  return (
    <>
      <TableBody>
        {subs?.map(sub => (
          <TableRow key={sub._id}>

            <TableCell>
              <span className="text-sm">{sub.userId ? sub.userId.firstName : 'No User'}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{sub.details}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{sub.type}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{sub.numberOfMinutes}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{sub.usedMinutes}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{sub.totalPrice}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{sub.status}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{dayjs(sub.createdAt).format("MMM D, YYYY")}</span>{" "}
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default SubsTable;
