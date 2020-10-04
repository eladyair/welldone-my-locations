import { atom } from 'recoil';

export const locationCategoryState = atom({
    key: 'locationCategory',
    default: ''
});

export const locationName = atom({
    key: 'locationName',
    default: ''
});

export const locationAddress = atom({
    key: 'locationAddress',
    default: ''
});

export const locationLatitude = atom({
    key: 'locationLatitude',
    default: ''
});

export const locationLongitude = atom({
    key: 'locationLongitude',
    default: ''
});

export const locations = atom({
    key: 'locations',
    default: JSON.parse(localStorage.getItem('locations')) ? JSON.parse(localStorage.getItem('locations')) : []
});

export const selectedLocation = atom({
    key: 'selectedLocation',
    default: ''
});
