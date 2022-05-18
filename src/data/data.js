import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { TiGroupOutline } from 'react-icons/ti'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi'

export const NavbarIconData = [
  {
    icon: AiOutlineHome,
    label: 'Home',
    path: '/'
  },
  {
    icon: AiOutlineUser,
    label: 'User',
    path: '/resume'
  },
  {
    icon: TiGroupOutline,
    label: 'Group',
    path: '/projects'
  },
  {
    icon: BiMessageRoundedDots,
    label: 'Message',
    path: '/contactme'
  }
]

export const ProjectsData = [
  {
    genre_ids: 1,
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
    image: 'https://via.placeholder.com/300x200',
    tecnologies: ['React', 'Nodejs', 'Expressjs']
  },
  {
    genre_ids: 1,
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
    image: 'https://via.placeholder.com/300x200',
    tecnologies: ['React', 'Nodejs', 'Expressjs']
  },
  {
    genre_ids: 2,
    title: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
    image: 'https://via.placeholder.com/300x200',
    tecnologies: ['React', 'Nodejs', 'Expressjs']
  }
]

export const EducationQualityData = [
  {
    title: 'Education 1',
    subtitle: 'Subtitle 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.'
  },
  {
    title: 'Education 2',
    subtitle: 'Subtitle 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.'
  },
  {
    title: 'Education 3',
    subtitle: 'Subtitle 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.'
  }
]

export const SocialData = [
  {
    icon: FiLinkedin,
    label: 'Linkedin',
    path: 'https://www.linkedin.com/in/sergiio-perez/'
  },
  {
    icon: FiGithub,
    label: 'Github',
    path: 'https://github.com/sergiiop'
  },
  {
    icon: FiFacebook,
    label: 'Facebook',
    path: 'https://www.facebook.com/SergiiolPerez/'
  }
]
