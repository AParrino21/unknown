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
    commentData: string;
    commentDate: string;
    commentReactions: number;
  }[];
}

export interface PostFeedProps {
  postData: PostData[];
}

export interface AuthProviderProps {
  currentUser: boolean;
  login: (email: string, password: string) => void;
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
