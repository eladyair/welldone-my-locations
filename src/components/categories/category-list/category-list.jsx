import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectcategories } from '../../../redux/category/category.selectors';

// Styles
import './category-list.styles.scss';

// Components
import CategoryItem from '../category-item/category-item';

const CategoryList = ({ categories }) => {
    return (
        <div className='categories'>
            {categories.map((category, index) => (
                <CategoryItem key={index} category={category} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    categories: selectcategories
});

export default connect(mapStateToProps)(CategoryList);
