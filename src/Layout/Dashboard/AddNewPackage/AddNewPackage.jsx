import React, { useState } from 'react';
import '../../../assets/background.png'
import { Input, Select, Spin } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
const apiKey = import.meta.env.VITE_imageBBapiKey;

const options = [
    { value: 'hiking', label: 'Hiking' },
    { value: 'sports', label: 'Sports' },
    { value: 'walking', label: 'Walking' },
    { value: 'wildings', label: 'Wildings' },
    { value: 'rafting', label: 'Rafting' },
    { value: 'cycling', label: 'Cycling' },
    { value: 'camping', label: 'Camping' },
    { value: 'museum', label: 'Museum' },
    { value: 'architecture', label: 'Architecture' },
    { value: 'historical', label: 'Historical' },
    { value: 'fishing', label: 'Fishing' }
];

const AddNewPackage = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleAddPackage = (packageData) => {
        if (!selectedFile) {
            Swal.fire({
                position: "top-end",
                title: "Please Select an Image First."
            });
            return;
        };

        const formData = new FormData();
        formData.append('image', selectedFile);

        axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData)
            .then(res => {
                if (res?.data?.data?.url) {
                    axios.post('https://bongo-traveler.vercel.app/packages/add', { ...packageData, imageURL: res?.data?.data?.url })
                        .then(res => {
                            if (res?.data) {
                                setSubmitted(false);
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Package Add Successfull",
                                    showConfirmButton: false,
                                    timer: 1500,
                                    didClose: () => {
                                        navigate('/package/all');
                                    }
                                });

                            }
                        })
                        .catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))
    };

    const handleFileChange = (event) => {
        const image = event.target.files[0];
        setSelectedFile(image);
        if (image) {
            const imageUrl = URL.createObjectURL(image);
            setUploadedImage(imageUrl);
        }
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        type: Yup.string().required('Type is required'),
        price: Yup.string().required('Price is required'),
        description: Yup.string().required('Description is required'),
    });


    return (
        <div className='bg-orange-100 border border-orange-500 p-10 rounded-lg min-h-[90vh]'>
            <div className='xl:w-2/3 mx-auto'>
                <Formik
                    initialValues={{ title: '', type: '', price: '', description: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitted(true);
                        handleAddPackage(values);
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
                            <div className='grid grid-cols-12'>
                                <label htmlFor="" className='col-span-4'>Package Title</label>
                                <div className='col-span-8'>
                                    <Input
                                        name='title'
                                        value={values?.title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter Package Title"
                                        className={`py-3 ${(touched?.title && errors?.title) ? 'border-2 border-red-500' : ''}`}
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-12 items-center'>
                                <label htmlFor="" className='col-span-4'>Package Type</label>
                                <div className='col-span-8'>
                                    <Select
                                        name='type'
                                        placeholder="Select Type"
                                        onChange={(value) => setValues({ ...values, type: value })}
                                        options={options}
                                        className={`w-full ${(touched?.type && errors?.type) ? 'border-2 border-red-500' : ''}`}
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-12'>
                                <label htmlFor="" className='col-span-4'>Price</label>
                                <div className='col-span-8'>
                                    <Input
                                        name='price'
                                        value={values?.price}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter Package Price"
                                        className={`py-3 ${(touched?.price && errors?.price) ? 'border-2 border-red-500' : ''}`}
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-12'>
                                <label htmlFor="" className='col-span-4'>Package Description</label>
                                <div className='col-span-8'>
                                    <TextArea
                                        name='description'
                                        value={values?.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        rows={4}
                                        placeholder="Enter Package Description"
                                        className={`${(touched?.description && errors?.description) ? 'border-2 border-red-500' : ''}`}
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-12'>
                                <label htmlFor="" className='col-span-4'>Upload Image</label>
                                <div className='col-span-8'>
                                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e)} />
                                    {uploadedImage && (
                                        <img src={uploadedImage} alt="Selected" className='w-64' />
                                    )}
                                </div>
                            </div>

                            {submitted ? <Spin /> : <button type='submit' className='bg-orange-300 w-full py-2'>Add</button>}


                        </form>
                    )}
                </Formik>
            </div>

        </div>
    );
};

export default AddNewPackage;