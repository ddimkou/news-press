import { Grid, Card, CardMedia, Paper, Typography, Box } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
const teamMembers = [
  {
    name: "Jane Doe",
    role: "Editor",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur odit voluptate ratione expedita!",
    image: "/team/Jane.png",
  },

  {
    name: "John Doe",
    role: "Reporter",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis vel dolores, consectetur quis perferendis eos!",
    image: "/team/John.png",
  },

  {
    name: "Mike Doe",
    role: "Floor Manager",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis distinctio ipsa.",
    image: "/team/Mike.png",
  },
];

const TeamSection = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "1em",
        margin: "2em 1em",
        backgroundColor: "rgba(20, 20, 20, 0.8)",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "1em", color: "#ff8c00" }}>
        Meet our Team
      </Typography>
      <Grid container spacing={2}>
        {teamMembers.map((member) => (
          <Grid item xs={4}>
            <CardMedia
              component="img"
              height="200"
              image={member.image}
              alt={member.name}
              sx={{
                height: "100px",
                width: "100px",
                margin: "0 auto",
              }}
            />

            <Card
              sx={{
                backgroundColor: "#1d2125",
                padding: "0.5em",
                color: "#ffefdc",
                minHeight: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="button" color="#ff8c00">
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ padding: "8px" }}>
                {member.bio}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <MessageIcon
                  sx={{ fontSize: "18px", color: "#ff8c00", cursor: "pointer" }}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TeamSection;
