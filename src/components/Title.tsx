import React from 'react'

interface TitleProp{
    word1:string,
    word2:string
}
const Title = ({word1,word2}:TitleProp) => {

  return (
    <div className='flex text-3xl font-bold gap-[10px] items-center flex-col md:flex-row md:justify-center capitalize ' >
        <span>{word1}</span>
        <span>{word2}</span>
    </div>
  )
}

export default Title