import React, { useState, useEffect, useMemo } from 'react';

export function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set debouncedValue to value (passed in) after the specified delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup
        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
}

export const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);
    const sortedItems = useMemo(() => {
        let sortableItems = [...items];

        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.sortBy] < b[sortConfig.sortBy]) {
                    return sortConfig.order === 'asc' ? -1 : 1;
                }

                if (a[sortConfig.sortBy] > b[sortConfig.sortBy]) {
                    return sortConfig.order === 'asc' ? 1 : -1;
                }

                return 0;
            });
        }

        return sortableItems;
    }, [items, sortConfig]);

    const getSort = sortBy => {
        let order = 'asc';
        if (sortConfig && sortConfig.sortBy === sortBy && sortConfig.order === 'asc') {
            order = 'desc';
        }

        setSortConfig({ sortBy, order });
    };

    return { items: sortedItems, getSort };
};

export const useFilteredData = items => {
    const [filterConfig, setFilterConfig] = useState({ filter: '', key: null });
    const [filteredItems, setFilteredItems] = useState(null);

    // Getting the final search term (when the user finish typing)
    const debouncedFilterTerm = useDebounce(filterConfig.filter, 500);

    useEffect(() => {
        if (debouncedFilterTerm) {
            setFilteredItems(items.filter(item => item[filterConfig.key].toLowerCase().indexOf(debouncedFilterTerm) >= 0));
        } else {
            setFilteredItems(null);
        }
    }, [debouncedFilterTerm]);

    const getFilter = (filter, key) => {
        setFilterConfig({ filter, key });
    };

    return { filteredItems, filter: filterConfig.filter, getFilter };
};

export const useGroupingData = items => {
    const [groupConfig, setGroupConfig] = useState({ groupBy: null });

    const groupedItems = useMemo(() => {
        let groupableItems = null;

        if (groupConfig.groupBy) {
            groupableItems = items.reduce((acc, obj) => {
                let key = obj[groupConfig.groupBy];
                if (!acc[key]) {
                    acc[key] = [];
                }

                acc[key].push(obj);

                return acc;
            }, {});
        }

        return groupableItems;
    }, [items, groupConfig]);

    const getGroup = groupBy => {
        setGroupConfig({ groupBy });
    };

    return { groupedItems, getGroup };
};
