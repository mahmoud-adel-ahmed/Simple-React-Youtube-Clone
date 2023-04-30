import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@mui/material";

const VideoList = ({ videos, onVideoSelect }) => {
  let listOfVideos = videos?.map((video) => (
    <VideoItem
      key={video.id.videoId}
      {...video}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));
  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
