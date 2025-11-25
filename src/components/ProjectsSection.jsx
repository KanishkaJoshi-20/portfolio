import React from 'react'
import {  ArrowRight, ExternalLink, GithubIcon } from 'lucide-react'

const projects = [
    // Add your project details here
    {
       id: 1,
        title: 'Aapada Mitra',
        description: 'Building A disaster preparedness and response education system for young minds.', 
        imageUrl: '/projects/aapada-mitra.png',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        gitHub: 'https://github.com/KanishkaJoshi-20/SIH',
        demoUrl: '#',
    },
    {
       id: 2,
        title: 'Fundraising Portal',
        description: 'A dynamic fundraising intern portal with real-time user stats, leaderboard rankings, referral tracking, and reward progression. Built as a task for SheCanFoundation.', 
        imageUrl: '/projects/image.png',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        gitHub: 'https://github.com/KanishkaJoshi-20/Task1-ShecanFoundation',
        demoUrl: 'https://fundraisingportal.vercel.app/',
    },
    {
       id: 3,
        title: 'GSSOC Contribution - DevSync Dashboard',
        description: 'Login to checkout Dashboard - GSSOC Contribution - DevSync Dashboard is a web application that provides a comprehensive dashboard for managing and monitoring DevSync activities, enhancing collaboration and productivity among developers.', 
        imageUrl: '/projects/devsync.png',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        gitHub: 'https://github.com/KanishkaJoshi-20/DevSync',
        demoUrl: 'https://devsync-one.vercel.app/',
    }
]

function ProjectsSection() {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> Featured <span className='text-primary'>Projects</span></h2>
        <p className='text-center text-muted-foregroun mb-12 max-w-2xl mx-auto'>
          Here are some of my projects, some are in the process of development, for that u can checkout its git hub repo
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
            <div key={project.id ?? key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src={project.imageUrl} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
              </div>

              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, index) => (
                    <span key={index} className='text-xs bg-primary/10 text-white px-2 py-1 rounded-full text-secondary-foreground'>{tag}</span>
                  ))}
                </div>

                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-muted-foreground mb-4'>{project.description}</p>

                <div className='flex justify-between items-center'>
                <div className='flex space-x-4'>
                  <a href={project.demoUrl} target="_blank" className='text-foreground/80 hover:text-primary transition-colors duration-300 '>
                    <ExternalLink size={20}/>
                  </a>
                  <a href={project.gitHub} target="_blank" className='text-foreground/80 hover:text-primary transition-colors duration-300 '>
                    <GithubIcon size={20}/>
                  </a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a href="https://github.com/KanishkaJoshi-20" className='cosmic-button w-fit flex items-center mx-auto gap-2'>Check My Git <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection