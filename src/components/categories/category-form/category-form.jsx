import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addNewCategory, updateCategory } from '../../../redux/category/category.actions';
import { selectCategoryTitle, selectIsCategories, selectSelectedCategory } from '../../../redux/category/category.selectors';

// Styles
import './category-form.styles.scss';

const CategoryForm = ({ history, addNewCategory, updateCategory, selectedCategory }) => {
    const [category, setCategory] = useState('');

    useEffect(() => {
        setCategory(selectedCategory);
    }, [selectedCategory]);

    const handleChange = e => {
        const { value } = e.target;
        setCategory(value);
    };

    const handleKeyUp = e => {
        if (e.keyCode === 13) {
            saveCategory(category);
        }
    };

    const handleClick = () => {
        saveCategory(category);
    };

    const saveCategory = category => {
        if (!selectedCategory) {
            addNewCategory(category);
        } else {
            updateCategory(category);
        }

        history.push('/categories');
        setCategory('');
    };

    return (
        <Fragment>
            <div className='category-form'>
                <input
                    type='text'
                    className='category-form__input'
                    placeholder='Add new category'
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    value={category}
                />
                {!selectedCategory ? (
                    <button className='category-form__btn' onClick={handleClick}>
                        Add
                    </button>
                ) : (
                    <button className='category-form__btn' onClick={handleClick}>
                        Update
                    </button>
                )}
            </div>
        </Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    categoryPageTitle: selectCategoryTitle,
    isCategories: selectIsCategories,
    selectedCategory: selectSelectedCategory
});

const mapDispatchToProps = dispatch => ({
    addNewCategory: category => dispatch(addNewCategory(category)),
    updateCategory: category => dispatch(updateCategory(category))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryForm));
