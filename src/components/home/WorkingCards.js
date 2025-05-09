export default function WorkingCards() {
    return (
        <div className="relative">
            <div className="bg-primary h-[100%] md:h-[60%] absolute w-full"></div>
            <div className="relative max-w-7xl mx-auto px-4 pt-16">
                {/* Title Section */}
                <div className="text-center mb-6 md:mb-12">
                    <h3 className="text-white text-sm uppercase tracking-wider mb-2">WHAT WE ARE WORKING FOR</h3>
                    <h2 className="text-white text-3xl font-bold">HOW VSP TRACKER PRODUCTIVITY WORKS</h2>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10 min-h-[220px]">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-secondary">
                            <span className="text-primary font-semibold">1</span>
                        </div>
                        <h3 className="text-center text-3xl font-semibold mt-4 mb-2">Easy Setup</h3>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-secondary">
                            <span className="text-green-700 font-semibold">2</span>
                        </div>
                        <h3 className="text-center text-3xl font-semibold mt-4 mb-2">Simple Accurate Data Capture</h3>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg relative mb-3">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-secondary">
                            <span className="text-green-700 font-semibold">3</span>
                        </div>
                        <h3 className="text-center text-3xl font-semibold mt-4 mb-2">Real Time Results</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}   