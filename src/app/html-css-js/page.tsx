import { useAllprojectstore } from '@/features/allprojects/store'
import React from 'react'

const Page = () => {

  const{
    // allprojectscard
  }=useAllprojectstore()



  return (
    <div>
      <div className="title">
        <span>my awesome html-css-js projects</span>
      </div>
      <div className="collection">
        <div className="card">
          <span>project title</span>
          <button>view project</button>
        </div>
      </div>
    </div>
  )
}

export default Page