import VSTPFlow from '../../assets/images/processFlow.svg';

export default function Banner() {
    return (
        <div className='w-full bg-[#D8D8D8] h-[280px] sm:h-[550px] md:h-[641px] relative mt-12 sm:mt-24 md:mt-52'>
            {/* Green Banner Section */}
            <div className="flex justify-center items-center bg-[#4B9656] text-white text-center px-4 py-6 sm:py-10 mx-8 sm:mx-16">
                <div className="max-w-5xl w-full">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-tight">
                        FROM DATA INPUTS TO INSIGHTFUL REPORTS
                    </h2>
                    <h3>Mehwish</h3>
                    <p className="italic text-sm sm:text-base mt-1 sm:mt-2">
                        The <span className="font-semibold">VSPT</span> Process
                    </p>
                </div>
            </div>

            {/* Image Section */}
            <div className='flex justify-center items-start relative overflow-hidden'>
                <img
                    src={VSTPFlow}
                    alt="processFlow"
                    className="relative mt-[-2rem] sm:mt-[-6rem] md:mt-[-8rem] z-10 w-90 max-w-screen-xl"
                style={{
                        imageRendering: 'crisp-edges', 
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                />
            </div>
        </div>
    );
}
