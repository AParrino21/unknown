export interface AuthProviderProps {
    currentUser: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    alertMessage: string;
    alertStatus: string;
    setAlert: (aStatus: string, aMessage: string) => void;
    openAlert: boolean;
    setOpenAlert: (open: boolean) => void;
  }

export interface childrenProps {
    children: React.ReactNode;
  }

export interface AlertProps {
    openAlert: boolean;
    setOpenAlert: (open: boolean) => void;
    alertMessage: string;
    alertStatus: string;
  }