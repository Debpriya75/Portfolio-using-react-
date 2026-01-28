import Heading from "../Heading/Heading";
import TextContainer from "../Container/TextContainer";
import CompetitiveCoding from "../../assets/Services/CompetitiveCoding.png";
import Web from "../../assets/Services/html.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { NavLink } from "react-router-dom";

const containerArr = [
  {
    image: "https://bolby-react.vercel.app/images/service-2.svg",
    heading: "DSA",
    text: "Unlock the power of algorithms and data structures to excel in problem-solving and competitive coding.",
    theme: "bg-yellow-500",
    txtColor: "text-black",
  },
  {
    image: CompetitiveCoding,
    heading: "Competitive Programming",
    text: (
      <>
        Put your algorithmic skills to the test. Check out my{" "}
        <NavLink
          to="https://leetcode.com/u/Debpriya_75/"
          className="text-orange-300 italic"
        >
          LeetCode
        </NavLink>{" "}
        profile for challenges and solutions.
      </>
    ),
    theme: "bg-blue-500",
    txtColor: "text-white",
  },
  {
    image: Web,
    heading: "Web Development",
    text: (
      <>
        See my love for crafting engaging digital experiences. Check out my{" "}
        <NavLink
          to="https://github.com/Debpriya75"
          className="text-blue-600 italic"
        >
          GitHub
        </NavLink>{" "}
        for inspiration.
      </>
    ),
    theme: "bg-slate-50",
    txtColor: "text-black",
  },
];

function Services() {
  return (
    <section className="w-screen md:w-4/5 h-[900px] md:h-screen bg-custom-dark md:float-right flex flex-col justify-evenly">
      <Heading
        faded="services"
        bold="What I Do"
        theme="text-white"
        borderColor="border-orange-500"
      />
      <ScrollAnimation offset={50} animateIn="fadeIn" animateOnce>
        <div className="flex flex-col gap-3 md:gap-0 items-center md:items-stretch md:flex-row justify-center md:justify-evenly px-10 flex-wrap">
          {containerArr.map((temp, index) => (
            <TextContainer
              key={index}
              background={temp.theme}
              width="max-w-80"
              animation="transition duration-500 hover:-translate-y-6 delay-100"
            >
              <img
                className="max-h-14 md:max-h-20 w-auto"
                src={temp.image}
                alt="icon"
              />
              <h1 className={`${temp.txtColor} text-base md:text-xl font-bold`}>
                {temp.heading}
              </h1>
              <p
                className={`${temp.txtColor} text-sm md:text-base text-center`}
              >
                {temp.text}
              </p>
            </TextContainer>
          ))}
        </div>
      </ScrollAnimation>
      <ScrollAnimation offset={100} animateIn="fadeInUp" animateOnce>
        <p className="text-center text-slate-50 text-base md:text-xl font-semibold px-7 md:px-0">
          Looking for a custom job?
          <span
            className="cursor-pointer m-2 text-orange-500 hover:underline"
            onClick={() => {
              window.location.href = "/Contact";
            }}
          >
            Click here
          </span>
          to contact me! 👋
        </p>
      </ScrollAnimation>
    </section>
  );
}

export default Services;
