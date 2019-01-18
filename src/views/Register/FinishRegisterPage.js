import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { Alert } from "reactstrap";
import { connect } from "react-redux";

class FinishRegisterPage extends Component {
    render() {
        const {
            handleSubmit,
            error,
            pristine,
            reset,
            submitting,
            countries,
            roles,
            gyms,
            fetchingGyms,
            hasOwnGym,
            selectedGymRole,
            fetching,
            onCountryChange,
            usePolicy,
            privacyPolicy,
            paymentPolicy,
            userPolicy
        } = this.props;
        const policyAccepted = usePolicy && privacyPolicy && paymentPolicy && userPolicy;
        const mappedCountries = countries.map((country, i) => (
            <option key={i} value={country.id}>
                {country.name}
            </option>
        ));

        const mappedRoles = roles.map((role, i) => (
            <option key={i} value={role.id}>
                {role.name}
            </option>
        ));

        const mappedGyms = gyms.map((gym, i) => (
            <option key={i} value={gym.id}>
                {gym.name}
            </option>
        ));

        const ownGymCheckboxField = !fetchingGyms && selectedGymRole && (
            <div className="input-group mb-3">
                <label htmlFor="ownGym" />
                <div>
                    <Field name="ownGym" id="ownGym" component="input" type="checkbox" /> I have own gym
                </div>
            </div>
        );
        const gymNameField = !fetchingGyms && hasOwnGym && (
            <div className="input-group mb-4">
                <span className="input-group-addon">
                    <i className="fa fa-building-o" />
                </span>
                <Field name="gymName" className="form-control" component="input" type="text" placeholder="Gym name" />
            </div>
        );

        const gymSelectField = !fetchingGyms && !hasOwnGym && (
            <div className="input-group mb-4">
                <span className="input-group-addon">
                    <i className="fa fa-building-o" />
                </span>
                <Field
                    name="institutionId"
                    className="form-control"
                    component="select"
                    type="select"
                    placeholder="Role"
                >
                    <option value="">Select your gym</option>
                    {mappedGyms}
                </Field>
            </div>
        );

        const gymLoading = fetchingGyms && (
            <div className="row justify-content-center" style={{ marginBottom: "10px" }}>
                <i className="fa fa-cog fa-spin fa-2x fa-fw" />
            </div>
        );

        const required = value => (value ? undefined : "Required");

        return (
            <div>
                {error && <Alert color="danger">{error}</Alert>}
                <div className="app flex-row align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="card mx-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="card-block p-4">
                                            <h1>Registration. Second step</h1>
                                            <p className="text-muted">Set up your account</p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-addon">
                                                            <i className="fa fa-id-card-o" />
                                                        </span>
                                                        <Field
                                                            name="firstName"
                                                            className="form-control"
                                                            component="input"
                                                            type="text"
                                                            placeholder="First name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-addon">
                                                            <i className="fa fa-id-card-o" />
                                                        </span>
                                                        <Field
                                                            name="surname"
                                                            className="form-control"
                                                            component="input"
                                                            type="text"
                                                            placeholder="Surname"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-addon">
                                                    <i className="fa fa-globe" />
                                                </span>
                                                <Field
                                                    name="countryId"
                                                    className="form-control"
                                                    component="select"
                                                    type="select"
                                                    placeholder="Your country"
                                                    onChange={onCountryChange}
                                                >
                                                    <option value="">Select your country</option>
                                                    {mappedCountries}
                                                </Field>
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-addon">
                                                    <i className="fa fa-user-plus" />
                                                </span>
                                                <Field
                                                    name="roleId"
                                                    className="form-control"
                                                    component="select"
                                                    type="select"
                                                    placeholder="Role"
                                                >
                                                    <option value="">Select your role</option>
                                                    {mappedRoles}
                                                </Field>
                                            </div>
                                            {gymLoading}
                                            {ownGymCheckboxField}
                                            {gymNameField}
                                            {gymSelectField}
                                            <div className="input-group mb-3">
                                                <label htmlFor="privacyPolicy" />
                                                <div>
                                                    <Field
                                                        name="privacyPolicy"
                                                        id="privacyPolicy"
                                                        component="input"
                                                        type="checkbox"
                                                        validate={[required]}
                                                    />{" "}
                                                    Oświadczam, że zapoznałem się z{" "}
                                                    <a
                                                        href="https://drive.google.com/open?id=1d3dXY2EM4qA4x0-E5-gO5OON0Rgdgz9s"
                                                        target="blank"
                                                    >
                                                        polityką prywatności system IMuaythai{" "}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <label htmlFor="usePolicy" />
                                                <div>
                                                    <Field
                                                        name="usePolicy"
                                                        id="usePolicy"
                                                        component="input"
                                                        type="checkbox"
                                                        validate={[required]}
                                                    />{" "}
                                                    Oświadczam, że zapoznałem się z{" "}
                                                    <a
                                                        href="https://drive.google.com/open?id=1DjgSAK_UqDKnpyVWuTUWnDO6bdXM3H20"
                                                        target="blank"
                                                    >
                                                        regulaminem korzystania z systemu IMuaythai{" "}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <label htmlFor="paymentPolicy" />
                                                <div>
                                                    <Field
                                                        name="paymentPolicy"
                                                        id="paymentPolicy"
                                                        component="input"
                                                        type="checkbox"
                                                        validate={[required]}
                                                    />
                                                    Oświadczam, że zapoznałem się z{" "}
                                                    <a
                                                        href="https://drive.google.com/open?id=1olehWUTrGj5c6xJPuk9UW1w4jl6CzE_E"
                                                        target="blank"
                                                    >
                                                        regulaminem płatności systemu IMuaythai
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <label htmlFor="userPolicy" />
                                                <div>
                                                    <Field
                                                        name="userPolicy"
                                                        id="userPolicy"
                                                        component="input"
                                                        type="checkbox"
                                                        validate={[required]}
                                                    />{" "}
                                                    Oświadczam, że zapoznałem się z{" "}
                                                    <a
                                                        href="https://drive.google.com/open?id=1uIYuEvXxU72m4KH27ugfnq-8U3Zgj-dO"
                                                        target="blank"
                                                    >
                                                        regulaminem użytkownika systemu IMuaythai
                                                    </a>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-block btn-success"
                                                disabled={fetching || submitting || !policyAccepted}
                                            >
                                                {submitting && <i className="fa fa-spinner fa-pulse fa-1x fa-fw" />}{" "}
                                                Create Account
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
FinishRegisterPage = reduxForm({
    form: "FinishRegisterPage", // a unique identifier for this form
    destroyOnUnmount: false
})(FinishRegisterPage);

const selector = formValueSelector("FinishRegisterPage");
FinishRegisterPage = connect(state => {
    const hasOwnGym = selector(state, "ownGym");
    const roleId = selector(state, "roleId");
    const usePolicy = selector(state, "usePolicy");
    const privacyPolicy = selector(state, "privacyPolicy");
    const paymentPolicy = selector(state, "paymentPolicy");
    const userPolicy = selector(state, "userPolicy");

    const requestedRole = state.Roles.publicRoles.find(r => r.id === roleId);
    const selectedGymRole = requestedRole !== undefined && requestedRole.normalizedName === "GYMADMIN";
    return {
        hasOwnGym,
        selectedGymRole,
        usePolicy,
        privacyPolicy,
        paymentPolicy,
        userPolicy
    };
})(FinishRegisterPage);

export default FinishRegisterPage;
