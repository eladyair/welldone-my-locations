import React from 'react';

// Styles
import './location-by-group.styles.scss';

const LocationByGroup = ({ items }) => {
    return (
        <div className='locations-group'>
            {Object.keys(items).map((objKey, index) => (
                <div key={index} className='group'>
                    <h2 className='group__title'>{objKey}</h2>
                    <ul className='group__props'>
                        {items[objKey].map((prop, index) => (
                            <li key={index} className='prop'>
                                <div className='prop-details'>
                                    <span className='prop-details__lbl'>Name: </span>
                                    <span className='prop-details__val'>{prop.name}</span>
                                </div>
                                <div className='prop-details'>
                                    <span className='prop-details__lbl'>Address: </span>
                                    <span className='prop-details__val'>{prop.address}</span>
                                </div>
                                <div className='prop-details'>
                                    <span className='prop-details__lbl'>Latitude: </span>
                                    <span className='prop-details__val'>{prop.lat}</span>
                                </div>
                                <div className='prop-details'>
                                    <span className='prop-details__lbl'>Longitude: </span>
                                    <span className='prop-details__val'>{prop.lng}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default LocationByGroup;
