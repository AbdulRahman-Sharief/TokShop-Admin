import React, { useState } from "react";
import {
    Card,
    CardBody
} from "@windmill/react-ui";

import { FaXmark } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";



const EditPackage = ({ closeHandler, data }) => {
    const [name, setName] = useState(data.name);
    const [discount, setDiscount] = useState(data.discount)
    const [expireDate, setDate] = useState()
    const [error, setError] = useState('');
    const [disableButton, setDisableButton] = useState(false);

    const updatePackage = () => {
        if (name === '' || discount === '' || expireDate === '') {
            setDisableButton(false)
            return setError('Please Enter Non Empty Values');
        }
        const updatedData = { name, discount, expire: expireDate };
        if (!expireDate) {
            updatedData.expire = data.expire;
        }
        console.log(updatedData)

        const url = process.env.REACT_APP_API_BASE_URL + 'coupons/' + data._id
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(updatedData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) {
                    return setError("Something Went Wrong, Please Refresh And Try Again");
                }
                res.json();
            })
            .then(result => {
                setError('');
                closeHandler();
                setDisableButton(false);
                window.location.reload();
            })
    }
    return (
        <>
            <Card className="mt-10 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
                <div className="p-2 bg-gray-700 shadow-md border-gray-900 text-white m-2 inline-block rounded cursor-pointer" onClick={() => {
                    closeHandler();
                    setDisableButton(false);
                }}>
                    <FaXmark />
                </div>
                <CardBody className="flex flex-col justify-start">
                    {error && <p className="mb-5 bg-red-600 text-white font-semibold p-2 rounded flex items-center gap-2"><IoWarningOutline className="text-2xl text-yellow-200" /> {error}</p>}
                    <div className="mb-5 flex flex-col gap-4">

                        <label>
                            <p className="text-white font-semibold">Name</p>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"
                            />
                        </label>

                        <label>
                            <p className="text-white font-semibold">Discount</p>
                            <input
                                type="number"
                                onChange={(e) => setDiscount(e.target.value)}
                                value={discount}
                                className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"
                            />
                        </label>

                        <label>
                            <p className="text-white font-semibold">Expire Date <span className="text-xs text-green-500">(You can leave it empty)</span></p>
                            <input
                                type="date"
                                onChange={(e) => setDate(e.target.value)}
                                className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"
                            />
                        </label>

                    </div>

                    <button disabled={disableButton} onClick={() => {
                        setDisableButton(true);
                        updatePackage();
                    }
                    } className="bg-green-500 text-white rounded p-3 font-semibold hover:bg-green-600 duration-300 focus:outline-none">Update Package</button>
                </CardBody>
            </Card>
        </>
    )
}

export default EditPackage;