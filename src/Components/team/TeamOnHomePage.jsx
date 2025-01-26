import React from 'react';
import image1 from "../Assets/team-11.png";
import image2 from "../Assets/taulant.png";
import image3 from "../Assets/team-3.png";
import image4 from "../Assets/team-4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TeamOnHomePage = () => {
    const teamMembers = [
        { id: 1, name: 'Capra Creative', role: "CREATIVE DIRECTOR", image: image1 },
        { id: 2, name: 'Taulant Hajdari', role: "CO FOUNDER / ILLUSTRATOR", image: image2 },
        { id: 3, name: 'Enes Ramaxhiku', role: "Motion Designer", image: image3 },
        { id: 4, name: 'Gentrit Mehmeti', role: "SENIOR GRAPHIC & UI/UX DESIGNER", image: image4 },
    ];

    // Custom Left Arrow
    const CustomLeftArrow = ({ onClick }) => (
        <button
    className="absolute flex justify-center button-shadow items-center left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#6BECD0] border border-[#181919] text-white rounded-full shadow-md"
    onClick={onClick}
  >
    <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L5 14L16 25" stroke="#181919" strokeWidth="6" />
    </svg>
  </button>
    );

    // Custom Right Arrow
    const CustomRightArrow = ({ onClick }) => (
        <button
        className="absolute flex justify-center button-shadow items-center right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#6BECD0] border border-[#181919] text-white rounded-full shadow-md"
        onClick={onClick}
      >
        <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3L14 14L3 25" stroke="#181919" strokeWidth="6" />
        </svg>
      </button>
    );

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="px-4">
            <div className="w-full lg:h-[713px] 2xl:h-[100vh] bg-[#A055FF] px-[15px] mt-24 rounded-[16px] text-center flex flex-col justify-center items-center text-white">
                <h1 className="text-2xl lg:text-[100px] text-[#181919] mb-6 font-custom1">
                    WE TAKE CARE OF EACH OTHER
                </h1>
                <div className="mt-10 flex justify-center items-center">
                    <button className="bg-[#DAFF00] leading-[21.6px] font-custom w-[164px] button-shadow text-[18px] rounded-[18px] h-[42px] flex justify-center items-center border-[2px] border-[#181919] text-[#181919]">
                        View More
                    </button>
                </div>

                <div className="relative w-full mt-12">
                    <Carousel
                        responsive={responsive}
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                        infinite
                        autoPlay={false}
                        containerClass="carousel-container"
                        itemClass="px-4"
                    >
                        {teamMembers.map((member) => (
                            <div key={member.id} className="flex flex-col items-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-auto"
                                />
                                <p className="mt-6 text-[#DAFF00] font-custom text-[20px] uppercase">
                                    {member.name}
                                </p>
                                <p className="text-[16px] text-[#181919] lg:w-52 font-semibold uppercase font-custom">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default TeamOnHomePage;
