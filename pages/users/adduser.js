import React from 'react'
import {
    TextField,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormControl,
    RadioGroup,
    Radio,
    InputLabel,
    Switch,
    Select,
    MenuItem,
    Button
} from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from 'next/router'
import { render } from 'react-dom';

const axios = require('axios')


// const useStyles = makeStyles((theme) => ({
//     inputField: {
//         width: "100%",
//         margin: theme.spacing(1, 0),
//     },
// }));
export default function Adduser(props) {
    console.log("add user page",props);
    // const classes = useStyles();
    const router = useRouter()
     console.log("router111",router);
    const { register, handleSubmit, control, errors } = useForm();

    const onSubmit = (data) => {

        console.log(data, '++++++++++++++KLLLLLLLL');


        // if (data.first_name != null && data.first_name != "") {
        //     axios.post('https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api3/addnextjsuserdata', data)
        //         .then(response => console.log("success", response))
        //         .catch(err => console.log("error", err))
        // } else {
        //     console.log("Form Not Valid");
        // }

        (data.first_name != null && data.first_name != "") ? (
            axios.post('https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api3/addnextjsuserdata', data)
                .then(response => console.log("Submit success", response))
                .catch(err => console.log("error", err))
        ) : console.log("Form Not Valid ++++++++++LLLLLL");
    }

    return (
        <div >
            <h1>Add User</h1>
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* 1) TextField */}
                    <TextField
                        placeholder="Enter Your First Name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        name="firstName"
                        {...register('first_name')}

                    />

                    {/* 2) TextField */}
                    <TextField
                        placeholder="Enter Your Last Name"
                        label="Last Name"
                        variant="outlined"
                        fullWidth

                        name="lastName"
                        {...register('lastName')}
                    />

                    {/* 3) TextField */}
                    <TextField
                        placeholder="Enter Your E-mail Address"
                        label="E-mail"
                        variant="outlined"
                        fullWidth

                        name="email"
                        {...register('email')}
                    />

                    {/* 4) TextField */}
                    <TextField
                        placeholder="Enter Your Phone Number"
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        name="phone"
                        {...register('phone')}
                    />


                    {/* Radio Buttons */}
                    <FormControl >
                        <FormLabel>Choose Your Gender</FormLabel>
                        <RadioGroup row name="gender">
                            <FormControlLabel
                                value="female"
                                control={<Radio {...register('gender')} />}
                                label="Female"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio {...register('gender')} />}
                                label="Male"
                            />
                            <FormControlLabel
                                value="other"
                                control={<Radio {...register('gender')} />}
                                label="Other"
                            />
                        </RadioGroup>
                    </FormControl>

                   
                    {/* Checkbox */}
                    <FormControlLabel
                        style={{ display: "block", marginBottom: 15 }}
                        control={<Checkbox name="tnc" {...register('tnc')} />}
                        label="I aggree all terms and conditions"
                    />

                    <Button variant="contained" color="primary" type="submit">
                        create new account
                    </Button>

                </form>
            </div>
        </div>
    )
}
