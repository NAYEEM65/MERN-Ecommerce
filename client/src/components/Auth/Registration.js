import React, { useState } from 'react';

import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import animationData from './lf30_editor_cpklqm2f.json';
import Lottie from 'lottie-react';
import Layout from '../layout/Layout';
import { NavLink } from 'react-router-dom';
const Registration = () => {
    const [passShow, setPassShow] = useState(true);
    return (
        <Layout>
            <section className="w-full mx-auto py-10">
                <h1 className="text-center mx-auto text-5xl text-slate-800 border-b-2 border-slate-800 w-fit ">
                    Register
                </h1>
                <div className="flex justify-center items-center gap-4 py-5">
                    <div className="animate-in slide-in-from-left duration-500">
                        {/* <img src="assets/test.svg" alt="logo" /> */}
                        {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
                        <Lottie animationData={animationData} loop={true} />
                    </div>
                    <div className="animate-in slide-in-from-top duration-500 w-[350px]">
                        <form>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="email"
                                    name="floating_name"
                                    id="floating_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    autoComplete="off"
                                />
                                <label
                                    htmlFor="floating_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Full Name
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="email"
                                    name="floating_email"
                                    id="floating_email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    autoComplete="off"
                                />
                                <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email address
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type={`${passShow ? 'text' : 'password'}`}
                                    name="floating_password"
                                    id="floating_password"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    autoComplete="off"
                                />
                                <label
                                    htmlFor="floating_password"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Password
                                </label>
                                <div className="absolute top-3 right-5">
                                    {passShow ? (
                                        <BsFillEyeSlashFill
                                            className="cursor-pointer"
                                            onClick={() => setPassShow(!passShow)}
                                        />
                                    ) : (
                                        <BsFillEyeFill
                                            className="cursor-pointer"
                                            onClick={() => setPassShow(!passShow)}
                                        />
                                    )}
                                </div>
                            </div>
                            <button className="flex justify-center gap-5 items-center w-full text-white bg-blue-500 hover:bg-blue-600 rounded py-2 px-3">
                                Sign Up
                            </button>
                        </form>

                        <div className="py-2">
                            <p>
                                Have an Account?{' '}
                                <NavLink to="/login" className="text-blue-500">
                                    Login Now
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Registration;
