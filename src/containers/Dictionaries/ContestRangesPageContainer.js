import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContestRangesPage from '../../views/Dictionaries/ContestRanges/ContestRangesPage';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchRanges, deleteRange } from '../../actions/Dictionaries/ContestRangesActions';

class ContestRangesPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchRanges();
    }

    handleAddContestRangesClick() {
        this.props.history.push('/dictionaries/ranges/new');
    }

    handleEditContestRangesClick(id){
        this.props.history.push('/dictionaries/ranges/' + id);
    }

    handleDeleteContestRangesClick(id) {
        this.props.deleteRange(id);
    }

    get viewActions(){
        return {
            addClick: this.handleAddContestRangesClick.bind(this),
            editClick: this.handleEditContestRangesClick.bind(this),
            deleteClick: this.handleDeleteContestRangesClick.bind(this)
        };
    }

    render() {
        const { ranges, fetching } = this.props;
        if (fetching) {
            return <Spinner />;
        }
        return (
            <ContestRangesPage
                ranges={ranges}
                actions = {this.viewActions}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ranges: state.ContestRanges.ranges,
        fetching: state.ContestRanges.fetching,
        fetched: state.ContestRanges.fetched
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRanges: () => {
            dispatch(fetchRanges());
        },
        deleteRange: (id) => {
            dispatch(deleteRange(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestRangesPageContainer);