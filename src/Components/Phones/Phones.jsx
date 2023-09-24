import PropTypes from 'prop-types';
import PhonesCard from './PhonesCard';




const Phones = ({phones}) => {
    return (
        <div className="py-5">
            <h1 className="text-3xl text-center mt-10">All Categories Phones</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    phones?.map((phone, idx)=> <PhonesCard key={idx} phone={phone}></PhonesCard>)
                }
            </div>
        </div>
    );
};


Phones.propTypes={
    phones: PropTypes.array.isRequired,
}
export default Phones;