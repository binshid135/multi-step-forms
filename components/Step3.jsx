"use client";

import React from "react";

const Step3 = () => {

    return (
        <div className="p-5">
            <h1 className="font-bold text-2xl dark:text-white">Preferences</h1>
            <div className="flex flex-col space-y-5 mt-6">

                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        id="newsletter"
                        className="border rounded-lg border-[rgb(221, 221, 221)] dark:border-gray-600 dark:bg-[rgb(45,45,45)] dark:text-white focus:ring-2 "
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-700 dark:text-white">
                        Subscribe to Newsletter
                    </label>
                </div>

                <div className="flex flex-col space-y-4 mt-4">
                    <span className="text-sm text-gray-700 dark:text-white">Notification Preferences</span>
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="email-notifications"
                            className="border rounded-lg border-[rgb(221, 221, 221)] dark:border-gray-600 dark:bg-[rgb(45,45,45)] dark:text-white focus:ring-2 "
                        />
                        <label htmlFor="email-notifications" className="text-sm text-gray-700 dark:text-white">Email Notifications</label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="sms-notifications"
                            className="border rounded-lg border-[rgb(221, 221, 221)] dark:border-gray-600 dark:bg-[rgb(45,45,45)] dark:text-white focus:ring-2 "
                        />
                        <label htmlFor="sms-notifications" className="text-sm text-gray-700 dark:text-white">SMS Notifications</label>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 mt-4">
                    <span className="text-sm text-gray-700 dark:text-white">Theme Selection</span>
                    <div className="flex items-center space-x-3">
                        <input
                            type="radio"
                            id="light-theme"
                            name="theme"
                            className="border rounded-lg border-[rgb(221, 221, 221)] dark:border-gray-600 dark:bg-[rgb(45,45,45)] dark:text-white focus:ring-2 "
                        />
                        <label htmlFor="light-theme" className="text-sm text-gray-700 dark:text-white">Light Theme</label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <input
                            type="radio"
                            id="dark-theme"
                            name="theme"
                            className="border rounded-lg border-[rgb(221, 221, 221)] dark:border-gray-600 dark:bg-[rgb(45,45,45)] dark:text-white focus:ring-2 "
                        />
                        <label htmlFor="dark-theme" className="text-sm text-gray-700 dark:text-white">Dark Theme</label>
                    </div>
                </div>

                <button className="mt-10 py-3 px-4 rounded-lg bg-black text-white
                    hover:bg-gray-800 focus:outline-none dark:bg-[#333] dark:hover:bg-[#555] transition duration-200 ease-in-out transform hover:scale-105">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Step3;