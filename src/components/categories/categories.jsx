import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { loadCategories } from '../../redux/category/category.actions';

// Styles
import './categories.styles.scss';

// Components
import CategoryList from './category-list/category-list';

const Categories = ({ loadCategories }) => {
    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <div className='categories-container'>
            <CategoryList />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    loadCategories: () => dispatch(loadCategories())
});

export default connect(null, mapDispatchToProps)(Categories);
