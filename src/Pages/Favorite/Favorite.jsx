import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {

    const [favorite, setFavorite] = useState([]);
    const [noFound, setNoFound] = useState("");


    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorite'));

        if (favoriteItems) {
            setFavorite(favoriteItems);
        } else {
            console.log("NO data Found on this page");
            setNoFound("No data Found")
        }
    }, [])
    console.log(favorite)



    return (
        <div>
            {noFound ? <p className="h-[70vh] flex justify-center items-center text-5xl font-medium ">{noFound}</p> : <div>
                <div className="flex flex-wrap">
                        {
                            favorite.map((phone, idx)=> <FavoriteCard key={idx} phone={phone}></FavoriteCard> )
                        }
                </div>
            </div>}
        </div>
    );
};

export default Favorite;