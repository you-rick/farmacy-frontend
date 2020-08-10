import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderTextField, renderCheckbox} from "../../../shared/FormControls/FormControls";
import {Card, CardContent, Box, Container, Button, Grid, Link, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {USER_FORGOT_PASS} from "../../../../routes/routes";

const useStyles = makeStyles({
  root: {
    padding: '1rem'
  }
});

const LoginForm = () => {
    const classes = useStyles();

    return (
        <Box p="4rem 0">
            <Container maxWidth="xs">
                <Card className={classes.root}>
                    <CardContent>
                        <Box m="0 0 1rem">
                            <Typography variant="h5" component="h1" align="center" gutterBottom>
                                Sign in to Office Aid
                            </Typography>
                        </Box>
                        <form>
                            <Field
                                name="username"
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                fullWidth={true}
                                component={renderTextField}
                            />
                            <Field
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                margin="normal"
                                fullWidth={true}
                                component={renderTextField}
                            />
                            <Field name="remember-me" component={renderCheckbox} label="Remember me"/>
                            <Box m="1rem 0 0">
                                <Button type="submit" fullWidth variant="contained" color="primary">
                                    Sign In
                                </Button>
                            </Box>
                            <Box m="1rem 0 0">
                                <Grid container justify="center">
                                    <Grid item>
                                        <Link component={NavLink} to={USER_FORGOT_PASS}
                                              variant="body2">{"Forgot my password"}</Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
};


const LoginReduxForm = reduxForm({form: 'user-login'})(LoginForm);

const Login = () => {
    return <LoginReduxForm/>
};


export default connect(null, {})(Login);
