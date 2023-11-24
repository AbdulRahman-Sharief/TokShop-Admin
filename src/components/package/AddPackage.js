import React, { useState } from "react";
import {
    Select,
    Card,
    CardBody,
} from "@windmill/react-ui";

import { FaXmark } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";


const AddPackage = ({ closeHandler }) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [numberOfProducts, setProducts] = useState('');
    const [plan, setPlan] = useState('free');

    const [error, setError] = useState('');
    const [disableButton, setDisableButton] = useState(false);


    const createPackage = () => {
        console.log(title === '')
        if (title === '' || price === '' || numberOfProducts === '' || plan === "") {
            setDisableButton(false)
            return setError('Please Enter Non Empty Values');
        }
        const createdData = { title, price, numberOfProducts, plan };

        const url = process.env.REACT_APP_API_BASE_URL + 'packages'
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
                            <p className="text-white font-semibold">Title</p>
                            <input
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"
                            />
                        </label>

                        <label>
                            <p className="text-white font-semibold">Price</p>
                            <input
                                type="number"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                className="p-2 mt-2 bg-gray-700 rounded w-full outline-none text-white"
                            />
                        </label>


                        <label>
                            <p className="text-white font-semibold mb-3">Plan</p>
                            <Select onChange={(e) => setPlan(e.target.value)}>
                                <option value='free'>Free</option>
                                <option value='weekly'>Weekly</option>
                                <option value='monthly'>Monthly</option>
                                <option value='secondary'>Secondary</option>
                            </Select>
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