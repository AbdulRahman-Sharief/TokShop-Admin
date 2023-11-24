import React, { useState } from "react";
import {
    Card,
    CardBody,
} from "@windmill/react-ui";

import { FaXmark } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";

const DeletePackage = ({ closeHandler, id, title }) => {
    const [error, setError] = useState('');

    const removePackage = () => {
        const url = process.env.REACT_APP_API_BASE_URL + 'livePackges/' + id;
        fetch(url, { method: "DELETE" })
            .then(res => {
                if (!res.ok) {
                    return setError("Something Went Wrong, Please Refresh And Try Again");
                }
                res.json()
            })
            .then(result => {
                closeHandler();
                window.location.reload();
            })
    }

    return (
        <Card className="mt-10 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
            <div className="p-2 bg-gray-700 shadow-md border-gray-900 text-white m-2 inline-block rounded cursor-pointer" onClick={closeHandler}>
                <FaXmark />
            </div>
            {error && <p className="mb-5 bg-red-600 text-white font-semibold p-2 rounded flex items-center gap-2"><IoWarningOutline className="text-2xl text-yellow-200" /> {error}</p>}
            <CardBody className="flex flex-col justify-start pt-0">
                <p className="text-center text-white mb-4 font-semibold">Are You Sure You Want To Delete "{title}" ?</p>
                <div className="flex justify-center gap-5">
                    <button onClick={closeHandler} className="bg-gray-600 text-white rounded py-2 px-5 font-semibold hover:bg-gray-700 duration-300 focus:outline-none">Cancel</button>
                    <button onClick={removePackage} className="bg-red-600 text-white rounded py-2 px-5 font-semibold hover:bg-red-700 duration-300 focus:outline-none">Delete Package</button>
                </div>
            </CardBody>
        </Card>
    )
}

export default DeletePackage;