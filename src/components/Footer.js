import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/muthiapry/152235865100173-dts-final-project"
      >
        Muthia Priyanti
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    description: [
      "Breakfast Recipes",
      "Brunch Recipes",
      "Lunch Recipes",
      "Dinner Recipes",
    ],
  },
  {
    description: ["Diabetic Recipes", "Low Carb Recipes", "Low Fat Recipes"],
  },
  {
    description: ["Appetizer Recipes", "Main Dishes", "Dessert Recipes"],
  },
  {
    description: ["Cooks To Follow", "Gift Guides", "Product Reviews"],
  },
];

const Footer = () => {
  return (
    <Container
      maxWidth="lg"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid #FD5D5D`,
        mt: 5,
        py: [3, 2],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    variant="h6"
                    underline="none"
                    sx={{
                      fontSize: 13,
                      fontFamily: "poppins",
                      fontWeight: "400",
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Copyright sx={{ mt: 3, fontWeight: 300, fontSize: 11, color: "#808080" }} />
    </Container>
  );
};
export default Footer;
