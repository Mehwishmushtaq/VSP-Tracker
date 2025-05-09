import BannerImage from '../../assets/images/bannerimage.png';

export default function Banner() {
    return (
        <div className='w-full my-[5rem] bg-[#D8D8D8] flex justify-center items-center h-[615px] relative z-10'>
            <img src={BannerImage} alt="Banner" className="h-[696px] relative z-20 mt-[5rem]" />
        </div>
    )
}