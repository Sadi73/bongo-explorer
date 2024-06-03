import React from 'react';
import { DatePicker, Input, Modal, Select } from 'antd';

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

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onDateChange = (date, dateString) => {
        console.log(dateString);
    };

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <>
            <Modal
                title="Book This Package"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <form className='space-y-5'>
                    <div>
                        <label htmlFor="">Tourist Name</label>
                        <Input placeholder="Enter Your Name" variant="filled" />
                    </div>
                    <div>
                        <label htmlFor="">Tourist Email</label>
                        <Input placeholder="Enter Your Email" variant="filled" />
                    </div>
                    <div>
                        <label htmlFor="">Tourist PhotoURL</label>
                        <Input placeholder="Enter Your PhotoURL" variant="filled" />
                    </div>
                    <div>
                        <label htmlFor="">Tourist Price</label>
                        <Input placeholder="Enter Your Price" variant="filled" />
                    </div>
                    <div>
                        <label htmlFor="">Choose Date</label>
                        <DatePicker onChange={onDateChange} needConfirm />
                    </div>

                    <div>
                        <label htmlFor="">Select Guide</label>
                        <Select
                            showSearch
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}
                            filterOption={filterOption}
                            options={options}
                        />
                    </div>

                    <button className='bg-teal-500 py-3 text-white w-full'>Confirm Book</button>
                </form>
            </Modal>
        </>
    );
};

export default BookNowModal;