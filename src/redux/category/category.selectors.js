import { createSelector } from 'reselect';

const selectCategory = state => state.category;

export const selectCategoryTitle = createSelector([selectCategory], category => category.title);

export const selectSelectedCategory = createSelector([selectCategory], category => category.selectedCategory);

export const selectIsCategories = createSelector([selectCategory], category => {
    return category.categories.length > 0 ? true : false;
});

export const selectcategories = createSelector([selectCategory], category => category.categories);
