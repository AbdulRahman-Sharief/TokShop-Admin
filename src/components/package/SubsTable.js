import React from "react";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";
import dayjs from "dayjs";


const SubsTable = ({ subs }) => {
console.log(subs, "Table")

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
              <span className="text-sm">{sub.status}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{dayjs(sub.expiryDate).format("MMM D, YYYY")}</span>{" "}
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default SubsTable;
