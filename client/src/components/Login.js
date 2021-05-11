import axios from 'axios';
import React, { Component } from 'react'
import { Formik, Form } from 'formik';
import { TextField , Button } from '@material-ui/core';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            token: null
        }
    }
    // Set input to state to submit for authentication
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    // Submite State to api for authentication
    handleSubmit = async() => {
        let res = await axios.post('http://localhost:3000/login', {
                    username: this.state.username,
                    password: this.state.password
                }).then((res) => {
                    localStorage.setItem('token', res.data);
                });
        console.log(res.data);            
    }

    render() {
        return (
            /* <div>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={this.handleChange}/>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" onChange={this.handleChange}/>
                    <button type='submit' onSubmit={this.handleSubmit}>Login</button> 
                </form>
            </div> */
            <>
                <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={this.handleSubmit}>
                    <Form>
                        <div>
                            <TextField name="username" placeholder="username" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <TextField name="password" placeholder="password" onChange={this.handleChange} />
                        </div>
                        <div>
                            <Button type="submit">Submit</Button>
                        </div>
                    </Form>
                </Formik>
            </>
        )
    }
}

export default Login
