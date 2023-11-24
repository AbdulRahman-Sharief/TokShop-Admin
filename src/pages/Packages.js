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
import PackagesTable from "../components/package/PackagesTable";
import AddPackage from "../components/package/AddPackage";
import EditPackage from "../components/package/EditPackage";
import DeletePackage from "../components/package/DeletePackage";
import Details from "../components/package/Details";

const Packages = () => {
  const { data, loading } = useAsync(() =>
    AdminServices.getAllPackages()
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
  const [showDetails, setShowDetails] = useState({
    state: false,
    packData: '',
    data: {}
  })


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
    setShowEdit({
      state: false,
      data: '',
      id: ''
    });
    const url = process.env.REACT_APP_API_BASE_URL + 'packages/' + id;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setShowEdit({
          state: true,
          data: res.package,
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

  const detailsHandler = (packData) => {
    if (showDetails.state)
      closeHandler();
    setTimeout(() => {
      setShowDetails({
        state: true,
        packData: packData
      })
    }, 0)

    setShowEdit({
      state: false,
      data: '',
      id: ''
    });

    setAdd(false);

    setShowDelete({
      state: false,
      id: '',
      title: ''
    });
  }

  const closeHandler = () => {
    setShowEdit({
      state: false,
      packData: '',
      data: '',
      id: ''
    })
    setAdd(false);
    setShowDelete({
      state: false,
      id: '',
      title: ''
    })
    setShowDetails({
      state: false,
      packData: '',
      data: ''
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
      {showDetails.state && <Details closeHandler={closeHandler} packData={showDetails.packData} />}
      <PageTitle>All Packages</PageTitle>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <Button onClick={addHandler}>Add Package</Button>
        </CardBody>
      </Card>

      {loading ? (
        <Loading loading={loading} />
      ) : serviceData.length !== 0 ? (
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
                <TableCell>Details</TableCell>

                <TableCell className="text-right">Actions</TableCell>
              </tr>
            </TableHeader>
            <PackagesTable packages={dataTable} openEdit={editHandler} startDelete={deleteHandler} openDetails={detailsHandler} />
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
