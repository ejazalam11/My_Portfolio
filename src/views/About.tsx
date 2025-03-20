// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";
import abou from "../assets/abou.jpg"

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-11"
      >
        <div className="flex-1 flex flex-col gap-2">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-semibold text-textPrimary"
            >
              About <span className="text-secondary"> me</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            Greetings! I'm Ejaz Alam, a dedicated React developer specializing in JavaScript, TypeScript, and proficient in HTML and CSS. With a keen eye for design and expertise in Tailwind CSS, I bring ideas to life, creating seamless and engaging web experiences. Let's collaborate to turn your vision into a digital reality!
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <SocialMediaIcon imgSrc={facebookIcon} title="Facebook"  link="https://www.facebook.com/profile.php?id=100010796734220"/>
            <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" link="https://www.instagram.com/ejax_alam/" />
            <SocialMediaIcon imgSrc={twitterIcon} title="Twitter" link="" />
            <SocialMediaIcon imgSrc={youtubeIcon} title="YouTube"  link="https://www.youtube.com/channel/UClT8qO4aYK-zEpOFOO-6czQ"/>
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={abou}
            alt=""
            className="max-w-full sm:max-w-[402px]"
          />
        </div>
      </div>

      <div className="absolute bottom-1 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
