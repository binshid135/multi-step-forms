"use client";

import React from "react";

const Step4 = () => {
    return (
        <div className="p-5">
            <h1 className="font-bold text-2xl dark:text-white">Review and Submit</h1>
            <div className="flex flex-col space-y-5 mt-6">

                <div className="bg-gray-100 dark:bg-[#333] p-4 rounded-lg shadow-lg">
                    <h2 className="font-semibold text-lg dark:text-white">Personal Info</h2>
                    <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-700 dark:text-white"><strong>First Name:</strong> John</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Last Name:</strong> Doe</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Date of Birth:</strong> 01/01/1990</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Email:</strong> john.doe@example.com</p>
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-[#333] p-4 rounded-lg shadow-lg">
                    <h2 className="font-semibold text-lg dark:text-white">Address</h2>
                    <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Street Address:</strong> 123 Main St</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>City:</strong> Sample City</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>State:</strong> California</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Postal Code:</strong> 98765</p>
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-[#333] p-4 rounded-lg shadow-lg">
                    <h2 className="font-semibold text-lg dark:text-white">Preferences</h2>
                    <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Newsletter:</strong> Subscribed</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Email Notifications:</strong> Enabled</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>SMS Notifications:</strong> Disabled</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Theme:</strong> Dark Theme</p>
                    </div>
                </div>

                <button className="mt-10 py-3 px-4 rounded-lg bg-black text-white
                    hover:bg-gray-800 focus:outline-none  dark:bg-white
                     dark:text-black 
                     dark:hover:bg-[#555] transition duration-200 ease-in-out transform hover:scale-105">
                    submit
                </button>
            </div>
        </div>
    );
};

export default Step4;
