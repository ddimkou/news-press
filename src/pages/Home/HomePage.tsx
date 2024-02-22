import { Container } from "@mui/material";
import SecondContainer from "../../components/SecondContainer";
import TopContainer from "../../components/TopContainer";
import ThirdContainer from "../../components/ThirdContainer";

const HomePage = () => {
  return (
    <Container>
      <TopContainer />
      <SecondContainer />
      <ThirdContainer />
    </Container>
  );
};

export default HomePage;
