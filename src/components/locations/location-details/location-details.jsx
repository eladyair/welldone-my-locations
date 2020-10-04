import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Recoil
import { useRecoilValue } from 'recoil';
import { selectedLocation } from '../../../recoil/atoms';

// Styles
import './location-details.styles.scss';

const LocationDetails = () => {
    const location = useRecoilValue(selectedLocation);

    let locationDetails = JSON.parse(localStorage.getItem('locations')).find(l => l.address === location);

    if (location === '') {
        return <Redirect to='/locations' />;
    } else {
        return (
            <div className='location-view'>
                <h2 className='location-view__title'>Location Details</h2>
                <div className='view-detail'>
                    <span className='view-detail__lbl'>Category: </span>
                    <span className='view-detail__val'>{locationDetails.category}</span>
                </div>
                <div className='view-detail'>
                    <span className='view-detail__lbl'>Name: </span>
                    <span className='view-detail__val'>{locationDetails.name}</span>
                </div>
                <div className='view-detail'>
                    <span className='view-detail__lbl'>Address: </span>
                    <span className='view-detail__val'>{locationDetails.address}</span>
                </div>
                <div className='view-detail'>
                    <span className='view-detail__lbl'>Latitude: </span>
                    <span className='view-detail__val'>{locationDetails.lat}</span>
                </div>
                <div className='view-detail'>
                    <span className='view-detail__lbl'>Longitude: </span>
                    <span className='view-detail__val'>{locationDetails.lng}</span>
                </div>
                <div className='map'></div>
            </div>
        );
    }
};

export default LocationDetails;
