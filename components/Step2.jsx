"use client";

import React from "react";

const Step2 = () => {

    return (
        <div className="p-5">
            <h1 className="font-bold text-2xl dark:text-white">Address</h1>
            <div className="flex flex-col space-y-5 mt-6">
                <input
                    type="text"
                    placeholder="Street Address"
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
                        className="border rounded-lg border-[rgb(221, 221, 221)] py-3 px-3
                        dark:placeholder-white
                        focus:outline-none
                        placeholder-size
                        dark:bg-[rgb(45,45,45)] dark:text-white"
                    />
                    <input
                        type="text"
                        placeholder="State"
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
                    className="border rounded-lg border-[rgb(221, 221, 221)] py-3 px-3
                    dark:placeholder-white
                    focus:outline-none
                    placeholder-size
                    dark:bg-[rgb(45,45,45)] dark:text-white"
                />

                <button className="mt-10 py-3 px-2 rounded-lg bg-black text-white
                    hover:bg-gray-800 focus:outline-none dark:bg-[#333] dark:hover:bg-[#555]">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Step2;
