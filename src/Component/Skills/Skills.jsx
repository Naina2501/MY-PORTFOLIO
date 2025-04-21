import React from 'react'

const Skills = () => {
    
    const skills = [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Mongodb', level: 'Intermediate' },
        { name: 'Python', level: 'Beginner' },
      ];
    
  return (
    <div className='skills'>
      <div className='row'>
      <div className='col'>
       <img src="https://i.pinimg.com/originals/49/61/0e/49610ec9860a014f1012fa44abeca71a.jpg" className='rounded rounded-2'></img>
       <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore id illum earum, dolor nulla quaerat, officia itaque ullam quae, pariatur assumenda maxime ducimus fugiat consequatur tempora nostrum perferendis. Quisquam, aliquam.</p>
      </div>
        <div className='col'>
        <ul style={{ listStyleType: 'none', padding:'10px' }} >
                            {skills.map((skill, index) => (
                            <li
                                key={index}
                                style={{
                               border :'2px solid gray',
                                margin: '10px 0',
                                padding: '10px',
                                borderTopRightRadius:"20px", 
                                borderBottomLeftRadius:'20px',
                                boxShadow: '10 2px 4px gray',
                                }}
                                className=' w-100 ms-5'
                            >
                                <strong >{skill.name}</strong> - {skill.level}
                            </li>
                            ))}

                        </ul>
                
             </div>
            

        </div>
                    
    </div>
  )
}

export default Skills
