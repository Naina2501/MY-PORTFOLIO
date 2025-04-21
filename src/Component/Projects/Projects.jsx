import React from 'react'
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Edutalk",
      language: "REACT ",
      src: "https://uicookies.com/wp-content/uploads/2018/08/genius-free-college-website-templates.jpg",
      alt: "Premium leather watch with gold accents",
      Url:"https://edutalk-app-react.vercel.app/"
    },
    {
      id: 2,
      name: "Convert num to word",
     language: "HTML, CSS , JS",
      src: "https://i.ytimg.com/vi/rfvl5v89LaI/maxresdefault.jpg",
      alt: "White wireless earbuds in charging case"
    },
    {
      id: 3,
      name: "Todo-app",
     language: "REACT ",
      src: "https://cdn.dribbble.com/users/4039378/screenshots/20018626/media/f2a7ecb0209bee95051656f350961291.jpg?resize=800x600&vertical=center",
      alt: "Aluminum laptop stand"
    },
    {
      id: 4,
      name: "Videolibrary",
     language: "React",
      src: "https://th.bing.com/th/id/OIP.58CQeICBTm-AJiEYIWyiEAHaDf?rs=1&pid=ImgDetMain",
      alt: "RGB mechanical keyboard"
    },
    
  ];
  return (
   <div className='project'>
     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 Card-container '>
       {
       projects.map((project) => (
          <div key={project.id} className="card w-100 gap-4 m-1  bg-secondary border border-2">
            <img
              src={project.src}
              alt={project.alt}
              className="card-img-top h-40"
            />
            <div className="card-body">
              <h3 >{project.name}</h3>
              <h4 className='text-black'>{project.language}</h4>
            </div>

            <div className='card-footer'>
               <a href={project.Url} className='btn btn-info w-100'>See Project</a>
            </div>
          </div>
        ))
        }
      
    </div>
   </div>
  )
}

export default Projects
