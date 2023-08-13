import React from "react";
import "./CommentModal.css";
import { Box, Card, Divider, Modal, Typography } from "@mui/material";
import { CommentModalProps } from "../../types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid light-gray",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

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
      >
        <Box sx={style}>
          <div className="comment-card-info">
            <h5>Comments for {clickedPostComments[0]?.author}'s post</h5>
            <Typography
              sx={{ fontSize: 10 }}
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
                  sx={{ mt: 2, fontSize: "12px" }}
                >
                  {comment.commentAuthor}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  color="text.secondary"
                  sx={{ mt: 2, fontSize: "12px" }}
                >
                  {comment.commentDate}
                </Typography>
              </div>
            </Card>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

export default CommentModal;
