"use client";

import React, { useState } from "react";
import useStore from "@/app/store";

const Step1 = () => {

    const setStep = useStore((state) => state.setStep);
    const setPersonalInfo = useStore((state) => state.setPersonalInfo);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");

    const handleContinue = () => {
        setPersonalInfo(firstName, lastName, dob, email);
        setStep(2);
    };

    return (
        <div className="p-5">
            <h1 className="font-bold text-2xl dark:text-white">Personel Info</h1>
            <div className="flex flex-col space-y-5 mt-6">
                <div className="flex space-x-5 justify-center">
                    <input
                        type="text"
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)}
                        className="border rounded-lg border-[rgb(221, 221, 221)] py-2 px-2
                        dark:placeholder-white
                        focus:outline-none
                        placeholder-size
                        dark:bg-[rgb(45,45,45)] dark:text-white"
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                        className="border rounded-lg
                        focus:outline-none
                        dark:placeholder-white
                        placeholder-size
                        border-[rgb(221, 221, 221)] py-2 px-2
                        dark:bg-[rgb(45,45,45)] dark:text-white"
                    />
                </div>

                <input
                    type="date"
                    placeholder="Date of Birth"
                    onChange={(e) => setDob(e.target.value)}
                    className="border rounded-lg border-[rgb(221, 221, 221)] py-3 px-3
                    dark:placeholder-white
                    focus:outline-none
                    placeholder-size
                    dark:bg-[rgb(45,45,45)] dark:text-white"
                />

                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-lg
                    focus:outline-none
                    dark:placeholder-white
                    placeholder-size
                    border-[rgb(221, 221, 221)] py-3 px-3
                    dark:bg-[rgb(45,45,45)] dark:text-white"
                />

                <button onClick={handleContinue}
                    className="mt-10 py-3 px-2 rounded-lg bg-black text-white
                    hover:bg-gray-800 focus:outline-none dark:bg-white
                     dark:text-black dark:hover:bg-[#555]">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Step1;
