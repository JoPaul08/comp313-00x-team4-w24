import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const MobileNav = () => {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">MENU</SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                   
                </SheetContent>
            </Sheet>

        </nav>
    )
}
export default MobileNav
