import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setSelectedCategory } from '../.././../redux/category/category.actions';
import { selectSelectedCategory } from '../../../redux/category/category.selectors';

// Styles
import './category-item.styles.scss';

const CategoryItem = ({ category, selectedCategory, setSelectedCategory }) => {
    const handleSelect = e => {
        setSelectedCategory(e.target.dataset.category);
    };

    return (
        <div className={`category ${selectedCategory === category ? 'selected' : ''}`} data-category={category} onClick={handleSelect}>
            {category}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    selectedCategory: selectSelectedCategory
});

const mapDispatchToProps = dispatch => ({
    setSelectedCategory: categorySelected => dispatch(setSelectedCategory(categorySelected))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
