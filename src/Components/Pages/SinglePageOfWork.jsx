import React, { useEffect, useState } from 'react';
import { data } from '../Works/works';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';

const SinglePageOfWork = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [soundStates, setSoundStates] = useState({});
    const { workID } = useParams();
    const work = data?.find((ad) => ad.id == workID); // Find the current work using workID

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 2); // Adjust if needed
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    if (!work) {
        return (
            <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>
                WORK NOT FOUND. BAD REQUEST!
            </div>
        );
    }

    const { title, cover, first, second, third, fourth, secondDescription, fifth, sixth, seventh, eight, nine, ten } = work; // Extract title, main image, and first media

    const toggleSound = (index) => {
        setSoundStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <>
            <div className='w-full lg:rounded-[12px] h-[75vh] lg:h-[603px] relative'>
                <div className='relative z-20 pt-6'>
                    <Navbar />
                </div>

                {/* Image Background */}
                <div className='absolute lg:p-[25px] inset-0 lg:pb-10'>
                    <img
                        src={cover} // Use the main image from work
                        className='w-full h-[75vh] lg:h-[603px] rounded-b-[14px] lg:rounded-[14px] object-cover'
                        alt={title} // Use title as alt text for accessibility
                    />
                </div>

                {/* Text content positioned over the image */}
                <div className='absolute lg:pl-20 lg:mt-32 inset-0 flex flex-col justify-center items-start px-5 lg:px-10'>
                    <p className='text-6xl lg:text-[220px] 2xl:text-[280px] font-custom1 leading-tighter text-[#181919] '>
                        {title}
                    </p>
                    <p className='lg:w-[472px] w-full text-lg lg:text-[18px] font-custom2 leading-[21.6px] text-[#181919] mt-1 lg:mt-[-25px] z-30'>
                        {work.description} {/* Description from work */}
                    </p>
                </div>
            </div>

            <FirstPart
                first={[first, second, third]} // Wrap first in an array if it's a single image or video
                soundStates={soundStates}
                toggleSound={toggleSound}
                workID={workID}
            />

            <SecondPart
                second={[fourth]}
                secondDescription={secondDescription}
                soundStates={soundStates}
                toggleSound={toggleSound}
            />

            <ThirdPart
                third={[fifth, sixth, seventh, eight, nine, ten]} // Wrap first in an array if it's a single image or video
                soundStates={soundStates}
                toggleSound={toggleSound}
                workID={workID}
            />
        </>
    );
};

export default SinglePageOfWork;
