import React from 'react'
import html5Icon from '../../assets/html5.png'
import cssIcon from '../../assets/css.png'
import javascriptIcon from '../../assets/javascript.png'
import typescriptIcon from '../../assets/typescript.png'
import tailwindIcon from '../../assets/tailwind.png'
import reactIcon from '../../assets/react.png'
import nextJsIcon from '../../assets/nextjs.png'
import viteIcon from '../../assets/vite.png'


const HSkillsList = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-4'>
      <div className='centralize'><img src={html5Icon} alt="HTML" className='icon' />HTML</div>
      <div className='centralize'><img src={cssIcon} alt="CSS" className='icon' />CSS</div>
      <div className='centralize'><img src={tailwindIcon} alt="Tailwind CSS" className='icon' />Tailwind CSS</div>
      <div className='centralize'><img src={javascriptIcon} alt="JavaScript" className='icon' />JavaScript</div>
      <div className='centralize'><img src={typescriptIcon} alt="TypeScript" className='icon' />TypeScript</div>
      <div className='centralize'><img src={reactIcon} alt="React.js" className='icon' />React.js</div>
      <div className='centralize'><img src={nextJsIcon} alt="Next.js" className='icon' />Next.js</div>
      <div className='centralize'><img src={viteIcon} alt="Vite" className='icon' />Vite</div>
    </div>
  )
}

export default HSkillsList
