import React, { Component } from "react";
import { connect } from "react-redux";
import BuyLicenseView from "../../views/Licenses/BuyLicenseView";
import Spinner from "../../views/Components/Spinners/Spinner";
import { fetchPayment } from "../../actions/LicenseTypesActions";

class BuyLicenseContainer extends Component {
    componentWillMount() {
        const typeId = this.props.match.params.typeId;
        this.props.fetchPayment(typeId)
    }

    render() {
   
        const { fetching, payment } = this.props;

        if (fetching) {
            return <Spinner />;
        }

        return <BuyLicenseView payment={payment} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        payment: state.License.payment,
        fetching: state.License.fetching
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPayment: (typeId, institutionId) => {
            dispatch(fetchPayment(typeId, institutionId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyLicenseContainer);