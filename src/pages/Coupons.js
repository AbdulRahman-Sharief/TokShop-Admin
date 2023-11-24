import React, { useState } from "react";
import {
    Table,
    TableHeader,
    TableCell,
    TableFooter,
    TableContainer,
    Button,
    Card,
    CardBody,
    Pagination,
} from "@windmill/react-ui";

import useAsync from "../hooks/useAsync";
import useFilter from "../hooks/useFilter";
import NotFound from "../components/table/NotFound";
import Loading from "../components/preloader/Loading";
import AdminServices from "../services/AdminServices";
import PageTitle from "../components/Typography/PageTitle";
import CouponsTable from "../components/coupon/CouponsTable";
import AddPackage from "../components/coupon/AddPackage";
import EditPackage from "../components/coupon/EditPackage";
import DeletePackage from "../components/coupon/DeletePackage";

const Packages = () => {
    const { data, loading } = useAsync(() =>
        AdminServices.getAllLiveCoupons()
    );

    const [showAdd, setAdd] = useState(false);
    const [showEdit, setShowEdit] = useState({
        state: false,
        data: '',
        id: ''
    });
    const [showDelete, setShowDelete] = useState({
        state: false,
        id: '',
        title: ''
    });
    


    const addHandler = () => {
        setAdd(true);
        setShowEdit({
            state: false,
            data: '',
            id: ''
        })
        setShowDelete({
            state: false,
            id: '',
            title: ''
        })
    }

    const editHandler = (id) => {
        const url = process.env.REACT_APP_API_BASE_URL + 'coupons/' + id;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setShowEdit({
                    state: true,
                    data: res.data,
                    id: id
                })
                setAdd(false);
                setShowDelete({
                    state: false,
                    id: '',
                    title: ''
                })
            })
    }

    const deleteHandler = (id, title) => {
        console.log('Click')
        console.log(title)
        setShowDelete({
            state: true,
            id: id,
            title: title,
        });
        setShowEdit({
            state: false,
            data: '',
            id: ''
        })
        setAdd(false);
    }

    

    const closeHandler = () => {
        setShowEdit({
            state: false,
            data: '',
            id: ''
        })
        setAdd(false);
        setShowDelete({
            state: false,
            id: '',
            title: ''
        })
    }

    const {
        userRef,
        setRole,
        handleChangePage,
        totalResults,
        resultsPerPage,
        dataTable,
        serviceData,
        handleSubmitUser,
    } = useFilter(data.data);
    return (
        <>
            {showAdd && <AddPackage closeHandler={closeHandler} />}
            {showEdit.state && <EditPackage closeHandler={closeHandler} data={showEdit.data} />}
            {showDelete.state && <DeletePackage closeHandler={closeHandler} id={showDelete.id} title={showDelete.title} />}
            <PageTitle>All Coupons</PageTitle>

            <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
                <CardBody>
                    <Button onClick={addHandler}>Add Coupon</Button>
                </CardBody>
            </Card>

            {loading ? (
                <Loading loading={loading} />
            ) : serviceData.length !== 0 ? (
                <TableContainer className="mb-8 rounded-b-lg">
                    <Table>
                        <TableHeader>
                            <tr>
                                <TableCell>Name</TableCell>
                                <TableCell>Discount</TableCell>
                                <TableCell>Expire Date</TableCell>
                                <TableCell>Created At</TableCell>

                                <TableCell className="text-right">Actions</TableCell>
                            </tr>
                        </TableHeader>
                        <CouponsTable packages={dataTable} openEdit={editHandler} startDelete={deleteHandler} />
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
                <NotFound title="Packages" />
            )}
        </>
    );
};

export default Packages;
