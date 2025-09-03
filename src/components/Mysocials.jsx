import Image from 'next/image'
import React from 'react'
import whatsap from '../../public/asset2/whatsap.png'
import linkedin from '../../public/asset2/PngItem_linkedin.png'
import facebook from '../../public/asset2/facebook.png'
import instagram from '../../public/asset2/instagram.png'
import telegram from '../../public/asset2/telegram.png'

const Mysocials = () => {
  return (
    <div className="social flex gap-[20px] md:gap-[10px] ">
                    <div className="img w-[20px] md:w-[30px] ">
                      <Image src={whatsap} alt='' width={300} height={100}/>
                    </div>
                    <div className="img w-[20px] md:w-[30px] ">
                      <Image src={linkedin} alt='' width={300} height={100}/>
                    </div>
                    <div className="img w-[20px] md:w-[30px] ">
                      <Image src={facebook} alt='' width={300} height={100}/>
                    </div>
                    <div className="img w-[20px] md:w-[30px] ">
                      <Image src={instagram} alt='' width={300} height={100}/>
                    </div>
                    <div className="img w-[20px] md:w-[30px] ">
                      <Image src={telegram} alt='' width={300} height={100}/>
                    </div>
                </div>
  )
}

export default Mysocials