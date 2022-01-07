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
import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from "react-hook-form";
import { useRouter } from 'next/router'
import { render } from 'react-dom';
import Router from 'next/router';
import styles from '../../styles/Home.module.css'
import { switchUnstyledClasses } from '@mui/material';
import Container from '@material-ui/core/Container';
import CancelIcon from '@mui/icons-material/Cancel';
import { makeStyles } from '@material-ui/core';

const axios = require('axios')


const useStyles = makeStyles({
    btn: {
        '&:hover': {
            backgroundColor: 'green',
        }
    },

});

export default function Adduser(props) {

    const styleX = useStyles()

    const [openSnack, setOpenSnack] = React.useState(false);

    const handleClick = () => {
        // e.target.reset();
        setOpenSnack(true);

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false);
    };

    const snackControl = (status) => {

        (status === 'success') ? setOpenSnack(true) : setOpenSnack(false);
        reset();
        // return
        setTimeout(() => { Router.push('/listingusers'); }, 3000)

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

    const { register, handleSubmit, control, errors, reset } = useForm(formOptions);
    // console.log("[[", control);

    const onSubmit = (data) => {

        (data.first_name != null && data.first_name != "") ? (
            axios.post('https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api3/addnextjsuserdata', data)

                // .then(response => console.log("Submit success", response))
                .then((response) => {
                    console.log("Submit success", response);
                    console.log("CHECKDKKKKKK+++++", response.data.status);
                    // (response.data.status === 'success') ? setOpenSnack(true) : setOpenSnack(false);
                    snackControl(response.data.status);
                })
                .catch(err => console.log("error", err))
        ) : console.log("Form Not Valid ++++++++++LLLLLL");

    }

    return (
        <Container className={styles.formBg} >
            <center><p className={styles.headerText}>{headerText}</p></center>
            <div style={{ margin: 45 }}>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    {/* 1) TextField */}
                    <TextField
                        placeholder="Enter Your First Name"
                        label="First Name"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        name="firstName"
                        title='Enter First Name'
                        {...register('first_name')}

                    />
                    <br /><br />
                    {/* 2) TextField */}
                    <TextField
                        placeholder="Enter Your Last Name"
                        label="Last Name"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        name="lastName"
                        title='Enter Last Name'
                        {...register('lastName')}
                    />
                    <br /><br />
                    {/* 3) TextField */}
                    <TextField
                        placeholder="Enter Your E-mail Address"
                        label="E-mail"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        name="email"
                        title='Enter Email Id'
                        {...register('email')}
                    />
                    <br /><br />
                    {/* 4) TextField */}
                    <TextField
                        placeholder="Enter Your Phone Number"
                        label="Phone"
                        variant="outlined"
                        color="secondary"
                        required
                        fullWidth
                        name="phone"
                        title='Enter Mobile Number'
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
                    <br />
                    <center>
                        <Button variant="outlined" color="secondary" onClick={() => reset()} endIcon={<CancelIcon />}>Reset</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" color="primary" type="submit" className={styleX.btn}>submit</Button>

                    </center>
                    <br /><br />
                    <div>


                        <Snackbar
                            open={openSnack}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            severity="success"
                            message="Thank You for Registering !"
                        />
                    </div>
                </form>
            </div>
        </Container>
    )
}
