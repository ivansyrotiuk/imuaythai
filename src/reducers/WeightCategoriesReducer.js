import * as actionTypes from '../actions/types/dictionaries/weightAgeCategoriesTypes';

export default function reducer(
    state = {
        categories: [],
        category: {},
        fetching: false,
        fetched: false,
        error: null
    },
    action
) {
    switch (action.type) {
    case actionTypes.FETCH_WEIGHT_CATEGORIES: {
        return {
            ...state,
            fetching: true
        };
    }
    case actionTypes.FETCH_WEIGHT_CATEGORIES_REJECTED: {
        return {
            ...state,
            fetching: false,
            error: action.payload
        };
    }
    case actionTypes.FETCH_WEIGHT_CATEGORIES_FULFILLED: {
        return {
            ...state,
            fetching: false,
            fetched: true,
            categories: action.payload
        };
    }
    case actionTypes.FETCH_WEIGHT_CATEGORY: {
        return {
            ...state,
            fetching: true
        };
    }
    case actionTypes.FETCH_WEIGHT_CATEGORY_FULFILLED: {
        return {
            ...state,
            fetching: false,
            category: action.payload
        };
    }
    case actionTypes.FETCH_WEIGHT_CATEGORY_REJECTED: {
        return {
            ...state,
            fetching: false,
            category: {}
        };
    }
    case actionTypes.SAVE_WEIGHT_CATEGORY: {
        return {
            ...state,
            fetching: true
        };
    }
    case actionTypes.SAVE_WEIGHT_CATEGORY_REJECTED: {
        return {
            ...state,
            fetching: true
        };
    }
    case actionTypes.SAVE_WEIGHT_CATEGORY_SUCCESS: {
        const category = action.payload;
        const newCategories = [...state.categories];
        const categoryToUpdate = newCategories.findIndex(t => t.id === category.id);
        if (categoryToUpdate > -1) {
            newCategories[categoryToUpdate] = category;
            return {
                ...state,
                categories: newCategories,
                fetching: false,
                category: {}
            };
        } else {
            return {
                ...state,
                categories: [...state.categories, category],
                fetching: false,
                category: {}
            };
        }
    }
    case actionTypes.DELETE_WEIGHT_CATEGORY_SUCCESS: {
        return {
            ...state,
            categories: state.categories.filter(t => t.id !== action.payload)
        };
    }
    case actionTypes.DELETE_WEIGHT_CATEGORY_REJECTED:
        return {
            ...state,
            categories: state.categories,
            error: action.payload
        };
    }
    return state;
}
