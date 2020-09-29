import React, { useState, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadCategories, deleteCategory, clearSelectedCategory } from '../../redux/category/category.actions';
import { selectCategoryTitle, selectIsCategories, selectSelectedCategory } from '../../redux/category/category.selectors';

// Styles
import './categories.styles.scss';

// Components
import Toolbar from '../shared/toolbar/toolbar';
import CategoryList from './category-list/category-list';
import CategoryForm from './category-form/category-form';
import CategoryDetails from './category-details/category-details';

const Categories = ({ categoryPageTitle, isCategories, selectedCategory, loadCategories, deleteCategory, clearSelectedCategory }) => {
    const [isAdd, setIsAdd] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [isDetails, setIsDetails] = useState(false);

    useEffect(() => {
        loadCategories();
    }, []);

    const handleAddNew = () => {
        clearSelectedCategory();
        setIsAdd(true);
        setIsEdit(false);
        setIsDelete(false);
        setIsDetails(false);
    };

    const handleDelete = () => {
        setIsAdd(false);
        setIsEdit(false);
        setIsDelete(true);
        setIsDetails(false);
        deleteCategory(selectedCategory);
    };

    const handleEditCategory = () => {
        setIsAdd(false);
        setIsEdit(true);
        setIsDelete(false);
        setIsDetails(false);
    };

    const handleViewDetails = () => {
        setIsAdd(false);
        setIsEdit(false);
        setIsDelete(false);
        setIsDetails(true);
    };

    const handleTitleClick = () => {
        reset();
        clearSelectedCategory();
    };

    const clearAfterAdd = () => {
        reset();
    };

    const clearAfterEdit = () => {
        reset();
    };

    const reset = () => {
        setIsAdd(false);
        setIsEdit(false);
        setIsDelete(false);
        setIsDetails(false);
    };

    const renderCategoryRelatedView = () => {
        if (isAdd || isEdit) {
            return <CategoryForm addCB={clearAfterAdd} editCB={clearAfterEdit} />;
        } else if (isDetails) {
            return <CategoryDetails />;
        } else {
            return <CategoryList />;
        }
    };

    return (
        <div className='categories-container'>
            <Toolbar
                title={categoryPageTitle}
                isCategories={isCategories}
                selectedCategory={selectedCategory}
                titleCB={handleTitleClick}
                newCB={handleAddNew}
                deleteCB={handleDelete}
                editCB={handleEditCategory}
                viewCB={handleViewDetails}
            />
            {renderCategoryRelatedView()}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    categoryPageTitle: selectCategoryTitle,
    isCategories: selectIsCategories,
    selectedCategory: selectSelectedCategory
});

const mapDispatchToProps = dispatch => ({
    loadCategories: () => dispatch(loadCategories()),
    deleteCategory: selectedCategory => dispatch(deleteCategory(selectedCategory)),
    clearSelectedCategory: () => dispatch(clearSelectedCategory())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
