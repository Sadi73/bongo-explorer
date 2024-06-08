import React, { useContext } from 'react';
import { DatePicker, Input, Modal, Select } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const options = [
    {
        value: 'jack',
        label: 'Jack',
    },
    {
        value: 'lucy',
        label: 'Lucy',
    },
    {
        value: 'tom',
        label: 'Tom',
    },
]

const BookNowModal = ({ isModalOpen, setIsModalOpen }) => {

    const { user } = useContext(AuthContext);
    const params = useParams();

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const validationSchema = Yup.object({
        touristName: Yup.string().required('Tourist Name is required'),
        touristEmail: Yup.string().required('Tourist Email is required'),
        touristPhotoURL: Yup.string().required('Tourist PhotoURL is required'),
        price: Yup.string().required('Price is required'),
        date: Yup.string().required('Date is required'),
        guide: Yup.string().required('Select a Guide'),
    });

    return (
        <>
            <Modal
                title={<div style={{ textAlign: 'center', width: '100%' }}>Book This Package</div>}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <Formik
                    initialValues={{
                        touristName: user?.displayName,
                        touristEmail: user?.email,
                        touristPhotoURL: user?.photoURL ? user?.photoURL : '',
                        price: '',
                        date: '',
                        guide: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);

                        axios.post('https://bongo-traveler.vercel.app/book-package', {...values, package: params?.packageId})
                            .then(res => {
                                console.log(res)
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }}
                >
                    {({
                        values,
                        setValues,
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
                                <label htmlFor="">Tourist Name</label>
                                <Input
                                    name='touristName'
                                    value={values?.touristName}
                                    disabled
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter Your Name"
                                    variant="filled"
                                    className={` ${(touched?.touristName && errors?.touristName) ? 'border-2 border-red-500' : ''}`}
                                />
                                {(touched?.touristName && errors?.touristName) && <p className='text-red-500 text-end'>{errors?.touristName}</p>}
                            </div>

                            <div>
                                <label htmlFor="">Tourist Email</label>
                                <Input
                                    name='touristEmail'
                                    value={values?.touristEmail}
                                    disabled
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter Your Email"
                                    variant="filled"
                                    className={` ${(touched?.touristEmail && errors?.touristEmail) ? 'border-2 border-red-500' : ''}`}
                                />
                                {(touched?.touristEmail && errors?.touristEmail) && <p className='text-red-500 text-end'>{errors?.touristEmail}</p>}
                            </div>

                            <div>
                                <label htmlFor="">Tourist PhotoURL</label>
                                <Input
                                    name='touristPhotoURL'
                                    value={values?.touristPhotoURL}
                                    disabled
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter Your PhotoURL"
                                    variant="filled"
                                    className={` ${(touched?.touristPhotoURL && errors?.touristPhotoURL) ? 'border-2 border-red-500' : ''}`}
                                />
                                {(touched?.touristPhotoURL && errors?.touristPhotoURL) && <p className='text-red-500 text-end'>{errors?.touristPhotoURL}</p>}
                            </div>

                            <div>
                                <label htmlFor="">Tourist Price</label>
                                <Input
                                    name='price'
                                    type='number'
                                    value={values?.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter Your Price"
                                    variant="filled"
                                    className={` ${(touched?.price && errors?.price) ? 'border-2 border-red-500' : ''}`}

                                />
                                {(touched?.price && errors?.price) && <p className='text-red-500 text-end'>{errors?.price}</p>}
                            </div>

                            <div className='flex items-center justify-between gap-5'>
                                <label htmlFor="" className=''>Choose Date</label>
                                <div className='w-2/3'>
                                    <DatePicker
                                        name='date'
                                        className='w-full'
                                        onChange={(date, dateString) => setValues({ ...values, date: dateString })}
                                        onBlur={handleBlur}
                                        needConfirm
                                    />
                                </div>
                                {(touched?.date && errors?.date) && <p className='text-red-500 text-end'>{errors?.date}</p>}
                            </div>

                            <div className='flex'>
                                <label htmlFor="" className='flex-1'>Select Guide</label>
                                <Select
                                    showSearch
                                    name='guide'
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={(e) => setValues({ ...values, guide: e })}
                                    filterOption={filterOption}
                                    options={options}
                                    className='w-2/3'
                                />
                                {(touched?.guide && errors?.guide) && <p className='text-red-500 text-end'>{errors?.guide}</p>}
                            </div>

                            <button type='submit' className='bg-teal-500 py-3 text-white w-full'>Confirm Book</button>
                        </form>
                    )}
                </Formik>
            </Modal>
        </>
    );
};

export default BookNowModal;