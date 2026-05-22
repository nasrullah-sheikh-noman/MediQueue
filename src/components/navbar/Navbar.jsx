import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-gray-50 shadow-xl border border-b-2 ">

   
    <div className="container mx-auto flex justify-between items-center text-center py-2 px-3    ">
      <Link href="/" className="text-4xl font-extrabold text-cyan-700">
        MediQueue
      </Link>
      <div className="flex gap-3 text-gray-700">
        <Link href="/about">About</Link>
        <Link href="/tutors">Tutors</Link>
        <Link href="/addtutor">Add Tutor</Link>
        <Link href="/mytutor">My Tutor</Link>
        <Link href="/mybookedsessions">My Booked Sessions</Link>
      </div>
      <div>
        <Link href={"/login"}>
          <Button className={"cursor-pointer"}>Login</Button>
        </Link>
      </div>
    </div>
     </div>
  );
};

export default Navbar;
