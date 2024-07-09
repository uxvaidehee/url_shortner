import classNames from 'classnames'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

const Register = ({ toggle }) => {
    const formik = useFormik({
        initialValues: {
            name: "luffy",
            email: "lufffy@gmail.com",
            password: "123",
            cpassword: "456",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().email("enter email").required("Enter email"),
            password: yup.string().required("Enter password"),
            cpassword: yup.string().required("confirm password").oneOf([yup.ref("password")]),
        }),
        onSubmit: (values, { resetForm }) => {
            resetForm()
        }
    })

    const getClasses = (fieldName) => {
        return classNames({
            "form-control": true,
            "is-valid": formik.touched[fieldName] && !formik.errors[fieldName],
            "is-invalid": formik.touched[fieldName] && formik.errors[fieldName],

        })
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card animate__animated  animate__headShake">
                        <div className="card-header">Signup</div>
                        <div className="card-body">
                            <div>
                                <label for="name" className="form-label">First name</label>
                                <input
                                    type="text"
                                    {...formik.getFieldProps("name")}
                                    className={getClasses("name")}
                                    id="name"
                                    placeholder="Enter your name"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label for="email" className="form-label">First Email</label>
                                <input
                                    type="text"
                                    {...formik.getFieldProps("email")}
                                    className={getClasses("email")}
                                    // className="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label for="password" className="form-label">Password</label>
                                <input
                                    type="text"
                                    {...formik.getFieldProps("password")}
                                    className={getClasses("password")}
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a password.</div>
                            </div>
                            <div className="mt-2">
                                <label for="cpassword" className="form-label"
                                >Confirm Password</label
                                >
                                <input
                                    type="text"
                                    {...formik.getFieldProps("cpassword")}
                                    className={getClasses("cpassword")}
                                    id="cpassword"
                                    placeholder="Confirm Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">
                                    Please Recheck Your Password.
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary w-100 mt-3">
                                Signup
                            </button>
                            <p className="text-center mt-3">
                                Already Have Account? <button onClick={toggle} className='btn btn-link' >Login</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Register