import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

// Styles
import './toolbar.styles.scss';

const Toolbar = ({ match, history, title, isCollection, selected, deleteCB, clearCB }) => {
    const handleDelete = () => {
        deleteCB(selected);
        history.push(match.path);
    };

    const handleClear = () => {
        clearCB();
    };

    return (
        <header className='toolbar'>
            <div className='toolbar__gutters'>
                <Link to={`${match.path}`} className='toolbar__title-link' onClick={handleClear}>
                    <h6 className='toolbar__title'>{title}</h6>
                </Link>
                <div className='toolbar__cta'>
                    {isCollection && selected ? (
                        <Fragment>
                            <Link to={`${match.path}/edit`} className='btn btn-label'>
                                <span>edit</span>
                            </Link>
                            <Link to={`${match.path}/view`} className='btn btn-label'>
                                <span>view details</span>
                            </Link>
                            <button type='button' className='btn' onClick={handleDelete}>
                                <span>delete</span>
                            </button>
                        </Fragment>
                    ) : (
                        <Link to={`${match.path}/new`} className='btn btn-label'>
                            <span>New</span>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default withRouter(Toolbar);
