import React from 'react';
import Navbar from '../navbar/Navbar';
import Work from '../Works/Work';
import { Example } from '../Mouse/Example';

const WorkPage = () => {
    return (
        <>
        <div className='w-full lg:rounded-[12px] h-[55vh] lg:h-[603px] relative'>
            <div className='relative z-20 pt-6'>
                <Navbar />
            </div>
            <div className='flex'>
            <div className='lg:px-[55px] absolute lg:m-[25px] lg:rounded-[12px] inset-0 lg:pb-10 bg-[#A055FF] flex flex-col justify-center px-4'>
                <p className='text-6xl lg:text-[220px] 2xl:[280px] font-custom1 leading-tighter text-[#181919]'>
                    OUR WORK
                </p>
                <p className='lg:w-[572px] w-full text-lg lg:text-[18px] font-custom2 leading-[21.6px] text-[#181919] mt-1 lg:mt-[-25px]'>
                    We are currently rebuilding our portfolio to present a smarter, more sustainable way to showcase our work. Reducing our reliance on heavy video, animation and hi-resolution images. Thanks for your patience as we add back in our case studies.
                </p>
            </div>
            <div className='absolute right-5'>
                <Example />
            </div>
            </div>
        </div>
        <Work />
        </>
    );
};

export default WorkPage;
