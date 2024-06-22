import MenuBar from './MenuBar'
import InstrumentsListComp from './InstrumentsListComp'
import HeaderComp from './HeaderComp'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function MainComp() {

  const [searchVal, setSearchVal] = useState('')
  const [filters, setFilters] = useState({ category: '', priceRange: { min: '', max: '' } });
  const navigate = useNavigate();


    const applyFilters = (newFilters) => {
        setFilters(newFilters);
        navigate(`/items/page/1${newFilters.category ? `?category=${newFilters.category}` : ''}${newFilters.priceRange.min ? `&minPrice=${newFilters.priceRange.min}` : ''}${newFilters.priceRange.max !== '' ? `&maxPrice=${newFilters.priceRange.max}` : ''}`);

    };

  console.log('searchVal en MainComp: ' + searchVal)

  return (
    <>
      <div className='flex flex-col h-screen'>
        <HeaderComp setSearchVal={setSearchVal}></HeaderComp>
        <div className='flex flex-1'>
          <MenuBar applyFilters={applyFilters}></MenuBar>
          <InstrumentsListComp searchVal={searchVal}  filters={filters}></InstrumentsListComp>
        </div>
      </div>
    </>
  )
}

export default MainComp