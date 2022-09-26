export type UserTypeTypes = "candidate" | "recruiter" | "";
export interface AppTypes {
  isAuth: boolean;
  setIsAuth: (e: boolean) => void;
  loading: boolean;
}
