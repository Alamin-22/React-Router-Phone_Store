import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {

    const [favorite, setFavorite] = useState([]);
    const [noFound, setNoFound] = useState("");
    const [isShow, setIsShow]= useState(false);
    const [totalPrice, setTotalPrice]= useState(0);


    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorite'));

        if (favoriteItems) {
            setFavorite(favoriteItems);
            const total= favoriteItems.reduce((preValue,CurrentValue)=> preValue + CurrentValue.price,0);
            setTotalPrice(total)
        } else {
            console.log("NO data Found on this page");
            setNoFound("No data Found")
        }
    }, [])
    // console.log(totalPrice)
    // console.log(favorite)

    const handleRemove=()=>{
        localStorage.clear();
        setFavorite([]);
        setNoFound("No data Found");

    }


    return (
        <div>
            {noFound ? <p className="h-[70vh] flex justify-center items-center text-5xl font-medium ">{noFound}</p> : <div>
                {favorite.length>0 && <div>
                    <button onClick={handleRemove} className="btn btn-primary block mx-auto">Delete All Favorites</button>
                    <p className="text-2xl font-medium">Total Price: {totalPrice} USD</p>
                    </div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            isShow? favorite.map((phone, idx)=> <FavoriteCard key={idx} phone={phone}></FavoriteCard> )
                            :
                            favorite.slice(0,4).map((phone, idx)=> <FavoriteCard key={idx} phone={phone}></FavoriteCard> )
                        }
                </div>
                {favorite.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="btn btn-primary block mx-auto my-5">{isShow?"See Less" : "See More"}</button>}


            </div>}
        </div>
    );
};

export default Favorite;