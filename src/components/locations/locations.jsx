import React from 'react';

// Styles
import './locations.styles.scss';

// Components
import LocationList from './location-list/location-list';

const Locations = () => {
    return (
        <div className='categories-container'>
            <LocationList />
        </div>
    );
};

export default Locations;
