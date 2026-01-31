import React from "react";
import { FiMail } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { GiIronCross } from "react-icons/gi";
import { BiChurch } from "react-icons/bi";
import { contactPriests } from "../config/contact";

export const Contact = () => {
    return (
        <section className="bg-gray-50 py-16 w-full overflow-x-hidden">
            <div className="mx-auto w-full grid gap-4 px-3 sm:px-6 lg:px-12">

                {/* Contact Information */}
                <div className="min-w-0 rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center text-center">
                    <div className="flex items-center justify-center gap-3 text-indigo-600">
                        <FiMail size={20} />
                        <h3 className="text-base font-semibold">Email</h3>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm break-words px-4">
                        sjmcathedral@gmail.com
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-3 text-indigo-600">
                        <AiFillPhone size={20} />
                        <h3 className="text-base font-semibold">Phone</h3>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm px-4">
                        0471 2320132
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-3 text-emerald-600">
                        <HiOfficeBuilding size={20} />
                        <h3 className="text-base font-semibold">Office Hours</h3>
                    </div>
                    <p className="my-1 text-gray-600 text-md px-4">
                        9:00 AM – 2:00 PM
                        |
                        3:00 PM – 7:00 PM
                        (Sunday Holiday)
                    </p>
                </div>

                {/* Parish Priests */}
                <div className="min-w-0 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition text-center">

                    {/* Header */}
                    <div className="flex items-center justify-center gap-3 text-rose-600">
                        <GiIronCross size={22} />
                        <h3 className="relative text-base font-semibold">
                            Parish Priests
                            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-rose-500 rounded-full"></span>
                        </h3>
                    </div>

                    {/* Content */}
                    <div className="mt-6 space-y-6">

                        {/* Parish Priest */}
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-3 text-center">
                                Parish Priest
                            </p>

                            <div className="flex flex-col items-center gap-4">
                                <img
                                    src={contactPriests.parishPriest.image}
                                    alt={contactPriests.parishPriest.name}
                                    width="400"
                                    height="400"
                                    className="w-[400px] h-[400px] rounded-full border-2 border-gray-300 shadow-md"
                                />
                                <p className="text-base font-semibold text-gray-800 text-center">
                                    {contactPriests.parishPriest.name}
                                </p>
                            </div>
                        </div>

                        {/* Assistant Parish Priests */}
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-3 text-center">
                                Assistant Parish Priests
                            </p>

                            <div className="space-y-6">
                                {contactPriests.assistantPriests.map((priest) => (
                                    <div key={priest.name} className="flex flex-col items-center gap-4">
                                        <img
                                            src={priest.image}
                                            alt={priest.name}
                                            width="400"
                                            height="400"
                                            className="w-[400px] h-[400px] rounded-full object-cover border-2 border-gray-300 shadow-md"
                                            onError={(e) => {
                                                e.target.src = "/placeholder-avatar.png";
                                            }}
                                        />
                                        <p className="text-sm font-semibold text-gray-700 text-center">
                                            {priest.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

