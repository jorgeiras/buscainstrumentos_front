import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import PaginationComp from "./PaginationComp";

function InstrumentsListComp({ searchVal, filters }) {
    const [instruments, setInstruments] = useState([]);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const { page } = useParams();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(page ? parseInt(page, 10) : 1);
    const [previousSearchVal, setPreviousSearchVal] = useState('');
    const [currentSearchVal, setCurrentSearchVal] = useState(searchVal);
    const location = useLocation();

    useEffect(() => {
        // Determine if the search value has changed
        let newPage = currentPage;
        let newSearchVal = currentSearchVal;

        if (searchVal !== previousSearchVal || filters.filtersApplied) {
            newPage = 1;
            newSearchVal = searchVal;
            setPreviousSearchVal(searchVal);
            filters.filtersApplied = false;
        } else if (location.search) {
            // If there is a query in the URL, update the search value accordingly
            const searchParams = new URLSearchParams(location.search);
            const name = searchParams.get('name');
            if (name) {
                newSearchVal = name;
            }
        }

        setCurrentPage(newPage);
        setCurrentSearchVal(newSearchVal);

        let endpoint = newSearchVal
            ? `https://buscainstrumentosback.duckdns.org:443/searchInstrument?name=${newSearchVal}&page=${newPage}`
            : `https://buscainstrumentosback.duckdns.org:443/listInstrument?page=${newPage}`;

        console.log("endpoint: " + filters.category);
        const params = [];
        if (filters.category) {
            params.push(`category=${filters.category}`);
        }
        if (filters.priceRange) {
            if (filters.priceRange.min !== '') {
                params.push(`minPrice=${filters.priceRange.min}`);
            }
            if (filters.priceRange.max !== '') {
                params.push(`maxPrice=${filters.priceRange.max}`);
            }
        }

        if (params.length > 0) {
            endpoint += `&${params.join('&')}`;
        }

        console.log("endpoint: " + endpoint);
        axios.get(endpoint).then(response => {
            console.log(response);
            setTotalPages(response.data.total_pages);
            setInstruments(response.data.results);
        }).catch(error => {
            console.error('Error fetching products:', error);
            console.error('endpoint: ', endpoint);
            setError(error);
        });

        // Update the URL
        navigate(`/items/page/${newPage}${newSearchVal ? `?name=${newSearchVal}` : ''}`, { replace: true });

    }, [searchVal, location.search, navigate, filters]);

    const changePage = (newPage) => {
        setCurrentPage(newPage);
        navigate(`/items/page/${newPage}${currentSearchVal ? `?name=${currentSearchVal}` : ''}${filters.category ? `&category=${filters.category}` : ''}${filters.priceRange.min !== '' ? `&minPrice=${filters.priceRange.min}` : ''}${filters.priceRange.max !== '' && filters.priceRange.max !== Infinity ? `&maxPrice=${filters.priceRange.max}` : ''}`);

    };

    if (error) {
        return <div>Error loading products!</div>; // Simple error state
    }

    return (
        <div className="flex flex-col mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-12">
                {instruments.map((instrument) => (
                    <div key={instrument.id} onClick={() => window.open(instrument.link, '_blank')} className="bg-white shadow rounded-lg max-w-48 p-4 flex flex-col justify-between transition duration-300 hover:scale-105">
                        <img src={instrument.image} alt={instrument.name} className="w-full rounded-lg object-cover max-h-32 rounded-t-lg justify-center" />
                        <div className="mt-2">
                            <h3 className="text-sm font-semibold">{instrument.name}</h3>
                            <p className="text-gray-600">{instrument.website}</p>
                            <span className="text-sm font-bold">{instrument.price}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center p-4">
                <PaginationComp total={totalPages} current={currentPage} onChangePage={changePage}></PaginationComp>
            </div>
        </div>
    );
}

export default InstrumentsListComp;
