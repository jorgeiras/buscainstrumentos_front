

function PaginationComp ({ total, current, onChangePage }) {
    const numPagesToShow = 3; // Number of pages to show around the current page
  
    const getPaginationGroup = () => {
      let start = Math.max(current - numPagesToShow, 1);
      let end = Math.min(current + numPagesToShow, total);
  
      // Adjust the range to contain exact number of elements
      const delta = numPagesToShow - (end - start);
      if (delta > 0) {
        start = Math.max(start - delta, 1);
      }
  
      return Array.from({ length: (end - start + 1) }, (v, k) => start + k);
    };
  
    const paginationGroup = getPaginationGroup();
  
    return (
      <div className="flex items-center justify-center space-x-2">
        {current > 1 && (
          <button onClick={() => onChangePage(1)} className="px-3 text-gray-700 font-medium  py-2 bg-yellow-300 hover:bg-yellow-400  rounded disabled:bg-blue-300 mr-2">
            « First
          </button>
        )}
        {current > 1 && (
          <button onClick={() => onChangePage(current - 1)} className="px-3 text-gray-700 font-medium  py-2 bg-yellow-300 hover:bg-yellow-400  rounded disabled:bg-blue-300 mr-2">
            ‹ Prev
          </button>
        )}
        {paginationGroup.map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded ${page === current ? 'bg-yellow-500 text-gray-700' : 'bg-gray-200 hover:bg-yellow-400'}`}
            onClick={() => onChangePage(page)}
          >
            {page}
          </button>
        ))}
        {current < total && (
          <button onClick={() => onChangePage(current + 1)} className="px-3 text-gray-700 font-medium  py-2 bg-yellow-300 hover:bg-yellow-400 rounded disabled:bg-blue-300 mr-2">
            Next ›
          </button>
        )}
        {current < total && (
          <button onClick={() => onChangePage(total)} className="px-3 text-gray-700  font-medium  py-2 bg-yellow-300 hover:bg-yellow-400 rounded disabled:bg-blue-300 mr-2">
            Last »
          </button>
        )}
      </div>
    );
  };
  
  export default PaginationComp