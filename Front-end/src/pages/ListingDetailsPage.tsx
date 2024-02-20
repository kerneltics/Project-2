import { useParams } from "react-router-dom";

export const ListingDetailsPage = () => {
  const { listingId } = useParams();

  return <div>id: {listingId}</div>;
};
