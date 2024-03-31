import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export const footerData = [
    {
      title: "contacto",
      items: [
        { text: "afymos@gmail.com", href: "mailto:afymos@gmail.com" },
        { text: "(+34) 926 532 749", href: "tel:926532749" },
      ],
    },
    {
      title: "dirección",
      items: [
        {
          text: "c. Pedro Arias 87, 13630 Socuéllamos (Ciudad Real)",
          href: "https://www.google.com/maps/place/C.+Pedro+Arias,+87,+13630+Socu%C3%A9llamos,+Ciudad+Real/@39.285737,-2.7934746,17z/data=!3m1!4b1!4m6!3m5!1s0xd68f559a43eaaab:0x2895536363daa787!8m2!3d39.285737!4d-2.7908997!16s%2Fg%2F11fx7fcy55?entry=ttu",
        },
      ],
    },
    {
      title: "política de privacidad",
      items: [
        { text: "cookies", to: "/politica-privacidad" },
        { text: "aviso legal", to: "/aviso-legal" },
      ],
    },
  ];
  
  export const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100067093413028",
      icon: <FaFacebookF />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/tv/CKKQgBcIW_Z/",
      icon: <FaInstagram />
    }
  ];