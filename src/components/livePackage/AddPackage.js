import React, { useState } from "react";
import {
    Select,
    Card,
    CardBody,
} from "@windmill/react-ui";

import { FaXmark } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";


const AddPackage = ({ closeHandler }) => {

    const [name, setName] = useState('');
    const [minutePrice, setMinutePrice] = useState('');
    const [numberOfProducts, setProducts] = useState('');
    const [description, setDescription] = useState('');

    const [error, setError] = useState('');
    const [disableButton, setDisableButton] = useState(false);


    const createPackage = () => {
        console.log(name === '')
        if (name === '' || minutePrice === '' || numberOfProducts === '' || description === "") {
            setDisableButton(false)
            return setError('Please Enter Non Empty Values');
        }
        const createdData = { name, minutePrice, numberOfProducts, description };

        const url = process.env.REACT_APP_API_BASE_URL + 'livePackges'
        console.log('URL => ', url)
        console.log('Data => ', createdData)
        fetch(url, {
            method: "POST",
            body: JSON.stringify(createdData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) {
                    setDisableButton(false)
                    return setError("Something Went Wrong, Please Refresh And Try Again");
                }

                res.json()
            })
            .then(result => {
                console.log(result)
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
                            <p className="text-white font-semibold">Minute Price</p>
                            <input
                                type="number"
                                onChange={(e) => setMinutePrice(e.target.value)}
                                value={minutePrice}
                                className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"
                            />
                        </label>


                        <label>
                            <p className="text-white font-semibold mb-3">Description</p>
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

                    </div>

                    <button disabled={disableButton} onClick={() => {
                        setDisableButton(true);
                        createPackage();
                    }
                    } className="bg-green-500 text-white rounded p-3 font-semibold hover:bg-green-600 duration-300 focus:outline-none">Create Package</button>
                </CardBody>
            </Card>
        </>
    )
}

export default AddPackage;