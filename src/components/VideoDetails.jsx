import { Paper, Typography } from "@mui/material";
import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) return <h1>Loading...</h1>;
  let videSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "40%" }}>
        <iframe
          src={videSrc}
          frameBorder="0"
          width="100%"
          height="100%"
          title="video player"
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h5">
          {video?.snippet?.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video?.snippet?.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {video?.snippet?.description}
        </Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetails;
