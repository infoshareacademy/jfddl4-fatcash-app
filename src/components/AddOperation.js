import React from 'react'
import {Form, Text, Radio, RadioGroup, Select} from 'react-form';

const categoriesExpenses = [
    {
        label: 'food'
    },
    {
        label: 'drinks',
    },
    {
        label: 'girls',
    },
    {
        label: 'car',
    }]

const AddOperation = () => (
    <Form>
        {formApi => (
            <form onSubmit={formApi.submitForm} id="radio-input-form">
                <RadioGroup field="gender">
                    <label htmlFor="radio-input-expenses" className="mr-2">Expenses</label>
                    <Radio value="expenses" id="radio-input-expenses"/>
                    <label htmlFor="radio-input-icome" className="mr-2">Income</label>
                    <Radio value="icome" id="radio-input-icome"/>
                </RadioGroup>

                <label htmlFor="select-input-status">Category of expenses ... </label>
                <Select field="status" id="select-input-status" options={categoriesExpenses} className="mb-4"/>

                <label htmlFor="text-input-description">Description</label>
                <Text field="Description" id="text-input-description"/>

                <label htmlFor="text-input-value">Value</label>
                <Text field="Value" id="text-input-value"/>

                <button type="submit" className="mb-4 btn btn-primary">
                    Submit
                </button>
            </form>
        )}


    </Form>)

export default AddOperation