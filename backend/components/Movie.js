
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";



export default function Movie() {

    const [redirect, setRedirect] = useState(false);
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [bgposter, setBgposter] = useState('');
    const [smposter, setSmposter] = useState('');
    const [titlecategory, setTitlecategory] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [duration, setDuration] = useState('');
    const [genre, setgenre] = useState([]);
    const [language, setLanguage] = useState('');
    const [subtitle, setsubtitle] = useState('');
    const [size, setsize] = useState('');
    const [quality, setQuality] = useState('');
    const [youtubelink, setYoutubelink] = useState('');
    const [category, setCategory] = useState('');
    const [watchonline, setWatchonline] = useState('');
    const [quadownloadlinklity, setDownloadlink] = useState({
        "480p": "",
        "720p": "",
        "180p": "",
        "4k": ""
    });
    //not use for database
    const [showInputs, setShowInputs] = useState({
        "480p": false,
        "720p": false,
        "180p": false,
        "4k": false,
    });
    const [status, setStatus] = useState('');





   
    return <>
        <Head>
            <title>Add Movie page</title>
        </Head>
        <form className="addmovieform">
        <div className="formdata w-100 flex flex-sb mt-3 flex-left">
            {/* movie background image */}
            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="bgposter">background Poster</label>
                <input type="text" 
                id="bgposter"
                 placeholder="bgposter image link"/>
            </div>
        </div>
        </form>



    </>
}

