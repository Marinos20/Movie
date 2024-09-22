import useFetchData from "@/hooks/useFetchData"
import { useState } from "react";


export default function Header() {

         // fetch api
         const { alldata, loading } = useFetchData('/api/getmovies');

         const [searchQuery, setSearchQuery] = useState('');

         const [openSearch, setOpenSearch] = useState(false);


    return <>

    </>
}
