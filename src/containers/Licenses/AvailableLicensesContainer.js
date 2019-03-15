import React, { Component } from "react";
import AvailableLicensesView from "../../views/Licenses/AvailableLicensesView";
import { connect } from "react-redux";
import Spinner from "../../views/Components/Spinners/Spinner";
import { fetchLicenseTypes, fetchCurrentContests } from "../../actions/LicenseTypesActions";

class AvailableLicensesContainer extends Component {
    state = {
        showContestModal: false
    };

    componentWillMount() {
        this.props.fetchLicenseTypes();
        this.props.fetchCurrentContests();

        this.handleBuyLicense = this.handleBuyLicense.bind(this);
        this.handleOpenConstestModal = this.handleOpenConstestModal.bind(this);
        this.handleCloseConstestModal = this.handleCloseConstestModal.bind(this);
        this.handleSelectConstest = this.handleSelectConstest.bind(this);
    }

    handleBuyLicense(typeId, institutionId, contestId) {
        let url = "";
        if (institutionId) {
            url = `/account/licenses/${typeId}/institution/${institutionId}`;
        } else {
            url = `/account/licenses/${typeId}`;
        }

        if (contestId) {
            url += `/contest/${contestId}`;
        }

        url += '/buy';

        this.props.history.push(url);
    }

    handleOpenConstestModal(typeId, institutionId) {
        this.setState({
            showContestModal: true,
            selectedType: {
                typeId: typeId,
                institutionId: institutionId
            }
        });
    }

    handleCloseConstestModal() {
        this.setState({ showContestModal: false });
    }

    handleSelectConstest(ev) {
        this.setState({
            ...this.state,
            selectedType: {
                ...this.state.selectedType,
                contestId: ev.target.value
            }
        });
    }

    render() {
        const { fetching, licenseTypes, contests } = this.props;
        const { selectedType, showContestModal } = this.state;

        if (fetching) {
            return <Spinner />;
        }

        return (
            <AvailableLicensesView
                licenseTypes={licenseTypes}
                contests={contests}
                selectedType={selectedType}
                showContestModal={showContestModal}
                handleBuyLicense={this.handleBuyLicense}
                handleOpenConstestModal={this.handleOpenConstestModal}
                handleCloseConstestModal={this.handleCloseConstestModal}
                handleSelectConstest={this.handleSelectConstest}
            />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        licenseTypes: state.LicenseTypes.types,
        fetching: state.LicenseTypes.fetching,
        contests: state.LicenseTypes.contests,
        fetchingContests: state.LicenseTypes.fetchingContests
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchLicenseTypes: _ => {
            dispatch(fetchLicenseTypes());
        },
        fetchCurrentContests: _ => dispatch(fetchCurrentContests())
    };
};

AvailableLicensesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AvailableLicensesContainer);
export default AvailableLicensesContainer;
