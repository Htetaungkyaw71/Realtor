import { useParams } from "react-router-dom";
import { useGetHouseDetailQuery } from "../api/houseApiService";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetHouseDetailQuery(id);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  console.log(data);

  return <div>Detail</div>;
};

export default Detail;
