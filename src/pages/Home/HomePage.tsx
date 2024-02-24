import { Container } from "@mui/material";

import SecondContainer from "../../components/SecondContainer";
import TopContainer from "../../components/TopContainer";
import ThirdContainer from "../../components/ThirdContainer";
import FetchedData from "../../utils/FetchedData";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Container>
      <FetchedData>
        {({ generalNews, sportsNews, technologyNews }) => (
          <>
            <TopContainer
              general={generalNews}
              sports={sportsNews}
              technology={technologyNews}
            />
            <SecondContainer />
            <ThirdContainer />
          </>
        )}
      </FetchedData>
    </Container>
  );
};

export default HomePage;
