"use client";

import React,{useState} from "react";
import useStore from "@/app/store";

const Step2 = () => {
    const setStep = useStore((state) => state.setStep);
    const setAddress = useStore((state) => state.setAddress);

    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [State, setState] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const handleContinue = () => {
        setAddress(streetAddress, city, State, postalCode);
        setStep(3);
    };


    return (
        <div className="p-5">
            <h1 className="font-bold text-2xl dark:text-white">Address</h1>
            <div className="flex flex-col space-y-5 mt-6">
                <input
                    type="text"
                    placeholder="Street Address"
                    onChange={(e) => setStreetAddress(e.target.value)}
                    className="border rounded-lg border-[rgb(221, 221, 221)] py-3 px-3
                    dark:placeholder-white
                    focus:outline-none
                    placeholder-size
                    dark:bg-[rgb(45,45,45)] dark:text-white"
                />

                <div className="flex space-x-5 justify-center mt-4">
                    <input
                        type="text"
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                        className="border rounded-lg border-[rgb(221, 221, 221)] py-3 px-3
                        dark:placeholder-white
                        focus:outline-none
                        placeholder-size
                        dark:bg-[rgb(45,45,45)] dark:text-white"
                    />
                    <input
                        type="text"
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)}
                        className="border rounded-lg
                        focus:outline-none
                        dark:placeholder-white
                        placeholder-size
                        border-[rgb(221, 221, 221)] py-3 px-3
                        dark:bg-[rgb(45,45,45)] dark:text-white"
                    />
                </div>

                <input
                    type="text"
                    placeholder="Postal Code"
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="border rounded-lg border-[rgb(221, 221, 221)] py-3 px-3
                    dark:placeholder-white
                    focus:outline-none
                    placeholder-size
                    dark:bg-[rgb(45,45,45)] dark:text-white"
                />

                <button onClick={handleContinue}
                    className="mt-10 py-3 px-2 rounded-lg bg-black text-white
                    hover:bg-gray-800 focus:outline-none  dark:bg-white
                     dark:text-black  dark:hover:bg-[#555]">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Step2;
