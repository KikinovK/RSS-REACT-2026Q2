import { useParams } from '@tanstack/react-router';
const DetailsCard = () => {
  const { detailId } = useParams({ from: '/pokemons/$detailId' });
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{`Покемон #${detailId}`}</h2>
    </div>
  );
};

export default DetailsCard;
