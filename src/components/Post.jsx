import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const Post = () => {
  return (
    <Card sx={{ margin: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "light" }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Cute Rabbit!!"
        subheader="September 20, 2023"
      />
      <CardMedia
        component="img"
        height="220px"
        image="https://cdn.kaiak.tw/wp-content/uploads/2021/03/flipermag-2021-03-12_04-35-06_273430-scaled-1.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          eaque at provident voluptatibus earum porro voluptas officiis quod, id
          consequatur.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
