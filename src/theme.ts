import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8c00",
    },
    secondary: {
      main: "#ff9a1f",
    },
  },
  components: {
    // LABEL
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "var(--accordion-text)",
          "&.Mui-focused": {
            color: "var(--accent-color)",
          },
        },
      },
    },
    // TEXTFIELD
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInput-underline:after": {
            borderBottomColor: "var(--accent-color)",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "var(--accordion-text)",
            },
            "&:hover fieldset": {
              borderColor: "var(--accordion-text)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--accent-color)",
            },
          },
        },
      },
    },
    // Input
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "var(--accordion-text)",
        },
      },
    },
  },
});

export default theme;
