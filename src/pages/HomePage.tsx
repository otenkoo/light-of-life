import { Grid } from "@mui/material";
import FeaturedPost from "../components/FeaturedPost";
import MainFeaturedPost from "../components/MainFeaturedPost";

export default function HomePage() {
  return (
    <div>
      <MainFeaturedPost
        post={{
          description: "Lighting the world one life at a time",
          image:
            "https://pbs.twimg.com/profile_banners/49741511/1668354175/600x200",
          imageText: "Fill",
          title: "Light of Life Inc.",
        }}
      />
      <Grid container spacing={2} >
      <FeaturedPost
        post={{
          date: "Nov 12",
          description: "Test",
          image:
            "https://pbs.twimg.com/profile_banners/49741511/1668354175/600x200",
          imageLabel: "Fill",
          title: "Test",
        }}
      />
      <FeaturedPost
        post={{
          date: "Nov 12",
          description: "Test",
          image:
            "https://pbs.twimg.com/profile_banners/49741511/1668354175/600x200",
          imageLabel: "Fill",
          title: "Test",
        }}
      />
      </Grid>
    </div>
  );
}
