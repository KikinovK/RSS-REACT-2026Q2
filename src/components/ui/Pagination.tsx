import Button from "./Button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const BASE_BUTTON_STYLES = "border border-stardust/30 text-stardust hover:bg-stardust/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors";

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const getPageNumbers = () => {
    const maxButtons = 5
    const halfMax = Math.floor(maxButtons / 2)
    let startPage = Math.max(1, currentPage - halfMax)
    const endPage = Math.min(totalPages, startPage + maxButtons - 1)

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1)
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex items-center justify-center flex-wrap gap-2">

      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={BASE_BUTTON_STYLES}
        ariaLabel="Previous page"
      >
        ←
      </Button>

      {pageNumbers[0] > 1 && (
        <>
          <Button
            onClick={() => onPageChange(1)}
            className={BASE_BUTTON_STYLES}
            ariaLabel="Page 1"
          >
            1
          </Button>
          {pageNumbers[0] > 2 && <span className="text-stardust/50">...</span>}
        </>
      )}

      {pageNumbers.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          className={`border transition-colors disabled:cursor-not-allowed ${
            currentPage === page
              ? 'bg-guidepost-green text-deep-space border-guidepost-green font-semibold'
              : BASE_BUTTON_STYLES
          }`}
          ariaLabel={`Page ${page}`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </Button>
      ))}

      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && <span className="text-stardust/50">...</span>}
          <Button
            onClick={() => onPageChange(totalPages)}
            className={BASE_BUTTON_STYLES}
            ariaLabel={`Page ${totalPages}`}
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={BASE_BUTTON_STYLES}
        ariaLabel="Next page"
      >
        →
      </Button>

      <span className="text-stardust/70 text-sm">
        Page {currentPage} to {totalPages}
      </span>
    </div>
  )
}

export default Pagination
