import React from "react";
import "./SightingPost.css";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { SightingPostProps, PostData } from "../../types";
import { v4 as uuidv4 } from 'uuid';

const SightingPost: React.FC<SightingPostProps> = ({
  currentUser,
  formatDate,
}) => {
  const [post, setPost] = React.useState<PostData>({
    id: uuidv4(),
    postData: "",
    author: currentUser,
    date: formatDate(new Date()),
    reactions: {bs: 0, real: 0},
    comments: []
  });

  function handlePostChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setPost({
      ...post,
      [name]: value,
    });
  }

  function handlePost() {
    if (post.postData) {
      console.log(post);
    }
  }

  return (
    <div className="sighting-post-root">
      <TextField
        id="outlined-multiline-static"
        label="Reveal Your Story"
        multiline
        rows={7}
        fullWidth
        name="postData"
        onChange={(e) => handlePostChange(e)}
        value={post.postData}
      />
      <div>
        <br />
        <Button variant="outlined" onClick={handlePost}>
          POST YOUR BS
        </Button>
      </div>
    </div>
  );
};

export default SightingPost;
