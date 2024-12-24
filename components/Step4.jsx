"use client";

import React from "react";
import useStore from "@/app/store";


const Step4 = () => {

    const personalInfo = useStore((state) => state.personalInfo);
    const address = useStore((state) => state.address);
    const preferences = useStore((state) => state.preferences);

    const handlesubmit=()=>{
        alert("submission success")
    }

    return (
        <div className="p-5">
            <h1 className="font-bold text-2xl dark:text-white">Review and Submit</h1>
            <div className="flex flex-col space-y-5 mt-6">

                <div className="bg-gray-100 dark:bg-[#333] p-4 rounded-lg shadow-lg">
                    <h2 className="font-semibold text-lg dark:text-white">Personal Info</h2>
                    <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-700 dark:text-white"><strong>First Name:</strong> {personalInfo.firstName || "N/A"} </p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Last Name:</strong> {personalInfo.lastName || "N/A"}</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Date of Birth:</strong> {personalInfo.dob || "N/A"}</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Email:</strong> {personalInfo.email || "N/A"}</p>
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-[#333] p-4 rounded-lg shadow-lg">
                    <h2 className="font-semibold text-lg dark:text-white">Address</h2>
                    <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Street Address:</strong> {address.streetAddress || "N/A"}</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>City:</strong> {address.city || "N/A"}</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>State:</strong> {address.State || "N/A"}</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Postal Code:</strong> {address.postalCode || "N/A"}</p>
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-[#333] p-4 rounded-lg shadow-lg">
                    <h2 className="font-semibold text-lg dark:text-white">Preferences</h2>
                    <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Newsletter:</strong> {preferences.newsletter ? "Subscribed" : "Not Subscribed"}</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Email Notifications:</strong> {preferences.emailNotifications ? "Enabled" : "Disabled"}</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>SMS Notifications:</strong> {preferences.smsNotifications ? "Enabled" : "Disabled"}</p>
                        <p className="text-sm text-gray-700 dark:text-white"><strong>Theme:</strong> {preferences.theme === "dark" ? "Dark Theme" : "Light Theme"}</p>
                    </div>
                </div>

                <button
                    onClick={handlesubmit}
                 className="mt-10 py-3 px-4 rounded-lg bg-black text-white
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
