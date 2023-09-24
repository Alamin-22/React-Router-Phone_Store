
const Error = () => {
    return (
        <div className="h-screen  flex justify-center items-center">
            <div className="text-center space-y-5">
                <h1 className="text-5xl">Oops Something Went Wrong!!</h1>
                <p className="text-3xl text-red-500">Route Not Found</p>
            </div>
        </div>
    );
};

export default Error;