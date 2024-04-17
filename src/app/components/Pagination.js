import Link from "next/link";
export default function Pagination({ currentPage, totalPages ,slug}) {
    const displayPageNumbers = 10; // Number of page numbers to display
    const pageNumbers = [];
  
    // Calculate the start and end page numbers to display
    let startPage = Math.max(1, currentPage - Math.floor(displayPageNumbers / 2));
    let endPage = Math.min(totalPages, startPage + displayPageNumbers - 1);
  
    // Adjust startPage and endPage if they don't have enough pages to display
    if (totalPages <= displayPageNumbers) {
      startPage = 1;
      endPage = totalPages;
    } else if (endPage === totalPages) {
      startPage = Math.max(1, totalPages - displayPageNumbers + 1);
    }
  
    // Generate the page numbers to display
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i}>
          <Link
            href={`/${slug}/${i}`}
            className={`flex items-center justify-center px-4 h-10 leading-tight ${
              i == currentPage
                ? 'text-blue-600 bg-blue-50 border border-gray-300'
                : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            }`}
          >
            {i}
          </Link>
        </li>
      );
    }
  
    return (
      <nav aria-label="Page navigation" className="flex items-center justify-between">
        <ul className="inline-flex -space-x-px text-base h-10">
         {Number(currentPage) <= 1 ? "" :<li>
            <Link
              href={`/${slug}/${Number(currentPage)-1}`}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              
              disabled={currentPage === 1}
            >
              Previous
            </Link>
          </li>} 
          {pageNumbers}
          {Number(currentPage) >= totalPages ? "" :<li>
            <Link
             href={ `/${slug}/${Number(currentPage)+1}`}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
           
              disabled={currentPage === totalPages}
            >
              Next
            </Link>
          </li>}
        </ul>
      </nav>
    );
  }
  