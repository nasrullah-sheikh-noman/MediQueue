import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <>
      <div className='container mx-auto flex justify-between items-center text-center py-2 px-3'>
        <Link href="/" className='text-4xl font-extrabold text-cyan-700'>MediQueue</Link>
        <div className='flex gap-3 text-gray-700'> 
          <Link href="/about">About</Link>
          <Link href="/tutors">Tutors</Link>
          <Link href="/addtutor">Add Tutor</Link>
          <Link href="/mytutor">My Tutor</Link>
          <Link href="/mybookedsession">My Booked Sessions</Link>
        </div>
        <div>
          <Button className={"cursor-pointer"}>Login</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;