import { useNavigate } from 'react-router-dom';

export const useCardClick = () => {
  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    navigate(`/phones/${productId}`);
  };

  return { handleCardClick };
};
