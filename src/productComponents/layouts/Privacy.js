import { Box, Typography, Link } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        padding: "40px 20px",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.6",
        color: "#333",
        "& h6": { fontWeight: "bold", mt: 3 },
        "& p": { mb: 2 },
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
      >
        Privacy Policy
      </Typography>

      <Typography variant="h6">Who we are</Typography>
      <Typography>
        Our website address is:{" "}
        <Link
          href="https://shonaz.in"
          sx={{ color: "#007bff", textDecoration: "none" }}
        >
          https://shonaz.in
        </Link>
      </Typography>

      <Typography variant="h6">Comments</Typography>
      <Typography>
        When visitors leave comments on the site, we collect the data shown in
        the comments form, and also the visitor’s IP address and browser user
        agent string to help spam detection. An anonymized string created from
        your email address (also called a hash) may be provided to the Gravatar
        service. The Gravatar service privacy policy is available here:{" "}
        <Link
          href="https://automattic.com/privacy/"
          sx={{ color: "#007bff", textDecoration: "none" }}
        >
          https://automattic.com/privacy/
        </Link>
        .
      </Typography>

      <Typography variant="h6">Media</Typography>
      <Typography>
        Avoid uploading images with embedded location data (EXIF GPS). Visitors
        can download and extract location data from images on the website.
      </Typography>

      <Typography variant="h6">Cookies</Typography>
      <Typography>
        If you leave a comment, you may opt-in to save your name, email, and
        website in cookies for convenience. These cookies last for one year. If
        you visit our login page, a temporary cookie will be set to check if
        your browser accepts cookies and will be discarded when you close your
        browser.
      </Typography>
      <Typography>
        Login cookies last for two days, and screen options cookies last for a
        year. Selecting “Remember Me” keeps you logged in for two weeks. When
        you log out, login cookies are removed. Cookies for edited or published
        articles expire after one day.
      </Typography>

      <Typography variant="h6">Embedded content</Typography>
      <Typography>
        Articles on this site may include embedded content (e.g., videos,
        images, articles). Embedded content behaves as if you visited the
        external website and may collect data, use cookies, and track
        interactions.
      </Typography>

      <Typography variant="h6">Data Sharing</Typography>
      <Typography>
        If you request a password reset, your IP address will be included in the
        reset email.
      </Typography>

      <Typography variant="h6">Data Retention</Typography>
      <Typography>
        Comments and metadata are retained indefinitely. For registered users,
        personal information is stored in their profiles and can be edited or
        deleted at any time. Website administrators can also manage this data.
      </Typography>

      <Typography variant="h6">Your Rights</Typography>
      <Typography>
        You can request an exported file of the personal data we hold or request
        the deletion of your data, except for data retained for administrative,
        legal, or security purposes.
      </Typography>

      <Typography variant="h6">Data Transfers</Typography>
      <Typography>
        Visitor comments may be checked through an automated spam detection
        service.
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
