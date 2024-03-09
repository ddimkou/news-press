import { Container, Typography, Paper, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const AboutPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/homepage-bg.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            padding: "1em",
            margin: "1em",
            backgroundColor: "rgba(20, 20, 20, 0.8)",
          }}
        >
          <Typography
            variant="h5"
            sx={{ marginBottom: "1em", color: "#ff8c00" }}
          >
            About us
          </Typography>
          <Accordion sx={{ backgroundColor: "#1d2125", color: "#ff8c00" }}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon style={{ color: "#ff9a1f" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="button">Who we are</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                sx={{
                  color: "#ffefdc",
                  letterSpacing: "0.5px",
                  lineHeight: "1.6",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#1d2125", color: "#ff8c00" }}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon style={{ color: "#ff9a1f" }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="button">Our purpose</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                sx={{
                  color: "#ffefdc",
                  letterSpacing: "0.5px",
                  lineHeight: "1.6",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#1d2125", color: "#ff8c00" }}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon style={{ color: "#ff9a1f" }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="button">Our sources</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                sx={{
                  color: "#ffefdc",
                  letterSpacing: "0.5px",
                  lineHeight: "1.6",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#1d2125", color: "#ff8c00" }}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon style={{ color: "#ff9a1f" }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="button">Get involved</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                sx={{
                  color: "#ffefdc",
                  letterSpacing: "0.5px",
                  lineHeight: "1.6",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutPage;
