import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Results from "../components/Results";

const ResultSearch = () => {
  let params = useParams();
  console.log(params);
  return (
    <Box>
      <Results keyword={params.q}></Results>
    </Box>
  );
};

export default ResultSearch;
