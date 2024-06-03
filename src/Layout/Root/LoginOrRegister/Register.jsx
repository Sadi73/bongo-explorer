import React from 'react';
import { Button, Divider, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, FileImageOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

const Register = () => {

    return (
        <div className='flex border mt-5 w-[80%] mx-auto min-h-[550px] rounded-lg'>

            <div className='border-r bg-teal-500 text-center text-white grow flex justify-center items-center rounded-l-lg'>
                <div className='space-y-5'>
                    <h1 className='text-3xl font-bold'>Welcome Back</h1>
                    <p className=''>To keep connected with us, <br /> please login with your personal info</p>
                    <div>
                        <Link to="/login"><button className='border px-10 py-3 rounded-full'>Sign In</button></Link>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center w-[60%]'>
                <div className='space-y-5 '>
                    <h1 className='text-center text-3xl text-teal-500 font-semibold'>Create Account</h1>
                    <div className='flex justify-center'>
                        <Button type="" shape="circle"
                        >
                            G
                        </Button>
                    </div>

                    <Divider>OR</Divider>


                    <Formik
                        initialValues={{ name: '', email: '', photoURL: '', password: '', confirmPassword: '' }}
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
                                onClick={handleSubmit}
                                className='space-y-5'
                            >
                                <div className='w-3/4 mx-auto space-y-3'>
                                    <Input
                                        name='name'
                                        className='py-3 '
                                        placeholder="Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        prefix={
                                            <UserOutlined
                                                style={{
                                                    color: 'rgba(0,0,0,.25)',
                                                }}
                                            />
                                        }
                                    />

                                    <Input
                                        name='email'
                                        className='py-3'
                                        placeholder="Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        prefix={
                                            <MailOutlined
                                                style={{
                                                    color: 'rgba(0,0,0,.25)',
                                                }}
                                            />
                                        }
                                    />

                                    <Input
                                        name='photoURL'
                                        className='py-3'
                                        placeholder="PhotoURL"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        prefix={
                                            <FileImageOutlined
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
                                        onBlur={handleBlur}
                                        prefix={
                                            <LockOutlined
                                                style={{
                                                    color: 'rgba(0,0,0,.25)',
                                                }}
                                            />
                                        }

                                    />

                                    <Input.Password
                                        name='confirmPassword'
                                        className='py-3'
                                        placeholder="Confirm Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        prefix={
                                            <LockOutlined
                                                style={{
                                                    color: 'rgba(0,0,0,.25)',
                                                }}
                                            />
                                        }

                                    />
                                </div>


                                <div className='flex justify-center'>
                                    <button type='submit' className='bg-teal-500 text-white px-10 py-3 rounded-full'>Sign In</button>
                                </div>
                            </form>
                        )}
                    </Formik>

                </div>
            </div>


        </div>
    );
};

export default Register;