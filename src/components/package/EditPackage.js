import React, { useState } from "react";
import {
    Card,
    CardBody
} from "@windmill/react-ui";

import { FaXmark } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";



const EditPackage = ({ closeHandler, data }) => {
    const [title, setTitle] = useState(data.title);
    const [price, setPrice] = useState(data.price);
    const [numberOfProducts, setProducts] = useState(data.numberOfProducts);
    const [isActive, setActive] = useState(data.isActive);
    const [error, setError] = useState('');
    const [disableButton, setDisableButton] = useState(false);

    const updatePackage = () => {
        if (title === '' || price === '' || numberOfProducts === '') {
            setDisableButton(false)
            return setError('Please Enter Non Empty Values');
        }
        const updatedData = { title, price, numberOfProducts, isActive };

        const url = process.env.REACT_APP_API_BASE_URL + 'packages/' + data._id
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(updatedData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if(!res.ok) {
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
                            <p className="text-white font-semibold">Title</p>
                            <input onChange={(e) => setTitle(e.target.value)} value={title} className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white" />
                        </label>

                        <label>
                            <p className="text-white font-semibold">Price</p>
                            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white" />
                        </label>

                        <label>
                            <p className="text-white font-semibold">Number Of Products</p>
                            <input type="number" onChange={(e) => setProducts(e.target.value)} value={numberOfProducts} className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white" />
                        </label>

                        <label className="flex items-center gap-4">
                            <p className="text-white font-semibold">Is Active</p>
                            <input type="checkbox" onChange={() => setActive(e => e = !e)} checked={isActive} className="w-5 h-5" />
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