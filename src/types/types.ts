export interface childrenProps {
  children: React.ReactNode;
}

export interface AlertProps {
  openAlert: boolean;
  setOpenAlert: (open: boolean) => void;
  alertMessage: string;
  alertStatus: string;
}

export interface SightingPostProps {
  currentUser: string | null | undefined;
  formatDate: (d: Date) => string;
}

export interface PostData {
  id: string;
  postData: string;
  author: string | null | undefined;
  date: string;
  reactions: { bs: number; real: number };
  comments: {
    id: string;
    commentAuthor: string;
    commentData: string;
    commentDate: string;
    commentReactions: number;
  }[];
}

export interface CommentData {
  id: string;
  commentAuthor: string | undefined | null;
  commentData: string;
  commentDate: string;
  commentReactions: number;
}

export interface PostFeedProps {
  postData: PostData[];
  handleCommentView: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCommentAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface AuthProviderProps {
  currentUser: boolean;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
  alertMessage: string;
  alertStatus: string;
  setAlert: (aStatus: string, aMessage: string) => void;
  openAlert: boolean;
  setOpenAlert: (open: boolean) => void;
  handleSearch: () => void;
  formatDate: (d: Date) => string;
  postData: PostData[];
}

export interface CommentModalProps {
  open: boolean;
  handleClose: () => void;
  clickedPostComments: PostData[];
}

export interface AddCommentProps {
  open: boolean;
  handleClose: () => void;
  postId: string;
  handleCommentChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  comment: CommentData;
  handleCreateComment: () => void;
}
