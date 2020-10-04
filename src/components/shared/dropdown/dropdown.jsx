import React, { useState, useEffect } from 'react';

// Recoil
import { useRecoilState } from 'recoil';
import { locationCategoryState } from '../../../recoil/atoms';

// Styles
import './dropdown.styles.scss';

const Dropdown = ({ title, items = [], selected }) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useRecoilState(locationCategoryState);

    useEffect(() => {
        if (selected) {
            setSelection(selected);
        }
    }, []);

    const toggle = () => {
        setOpen(!open);
    };

    const handleClick = e => {
        setSelection(e.target.dataset.item);
        toggle();
    };

    return (
        <div className='dropdown-wrapper'>
            <div className='dropdown-header' onClick={toggle}>
                <div className='dropdown-header__title'>
                    <p className={`dropdown-header__title--bold ${selection ? 'selected' : ''}`}>{!selection ? title : selection}</p>
                </div>
                <div className='dropdown-header__action'>
                    <p>{open ? 'Close' : 'Open'}</p>
                </div>
            </div>
            {open && (
                <ul className='dropdown-list'>
                    {items.length > 0 &&
                        items.map((item, index) => (
                            <li key={index} className='dropdown-list__item'>
                                <div className={`list-item ${selection === item ? 'selected' : ''}`} data-item={item} onClick={handleClick}>
                                    {item}
                                </div>
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
