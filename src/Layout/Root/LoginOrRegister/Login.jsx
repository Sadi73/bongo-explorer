import { Button, Divider, Input } from 'antd';
import React from 'react';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

const Login = () => {

    return (
        <div className='md:pt-20'>
            <div className='flex border mt-5 w-[80%] mx-auto min-h-[550px] rounded-lg mt-20'>
                <div className='flex items-center justify-center grow'>
                    <div className='space-y-5'>
                        <h1 className='text-center text-3xl text-teal-500 font-semibold'>Sign In to Bongo Explorers</h1>
                        <div className='flex justify-center'>
                            <Button type="" shape="circle"
                            >
                                G
                            </Button>
                        </div>

                        <Divider>OR</Divider>




                        <Formik
                            initialValues={{ email: '', password: '' }}
                            // validate={values => {
                            //     const errors = {};
                            //     if (!values.email) {
                            //         errors.email = 'Required';
                            //     } else if (
                            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            //     ) {
                            //         errors.email = 'Invalid email address';
                            //     }
                            //     return errors;
                            // }}
                            onSubmit={(values, { setSubmitting }) => {
                                // setTimeout(() => {
                                //     alert(JSON.stringify(values, null, 2));
                                //     setSubmitting(false);
                                // }, 400);
                                console.log(values)
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form
                                    onSubmit={handleSubmit}
                                    className='space-y-5'
                                >
                                    <Input
                                        name='email'
                                        className='py-3'
                                        placeholder="Email"
                                        onChange={handleChange}
                                        prefix={
                                            <MailOutlined
                                                style={{
                                                    color: 'rgba(0,0,0,.25)',
                                                }}
                                            />
                                        }
                                    />


                                    <Input.Password
                                        name='password'
                                        className='py-3'
                                        placeholder="Password"
                                        onChange={handleChange}
                                        prefix={
                                            <LockOutlined
                                                style={{
                                                    color: 'rgba(0,0,0,.25)',
                                                }}
                                            />
                                        }

                                    />


                                    <div className='flex justify-center'>
                                        <button type='submit' className='bg-teal-500 text-white px-10 py-3 rounded-full'>Sign In</button>
                                    </div>
                                </form>
                            )}
                        </Formik>

                    </div>
                </div>

                <div className='border-r bg-teal-500 text-center text-white w-[40%] flex justify-center items-center rounded-r-lg'>
                    <div className='space-y-5'>
                        <h1 className='text-3xl font-bold'>Hello, Explorer!</h1>
                        <p className=''>Enter Your Personal Details <br /> and  start journey with us</p>
                        <div>
                            <Link to="/register"><button className='border px-10 py-3 rounded-full'>Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;