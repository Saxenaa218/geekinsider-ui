export type SignupTabsType =
  | "candidate"
  | "recruiter"
  | "emailVerification"
  | "";

export interface ConfirmSignInFormValueTypes {
  authCode: string;
}

export interface ConfirmSignUpTypes extends ConfirmSignInFormValueTypes {
  email: any;
}

export interface UserDetailTypes {
  email: string;
  password: string;
  type: "candidate" | "recruiter";
}
