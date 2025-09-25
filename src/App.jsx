  import { useState } from 'react'
  import './App.css'

  function App() {
    const [activePage, setActivePage] = useState('Home');
    return (
  <>     
        <div className='bg-gray-50 w-screen py-2 px-4 text-black font-semibold text-slate-950 text-center rounded-lg flex justify-center gap-2 my-1'>
                <button type="button" className='bg-[#c4afd0] rounded w-20 h-10 font-sans' onClick={() => setActivePage('Home')}>Home</button>
  <button type="button" className='bg-[#ffd076] rounded w-20 h-10' onClick={() => setActivePage('About')}>About</button>
  <button type="button" className='bg-[#97e0cf] rounded w-20 h-10' onClick={() => setActivePage('Contact')}>Contact</button>
        </div> 

          {activePage === 'Home' &&
<div className='bg-[#c4afd0] w-screen p-1 text-center min-h-screen'>
  <h1 className='font-weight-300 mt-55 font-extrabold text-6xl'>HOME</h1>

                <p>Welcome to the Home page!</p>
            </div>
        }
          {activePage === 'About' && 
            <div className='bg-[#ffd076] w-screen p-1 text-center min-h-screen'>
<h1 className='font-weight-300 mt-55 font-extrabold text-6xl'>ABOUT US</h1>

                <p>Learn more about us.</p> 
            </div>}
          {activePage === 'Contact' && 
              <div className='bg-[#97e0cf]  w-screen p-1 text-center min-h-screen'>
<h1 className='font-weight-300 mt-55 font-extrabold text-6xl'>CONTACT US</h1>
                <p>Have questions? We'd love to hear from you. Reach out anytime at</p> 
                 <p className='font-bold text-blue-900'  >jakumar293@student.mcu.edu.ph</p> 

            </div>}
          
  </>
    )
  
  }

  export default App
