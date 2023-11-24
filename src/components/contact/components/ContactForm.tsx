import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";
import SectionSubtitle from "../../sections/components/SectionSubtitle";

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
}

const ContactForm = () => {
  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ mt: "40px", height: "100%" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="family-name"
            name="familyName"
            required
            fullWidth
            id="familyName"
            label="Nom"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="Prénom"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Adresse email"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="subject"
            required
            fullWidth
            id="subject"
            label="Sujet"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Message" fullWidth multiline maxRows={4} />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        sx={{ mt: 4, ml: "30%", width: "40%" }}
      >
        <Typography variant="button">Envoyer</Typography>
      </Button>
    </Box>
  );
};

export default ContactForm;
