import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeightAgeCategoriesPage from '../../views/Dictionaries/WeightAgeCategories/WeightAgeCategoriesPage';
import Spinner from '../../views/Components/Spinners/Spinner';
import { fetchWeightCategories, deleteWeightCategory } from '../../actions/Dictionaries/WeightCategoriesActions';

class WeightAgeCategoriesPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchWeightCategories();
    }

    handleAddWeightCategoryClick() {
        this.props.history.push('/dictionaries/weightcategories/new');
    }

    handleEditWeightCategoryClick(id){
        this.props.history.push('/dictionaries/weightcategories/' + id);
    }

    handleDeleteWeightCategoryClick(id) {
        this.props.deleteWeightCategory(id);
    }

    get viewActions(){
        return {
            addClick: this.handleAddWeightCategoryClick.bind(this),
            editClick: this.handleEditWeightCategoryClick.bind(this),
            deleteClick: this.handleDeleteWeightCategoryClick.bind(this)
        };
    }

    render() {
        const { categories, fetching } = this.props;
        if (fetching) {
            return <Spinner />;
        }
        return (
            <WeightAgeCategoriesPage
                categories={categories}
                actions = {this.viewActions}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.WeightCategories.categories,
        fetching: state.WeightCategories.fetching,
        fetched: state.WeightCategories.fetched
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeightCategories: () => {
            dispatch(fetchWeightCategories());
        },
        deleteWeightCategory: (id) => {
            dispatch(deleteWeightCategory(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeightAgeCategoriesPageContainer);