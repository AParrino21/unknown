import React from "react";
import "./CommentModal.css";
import { Box, Button, Card, Divider, Modal, Typography } from "@mui/material";
import { CommentModalProps } from "../../types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const style = {};

const CommentModal: React.FC<CommentModalProps> = ({
  open,
  handleClose,
  clickedPostComments,
}) => {
  function handleCommentHeart(e: React.MouseEvent<SVGElement>) {
    console.log(e.currentTarget.id);
  }

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
          <div className="comment-card-info">
            <h5>Comments for {clickedPostComments[0]?.author}'s post</h5>
            <Typography
              sx={{ fontSize: 10, margin: "0" }}
              color="text.secondary"
              gutterBottom
            >
              {clickedPostComments[0]?.date}
            </Typography>
          </div>
          <br />
          <Divider />
          <br />
          {clickedPostComments[0]?.comments.map((comment) => (
            <Card className="comment-card" key={comment.id}>
              <Typography
                variant="h6"
                component="div"
                sx={{ mt: 2, fontSize: "16px" }}
                className="comment-data"
              >
                {comment.commentData}
              </Typography>
              <div className="comment-card-info">
                <Typography
                  id="modal-modal-description"
                  sx={{
                    mt: 2,
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 5px"
                  }}
                >
                  <FavoriteBorderIcon
                    id={comment.id}
                    className="comment-heart"
                    onClick={(e) => handleCommentHeart(e)}
                  />{" "}
                  {comment.commentReactions}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, fontSize: "12px", padding: "0 5px" }}
                >
                  {comment.commentAuthor}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  color="text.secondary"
                  sx={{ mt: 2, fontSize: "12px", padding: "0 5px" }}
                >
                  {comment.commentDate}
                </Typography>
              </div>
            </Card>
          ))}
          <div className="close-comment-modal-btn">
            <Button onClick={() => handleClose()}>CLOSE</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CommentModal;
