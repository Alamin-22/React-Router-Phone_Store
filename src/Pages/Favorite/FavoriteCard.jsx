import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const FavoriteCard = ({phone}) => {
    console.log(phone)

    const { image, phone_name, brand_name, price, } = phone || {};

    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        {brand_name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {phone_name}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {price}
                    </p>
                    <div className='space-x-3'>
                        <Link className="inline-block" href="#">
                            <button  className="flex btn btn-secondary" type="button">
                                Add To Favorite
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4" >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </Link>
                        <Link to="/" className='btn btn-secondary'>Back Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteCard;