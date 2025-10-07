"use client";

// App.jsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

const jobSites = [
  "jobs.lever.co",
  "board.greenhouse.io",
  "jobs.ashbyhq.com",
  "jobs.jobvite.com",
  "myworkdayjobs.com",
  "careers.jobscore.com",
  "ats.comparably.com",
];

export default function Home() {
  const [jobDescription, setJobDescription] = useState("");
  const [selectedSite, setSelectedSite] = useState(jobSites[0]);

  const handleSearch = () => {
    if (!jobDescription) return;
    const query = `site:${selectedSite} ${jobDescription}`;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Job Search Tool
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <TextField
          fullWidth
          label="Job Description"
          placeholder="e.g., Compliance Analyst"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />

        <TextField
          select
          fullWidth
          label="Select Job Site"
          value={selectedSite}
          onChange={(e) => setSelectedSite(e.target.value)}
        >
          {jobSites.map((site) => (
            <MenuItem key={site} value={site}>
              {site}
            </MenuItem>
          ))}
        </TextField>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "100%", py: 1.5 }}
        >
          Search
        </Button>
      </Box>
    </Container>
  );
}
