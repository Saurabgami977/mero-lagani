import React, { useRef, useState } from "react";
import {
    TextField,
    Button,
    Grid,
    FormControlLabel,
    Checkbox,
}
    from "@material-ui/core";
// import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RegisterForm() {
    //Returns true if screen size is less than 1024px
    const [acceptTerms, setAcceptTerms] = useState(true);
    const methods = useForm();
    const { register, handleSubmit, errors, watch, reset } = methods;
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => {
        // dispatch(registerUser(data));
        const {
            ApplicantName, email, grade, age, parentName, address, MailAddress, phone, password, confirmPassword
        } = data
        console.log(ApplicantName, email, grade, age, parentName, address, MailAddress, phone, password, confirmPassword)
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container>
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            margin="normal"
                            fullWidth
                            name="name"
                            label="Full Name"
                            inputRef={register({ required: "Name is required" })}
                            error={!!errors.name}
                            helperText={!!errors.name ? errors.name.message : ""}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            margin="normal"
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            inputRef={register({ required: "Email is required" })}
                            error={!!errors.email}
                            helperText={!!errors.email ? errors.email.message : ""}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            margin="normal"
                            fullWidth
                            name="phone"
                            label="Phone Number"
                            type="number"
                            inputRef={register({ required: "Phone number is required" })}
                            error={!!errors.phone}
                            helperText={!!errors.phone ? errors.phone.message : ""}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            margin="normal"
                            fullWidth
                            type="password"
                            name="password"
                            label="Password"
                            inputRef={register({
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must have at least 6 characters",
                                },
                            })}
                            error={!!errors.password}
                            helperText={!!errors.password ? errors.password.message : ""}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            margin="normal"
                            fullWidth
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            inputRef={register({
                                required: "Confirm password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must have at least 6 characters",
                                },
                                validate: (value) =>
                                    value === password.current || "The passwords do not match",
                            })}
                            error={!!errors.confirmPassword}
                            helperText={
                                !!errors.confirmPassword ? errors.confirmPassword.message : ""
                            }
                        />
                    </Grid>

                    <Grid container item xs={12} justify='space-evenly'>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="acceptTerms"
                                        checked={acceptTerms}
                                        color='primary'
                                        onChange={() => setAcceptTerms(!acceptTerms)}
                                    />
                                }
                                label="I accept terms and conditions"
                            />
                            <Button type="submit" fullWidth variant="contained" color="secondary">
                                Register
                            </Button>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <Button component={Link} to="login" color="inherit">
                                        {"Already have an account? Login"}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </form>
    );
}

export default RegisterForm;
