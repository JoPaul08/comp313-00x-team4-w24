import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import NavItems from "@/components/shared/NavItems";
import MobileNav from "@/components/shared/MobileNav";

const Header = () => {
    return (
       
        <header className="w-full">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    <Image src="/logo.png" alt="logo" width={110} height={25}/>
                </Link>
                
                <SignedIn>
                    <nav className="md:flex-between w-full max-w-xs">
                       <NavItems></NavItems> 
                    </nav>
                </SignedIn>
                
                <div className="flex w-32 justify-end gap-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"></UserButton>
                        {/*<MobileNav></MobileNav>*/}
                    </SignedIn>
                   
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}
export default Header
