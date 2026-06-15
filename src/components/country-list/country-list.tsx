import { useMemo, memo, useState, useRef, useEffect, useCallback } from 'react';
import type { Country } from '../../types';
import { CountryCard } from '../country-card/country-card';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';

import styles from './country-list.module.css';

type CountryListProps = {
  countries: Country[];
  searchQuery: string;
  selectedColumns: string[];
  selectedRegion: string;
  selectedYear: number;
  sortField: 'name' | 'population';
  sortOrder: 'asc' | 'desc';
  onYearChange: (year: number) => void;
};

const BUFFER_ITEMS = 3;
const DEFAULT_ITEM_HEIGHT = 296;
const DEFAULT_CONTAINER_HEIGHT = 600;
const PADDING_BOTTOM = 20;

export const CountryList = memo(
  ({
    countries,
    searchQuery,
    selectedColumns,
    selectedRegion,
    selectedYear,
    sortField,
    sortOrder,
  }: CountryListProps) => {

    const [scrollTop, setScrollTop] = useState(0);

    const [containerHeight, setContainerHeight] = useState(DEFAULT_CONTAINER_HEIGHT);

    const [itemHeight, setItemHeight] = useState(DEFAULT_ITEM_HEIGHT);

    const countryYearDataMaps = useMemo(
      () => Object.fromEntries(
          countries.map((c) => [c.id, createYearDataMap(c.data)])
        ),
      [countries]
    );

    const filteredCountries = useMemo(() => {
      return countries
        .filter((c) => {
          const matchesSearch = c.id.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesRegion = !selectedRegion || c.data.some((d) => d.region === selectedRegion);
          return matchesSearch && matchesRegion;
        })
        .sort((a, b) => {
          if (sortField === 'name') {
            return sortOrder === 'asc' ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
          } else {
            const popA = getPopulationForYear(countryYearDataMaps[a.id], selectedYear) || 0;
            const popB = getPopulationForYear(countryYearDataMaps[b.id], selectedYear) || 0;
            return sortOrder === 'asc' ? popA - popB : popB - popA;
          }
        });
    }, [countries, searchQuery, selectedRegion, selectedYear, sortField, sortOrder, countryYearDataMaps]);

    const containerRef = useRef<HTMLDivElement>(null);
    const [prevFilterKey, setPrevFilterKey] = useState('');

    const filterKey = `${searchQuery}-${selectedRegion}-${sortField}-${sortOrder}`;
    if (filterKey !== prevFilterKey) {
      setPrevFilterKey(filterKey);
      if (scrollTop !== 0) {
        setScrollTop(0);
      }
    }

    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
    }, [searchQuery, selectedRegion, sortField, sortOrder]);

    const updateContainerHeight = useCallback(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const availableHeight = rect.top + itemHeight > window.innerHeight
          ? window.innerHeight
          : window.innerHeight - rect.top - PADDING_BOTTOM;
        if (availableHeight > 0) {
          setContainerHeight(availableHeight);
        }
      }
    }, [itemHeight]);

    useEffect(() => {
      updateContainerHeight();

      window.addEventListener('resize', updateContainerHeight);
      return () => window.removeEventListener('resize', updateContainerHeight);
    }, [updateContainerHeight]);

    const measureItemRef = useCallback((node: HTMLDivElement | null) => {
      if (node) {
        const height = node.getBoundingClientRect().height;
        if (height > 0 && height !== itemHeight) {
          setItemHeight(height);
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const totalItems = filteredCountries.length;
    const totalHeight = totalItems * itemHeight;

    let startIndex = Math.floor(scrollTop / itemHeight) - BUFFER_ITEMS;
    startIndex = Math.max(0, startIndex);

    let endIndex = Math.floor((scrollTop + containerHeight) / itemHeight) + BUFFER_ITEMS;
    endIndex = Math.min(totalItems, endIndex);

    const visibleCountries = useMemo(() => {
      return filteredCountries.slice(startIndex, endIndex);
    }, [filteredCountries, startIndex, endIndex]);

    const offsetY = startIndex * itemHeight;

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
      setScrollTop(event.currentTarget.scrollTop);
    };

    if (totalItems === 0) {
      return <div className={styles.noResults}>No countries found</div>;
    }

    return (
      <div
        ref={containerRef}
        className={styles.scrollContainer}
        style={{height: containerHeight}}
        onScroll={handleScroll}
      >
        <div style={{ height: totalHeight, width: '100%' }}>

          <div style={{ transform: `translateY(${offsetY}px)`, width: '100%' }}>
            {visibleCountries.map((country, index) => {
              const isFirstVisible = index === 0;

              return (
                <div
                  key={country.id}
                  ref={isFirstVisible ? measureItemRef : undefined}
                >
                  <CountryCard
                    country={country}
                    selectedYear={selectedYear}
                    selectedColumns={selectedColumns}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    );
  }
);
