"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { loginGithub, logoutGithub } from "@/app/actions";

const MobileNav = ({ user }: {
    user: {
        id: string,
        name: string
    }
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="md:hidden flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center gap-5 text-black mt-2 pt-2 border-t-2 transition-all duration-500 ease-in-out">
          {user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <button onClick={logoutGithub}>
                <span>Logout</span>
              </button>

              <Link href={`/user/${user?.id}`}>
                <span>{user?.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={loginGithub}>Login</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
