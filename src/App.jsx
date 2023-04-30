import { Grid } from "@mui/material";
import { SearchBar, VideoDetails, VideoList } from "./components";
import youtube from "./api/youtube";
import { useEffect, useState } from "react";

// let key = "AIzaSyCi0pTLd7JcyhoThVUARMCzCejpyip76Ro";

function App() {
  let [videos, setVideos] = useState([]);
  let [selectedVideo, setselectedVideo] = useState(null);

  let onFormSubmit = async (searchTerm) => {
    let res = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: import.meta.env.VITE_APP_KEY,
        q: searchTerm,
      },
    });
    setVideos(res?.data.items);
    setselectedVideo(res?.data.items[0]);
  };

  let onVideoSelect = (video) => {
    setselectedVideo(video);
  };

  useEffect(() => {
    onFormSubmit("ronaldo");
  }, []);

  return (
    <Grid justifyContent="center" container spacing={10} padding={3}>
      <Grid item xs={12}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={onFormSubmit} />
          </Grid>
          <Grid item xs={12} md={8}>
            <VideoDetails video={selectedVideo} />
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
