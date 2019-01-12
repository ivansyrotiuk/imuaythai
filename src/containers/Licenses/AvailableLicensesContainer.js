import React, { Component } from "react";
import BuyLicensesView from "../../views/Licenses/AvailableLicensesView"
import { connect } from "react-redux";
import Spinner from "../../views/Components/Spinners/Spinner";
import {fetchLicenseTypes} from '../../actions/LicenseTypesActions';

class AvailableLicensesContainer extends Component {
    componentWillMount() {
        this.props.fetchLicenseTypes();
    }

    render() {
        const { fetching, licenseTypes } = this.props;

        if (fetching) {
            return <Spinner />;
        }

        return <BuyLicensesView licenseTypes={licenseTypes} />;
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        licenseTypes: state.LicenseTypes.types,
        fetching: state.LicenseTypes.fetching
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchLicenseTypes: _ => {
            dispatch(fetchLicenseTypes());
        }
    };
};

AvailableLicensesContainer = connect(mapStateToProps, mapDispatchToProps)(AvailableLicensesContainer);
export default AvailableLicensesContainer;
