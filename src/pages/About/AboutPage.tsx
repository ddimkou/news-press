import { Container, Box } from "@mui/material";
import AccordionComp from "./AccordionComp";
import TeamSection from "./TeamSection";

const AboutPage = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <AccordionComp />
        <TeamSection />
      </Container>
    </Box>
  );
};

export default AboutPage;
