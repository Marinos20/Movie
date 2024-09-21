
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


    // Download link functions

    const handleInputChange = (resolution , value) => {
        setDownloadlink(prevstate => ({
            ...prevstate,
            [resolution] : value
        }));
    };

    const toggleInputVisibility= resolution => {
        setShowInputs(prevstate => ({
            ...prevstate,
            [resolution] : !prevstate[resolution]
        }));
    };





   
    return <>
        <Head>
            <title>Add Movie page</title>
        </Head>
        <form className="addmovieform">
        <div className="formdata w-100 flex flex-sb mt-3 flex-left">
            <div className="w-50 flex flex-col flex-left ">
                            {/* movie background image */}
            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="bgposter">background Poster</label>
                <input type="text" 
                id="bgposter"
                 placeholder="bgposter image link"
                 value={bgposter}
                 onChange={ev => setBgposter(ev.target.value)}/>
            </div>
                        {/* movie title */}
                        <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="title">Movie title</label>
                <input type="text" 
                id="title"
                 placeholder="title"
                 value={title}
                 onChange={ev => setTitle(ev.target.value)}/>
            </div>

                        {/* movie description /storyline image */}
                        <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="description">Description</label>
                <textarea type="text" 
                id="description"
                 placeholder="description"
                 value={description}
                 onChange={ev => setDescription(ev.target.value)}/>
            </div>
                     {/* movie rating */}
                     <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="rating">Rating</label>
                <input type="number" 
                id="rating"
                 placeholder="rating"
                 value={rating}
                 onChange={ev => {
                    //ensure the input dose not exceed 10.0
                    let newValue= ev.target.value <= 10.0 ? ev.target.value : 10.0;
                    // ensure the input is not less than 0
                    newValue =  newValue >= 0? newValue : 0 ;
                    setRating(newValue);
                 }}
                 step="0.1" //define the step increment as 0.1
                 max= "10.O" //set the maximum value to 10.0
                 min = "0" // set the minimum value to 0
                 />
            </div>

                 {/* movie duration  */}
                <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="duration">Duration</label>
                <input type="text" 
                id="duration"
                 placeholder="duration"
                 value={duration}
                 onChange={ev => setDuration(ev.target.value)}/>
            </div>

                {/* movie watchonline link  */}
                <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="watchonline">Watchonline link</label>
                <input type="text" 
                id="watchonline" 
                 placeholder="watchonline"
                 value={watchonline}
                 onChange={ev => setWatchonline(ev.target.value)}/>
            </div>

                            {/* movie downloadlink   */}
                            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="downloadlink">Downloadlink </label>
               <div className="flex gap-1">
                <div className={showInputs['480p']? 'dresolbtn active' : 'dresolbtn'} onClick={()=> toggleInputVisibility('480p')}>
                    {showInputs['480p'] ? 'Hide 480p' : 'Show 480p'}
                </div>
               </div>
            </div>


            </div>

        </div>
        </form>



    </>
}

