import { Response } from "express"

export interface IRes{
    success: boolean;
    message: string;
    data: object;
}

const response=(res:Response,status:number,message:string,data:object)=>{
    const resObj:IRes={
        success:true,
        message,
        data:data
    }
    return res.status(status).json(resObj);
}
export default response;