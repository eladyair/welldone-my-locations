import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelectedCategory } from '../../../redux/category/category.selectors';

// Styles
import './category-details.styles.scss';

const CategoryDetails = ({ selectedCategory }) => {
    return (
        <div className='details'>
            <h3 className='details__title'>{selectedCategory}</h3>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    selectedCategory: selectSelectedCategory
});

export default connect(mapStateToProps)(CategoryDetails);
