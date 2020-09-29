import { LOAD_CATEGORIES, ADD_NEW_CATEGORY, SET_SELECTED_CATEGORY, UPDATE_CATEGORY, CLEAR_SELECTED_CATEGORY, DELETE_CATEGORY } from '../types';

export const loadCategories = () => ({
    type: LOAD_CATEGORIES
});

export const addNewCategory = category => ({
    type: ADD_NEW_CATEGORY,
    payload: category
});

export const updateCategory = category => ({
    type: UPDATE_CATEGORY,
    payload: category
});

export const setSelectedCategory = category => ({
    type: SET_SELECTED_CATEGORY,
    payload: category
});

export const clearSelectedCategory = () => ({
    type: CLEAR_SELECTED_CATEGORY
});

export const deleteCategory = category => ({
    type: DELETE_CATEGORY,
    payload: category
});
