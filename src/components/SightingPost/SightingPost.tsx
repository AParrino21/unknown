import React from "react";
import "./SightingPost.css";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { SightingPostProps } from "../../types";

const SightingPost: React.FC<SightingPostProps> = ({
  currentUser,
  formatDate,
}) => {
  const [post, setPost] = React.useState<{
    postData: string;
    author: string | null | undefined;
    date: string;
  }>({
    postData: "",
    author: currentUser,
    date: formatDate(new Date()),
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
