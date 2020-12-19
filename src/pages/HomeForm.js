import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { Input } from '../components/controls/Input'
import { Form, UseForm } from '../components/UseForm'

import { Select } from '../components/controls/Select'
import { Checkbox } from '../components/controls/Checkbox'
import { Radiogroup } from '../components/controls/Radiogroup'
import { Button } from '../components/controls/Button'
import { Datepicker } from '../components/controls/Datepicker'

const radioItems = [
    { id: 'one', title: 'One' },
    { id: 'two', title: 'Two' },
    { id: 'three', title: 'Three' },
]

const optionsSelectors =
    [
        { id: 'id1', title: 'title 1' },
        { id: 'id2', title: 'title2' }
    ]


const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}


export const HomeForm = () => {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    const {
        values, setValues, errors, setErrors, handleInputChange, resetForm
    } = UseForm(initialFValues, true, validate);


    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            //   resetForm()
        }
    }


    return (
        <>
            <Grid container >
                <Grid item xs={6}>
                    <Paper>
                        <Form onSubmit={handleSubmit}>
                            <Input
                                name="fullName"
                                label="Full Name"
                                value={values.fullName}
                                onChange={handleInputChange}
                                error={errors.fullName}
                            />

                            <Input
                                name="email"
                                label="Email"
                                value={values.email}
                                onChange={handleInputChange}
                                error={errors.email}
                            />
                            <Select
                                name="departmentId"
                                label="Title-Select"
                                value={values.departmentId}
                                onChange={handleInputChange}
                                options={optionsSelectors}
                                error={errors.departmentId}
                            />
                            <Checkbox
                                name="isPermanent"
                                label="check1"
                                value={values.isPermanent}
                                onChange={handleInputChange}
                            />
                            <Radiogroup name="gender" label="radio" value={values.gender} onChange={handleInputChange} items={radioItems} />

                            <Datepicker
                                name="hireDate"
                                label="Hire Date"
                                value={values.hireDate}
                                onChange={handleInputChange}
                            />

                            <Button
                                type="submit"
                                text="Submit"
                                color="secondary" />
                            <Button
                                text="Reset"
                                color="default"
                                onClick={resetForm} />

                        </Form>

                    </Paper>
                </Grid>
            </Grid>


        </>
    )
}
