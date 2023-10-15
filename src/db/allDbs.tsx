import {
  AiFillHtml5,
  AiOutlineHome,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';
import { BiLogoJavascript, BiLogoReact, BiLogoTypescript } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { LiaTelegramPlane } from 'react-icons/lia';

export const techSkills = [
  {
    id: 1,
    name: 'React.js / Redux',
    url: <BiLogoReact color="var(--accent-focus)" />,
  },
  {
    id: 2,
    name: 'Next.js',
    url: <TbBrandNextjs color="var(--accent-focus)" />,
  },
  {
    id: 3,
    name: 'Typescript',
    url: <BiLogoTypescript color="var(--accent-focus)" />,
  },
  {
    id: 4,
    name: 'HTML / CSS',
    url: <AiFillHtml5 color="var(--accent-focus)" />,
  },
  {
    id: 5,
    name: 'JavaScript',
    url: <BiLogoJavascript color="var(--accent-focus)" />,
  },
];

export const contacts = [
  {
    id: 1,
    name: 'viktoria.murzhak@gmail.com',
    url: <AiOutlineMail color="var(--accent-focus)" />,
  },
  {
    id: 2,
    name: '+380508731028',
    url: <AiOutlinePhone color="var(--accent-focus)" />,
  },
  {
    id: 3,
    name: '@viktoria_murzhak',
    url: <LiaTelegramPlane color="var(--accent-focus)" />,
  },
  {
    id: 4,
    name: 'https://www.linkedin.com/in/viktoria-murzhak/',
    url: <AiOutlineLinkedin color="var(--accent-focus)" />,
  },
  {
    id: 5,
    name: 'Kyiv, Ukraine',
    url: <AiOutlineHome color="var(--accent-focus)" />,
  },
];
