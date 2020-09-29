import React, { Fragment } from 'react';

// Styles
import './toolbar.styles.scss';

const Toolbar = ({ title, isCategories, selectedCategory, titleCB, newCB, deleteCB, editCB, viewCB }) => {
    return (
        <header className='toolbar'>
            <div className='toolbar__gutters'>
                <h6 className='toolbar__title' onClick={titleCB}>
                    {title}
                </h6>
                <div className='toolbar__cta'>
                    {isCategories && selectedCategory ? (
                        <Fragment>
                            <button type='button' className='btn' onClick={editCB}>
                                <span>edit</span>
                            </button>
                            <button type='button' className='btn' onClick={viewCB}>
                                <span>view details</span>
                            </button>
                            <button type='button' className='btn' onClick={deleteCB}>
                                <span>delete</span>
                            </button>
                        </Fragment>
                    ) : (
                        <button type='button' className='btn' onClick={newCB}>
                            <span className='btn__label'>New</span>
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Toolbar;
