import React, { useState, useEffect, useMemo } from 'react';

// Recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import { locations, sortableLocations, filteredLocations, groupedLocations } from '../../../recoil/atoms';

// Styles
import './location-list.styles.scss';

// Custom Hooks
import { useFilteredData, useSortableData, useGroupingData } from '../../../custom-hooks/custom-hooks';

// Components
import LocationItem from '../location-item/location-item';
import LocationByGroup from '../location-by-group/location-by-group';

const LocationList = () => {
    let locationList = useRecoilValue(locations);
    let { items, getSort } = useSortableData(locationList);
    let { filteredItems, filter, getFilter } = useFilteredData(locationList);
    let { groupedItems, getGroup } = useGroupingData(locationList);

    const handleChange = e => {
        const { value } = e.target;
        const filterBy = e.target.dataset.filter;
        getFilter(value, filterBy);
    };

    const handleSort = e => {
        const sortBy = e.target.dataset.sortby;

        getSort(sortBy);
    };

    const handleGrouping = e => {
        const groupBy = e.target.dataset.group;

        getGroup(groupBy);
    };

    const handleReset = () => {
        getGroup();
        getSort();
        getFilter('', null);
    };

    const renderLocationData = () => {
        if (groupedItems) {
            return <LocationByGroup items={groupedItems} />;
        } else if (filteredItems) {
            return filteredItems.map((location, index) => <LocationItem key={index} location={location} />);
        } else {
            return items.map((location, index) => <LocationItem key={index} location={location} />);
        }
    };

    return (
        <div className='locations'>
            <div className='list-actions'>
                <div className='action filter'>
                    <span className='action__lbl'>Filter: </span>
                    <input
                        type='text'
                        className='action__txt'
                        placeholder='By category'
                        name='filter'
                        data-filter='category'
                        onChange={handleChange}
                        value={filter}
                    />
                </div>
                <div className='action sorting'>
                    <span className='action__lbl'>Sorting: </span>
                    <div className='action-options'>
                        <span className='action-lbl' data-sortby='name' onClick={handleSort}>
                            Name
                        </span>
                        <span className='action-seperator'>|</span>
                        <span className='action-lbl' data-sortby='address' onClick={handleSort}>
                            Address
                        </span>
                        <span className='action-seperator'>|</span>
                        <span className='action-lbl' data-sortby='category' onClick={handleSort}>
                            Category
                        </span>
                    </div>
                </div>
                <div className='action grouping'>
                    <span className='action__lbl'>Group By: </span>
                    <div className='action-options'>
                        <span className='action-lbl' data-group='category' onClick={handleGrouping}>
                            Category
                        </span>
                    </div>
                </div>
                <div className='action grouping'>
                    <div className='action-options'>
                        <span className='action-lbl reset' data-group='category' onClick={handleReset}>
                            Reset
                        </span>
                    </div>
                </div>
            </div>
            {!groupedItems && (
                <div className='headings'>
                    <div className='header'>
                        Name
                        <span className='header__border'></span>
                    </div>
                    <div className='header'>
                        Address
                        <span className='header__border'></span>
                    </div>
                    <div className='header'>
                        Latitude
                        <span className='header__border'></span>
                    </div>
                    <div className='header'>
                        Longitude
                        <span className='header__border'></span>
                    </div>
                    <div className='header'>
                        Category
                        <span className='header__border'></span>
                    </div>
                </div>
            )}
            {renderLocationData()}
        </div>
    );
};

export default LocationList;
