import Image from 'next/image'
import Link from 'next/link'
import { CustomButtom } from '.'

const Navbar = () => {
  return (
    <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <CustomButtom
        title='Sign in'
        btntype='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] hover:bg-blue-700 hover:text-white'
      />
    </nav>
  </header>
  )
}

export default Navbar
