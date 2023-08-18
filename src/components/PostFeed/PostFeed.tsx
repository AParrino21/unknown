import React from "react";
import "./PostFeed.css";
import { PostFeedProps } from "../../types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const PostFeed: React.FC<PostFeedProps> = ({
  postData,
  handleCommentView,
  handleCommentAdd,
}) => {
  function handleRealClick(
    e: React.MouseEvent<SVGElement | HTMLButtonElement>,
    btnTitle: string
  ) {
    console.log(btnTitle, e.currentTarget.id);
  }

  function handleBSClick(
    e: React.MouseEvent<SVGElement | HTMLButtonElement>,
    btnTitle: string
  ) {
    if (btnTitle === "real") {
      console.log("real", e.currentTarget.id);
    }
    if (btnTitle === "bs") {
      console.log("bs", e.currentTarget.id);
    }
  }

  return (
    <div>
      {postData?.map((post) => (
        <div key={post.id} className="post-feed-root">
          <Box sx={{ maxWidth: 800, width: "90%", margin: "0 auto" }}>
            <Card sx={{ minHeight: 325 }}>
              <CardContent className="post-feed-content">
                <Typography
                  sx={{ fontSize: 10 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {post.date}
                </Typography>
                <Typography
                  className="post-author"
                  variant="h5"
                  component="div"
                >
                  {post.author}
                </Typography>
                <div className="thumb-wrapper">
                  <p className="thumb-container">
                    <ThumbUpOffAltIcon
                      id={post.id}
                      className="thumb-icon real"
                      onClick={(e) => handleRealClick(e, "real")}
                    />{" "}
                    {post.reactions.real}
                  </p>
                  <p className="thumb-container">
                    <ThumbDownOffAltIcon
                      id={post.id}
                      className="thumb-icon bull"
                      onClick={(e) => handleBSClick(e, "bs")}
                    />{" "}
                    {post.reactions.bs}{" "}
                  </p>
                </div>
                <br />
                <br />
                <br />
                <Typography
                  className="post-data"
                  textAlign="center"
                  variant="body2"
                >
                  {post.postData}
                </Typography>
              </CardContent>
              <div className="post-feed-actions">
                <CardActions>
                  <ThumbUpOffAltIcon className="thumb-icon real" />
                  <Button
                    id={post.id}
                    onClick={(e) => handleRealClick(e, "real")}
                    color="success"
                    size="small"
                  >
                    Real
                  </Button>
                </CardActions>
                <CardActions>
                  <div className="comment-btns">
                    <Button
                      id={post.id}
                      onClick={(e) => handleCommentAdd(e)}
                      size="small"
                    >
                      Add Comment
                    </Button>
                    <br />
                    <br />
                    <Button
                      id={post.id}
                      onClick={(e) => handleCommentView(e)}
                      size="small"
                    >
                      View Comments
                    </Button>
                  </div>
                </CardActions>
                <CardActions>
                  <Button
                    id={post.id}
                    onClick={(e) => handleBSClick(e, "bs")}
                    color="error"
                    size="small"
                  >
                    Call BS
                  </Button>
                  <ThumbDownOffAltIcon className="thumb-icon bull" />
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
