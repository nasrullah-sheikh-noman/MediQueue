"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const { 
    data: session, 
    isPending
  } = authClient.useSession() 
  console.log("session", session);
  const user = session?.user;
  console.log("user", user);

  function Spinner({ className, ...props }) {
    return (
      <LoaderIcon
        role="status"
        aria-label="Loading"
        className={cn("size-4 animate-spin", className)}
        {...props}
      />
    )
  }

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
          {
            isPending ? 
              <div className="flex items-center gap-4">
                <Spinner />
              </div>
            :
            user ? 
            <div className="flex gap-2">
              <h2 className="text-lg font-semibold">{user?.name}</h2>
              <div>
                 <Avatar>
                  <AvatarImage
                    src={user?.image}
                    alt={user?.name}
                    className="grayscale"
                  />
                  <AvatarFallback>N/A</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            : 
            <Link href={"/login"}>
              <Button className={"cursor-pointer"}>Login</Button>
            </Link>

          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
