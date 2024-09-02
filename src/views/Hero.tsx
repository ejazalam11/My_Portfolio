// assets
//@ts-ignore
import homePageImg from "../assets/home-page.svg";
//@ts-ignore
import homePageIllustation from "../assets/hero-illustration.svg";
//@ts-ignore
import downloadIcon from "../assets/download-btn-icon.svg";
//@ts-ignore
import my from "../assets/my.png";

// components
import { Button } from "../components";

// react-simple-typewriter
//@ts-ignore
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col 
          xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl
              font-bolt text-textPrimary uppercase"
          >
            Creative
            <br />
            <span className="text-secondary">
              <Typewriter
                words={["Developer", "Designer", "Blogger"]}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={150}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >
            <Button secondary>
              <a
                href="https://www.fiverr.com/ejazalam259?up_rollout=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire me
              </a>
            </Button>

            <Button icon={downloadIcon}>
              <a
                href="https://drive.google.com/file/d/1CJck6I3kLsGiHnPyr3xkfqR0frkHEuj3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={my}
          alt=""
          className="max-w-full sm:max-w-[401px] rounded-full"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Hero;
