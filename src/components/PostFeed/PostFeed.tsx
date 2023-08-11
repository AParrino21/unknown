import React from "react";
import "./PostFeed.css";
import { PostFeedProps } from "../../types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const PostFeed: React.FC<PostFeedProps> = ({ postData }) => {
  console.log(postData);
  return (
    <div>
      {postData?.map((post) => (
        <div key={post.id} className="post-feed-root">
          <Box sx={{ maxWidth: 575 }}>
            <Card sx={{ minHeight: 325 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 10 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {post.date}
                </Typography>
                <Typography variant="h5" component="div">
                  {post.author}
                </Typography>
                <div className="thumb-wrapper">
                  <p className="thumb-container">
                    <ThumbUpOffAltIcon className="thumb-icon real" />{" "}
                    {post.reactions.real}
                  </p>
                  <p className="thumb-container">
                    <ThumbDownOffAltIcon className="thumb-icon bull" />{" "}
                    {post.reactions.bs}{" "}
                  </p>
                </div>
                <br />
                <Typography textAlign="center" variant="body2">
                  {post.postData}
                </Typography>
              </CardContent>
              <div className="post-feed-actions">
                <CardActions>
                  <Button color="success" size="small">
                    Real
                  </Button>
                </CardActions>
                <CardActions>
                  <Button size="small">View Comments</Button>
                </CardActions>
                <CardActions>
                  <Button color="error" size="small">
                    Call BS
                  </Button>
                </CardActions>
              </div>
            </Card>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
