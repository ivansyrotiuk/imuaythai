import React, {Component} from 'react';
import {host} from "../../../global"
import Spinner from "../../Components/Spinners/Spinner";
import {saveFighter} from "../../../actions/UsersActions";
import axios from "axios";
import {connect} from "react-redux";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import {Field, reduxForm} from 'redux-form';

const inputIconStyle = {
    width: '25px'
}

const socialMediaInputStyleStyle = {
    zIndex: 0
}

const RenderDatePicker = props => {
    return (
        <div>
            <DatePicker
                {...props.input}
                selected={props.input.value
                ? moment(props.input.value)
                : null}
                className="form-control"/> {props.touched && props.error && <span>{props.error}</span>}
        </div>
    );
};


let CommonUserDataForm = props => {
    const {handleSubmit, pristine, reset, submitting, countries} = props;
    const mappedCountries = countries.map((country, i) => <option key={i} value={country.id}>{country.name}</option>);
    return (
        <form onSubmit={handleSubmit}>
           
            <div className="card">
                <div
                    className="card-header"
                    style={{
                    backgroundColor: 'white'
                }}>
                    <i class="fa fa-id-card-o" aria-hidden="true"></i>
                    Common
                </div>
                <div className="card-block">
                  
                    <div className="form-group row">
                        <label className="col-md-3 form-control-label" htmlFor="text-input">First name</label>
                        <div className="col-md-9">
                            <Field
                                name="firstname"
                                component="input"
                                type="text"
                                className="form-control"
                                placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 form-control-label" htmlFor="text-input">Surname</label>
                        <div className="col-md-9">
                            <Field
                                name="surname"
                                component="input"
                                className="form-control"
                                type="text"
                                placeholder="Surname"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 form-control-label" htmlFor="text-input">Nationality</label>
                        <div className="col-md-9">
                            <Field
                                name="nationality"
                                component="input"
                                className="form-control"
                                type="input"
                                placeholder="Nationality"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 form-control-label" htmlFor="text-input">Birthdate</label>
                        <div className="col-md-9">
                            <Field name="birthdate" component={RenderDatePicker} type="input"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-3 form-control-label" htmlFor="text-input">Gender</label>
                        <div className="col-md-9">
                            <Field name="gender" component="select" className="form-control">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Field>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 form-control-label" htmlFor="text-input">Phone</label>
                        <div className="col-md-9">
                            <Field
                                name="phone"
                                component="input"
                                className="form-control"
                                type="text"
                                placeholder="Phone"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-3 form-control-label" htmlFor="text-input">Country</label>
                        <div className="col-md-9">
                            <Field name="countryId" className="form-control" component="select">
                                {mappedCountries}
                            </Field>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div
                    className="card-header"
                    style={{
                    backgroundColor: 'white'
                }}>
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    Social media
                </div>
                <div className="card-block">
                    <div className="form-group row">
                        <div className="col-md-12">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-facebook" style={inputIconStyle}></i>
                                </span>
                                <Field
                                    name="facebook"
                                    component="input"
                                    type="text"
                                    className="form-control"
                                    placeholder="Facebook"
                                    style={socialMediaInputStyleStyle}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-instagram" style={inputIconStyle}></i>
                                </span>
                                <Field
                                    name="instagram"
                                    component="input"
                                    className="form-control"
                                    type="text"
                                    placeholder="Instagram"
                                    style={socialMediaInputStyleStyle}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-md-12">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-twitter" style={inputIconStyle}></i>
                                </span>
                                <Field
                                    name="twitter"
                                    component="input"
                                    className="form-control"
                                    type="input"
                                    placeholder="Twitter"
                                    style={socialMediaInputStyleStyle}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-md-12">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-vk" style={inputIconStyle}></i>
                                </span>
                                <Field
                                    name="vk"
                                    component="input"
                                    className="form-control"
                                    type="input"
                                    placeholder="Vk"
                                    style={socialMediaInputStyleStyle}/>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <button
                type="submit"
                disabled={pristine || submitting}
                className="btn btn-primary pull-right">{submitting && <i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>} Save</button>

        </form>
    );
};

export default reduxForm({
    form: 'CommonUserDataForm',
})(CommonUserDataForm);
