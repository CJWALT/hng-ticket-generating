import Image from 'next/image'
import Link from 'next/link'
// import Logo from '@/logo.png'


const Nav = () => {
  return (
    <div className='mx-auto my-4 flex flex-row justify-between w-[90%] border-2 border-[#197686] rounded-[12px] py-[12px] px-[16px]'>
        <div> 
            <Image src='/logo.png' alt='logo' width={100} height={100}/>
        </div>
      <nav className='hidden'>
        <Link href={'/'}>Events</Link>
        <Link href={'/'}>My Tickets</Link>
        <Link href={'/'}>About Project</Link>
        
        </nav>

        <div>
                <button className='bg-white py-[12px] px-[16px] rounded-[12px]'>MY TICKETS  </button>
            </div>

    </div>
  )
}

export default Nav
