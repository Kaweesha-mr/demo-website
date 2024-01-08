import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2 p-4">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"> Grow With Data</h1>
                <div className="md:text-4xl sm:text-3xl text-xl font-bold">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Fast, flexiable,financing for BTC',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Fast, flexiable,financing for BTE',
                            1000,
                            'Fast, flexiable,financing for ETH',
                            1000,
                            'Fast, flexiable,financing for Doge',
                            1000
                        ]}
                        
                        
                        wrapper="p"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>

                <p className='md:text-2xl text-xl font-bold text-grey-500'>Monitor your data ANALYTICS to increase revenue for BTB,BTC & SASS platforms</p>

            </div>
        </div>

    );
}

export default Hero;