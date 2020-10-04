import React from 'react';
import { Route } from 'react-router-dom';

// Recoil
import { useResetRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
    locationCategoryState,
    locationName,
    locationAddress,
    locationLatitude,
    locationLongitude,
    selectedLocation,
    locations
} from '../../recoil/atoms';

// Styles
import './locations.styles.scss';

// Components
import Toolbar from '../../components/shared/toolbar/toolbar';
import Locations from '../../components/locations/locations';
import LocationForm from '../../components/locations/location-form/location-form';
import LocationDetails from '../../components/locations/location-details/location-details';

const LocationsPage = ({ match }) => {
    const location = useRecoilValue(selectedLocation);

    const isLocations = useRecoilValue(locations).length > 0 ? true : false;

    const handleClearLocationCategory = useResetRecoilState(locationCategoryState);
    const handleClearLocationName = useResetRecoilState(locationName);
    const handleClearLocationAddress = useResetRecoilState(locationAddress);
    const handleClearLocationLat = useResetRecoilState(locationLatitude);
    const handleClearLocationLng = useResetRecoilState(locationLongitude);
    const handleClearSelectedLocation = useResetRecoilState(selectedLocation);
    const setLocations = useSetRecoilState(locations);

    const handleClear = () => {
        handleClearLocationCategory();
        handleClearLocationName();
        handleClearLocationAddress();
        handleClearLocationLat();
        handleClearLocationLng();
        handleClearSelectedLocation();
    };

    const handleDeleteLocation = address => {
        let locationCollection = JSON.parse(localStorage.getItem('locations')).filter(l => l.address !== address);

        localStorage.setItem('locations', JSON.stringify(locationCollection));

        setLocations(locationCollection);
    };

    return (
        <div className='locations-page'>
            <Toolbar title='Locations' isCollection={isLocations} selected={location} clearCB={handleClear} deleteCB={handleDeleteLocation} />
            <Route exact path={`${match.path}`} component={Locations} />
            <Route exact path={`${match.path}/new`} component={LocationForm} />
            <Route exact path={`${match.path}/edit`} component={LocationForm} />
            <Route exact path={`${match.path}/view`} component={LocationDetails} />
        </div>
    );
};

export default LocationsPage;
