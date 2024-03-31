import { FaFacebookF, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

export const linksData = [
  {
    key: 1,
    name: "Nosotros",
    url: "nosotros",
  },
  {
    key: 2,
    name: "Terapias",
    url: "terapias",
  },
  {
    key: 3,
    name: "Dona",
    url: "donaciones",
  },
];

export const socialIcons = [
  {
    url: "https://www.instagram.com/tv/CKKQgBcIW_Z/",
    icon: <FaInstagram />,
    label: "ir a Instagram",
  },
  {
    url: "https://www.facebook.com/profile.php?id=100067093413028",
    icon: <FaFacebookF />,
    label: "ir a Facebook",
  },
  {
    url: "https://www.youtube.com/@afymosasociacion2328",
    icon: <FaYoutube />,
    label: "ir a YouTube",
  },
  {
    url: "https://acortar.link/RGYfzQ",
    icon: <FaSpotify />,
    label: "ir a Spotify",
  },
];
