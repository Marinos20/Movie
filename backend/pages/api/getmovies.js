import { mongooseConnect } from "@/lib/mongoose";
import { Movie } from "@/models/Movie";

// api for fetching data from mongodb database
export default async function handle(req, res) {
  // if authentificated , connect to mongoDB

  await mongooseConnect();

  const { method } = req;

    //WHEN POST REQ
  if (method === "POST") {

    const { title, slug, bgposter, smposter,description,rating,duration,year,genre,
            language,subtitle,size,quality,
            youtubelink,category,watchonline,downloadlink,status } = req.body;

        const movieData = await Movie.create({
            title, slug, bgposter, smposter,description,rating,duration,year,genre,
            language,subtitle,size,quality,
            youtubelink,category,watchonline,downloadlink,status 

        })
        res.json(movieData)
  }
    //WHEN GET REQ

  if (method === 'GET') {
    if (req.query?.id){
        res.json(await Movie.findById(req.query.id))
    } else {
        res.json((await Movie.find()).reverse())
    }

  }
  //WHEN UPDATE REQ

    if (method === 'PUT'){
        //WHEN UPDATE THEN ADD _ID TO FIND MOVIE

        const { _id, title, slug, bgposter, smposter,description,rating,duration,year,genre,
                language,subtitle,size,quality,
                youtubelink,category,watchonline,downloadlink,status } = req.body;

                await Movie.updateOn({_id} , {
                    title, slug, bgposter, smposter,description,rating,duration,year,genre,
                    language,subtitle,size,quality,
                    youtubelink,category,watchonline,downloadlink,status

                });

                res.json(true);


    }
    //WHEN DELETE REQ

    if (method === 'DELETE'){
        if (req.query?.id) {
            await Movie.delectOne({_id: req.query?.id})
            res.json(true);

        }

    }
}
