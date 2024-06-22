import React, { useState } from 'react';

function MenuBar({ applyFilters }){

    const [selectedCategory, setSelectedCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };

    const handleFilters = () => {
        applyFilters({
            category: selectedCategory,
            priceRange: {
                min: minPrice || 0,
                max: maxPrice || Infinity,
            },
            filtersApplied: true 
        });
    };

    return(
        <div className="flex flex-col p-8 w-60 shadow-xl">
            <h3 className="text-lg font-semibold mb-2">Categorias</h3>
            <form>
                <div className="mb-2">
                <input
                    type="radio"
                    id="guitarras"
                    name="category"
                    value="Guitarras"
                    checked={selectedCategory === 'Guitarras'}
                    onChange={handleCategoryChange}
                />
                <label htmlFor="guitarras" className="ml-2">Guitarras</label>
                </div>
                <div className="mb-2">
                <input
                    type="radio"
                    id="bajos"
                    name="category"
                    value="Bajos"
                    checked={selectedCategory === 'Bajos'}
                    onChange={handleCategoryChange}
                />
                <label htmlFor="bajos" className="ml-2">Bajos</label>
                </div>
                <div className="mb-2">
                <input
                    type="radio"
                    id="teclados"
                    name="category"
                    value="Teclados"
                    checked={selectedCategory === 'Teclados'}
                    onChange={handleCategoryChange}
                />
                <label htmlFor="teclados" className="ml-2">Teclados</label>
                </div>
                <div className="mb-2">
                <input
                    type="radio"
                    id="sintetizadores"
                    name="category"
                    value="Sintetizadores"
                    checked={selectedCategory === 'Sintetizadores'}
                    onChange={handleCategoryChange}
                />
                <label htmlFor="sintetizadores" className="ml-2">Sintetizadores</label>
                </div>
                <div className="mb-2">
                <input
                    type="radio"
                    id="baterias"
                    name="category"
                    value="Baterias"
                    checked={selectedCategory === 'Baterias'}
                    onChange={handleCategoryChange}
                />
                <label htmlFor="baterias" className="ml-2">Baterias</label>
                </div>

                <div className="py-8 mt-4">
                <h4 className="text-md font-semibold mb-2">Price Range</h4>
                <div className="mb-2">
                    <label htmlFor="minPrice" className="block">Min Price</label>
                    <input
                    type="number"
                    id="minPrice"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full p-1 border rounded"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="maxPrice" className="block">Max Price</label>
                    <input
                    type="number"
                    id="maxPrice"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full p-1 border rounded"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFilters} className=" px-3 py-1 my-8 bg-yellow-300 hover:bg-yellow-400 text-gray-700  font-medium  rounded">Aplicar</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default MenuBar