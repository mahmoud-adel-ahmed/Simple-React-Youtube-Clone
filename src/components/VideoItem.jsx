import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const VideoItem = ({ snippet, onVideoSelect, video }) => {
  return (
    <Grid item xs={12}>
      <Paper
        onClick={() => onVideoSelect(video)}
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          cursor: "pointer",
        }}
      >
        <img
          style={{
            // marginRight: "15px",
            width: "100%",
          }}
          alt="thumbnail"
          src={snippet?.thumbnails.medium.url}
        />
        <Typography variant="subtitle2" padding={1}>
          <b>{snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
