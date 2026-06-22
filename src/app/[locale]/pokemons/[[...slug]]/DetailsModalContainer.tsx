import DetailsCard from '../../../../components/DetailsCard';
import DetailsModalCloseButton from './DetailsModalCloseButton';

interface ModalProps {
  detailId: string;
  searchQuery: string;
  currentPage: number;
  itemsPerPage: number;
}

export default function DetailsModalContainer({
  detailId,
  searchQuery,
  currentPage,
  itemsPerPage,
}: ModalProps) {
  return (
    <div className="fixed top-0 right-0 w-full md:w-lg h-full bg-deep-space shadow-lg p-10 overflow-auto z-100">
      <DetailsModalCloseButton
        searchQuery={searchQuery}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <DetailsCard detailId={detailId} />
    </div>
  );
}
