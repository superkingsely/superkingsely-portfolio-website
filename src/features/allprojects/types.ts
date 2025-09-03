import { StaticImageData } from "next/image"

export interface Projectscard{
    id:number,
    category:string,
    title:string,
    img:StaticImageData

}
export interface projectsdetail{
    id:number,
    title:string,
    img:StaticImageData,
    des:string,
    src:string,
    live:string,
    category:string
}

export interface AllprojectsState{
    allprojectscard:Projectscard[],
    allprojectsdetails:projectsdetail[]
}