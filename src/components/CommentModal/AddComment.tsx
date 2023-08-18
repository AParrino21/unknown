import React from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import { AddCommentProps } from "../../types";

import "./CommentModal.css";

const AddComment: React.FC<AddCommentProps> = ({
  open,
  handleClose,
  postId,
  handleCommentChange,
  comment,
  handleCreateComment,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="comment-modal-root"
      >
        <Box className="comment-box-container">
          <div>
            <div>
              <h2>Add Comment for {}'s Post</h2>
            </div>
            <br />
            <TextField
              id="outlined-multiline-static"
              label="Add Your Comment"
              multiline
              rows={8}
              fullWidth
              name="commentData"
              onChange={(e) => handleCommentChange(e)}
              value={comment.commentData}
            />
          </div>
          <div>
            <br />
            <Button id={postId} variant="outlined" onClick={handleCreateComment}>
              ADD COMMENT
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddComment;
