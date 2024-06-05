import React from 'react';
import '../../../assets/background.png'
import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Formik } from 'formik';
import axios from 'axios';

const AddNewPackage = () => {

    const handleAddPackage = (formdata) => {
        axios.post('http://192.168.1.4:5000/packages/all', formdata)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='mt-10 h-[600px] bg-gradient-to-r from-teal-200 to-teal-500 flex items-center'>
            <div className='w-1/2'></div>
            <div className='bg-orange-100 border border-orange-500 p-10 rounded-lg'>


                <Formik
                    initialValues={{ title: '', type: '', price: '', description: '' }}
                    // validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        handleAddPackage(values)
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
                        <form onSubmit={handleSubmit} className='space-y-5'>
                            <div>
                                <label htmlFor="">Package Title</label>
                                <Input name='title' onChange={handleChange} placeholder="Filled" />
                            </div>
                            <div>
                                <label htmlFor="">Package Type</label>
                                <Input name='type' onChange={handleChange} placeholder="Filled" />
                            </div>
                            <div>
                                <label htmlFor="">Price</label>
                                <Input name='price' onChange={handleChange} placeholder="Filled" />
                            </div>
                            <div>
                                <label htmlFor="">Package Description</label>
                                <TextArea name='description' onChange={handleChange} rows={4} placeholder="Enter the package description" />
                            </div>
                            {/* <div>
                                <label htmlFor="">Upload Image</label>
                                <input type="file" name="" id="" />
                            </div> */}

                            <button type='submit' className='bg-orange-300 py-3 w-full'>ADD</button>
                        </form>
                    )}
                </Formik>

            </div>
        </div>
    );
};

export default AddNewPackage;