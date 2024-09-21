
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
    const [year, setYear] = useState('');
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

    const resolutions  = ["480p" , "720p" , "1080p" , "4k"];

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

    // slug function , url for every space will be generate - for every time press space 
    // don't forget marinos 

    const handleSlugChange = (ev) => {
        const inputValue = ev.target.value;

        // Replace spaces with hyphens
        const newSlug =  inputValue.replace(/\s+/g, '-');

        setSlug(newSlug)
    }





   
    return <>
        <Head>
            <title>Add Movie page</title>
        </Head>
        <form className="addmovieform">
        <div className="formdata w-100 flex flex-sb mt-3 flex-left">

            {/* for left  side*/}
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
                <div className={showInputs['720p']? 'dresolbtn active' : 'dresolbtn'} onClick={()=> toggleInputVisibility('720p')}>
                    {showInputs['720p'] ? 'Hide 720p' : 'Show 720p'}
                </div>
                <div className={showInputs['1080p']? 'dresolbtn active' : 'dresolbtn'} onClick={()=> toggleInputVisibility('1080p')}>
                    {showInputs['1080p'] ? 'Hide 1080p' : 'Show 1080p'}
                </div>
                <div className={showInputs['4k']? 'dresolbtn active' : 'dresolbtn'} onClick={()=> toggleInputVisibility('4k')}>
                    {showInputs['4k'] ? 'Hide 4k' : 'Show 4k'}
                </div>
               </div>
               {resolutions ? <>{resolutions.map(resolution => (
                <div key={resolution} className="w-100"> 
                {showInputs[resolution] && (
                    <>
                    <input type="text"
                            id={`downloadlink ${resolution}`}
                            placeholder={`${resolution} Download link`}
                            value={setDownloadlink[resolution]}
                            onChange={ev => handleInputChange(resolution, ev.target.value)}
                    
                    
                    />
                    </>
                )}

                </div>

               ))}</> : null}
            </div>
            {/* Movie status  (Draft or publish*/}
            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="status">Status</label>
                <div className="flex gap-05">
                    <input type="radio" 
                    id="draft"
                    name="status"
                    value="draft"
                    checked={status === "draft"}
                    onChange={(e) => setStatus(e.target.value)}
                    
                    />
                    <label htmlFor="draft">Draft</label>
                </div>

                <div className="flex gap-05">
                    <input type="radio" 
                    id="publish"
                    name="status"
                    value="publish"
                    checked={status === "publish"}
                    onChange={(e) => setStatus(e.target.value)}
                    
                    />
                    <label htmlFor="publish">Publish</label>
                </div>
            </div>


            </div>
                {/* for right  side*/}
            <div className="w-50 flex flex-col flex-left">
                {/* Movie small  Poster*/}

                <div className="w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="smposter">Main Poster</label>
                    <input 
                        id="smposter"
                        placeholder="smposter image link"
                        value={smposter}
                        onChange={ev => setSmposter(ev.target.value)}
                    
                    
                    />
                </div>

                {/* Movie slug  url*/}

                <div className="w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="slug">Slug (url) Poster</label>
                    <input 
                        id="slug"
                        placeholder="Url of the movie"
                        value={slug}
                        onChange={handleSlugChange}
                    
                    
                    />
                </div>

                {/* Release year  if  movie*/}

                <div className="w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="year">Release Year</label>
                    <input 
                        id="year"
                        placeholder="year"
                        value={year}
                        onChange={ev => setYear(ev.target.value)}
                    
                    
                    />
                </div>

                {/* youtube  emble link */}

                <div className="w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="youtubelink">Youtube link</label>
                    <input 
                        id="youtubelink"
                        placeholder="youtubelink"
                        value={youtubelink}
                        onChange={ev => setYoutubelink(ev.target.value)}
                    
                    
                    />
                </div>


                {/* language of the  movie */}

                <div className="w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="language"> Language</label>
                    <select name="language" id="language">
                        <option value="">Select language</option>
                        <option value="Fongbé (ORG)">Fongbé</option>
                        <option value="Minan">Minan</option>
                        <option value="Sahouè">Sahouè</option>
                        <option value="Bariba">Bariba</option>
                        <option value="Fongbé">Fongbé </option>
                        <option value="Français">Français</option>
                        <option value="Anglais">Anglais</option>
                        <option value="Dual audio [Fongbé] + [français]">Dual audio [Fongbé] + [français]</option>
                        <option value="Dual audio [Bariba] + [français]">Dual audio [Bariba] + [français]</option>
                        
                    </select>
                </div>

                {/* Quality  of the  movie */}

                <div className="w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="quality">Quality of movie</label>

                    <select name="quality" id="quality">
                        <option value="">Select Quality</option>
                        <option value="480p || 720p || 1080p -WEB-DL">480p || 720p || 1080p ---WEB-DL</option>
                        <option value="480p || 720p || 1080p || 2160P ---WEB-DL">480p || 720p || 1080p || 2160P ---WEB-DL</option>
                        <option value="480p || 720p || 1080p -HDTC">480p || 720p || 1080p -HDTC</option> 

                        
                        
                    </select>

                </div>



            </div>

        </div>
        </form>



    </>
}

