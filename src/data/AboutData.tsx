import IAbout from "@/interfaces/IAbout";
import {
  BsGithub,
  BsDiscord,
  BsLinkedin,
  BsInstagram,
  BsTelegram,
  BsFacebook,
  BsTwitter,
  BsReddit,
} from "react-icons/bs";

const AboutData: IAbout[] = [
  {
    id: 1,
    logo: <BsGithub size={50} />,
    title: "GitHub",
    username: "AnonymouseHucker29",
    url: "https://www.github.com/AnonymouseHucker29/",
  },
  {
    id: 2,
    logo: <BsLinkedin size={50} fill="#0e76a8" />,
    title: "LinkedIn",
    username: "Brent Baylon",
    url: "https://www.linkedin.com/in/brent-baylon-18066b234/",
  },
  {
    id: 3,
    logo: <BsDiscord size={50} fill="#5165f6" />,
    title: "Discord",
    username: "meowts00",
    url: "https://www.discord.com",
  },
  {
    id: 4,
    logo: <BsInstagram size={50} fill="#fb3958" />,
    title: "Instagram",
    username: "brentokloy",
    url: "https://www.instagram.com/brentokloy/",
  },
  {
    id: 5,
    logo: <BsTelegram size={50} fill="#0088cc" />,
    title: "Telegram",
    username: "@meowts00",
    url: "https://web.telegram.org",
  },
  {
    id: 6,
    logo: <BsFacebook size={50} fill="#1877f2" />,
    title: "Facebook",
    username: "Brent Baylon",
    url: "https://facebook.com/codename9.5brentokloy429",
  },
  {
    id: 7,
    logo: <BsTwitter size={50} fill="#1da1f2" />,
    title: "Twitter",
    username: "@brentokloy_0429",
    url: "https://twitter.com/brentokloy_0429",
  },
  {
    id: 8,
    logo: <BsReddit size={50} fill="#ff4500" />,
    title: "Reddit",
    username: "bB_0429",
    url: "https://www.reddit.com/user/bB_29",
  },
];

export default AboutData;
