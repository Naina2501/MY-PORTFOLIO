import React from 'react'
import "./Home.css"
const Home = () => {
  return (
  
    <div className='home Container'>
         <div>
                 <div className="wrapper "> 
                        <div className="static-txt text-indigo-400 ms-14 ">𝓗𝓲..<br></br><span className='text-white shadow-pink-400 text-4xl ms-7'> 𝓘'𝓶 𝓝𝓪𝓲𝓷𝓪 </span></div>
                        <ul className="dynamic-txts  ">
                        <li><span>FULLSTACK-DEVELOPER</span></li>
                        <li><span>WEB-DEVELOPER</span></li>
                        <li><span>FRONTEND DEVELOPER</span></li>
                        <li><span>BACKEND DEVELOPER</span></li>
                        </ul>
                    </div>
                
                <p className=' mt-4 font-sans  description '>
               
             Hey I am <span className='fw-bold'>Naina</span>. I strive to create websites and applications that not only meet user needs but also provide an exceptional experience.
              My goal is to leverage my technical expertise to make a meaningful impact.
        </p> 
                <div className="d-flex justify-center gap-4 mt-5">
                    <button  className="w-25 ms-5  bg-indigo-400 p-2 rounded rounded-2 hover:bg-blue-300 hover:w-103"> About-us</button>
                    <button href="/public/docs/nainabahuriyaresume.pdf" className="w-25 text-lg bg-indigo-400 rounded rounded-2 hover:bg-blue-300 hover:w-103"  download="resume">Resume</button>
                  </div>
            </div>
            
            <div>
             <div>
                
                <div className="image-container">
                    <img className="manzdev" src="https://img.freepik.com/premium-photo/female-developer-background_665280-9657.jpg" alt="ManzDev"/>
                    <div className="gradient"></div>
                </div>
               
             </div>
            
        </div>




        
    </div>
    
      
  )
}

export default Home
