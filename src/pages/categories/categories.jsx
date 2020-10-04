import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategoryTitle, selectIsCategories, selectSelectedCategory } from '../../redux/category/category.selectors';
import { clearSelectedCategory, deleteCategory } from '../../redux/category/category.actions';

// Styles
import './categories.styles.scss';

// Components
import Toolbar from '../../components/shared/toolbar/toolbar';
import Categories from '../../components/categories/categories';
import CategoryForm from '../../components/categories/category-form/category-form';
import CategoryDetails from '../../components/categories/category-details/category-details';

const CategoriesPage = ({ match, categoryPageTitle, isCategories, selectedCategory, deleteCategory, clearSelectedCategory }) => {
    useEffect(() => {
        clearSelectedCategory();
    }, []);

    return (
        <div className='categories-page'>
            <Toolbar
                title={categoryPageTitle}
                isCollection={isCategories}
                selected={selectedCategory}
                deleteCB={deleteCategory}
                clearCB={clearSelectedCategory}
            />
            <Route exact path={`${match.path}`} component={Categories} />
            <Route exact path={`${match.path}/new`} component={CategoryForm} />
            <Route exact path={`${match.path}/edit`} component={CategoryForm} />
            <Route exact path={`${match.path}/view`} component={CategoryDetails} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    categoryPageTitle: selectCategoryTitle,
    isCategories: selectIsCategories,
    selectedCategory: selectSelectedCategory
});

const mapDispatchToState = dispatch => ({
    deleteCategory: selectedCategory => dispatch(deleteCategory(selectedCategory)),
    clearSelectedCategory: () => dispatch(clearSelectedCategory())
});

export default connect(mapStateToProps, mapDispatchToState)(CategoriesPage);
