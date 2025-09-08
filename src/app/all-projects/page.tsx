'use client';
import ProjectCard from '@/components/ProjectCard'
import { useAllprojectstore } from '@/features/allprojects/store'
import { Projectscard } from '@/features/allprojects/types'
import Link from 'next/link';
import  {  useEffect, useState } from 'react'

const Page = () => {
    const{
        allprojectscard
      }=useAllprojectstore()

    //   const [filhtml,setFilhtml]=useState<Projectscard[]>([] as Projectscard[])
    //   const [filreact,setFilreact]=useState<Projectscard[]>([] as Projectscard[])
    //   const [filangular,setFilangular]=useState<Projectscard[]>([] as Projectscard[])
    //   const [filmvc,setFilmvc]=useState<Projectscard[]>([] as Projectscard[])
    //   const [filwebapi,setFilwebapi]=useState<Projectscard[]>([] as Projectscard[])
    //   const [filnodejs,setFilnodejs]=useState<Projectscard[]>([] as Projectscard[])
    //   const [filnext,setFilnext]=useState<Projectscard[]>([] as Projectscard[])

      const arry=['/html-css-js','/react-projects','/angular-projects','/dotnet-mvc-projects','/dotnet-webapi-projects','/next-projects','/nodejs-projects']

      const [allarryproject,setAllarryproject]=useState<Projectscard[][]>([] as Projectscard[][])


      useEffect(()=>{
        const filterhtml:Projectscard[]=allprojectscard.filter((obj:Projectscard)=>{
            return obj.category===arry[0]
        })
        // setFilhtml(filterhtml)
        
        // next
        const filterreact:Projectscard[]=allprojectscard.filter((obj:Projectscard)=>{
            return obj.category===arry[1]
        })
        // setFilreact(filterreact)

        // next
        const filterangular:Projectscard[]=allprojectscard.filter((obj:Projectscard)=>{
            return obj.category===arry[2]
        })
        // setFilangular(filterangular)
        // next
        const filtermvc:Projectscard[]=allprojectscard.filter((obj:Projectscard)=>{
            return obj.category===arry[3]
        })
        // setFilmvc(filtermvc)
        // next
        const filterwebapi:Projectscard[]=allprojectscard.filter((obj:Projectscard)=>{

            // if(obj.category===arry[4]) {
            //     console.log('true here',obj.category,arry[4])
            // }else{
            //     console.log('not true',obj.category,arry[4])
            // }

            return obj.category===arry[4]
        })
        // setFilwebapi(filterwebapi)
        // next
        const filternext:Projectscard[]=allprojectscard.filter((obj:Projectscard)=>{
            return obj.category===arry[5]
        })
        // setFilnext(filternext)
        // next
        const filternodejs:Projectscard[]=allprojectscard.filter((obj:Projectscard)=>{
            return obj.category===arry[6]
        })
        // setFilnodejs(filternodejs)

        


        const allarry=[filterhtml,filterreact,filterangular,filtermvc,filterwebapi,filternext,filternodejs]
        setAllarryproject(allarry)

        // console.log(allarryproject,'effect',filterwebapi,allarryproject);
        
      },[])




  return (
    <div>
        <div className="content max-w-[1200px] mx-auto ">
            <div className="title  mt-[50px] flex justify-center text-3xl md:text-[40px] capitalize font-[700] text-[rgba(66,66,66,0.7)] bg-white shadow-lg py-[10px] rounded-lg ">
                <span>All PROJECTS</span>
            </div>
             <div className="collection bg-[rgba(0,0,0,0.05)]  min-h-[70vh] mt-[20px] gap-[20px] rounded-lg  p-[20px] shadow-lg ">
                {/* nexted array */}
                {/* {

                    console.log(allarryproject)
                } */}
                {
                    allarryproject.map((obj:Projectscard[],index:number)=>{
                        console.log(obj,'less see');
                        
                        return(

                <div key={index} className='obj' >
                    <div className="sub-title border text-[rgba(66,66,66,0.7)] text-3xl flex justify-center py-[3px] font-[600] bg-white rounded-lg  ">
                            {/* ?? */}
                        <span className='' >   {obj[0]?.category.slice(1) || `No project Uploaded for ${arry[index].slice(1)} yet` }  </span>
                    </div>
                    <div className="sub-all-projects grid grid-cols-1 md:grid-cols-3 my-[40px] gap-[10px]  ">
                        {
                            obj.map((obj:Projectscard)=>{
                                return(

                           <Link key={obj.id} href={`${obj.category}/${obj.id}`} className='' >
                                <ProjectCard projectTitle={obj.title} img={obj.img}  />
                            </Link>
                                )
                            })
                        }
                    </div>
                </div>
                        )
                    })
                }


          
            </div>
        </div>
    </div>
  )
}

export default Page