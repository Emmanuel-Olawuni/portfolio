import SpliBillPay from '../images/portfolio/splitbills.png'
import RealEstate from '../images/portfolio/davidrealestate.png'
import Immernet from '../images/portfolio/immernet.png'
import Vplug from '../images/portfolio/vplug.png'
import Jadoo from '../images/portfolio/jadoo.png'

export const portfolioDetails = [
  {
    id: 1,
    title: "Split Bill Pay",
    desc: "A bill splitting app where you upload your receipt, and it gets read by the software, split the bills with your friends and share the link. Payment gateway inclusive.",
    link: "https://splitbillpay.com/",
    image: SpliBillPay,
    tag: ["Laravel", "Veryfi OCR" , 'Paypal', 'Tailwind' , 'MySQL'],
  },
  {
    id: 2,
    title: "David Real Estate",
    desc: "A USA Real Estate listing website with Stellar MLS RESO API",
    link: "https://davidjohnstonrealestate.com/",
    image: RealEstate,
    tag: ["Laravel", "Stellar Mls" , 'MySQL', 'Tailwind'],
  },
  {
    id: 3,
    title: "Candela Partners Metaverse Landing Page",
    desc: "A landing page for Candela Partners: The Metaverse VC",
    link: "https://immernet.org/ventures",
    image: Immernet,
    tag: ["HTML", "CSS" , 'Javascript'],
  },
  {
    id: 4,
    title: "Vplug Ecommerce website",
    desc: "A personal React E-commerce project",
    link: "https://vplug.netlify.com/",
    image: Vplug,
    tag: ["React Js", "Tailwind" , 'Axios'],
  },
  {
    id: 5,
    title: "Jadoo Travel Landing Page",
    desc: "A personal React Travel Landing Page ",
    link: "https://jadoo-travel-website.netlify.app/",
    image: Jadoo,
    tag: ["React Js", "Tailwind" , 'Framer Motion'],
  },
];
