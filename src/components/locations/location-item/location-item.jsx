import React from 'react';

// Recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedLocation } from '../../../recoil/atoms';

// Styles
import './location-item.styles.scss';

const LocationItem = ({ location }) => {
    const address = useRecoilValue(selectedLocation);
    const setAddress = useSetRecoilState(selectedLocation);

    const handleSelect = e => {
        let locationParent = e.target;
        while (locationParent.id !== 'location') {
            locationParent = locationParent.parentNode;
        }
        setAddress(locationParent.dataset.location);
    };

    return (
        <div
            id='location'
            className={`location ${location.address === address ? 'selected' : ''}`}
            data-location={location.address}
            onClick={handleSelect}
        >
            <div className='location-data'>
                <span className='data'>{location.name}</span>
            </div>
            <div className='location-data'>
                <span className='data'>{location.address}</span>
            </div>
            <div className='location-data'>
                <span className='data'>{location.lat}</span>
            </div>
            <div className='location-data'>
                <span className='data'>{location.lng}</span>
            </div>
            <div className='location-data'>
                <span className='data'>{location.category}</span>
            </div>
        </div>
    );
};

export default LocationItem;
