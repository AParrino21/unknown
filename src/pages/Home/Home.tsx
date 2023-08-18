import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "@mui/material";
import { auth } from "../../firebase";

import SightingPost from "../../components/SightingPost/SightingPost";
import PostFeed from "../../components/PostFeed/PostFeed";
import CommentModal from "../../components/CommentModal/CommentModal";
import { CommentData, PostData } from "../../types";
import AddComment from "../../components/CommentModal/AddComment";

const Home = () => {
  const { currentUser, formatDate, postData } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [openViewCommentModal, setViewCommentModal] =
    React.useState<boolean>(false);
  const [openAddCommentModal, setOpenAddCommentModal] =
    React.useState<boolean>(false);
  const [clickedPostComments, setClickedPostComments] = React.useState<
    PostData[]
  >([]);
  const [comment, setComment] = React.useState<CommentData>({
    id: uuidv4(),
    commentAuthor: auth.currentUser?.email,
    commentData: "",
    commentDate: formatDate(new Date()),
    commentReactions: 0,
  });
  const [postIdToAddComment, setPostIdToAddComment] =
    React.useState<string>("");

  function handleCommentModalClose() {
    setViewCommentModal(false);
    setOpenAddCommentModal(false);
    setComment({
      id: uuidv4(),
      commentAuthor: auth.currentUser?.email,
      commentData: "",
      commentDate: formatDate(new Date()),
      commentReactions: 0,
    });
  }

  function handleCommentView(e: React.MouseEvent<HTMLButtonElement>) {
    let commentList = postData.filter((post) => post.id === e.currentTarget.id);
    setClickedPostComments(commentList);
    setViewCommentModal(true);
  }

  function handleCommentAdd(e: React.MouseEvent<HTMLButtonElement>) {
    if (currentUser) {
      setPostIdToAddComment(e.currentTarget.id);
      setOpenAddCommentModal(true);
    }
  }

  function handleCommentChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setComment({
      ...comment,
      [name]: value,
    });
  }

  function handleCreateComment() {
    if (comment.commentData) {
      console.log(postIdToAddComment);
      console.log(comment);
    }
  }

  return (
    <div>
      <div className="home-header">
        <h4>
          Welcome to <span className="bs">B</span>eyond
          <span className="bs">S</span>ightings, the central hub for UFO
          stories, encounters, and all things Alien. Share your unique
          experiences with the world. Your stories will remain unaltered,
          unregulated, and fully revealed.
        </h4>
        {!currentUser && (
          <>
            <Button onClick={() => navigate("/signup")}>SIGN UP HERE</Button>{" "}
            <br />
          </>
        )}
        {!currentUser && (
          <Button onClick={() => navigate("/login")}>LOGIN</Button>
        )}
      </div>
      {currentUser && (
        <SightingPost
          currentUser={auth.currentUser?.email}
          formatDate={formatDate}
        />
      )}
      <div>
        <PostFeed
          postData={postData}
          handleCommentView={handleCommentView}
          handleCommentAdd={handleCommentAdd}
        />
      </div>
      <div>
        <CommentModal
          open={openViewCommentModal}
          handleClose={handleCommentModalClose}
          clickedPostComments={clickedPostComments}
        />
        <AddComment
          open={openAddCommentModal}
          handleClose={handleCommentModalClose}
          postId={postIdToAddComment}
          handleCommentChange={handleCommentChange}
          comment={comment}
          handleCreateComment={handleCreateComment}
        />
      </div>
    </div>
  );
};

export default Home;
