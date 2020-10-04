import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

// Styles
import './footer-nav.styles.scss';

const FooterNav = ({ location }) => {
    return (
        <div className='navbar'>
            <nav className='navbar__center'>
                <ul className='navbar-links'>
                    <li className='navbar-links__item'>
                        <Link
                            className={location.pathname.indexOf('/categories') >= 0 ? 'navbar-links__item-link active' : 'navbar-links__item-link'}
                            to='/categories'
                        >
                            Categories
                        </Link>
                    </li>
                    <li className='navbar-links__item'>
                        <Link
                            className={location.pathname.indexOf('/locations') >= 0 ? 'navbar-links__item-link active' : 'navbar-links__item-link'}
                            to='/locations'
                        >
                            Locations
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default withRouter(FooterNav);
