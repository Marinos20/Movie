import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { BiCameraMovie } from "react-icons/bi";

export default function Aside() {

    const router = useRouter();
    const [clicked , setClicked] = useState(false);
    const [activelink , setActivelink] = useState('/');



    const handleLinkClik = (link) => {
        setActivelink(link);
        setClicked(false);

    }
    useEffect(() => {
        //update active link state when the page is reloaded
        setActivelink(router.pathname)

    }, [router.pathname])




    return <>
    <div className="aside">
        <div className="logo flex">
        <BiCameraMovie />
        <Link href="/"><h1> MOVIES</h1></Link>
        </div>
        <ul className="mt-2">
            <Link href="/" className={activelink === '/' ? 'active' : ''} onClick={() => handleLinkClik('/')}><li><div><IoHomeSharp /></div>Dashboard</li></Link>
            <Link href="/movies" className={activelink === '/movies' ? 'active' : ''} onClick={() => handleLinkClik('/movie')}><li><div>< BiSolidCameraMovie /></div>Movies</li></Link>
            <Link href="/addmovie" className={activelink === '/addmovie' ? 'active' : ''} onClick={() => handleLinkClik('/addmovie')}><li><div><MdOutlinePlaylistAdd /></div>Add</li></Link>
            <Link href="/draft" className={activelink === '/draft' ? 'active' : ''} onClick={() => handleLinkClik('/draft')}><li><div><RiDraftFill /></div>Draft</li></Link>

        </ul>
        <h3 className="mt-2">Account Page</h3>
        <ul className="mt-2">
            <Link href="/profile" className={activelink === '/profile' ? 'active' : ''} onClick={() => handleLinkClik('/profile')}><li><div><FaUser /></div>Profile</li></Link>
            <Link href="/auth" className={activelink === '/auth' ? 'active' : ''} onClick={() => handleLinkClik('/auth')}><li><div><PiSignInBold /></div>SingIn</li></Link>

        </ul>
    </div>
   
    </>
}