// mui
import { Tooltip } from "@mui/material";

// react
import { FC } from "react";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
  link:string;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ imgSrc, title, link }) => {
  return (
    <Tooltip title={title} placement="bottom" arrow>
      <div
        className="flex items-center justify-center h-12 w-12 rounded-full bg-icons cursor-pointer
        hover:bg-secondary transition-all ease-linear duration-300"
      >
        <a href={link} target="blank">
        <img src={imgSrc} alt="" /> 
        </a>
      </div>
    </Tooltip>
  );
};

export default SocialMediaIcon;
