"use client";

import { useRouter } from '../../../../i18n/navigation';
import Button from '../../../../components/ui/Button';

interface ModalProps {
  searchQuery: string;
  currentPage: number;
  itemsPerPage: number;
}

const  DetailsModalCloseButton = ({ searchQuery, currentPage, itemsPerPage }: ModalProps) => {
  const router = useRouter();

  const handleClose = () => {
    router.push(`/pokemons?filter=${searchQuery}&page=${currentPage}&limit=${itemsPerPage}`);
  };

  return (
    <Button
      onClick={handleClose}
      className="absolute top-4 right-4 text-stardust hover:text-guidepost-green text-xl font-bold cursor-pointer transition-colors"
      ariaLabel="Close details"
    >
      ✕
    </Button>
  );
}

export default DetailsModalCloseButton;
