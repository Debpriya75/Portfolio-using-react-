import React, { useState } from "react";
import Heading from "../Heading/Heading";
import BlogArtwork_1 from "../../assets/Blog/Blog1.gif";
import BlogArtwork_2 from "../../assets/Blog/Blog2.jpg";
import BlogArtwork_3 from "../../assets/Blog/Blog3.jpg";
import BtnContainer from "../Container/BtnContainer";
import ShowMore from "./ShowMore";
import ScrollAnimation from "react-animate-on-scroll";

// Array of objects for the blog details
const blogArr = [
  {
    img: BlogArtwork_1,
    title: "My first internship experience",
    label: "Blog",
    icon: "link",
    url: "https://medium.com/@dpriya.in.india/my-experience-throughout-my-web-development-and-designing-internship-journey-provided-by-oasis-f51597c33d3e",
    category: "initial",
  },
  {
    img: BlogArtwork_2,
    title: "Creating my first temperature conveter website",
    label: "Video",
    icon: "videocam",
    url: "https://www.linkedin.com/posts/debpriya-ghosh-3207732a1_internship-oasisinfobyte-webdevelopment-activity-7306678128741912576-NNFt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjn8QgBZCY3E76X9W9WY2Uy693maMOtu-M",
    category: "initial",
  },
  {
    img: BlogArtwork_3,
    title: "Work in progress",
    label: "Blog",
    icon: "link",
    url: "#",
    category: "initial",
  },
  // Additional part starts here
  {
    img: BlogArtwork_3,
    title: "Work in progress",
    label: "Blog",
    icon: "link",
    url: "#",
    category: "additional",
  },
  {
    img: BlogArtwork_1,
    title: "Work in progress",
    label: "Video",
    icon: "videocam",
    url: "#",
    category: "additional",
  },
  {
    img: BlogArtwork_2,
    title: "Work in progress",
    label: "Blog",
    icon: "link",
    url: "#",
    category: "additional",
  },
];

function Blog() {
  const [showMore, setShowMore] = useState(false);

  const renderBlogs = (category) =>
    blogArr
      .filter((temp) => temp.category === category)
      .map((temp, index) => (
        <ShowMore
          key={index}
          img={temp.img}
          title={temp.title}
          label={temp.label}
          icon={temp.icon}
          url={temp.url}
        />
      ));

  return (
    <section className="w-screen md:w-[80%] h-auto md:h-[870px] py-16 md:py-0 bg-white md:float-right flex flex-col justify-around overflow-hidden">
      <Heading
        faded="Blogs"
        bold="What I Write"
        theme="text-black"
        borderColor="border-blue-500"
      />
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="flex flex-col gap-0 md:gap-5">
          <ul className="flex flex-col md:flex-row justify-evenly items-center md:items-stretch flex-wrap">
            {renderBlogs("initial")}
          </ul>
          <ul
            className={`${showMore ? "flex justify-evenly flex-wrap relative" : "hidden absolute"}`}
          >
            {renderBlogs("additional")}
          </ul>
        </div>
      </ScrollAnimation>
      <ScrollAnimation offset={100} animateIn="fadeIn" duration={2} animateOnce>
        <div className="flex justify-center mt-7 md:mt-0">
          <BtnContainer onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </BtnContainer>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Blog;
