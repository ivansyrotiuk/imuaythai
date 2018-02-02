import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContestCategoriesPage from '../../views/Dictionaries/ContestCategories/ContestCategoriesPage';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchContestCategories, deleteContestCategory } from '../../actions/Dictionaries/ContestCategoriesActions';

class ContestCategoriesPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchContestCategories();
    }

    handleAddContestCategoryClick() {
        this.props.history.push('/dictionaries/categories/new');
    }

    handleEditContestCategoryClick(id){
        this.props.history.push('/dictionaries/categories/' + id);
    }

    handleDeleteContestCategoryClick(id) {
        this.props.removeContestCategory(id);
    }

    get viewActions(){
        return {
            addClick: this.handleAddContestCategoryClick.bind(this),
            editClick: this.handleEditContestCategoryClick.bind(this),
            deleteClick: this.handleDeleteContestCategoryClick.bind(this)
        };
    }

    render() {
        const { categories, fetching } = this.props;
        if (fetching) {
            return <Spinner />;
        }
        return (
            <ContestCategoriesPage
                categories={categories}
                actions = {this.viewActions}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.ContestCategories.categories,
        fetching: state.ContestCategories.fetching,
        fetched: state.ContestCategories.fetched
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchContestCategories: () => {
            dispatch(fetchContestCategories());
        },
        removeContestCategory: id => {
            dispatch(deleteContestCategory(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestCategoriesPageContainer);