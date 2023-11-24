import {
    Table,
    TableHeader,
    TableCell,
    TableFooter,
    TableContainer,
    Card,
    CardBody,
    Pagination,
} from "@windmill/react-ui";

import NotFound from "../../components/table/NotFound";
import { FaRegCircleXmark, FaXmark } from "react-icons/fa6";
import SubsTable from "./SubsTable";
import { TableBody, TableRow } from "@mui/material";
import dayjs from "dayjs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import useAsync from "../../hooks/useAsync";
import AdminServices from "../../services/AdminServices";
import useFilter from "../../hooks/useFilter";
import Loading from "../preloader/Loading";



const Details = ({ closeHandler, packData }) => {
    console.log(packData._id)
    const { data, loading } = useAsync(() =>
        AdminServices.getAllSubs(packData._id)
    );

    const {
        userRef,
        setRole,
        handleChangePage,
        totalResults,
        resultsPerPage,
        dataTable,
        serviceData,
        handleSubmitUser,
    } = useFilter(data.subscriptions);

    return (
        <>
            <Card className="mt-10 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
                <div className="p-2 bg-gray-700 shadow-md border-gray-900 text-white m-2 inline-block rounded cursor-pointer" onClick={() => { closeHandler() }}>
                    <FaXmark />
                </div>
                <CardBody className="flex flex-col justify-start">
                    <TableContainer className="mb-8 rounded-b-lg">

                        <Table>


                            <TableHeader>
                                <tr>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Plan</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Products</TableCell>
                                    <TableCell>Is Active</TableCell>

                                </tr>
                            </TableHeader>
                            <TableBody>
                                <TableRow key={packData._id}>

                                    <TableCell>
                                        <span className="text-sm text-white">{packData.title}</span>{" "}
                                    </TableCell>

                                    <TableCell>
                                        <span className="text-sm text-white">{packData.plan}</span>{" "}
                                    </TableCell>

                                    <TableCell>
                                        <span className="text-sm text-white">{packData.price}</span>{" "}
                                    </TableCell>

                                    <TableCell>
                                        <span className="text-sm text-white">
                                            {dayjs(packData.createdAt).format("MMM D, YYYY")}
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <span className="text-sm text-white">{packData.numberOfProducts}</span>{" "}
                                    </TableCell>

                                    <TableCell>
                                        <span>{packData.isActive ? <IoCheckmarkCircleOutline className="text-green-500 text-2xl" /> : <FaRegCircleXmark className="text-red-500 text-xl" />}</span>{" "}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                <h2 className="text-xl mb-2 text-white uppercase font-semibold">[ {packData.title} ] Supscripers</h2>

                    {loading ? (
                        <Loading loading={loading} />
                    ) : totalResults !== 0 ? (
                        <TableContainer className="mb-8 rounded-b-lg">
                            <Table>
                                <TableHeader>
                                    <tr>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Details</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Expire Date</TableCell>
                                    </tr>
                                </TableHeader>
                                <SubsTable subs={dataTable} />
                            </Table>
                            <TableFooter>
                                <Pagination
                                    totalResults={totalResults}
                                    resultsPerPage={resultsPerPage}
                                    onChange={handleChangePage}
                                    label="Table navigation"
                                />
                            </TableFooter>
                        </TableContainer>
                    ) : (
                        <NotFound title="Users" />
                    )}
                </CardBody>
            </Card>
        </>
    )
}

export default Details;