import { AccessToken } from "./AccessToken";

export class LoginResponse {
    $id : string;
    email : string;
    accessToken : AccessToken;
    requiredAuthenticatorType : boolean;
}