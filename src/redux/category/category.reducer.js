import { LOAD_CATEGORIES, ADD_NEW_CATEGORY, SET_SELECTED_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, CLEAR_SELECTED_CATEGORY } from '../types';

const initialState = {
    title: 'categories',
    selectedCategory: '',
    categories: [],
    error: null
};

const categoryReducer = (state = initialState, action) => {
    const { type, payload } = action;
    let storageCategories = null;

    switch (type) {
        case LOAD_CATEGORIES:
            storageCategories = JSON.parse(localStorage.getItem('categories')) ? JSON.parse(localStorage.getItem('categories')) : [];

            return {
                ...state,
                categories: [...storageCategories]
            };
        case ADD_NEW_CATEGORY:
            storageCategories = JSON.parse(localStorage.getItem('categories')) ? JSON.parse(localStorage.getItem('categories')) : [];
            storageCategories.push(payload);
            localStorage.setItem('categories', JSON.stringify(storageCategories));

            return {
                ...state,
                categories: [...storageCategories]
            };
        case UPDATE_CATEGORY:
            storageCategories = JSON.parse(localStorage.getItem('categories')) ? JSON.parse(localStorage.getItem('categories')) : [];

            const selectedCategoryIndex = storageCategories.indexOf(state.selectedCategory);
            storageCategories[selectedCategoryIndex] = payload;

            localStorage.setItem('categories', JSON.stringify(storageCategories));

            return {
                ...state,
                categories: [...storageCategories],
                selectedCategory: payload
            };
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: payload
            };
        case CLEAR_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: ''
            };
        case DELETE_CATEGORY:
            storageCategories = JSON.parse(localStorage.getItem('categories')) ? JSON.parse(localStorage.getItem('categories')) : [];

            storageCategories = storageCategories.filter(category => category !== payload);

            localStorage.setItem('categories', JSON.stringify(storageCategories));
            return {
                ...state,
                categories: [...storageCategories],
                selectedCategory: ''
            };
        // case 'ERROR':
        //     return {
        //         ...state,
        //         categories: [],
        //         selectedCategory: null,
        //         error: payload
        //     };
        default:
            return state;
    }
};

export default categoryReducer;
