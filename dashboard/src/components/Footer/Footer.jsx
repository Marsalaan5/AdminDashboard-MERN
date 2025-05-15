import { Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#333", color: "white", padding: "20px 0" }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          {/* Left section: Logo and quick links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Typography variant="body2" color="inherit" paragraph>
              Empowering businesses with innovative solutions for efficient
              management of suppliers, customers, expenses, and inventory. We
              simplify operations so you can focus on growth and success.
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Link href="/" color="inherit" variant="body2">
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link href="/about" color="inherit" variant="body2">
                  About Us
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="mailto:arsalaankhan5.com"
                  color="inherit"
                  variant="body2"
                >
                  Email Us
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* Middle section: Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Link href="/privacy-policy" color="inherit" variant="body2">
                  Privacy Policy
                </Link>
              </Grid>
              <Grid item>
                <Link href="/terms-of-service" color="inherit" variant="body2">
                  Terms of Service
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <IconButton
                  href="https://facebook.com"
                  target="_blank"
                  color="inherit"
                >
                  <Facebook />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://twitter.com"
                  target="_blank"
                  color="inherit"
                >
                  <Twitter />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://instagram.com"
                  target="_blank"
                  color="inherit"
                >
                  <Instagram />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://linkedin.com"
                  target="_blank"
                  color="inherit"
                >
                  <LinkedIn />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
          <Grid item>
            <Typography variant="body2" align="center" color="inherit">
              &copy; {new Date().getFullYear()} Connect. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
