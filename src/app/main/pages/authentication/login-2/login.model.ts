export interface LoginReq {
    userName: string;
    password: string;
}


export interface LoingRes {
    token: string;
    isUserAlreadyExist: boolean;
    isUserNotExist: boolean;
    isUserNameAndPasswordNotMatch: boolean;
    name: string;
    pic?: any;
    recivedPonints: number;
    companyPointsToSend: number;
    aboutMe?: any;
    descreption?: any;
    email?: any;
    mobile?: any;
    loginTypeId: number;
}