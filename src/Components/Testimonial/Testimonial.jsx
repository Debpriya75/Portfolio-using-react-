import React from "react";
import Marquee from "react-fast-marquee";
import TextContainer from "../Container/TextContainer";
import Heading from "../Heading/Heading";
import FemaleClient from "../../assets/Testimonial/Female_avatar.png";
import HTML from "../../assets/Testimonial/html5Icon.png";
import CSS from "../../assets/Testimonial/css3Icon.png";
import REACT from "../../assets/Testimonial/React.png";
import JS from "../../assets/Testimonial/Javascript.png";
import Redux from "../../assets/Testimonial/Redux.png";
import MySQL from "../../assets/Testimonial/Mysql.png";
import SpringBoot from "../../assets/Testimonial/springboot.png";
import JAVA from "../../assets/Testimonial/java.png";
import GitHub from "../../assets/Testimonial/github.png";
import ScrollAnimation from "react-animate-on-scroll";

// Array of objects for the client details of the testimonial section
const clientArr = [
  {
    img: "https://bolby-react.vercel.app/images/avatar-1.svg",
    client: "Kiran Samanta",
    Prof: "Software Developer",
    comment: "You make the process fun and interesting. Good luck! 👍",
  },
  {
    img: FemaleClient,
    client: "Pratiksha Biswas",
    Prof: "Software Developer",
    comment: "You did an amazing job. I'm very happy with the result. 😊",
  },
  {
    img: "https://bolby-react.vercel.app/images/avatar-3.svg",
    client: "John Doe",
    Prof: "Business Owner",
    comment: "I enjoy working with you and learn so much.",
  },
  {
    img: "https://bolby-react.vercel.app/images/avatar-2.svg",
    client: "Smith Johnson",
    Prof: "Business Analyst",
    comment:
      "I'll definitely recommend you to others. You're a great developer!!",
  },
];

// Array of objects containing the technology images used in the page.
const techArr = [
  {
    img: HTML,
    alt: "HTML",
  },
  {
    img: CSS,
    alt: "CSS",
  },
  {
    img: JS,
    alt: "JS",
  },
  {
    img: REACT,
    alt: "REACT",
  },
  {
    img: Redux,
    alt: "REDUX",
  },
  {
    img: SpringBoot,
    alt: "SpringBoot",
  },
  {
    img: MySQL,
    alt: "MYSQL",
  },
  //{
  // img: mongoDB,
  //alt: "mongoDB",
  // },
  {
    img: JAVA,
    alt: "Java",
  },
  {
    img: GitHub,
    alt: "GitHub",
  },
];

// Settings for the card slider animation. Declared here in a spread operator
const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

function Testimonial() {
  return (
    <section className="w-screen md:w-[80%] h-screen mt-7 md:mt-0 px-5 md:px-0 bg-custom-dark md:float-right overflow-x-hidden flex flex-col justify-evenly">
      <Heading
        faded="Testimonial"
        bold="What Others Say"
        theme="text-white"
        borderColor="border-orange-500"
      />
      <ScrollAnimation animateIn="bounceInLeft" animateOnce>
        <Marquee>
          {clientArr.map((temp, index) => (
            <TextContainer
              key={index}
              background="bg-slate-600"
              width="w-80 md:max-w-96"
              height="max-h-96"
              animation="mx-5"
            >
              <TextContainer
                background="bg-transparent"
                width="w-60 md:max-w-72"
                height="max-h-54"
              >
                <img
                  className="w-24 h-24 md:max-h-28 md:max-w-28"
                  src={temp.img}
                  alt="client"
                />
                <p className="text-slate-50 font-semibold text-xl">
                  {temp.client}
                </p>
                <p className="text-slate-50 opacity-70 text-sm md:text-base">
                  {temp.Prof}
                </p>
              </TextContainer>
              <TextContainer background="bg-white" width="w-72 md:max-w-80">
                <p className="text-black text-sm md:text-base">
                  {temp.comment}
                </p>
              </TextContainer>
            </TextContainer>
          ))}
        </Marquee>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="grid grid-cols-5 place-items-center gap-5 my-10 md:px-20 aspect-[1 / 1]">
          {techArr.map((temp, index) => (
            <img
              key={index}
              className="h-10 md:h-14 w-auto opacity-40"
              src={temp.img}
              alt={temp.alt}
            />
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Testimonial;
