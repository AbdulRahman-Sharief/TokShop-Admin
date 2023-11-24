import React, { useState } from "react";
import {
    Card,
    CardBody
} from "@windmill/react-ui";

import { FaXmark } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";



const EditPackage = ({ closeHandler, data }) => {
    const [name, setName] = useState(data.name);
    const [minutePrice, setminutePrice] = useState(data.minutePrice);
    const [numberOfProducts, setProducts] = useState(data.numberOfProducts);
    const [description, setDescription] = useState(data.description);
    const [isActive, setActive] = useState(data.isActive);
    const [error, setError] = useState('');
    const [disableButton, setDisableButton] = useState(false);

    const updatePackage = () => {
        if (name === '' || minutePrice === '' || numberOfProducts === '') {
            setDisableButton(false)
            return setError('Please Enter Non Empty Values');
        }
        const updatedData = { name, minutePrice, numberOfProducts, description, isActive };

        const url = process.env.REACT_APP_API_BASE_URL + 'livePackges/' + data._id
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
    console.log(isActive)
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
                            <p className="text-white font-semibold">Minute Price</p>
                            <input
                                type="number"
                                onChange={(e) => setminutePrice(e.target.value)}
                                value={minutePrice}
                                className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"
                            />
                        </label>

                        <label>
                            <p className="text-white font-semibold">Description</p>
                            <input
                                type="text"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"
                            />
                        </label>

                        <label>
                            <p className="text-white font-semibold">Number Of Products</p>
                            <input
                                type="number"
                                onChange={(e) => setProducts(e.target.value)}
                                value={numberOfProducts}
                                className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"
                            />
                        </label>

                        <label className="flex items-center gap-4">
                            <p className="text-white font-semibold">Is Active</p>
                            <input
                                type="checkbox"
                                onChange={() => setActive(e => e = !e)}
                                checked={isActive}
                                className="w-5 h-5"
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