import React, { Component } from "react";
import { connect } from "react-redux";
import BuyLicenseView from "../../views/Licenses/BuyLicenseView";
import Spinner from "../../views/Components/Spinners/Spinner";
import { fetchPayment } from "../../actions/LicenseTypesActions";

class BuyLicenseContainer extends Component {
    componentWillMount() {
        const typeId = this.props.match.params.typeId;
        const institutionId = this.props.match.params.institutionId;
        const contestId = this.props.match.params.contestId;
        this.props.fetchPayment(typeId, institutionId, contestId);
    }

    render() {
   
        const { fetching, payment, license } = this.props;

        if (fetching) {
            return <Spinner />;
        }

        return <BuyLicenseView payment={payment} license={license}/>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        payment: state.License.payment,
        license: state.License.license,
        fetching: state.License.fetching,

    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPayment: (typeId, institutionId) => {
            dispatch(fetchPayment(typeId, institutionId));
        },
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyLicenseContainer);