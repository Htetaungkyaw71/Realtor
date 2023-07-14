import { useParams } from "react-router-dom";
import { useGetHouseDetailQuery } from "../api/houseApiService";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetHouseDetailQuery(id);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  console.log(data);

  return (
    <div>
      <img src={data.photos[0].href} />
    </div>
  );
};

export default Detail;
