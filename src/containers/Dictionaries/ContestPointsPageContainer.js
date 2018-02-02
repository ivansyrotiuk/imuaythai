import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContestPointsPage from '../../views/Dictionaries/ContestPoints/ContestPointsPage';
import Spinner from '../../views/Components/Spinners/Spinner';
import {fetchPoints, deletePoint } from '../../actions/Dictionaries/ContestPointsActions';

class ContestPointsPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchPoints();
    }

    handleAddContestPointsClick() {
        this.props.history.push('/dictionaries/points/new');
    }

    handleEditContestPointsClick(id){
        this.props.history.push('/dictionaries/points/' + id);
    }

    handleDeleteContestPointsClick(id) {
        this.props.deletePoint(id);
    }

    get viewActions(){
        return {
            addClick: this.handleAddContestPointsClick.bind(this),
            editClick: this.handleEditContestPointsClick.bind(this),
            deleteClick: this.handleDeleteContestPointsClick.bind(this)
        };
    }

    render() {
        const { points, fetching } = this.props;
        if (fetching) {
            return <Spinner />;
        }
        return (
            <ContestPointsPage
                points={points}
                actions = {this.viewActions}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        points: state.ContestPoints.points,
        fetching: state.ContestPoints.fetching,
        fetched: state.ContestPoints.fetched
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPoints: () => {
            dispatch(fetchPoints());
        },

        deletePoint: id => {
            dispatch(deletePoint(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestPointsPageContainer);