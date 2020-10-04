import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Recoil
import { useRecoilValue, useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import {
    locationCategoryState,
    locationName,
    locationAddress,
    locationLatitude,
    locationLongitude,
    locations,
    selectedLocation
} from '../../../recoil/atoms';

// Styles
import './location-form.styles.scss';

// Components
import Dropdown from '../../shared/dropdown/dropdown';

// Location has the following props: Name, Address, Coordinates, Category (All Required)

const LocationForm = ({ history }) => {
    const [categories, setCategories] = useState([]);

    // Recoil
    const location = useRecoilValue(selectedLocation);
    const category = useRecoilValue(locationCategoryState);
    const [name, setName] = useRecoilState(locationName);
    const [address, setAddress] = useRecoilState(locationAddress);
    const [lat, setLat] = useRecoilState(locationLatitude);
    const [lng, setLng] = useRecoilState(locationLongitude);
    const setLocations = useSetRecoilState(locations);
    const setLocationCategory = useSetRecoilState(locationCategoryState);
    const resetCategory = useResetRecoilState(locationCategoryState);

    useEffect(() => {
        setCategories(JSON.parse(localStorage.getItem('categories')));

        if (location) {
            loadValues();
        }
    }, []);

    const loadValues = () => {
        const locationDetails = JSON.parse(localStorage.getItem('locations')).find(l => {
            return l.address === location;
        });

        setLocationCategory(locationDetails.category);
        setName(locationDetails.name);
        setAddress(locationDetails.address);
        setLat(locationDetails.lat);
        setLng(locationDetails.lng);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'address') {
            setAddress(value);
        } else if (name === 'lat') {
            setLat(value);
        } else if (name === 'lng') {
            setLng(value);
        }
    };

    const resetForm = () => {
        setName('');
        setAddress('');
        setLat('');
        setLng('');
        resetCategory();
    };

    const handleClick = () => {
        let locations = JSON.parse(localStorage.getItem('locations')) ? JSON.parse(localStorage.getItem('locations')) : [];

        if (location) {
            locations = locations.map(l => {
                return l.address === location ? { ...l, ...{ name, address, lat, lng, category } } : l;
            });
        } else {
            locations.push({ name, address, lat, lng, category });
        }

        localStorage.setItem('locations', JSON.stringify(locations));

        setLocations(locations);

        history.push('/locations');

        resetForm();
    };

    return (
        <div className='location-form'>
            <Dropdown title='Select Category' items={categories} selected={category} />
            {category && (
                <div className='form'>
                    <input type='text' className='form__input' placeholder='Name' name='name' onChange={handleChange} value={name} />
                    <input type='text' className='form__input' placeholder='Address' name='address' onChange={handleChange} value={address} />
                    <input type='text' className='form__input' placeholder='Latitude Coordinate' name='lat' onChange={handleChange} value={lat} />
                    <input type='text' className='form__input' placeholder='Longitude Coordinate' name='lng' onChange={handleChange} value={lng} />
                    {!location ? (
                        <button className='btn' onClick={handleClick}>
                            Save
                        </button>
                    ) : (
                        <button className='btn' onClick={handleClick}>
                            Update
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default withRouter(LocationForm);
