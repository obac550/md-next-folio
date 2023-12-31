import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Law" },
  { skill: "Educator" },
  { skill: "Mentor" },
  { skill: "Writer" },
  { skill: "Author" },
  { skill: "Solidity Smart Contracts" },
  { skill: "NFT" },
  { skill: "Asset Digitisation" },
  { skill: "Web3.js" },
  { skill: "X-Chain" },
  { skill: "Full Stack" },
  { skill: "Headless API's" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-12">
        <h1 className="text-center font-bold text-4xl">
          About
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              A{" "}
              <span className="font-bold">{" Motivated "}</span>
              <span className="font-bold">{"Developer "}</span>& Tech Mentor
            </h1> 
            <p>
              My career began working for the <span className="font-bold text-teal-500">
                Crown Prosecution Service</span> processing London&#39;s Crown and Magistrates Courts warrants.<br></br>
            </p>
            <br />
            <p>
              I left to pursue a <span className="font-bold text-teal-500">Master&#39;s</span> in Interactive
              Media, <i>the Father</i> of the <span className="font-bold text-teal-500">Social Media</span> influencing many young peoples lives today.<br></br>
            </p>
            <br />
            <p> 
            After an I.T career in the <span className="font-bold text-teal-500"> City of London </span> I worked providing<span className="font-bold text-teal-500"> Web Solutions</span> and <span className="font-bold text-teal-500"> Online Services </span>to organisations in the youth, education and charity sectors.
            </p>
            <p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              {" "}
             The Key Is Staying Inspired!
            </h1> 
            </p>
            <p>
            With a passion for tech and desire to always <span className="font-bold text-teal-500">push the limits of what&#39;s possible!</span>{" "} The objective? Providing magical experiences that increase inclusivity and opportunities among London&#39;s NEET&#39;s and Generation Z&#39;s.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <div className="flex flex-wrap flex-row justify-center mt-6 z-10 md:justify-start" >
            <Image
              src="/about-1.jpg"
              alt="desola-lanre-ologun-photography-lagos-nigeria-unsplash"
              width={428}
              height={240}
              className="hidden md:block md:relative md:bottom-4 md:left-0 md:z-6 rounded-lg"
            /></div>
              <h1 className="text-2xl font-bold mb-2">Key Skills - Tech Stack</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
           {/*  <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
