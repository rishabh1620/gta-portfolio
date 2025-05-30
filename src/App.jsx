import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lenis from "lenis";
import "remixicon/fonts/remixicon.css";
import "lenis/dist/lenis.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiTelegram2Line } from "react-icons/ri";
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandTailwind,
  TbBrandAngular,
  TbBrandMysql,
  TbBrandAzure,
  TbBrandFirebase,
  TbBrandMongodb,
  TbBrandGit,
  TbBrandGithub,
  TbBrandVscode,
} from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { Tooltip, Fade } from "@mui/material";
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { title: "Typescript", icon: <TbBrandTypescript /> },
  { title: "Javascript", icon: <TbBrandJavascript /> },
  { title: "Nextjs", icon: <TbBrandNextjs /> },
  { title: "ReactNative", icon: <TbBrandReactNative /> },
  { title: "Tailwind", icon: <TbBrandTailwind /> },
  { title: "Nodejs", icon: <TbBrandNodejs /> },
  { title: "Express", icon: <SiExpress /> },
  { title: "Azure", icon: <TbBrandAzure /> },
  { title: "Firebase", icon: <TbBrandFirebase /> },
  { title: "Mysql", icon: <TbBrandMysql /> },
  { title: "Git", icon: <TbBrandGit /> },
  { title: "Github", icon: <TbBrandGithub /> },
  { title: "Vscode", icon: <TbBrandVscode /> },
  { title: "Mongodb", icon: <TbBrandMongodb /> },
  { title: "Angular", icon: <TbBrandAngular /> },
];

function App() {
  const [showContent, setShowContent] = useState(false);

  // Intro Animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  // Main GSAP + Mousemove Animations
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.2,
      x: "-50%",
      bottom: "-85%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
      onComplete: () => {
        gsap.to(".character", {
          scrollTrigger: {
            trigger: ".cntnr",
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
          scale: 2.0,
          ease: "none",
        });
      },
    });

    gsap.to(".limg", {
      scrollTrigger: {
        trigger: ".cntnr",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      xPercent: -15,
      ease: "none",
    });

    gsap.to(".rg", {
      scrollTrigger: {
        trigger: ".cntnr",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      xPercent: 40,
      ease: "none",
    });

    gsap.to(".telegram", {
      scrollTrigger: {
        trigger: ".button-hire",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      scale: 12.5,
      z: -100,
      ease: "none",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
      gsap.to(".header-1", {
        x: xMove * 2,
      });
    });
  }, [showContent]);

  useEffect(() => {
    if (!showContent) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: document.body });

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, [showContent]);

  return (
    <>
      {/* SVG Mask Intro */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  RT
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* Main Content */}
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            {/* Navbar */}
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rishabh Tiwari
                </h3>
              </div>
            </div>

            {/* Images & Text */}
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt="sky"
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt="bg"
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] leading-none -ml-40">next</h1>
                <h1 className="text-[12rem] leading-none ml-20">react</h1>
                <h1 className="text-[12rem] leading-none -ml-40">node</h1>
              </div>
              <img
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
                src="./rishabhbg.png"
                alt="character"
              />
            </div>

            {/* Bottom Bar */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              {/* <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt="ps5"
              /> */}
              <div className="absolute scale-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
                {skills.map((skill) => (
                  <Tooltip
                    slots={{
                      transition: Fade,
                    }}
                    slotProps={{
                      transition: { timeout: 600 },
                    }}
                    placement="top"
                    arrow
                    key={skill.title}
                    title={skill.title}
                  >
                    {skill.icon}
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[0.6] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./tranzitalogo.png"
                  alt="img"
                />
                <h1 className="absolute text-2xl bottom-[13%] left-[58%] -translate-x-1/2 -translate-y-1/2">
                  tranzita systems
                </h1>
              </div>
              <div className="rg w-[30%] py-30">
                <div className="header-1">
                  <h1 className="text-8xl">
                    SDE 1<span className="text-[22px]">02/2024 - Present</span>,
                  </h1>
                  <h1 className="text-6xl">full stack developer</h1>
                </div>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Expert in React, Next.js, Node.js; built scalable apps.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Delivered impactful PoCs with AI, focused on performance, UX,
                  and cross-functional execution.
                </p>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Proficient in TypeScript, Python, SQL; skilled with Git,
                  Copilot, Langchain, etc.
                </p>
                <button className="bg-yellow-500 pl-10 pr-12 py-10 text-black mt-10 text-4xl flex items-center gap-2 hover:scale-[1.04] transition-transform duration-700 ease-in-out cursor-crosshair button-hire">
                  <RiTelegram2Line className="scale-0 telegram" />
                  Contact Me, Phewww...
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
