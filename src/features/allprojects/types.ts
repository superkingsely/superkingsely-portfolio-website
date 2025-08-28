
export interface Projectscard{
    id:number,
    category:string,
    title:string,

}
export interface projectsdetail{
    id:number,
    title:string,
    img:string,
    des:string,
    src:string,
    live:string,
    category:string
}

export interface AllprojectsState{
    allprojectscard:Projectscard[],
    allprojectsdetails:projectsdetail[]
}