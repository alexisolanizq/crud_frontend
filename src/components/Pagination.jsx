import ReactPaginate from "react-paginate";
import {FiChevronsLeft, FiChevronsRight} from 'react-icons/fi'
const Pagination = ({totalPages, onClick}) => {
    const prev = (<FiChevronsLeft />)
    const next = (<FiChevronsRight />)
  return (
    <div className="w-full my-0 p-4 overflow-x-auto">
        <ReactPaginate 
            previousLabel={prev}
            nextLabel={next}
            pageCount={totalPages}
            onPageChange={onClick}
            containerClassName="flex items-center justify-center my-3"
            nextClassName="h-[40px] flex items-center justify-center px-3 py-2 text-gray-600 bg-white border-y border-x"
            previousClassName="h-[40px] flex items-center justify-center px-3 py-2 text-gray-600 bg-white border-y border-r border-l"
            pageClassName="h-[40px] px-3 py-2 text-gray-600 border-r border-y"
            breakClassName=" h-[40px] px-3 py-2 text-gray-600 border-r border-y"
            activeClassName="bg-indigo-700 text-white font-semibold"
        />
    </div>
  );
};

export default Pagination;
