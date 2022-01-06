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
import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from "react-hook-form";
import { useRouter } from 'next/router'
import { render } from 'react-dom';
import Router from 'next/router';
import styles from '../../styles/Home.module.css'


const axios = require('axios')


// const useStyles = makeStyles((theme) => ({
//     inputField: {
//         width: "100%",
//         margin: theme.spacing(1, 0),
//     },
// }));
export default function Adduser(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(false);

    const handleClick = () => {
        // e.target.reset();

        setOpen(true);

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    console.log("add user page", Object.keys(props).length);
    let addeditflag = props != {} ? props : 0
    let headerText = "Add User";
    let buttonText = "Create Account"
    const router = useRouter()
    console.log("router111", addeditflag);

    const formOptions = {};
    if (Object.keys(props).length != 0) {
        if (props != null && props.dataset.length > 0) {
            headerText = "Edit User";
            buttonText = "Update Data";
            formOptions.defaultValues = props.dataset[0];
        }
    }
    console.log("wertyui", formOptions.defaultValues)

    const { register, handleSubmit, control, errors } = useForm(formOptions);
    console.log("[[", control);

    const onSubmit = (data) => {

        (data.first_name != null && data.first_name != "") ? setData(true) : setData(false)

            (data.first_name != null && data.first_name != "") ? (
            axios.post('https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api3/addnextjsuserdata', data)
                .then(response => console.log("Submit success", response))
                .catch(err => console.log("error", err))
        ) : console.log("Form Not Valid ++++++++++LLLLLL");
    }

    return (
        <div >
            <h1 style={{ textAlign: 'center', marginTop: -20 }}>{headerText}</h1>
            <div style={{ margin: 45 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* 1) TextField */}
                    <TextField
                        placeholder="Enter Your First Name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        required
                        name="firstName"
                        {...register('first_name')}

                    />
                    <br /><br />
                    {/* 2) TextField */}
                    <TextField
                        placeholder="Enter Your Last Name"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        required
                        name="lastName"
                        {...register('lastName')}
                    />
                    <br /><br />
                    {/* 3) TextField */}
                    <TextField
                        placeholder="Enter Your E-mail Address"
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                        required
                        name="email"
                        {...register('email')}
                    />
                    <br /><br />
                    {/* 4) TextField */}
                    <TextField
                        placeholder="Enter Your Phone Number"
                        label="Phone"
                        variant="outlined"
                        required
                        fullWidth
                        name="phone"
                        {...register('phone')}
                    />
                    <br /><br />

                    {/* Radio Buttons */}
                    <FormControl>
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
                    <br /><br />

                    {/* Checkbox */}
                    <FormControlLabel
                        style={{ display: "block", marginBottom: 15 }}
                        control={<Checkbox name="tnc" {...register('tnc')} />}
                        label="I aggree all terms and conditions"
                    />
                    <br /><br />
                    <div style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                        <Button variant="contained" color="primary" type="submit" onClick={() => Router.push('/')}>{buttonText}</Button>
                    </div>

                    {/* <div style={{ marginTop: 15, marginLeft: 100 }}>
                        <Button onClick={handleClick} variant="contained" color="primary">Open simple snackbar</Button> */}
                    <Snackbar
                        open={data}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        severity="success"
                        message="Thank You for Registering !"
                    // action={action}
                    />
                    {/* </div> */}
                </form>
            </div>
        </div>
    )
}
