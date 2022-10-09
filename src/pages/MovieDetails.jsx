import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { Id } = useParams();
  return <div>Now showing product with id - {Id}</div>;
};