import PortfolioPage from '../components/panel/pages/PortfolioPage';

const projects = [
  {
    key: 13,
    id: 13,
    status: 'active',
    title: 'Socialize',
    description: 'Anyone can say anything, except for bad words.',
    cardImagePath: '',
    imageFileName: '',
    imageFilePath: '',
    interactPage: true,
    portfolioPage: false,
    url: 'https://socialeyez-bbac3.web.app',
    url_gitHub: 'https://github.com/veeepi/socialeyez.git',
    techs: ['React', 'Firebase'],
    techIcons: [
      require('../assets/images/tech/icon-react.png'),
      require('../assets/images/tech/icon-firebase.png'),
    ],
  },
  {
    key: 12,
    id: 12,
    status: 'active',
    title: 'Algorithms',
    description: 'Angular app, showcasing some algorithms.',
    cardImagePath: '',
    imageFileName: '',
    imageFilePath: '',
    interactPage: true,
    portfolioPage: false,
    url: 'https://vladgorithms.web.app/',
    url_gitHub: 'https://github.com/veeepi/vladgorithms.git',
    techs: ['Angular', 'Firebase'],
    techIcons: [
      require('../assets/images/tech/icon-angular.png'),
      require('../assets/images/tech/icon-firebase.png'),
    ],
  },
  {
    key: 11,
    id: 11,
    status: 'active',
    title: 'Checkmarks',
    description:
      'User friendly Trademark registration application for a local BC law firm. Search the CIPO database and submit comprehensive application to law firm, using 3rd paprty integrations (Clio, LawPay).',
    cardImagePath: '../../assets/images/projects/Checkmarks.jpg',
    imageFileName: 'Checkmarks.jpg',
    imageFilePath: require('../assets/images/projects/Checkmarks.jpg'),
    interactPage: false,
    portfolioPage: true,
    url: 'https://heuristic-easley-6f0a2b.netlify.app',
    url_gitHub: 'https://github.com/veeepi/checkmarks_frontend',
    techs: ['React', 'ASP.NET', 'SQL', 'Javascript', 'C-Sharp'],
    techIcons: [
      require('../assets/images/tech/icon-react.png'),
      require('../assets/images/tech/icon-aspdotnet.png'),
      require('../assets/images/tech/icon-sql.png'),
    ],
  },
  {
    key: 10,
    id: 10,
    status: 'active',
    title: 'Holistic',
    description:
      'Fitness coach CRM for managing client relationships and session scheduling. Completed in less than a week.',
    cardImagePath: '../../assets/images/projects/Holistic.jpg',
    imageFileName: 'Holistic.jpg',
    imageFilePath: require('../assets/images/projects/Holistic.jpg'),
    interactPage: false,
    portfolioPage: true,
    url: 'https://holistic-a123b.web.app/',
    url_gitHub: 'https://github.com/veeepi/passion-project-veeepi',
    techs: ['React', 'Firebase', 'Javascript'],
    techIcons: [
      require('../assets/images/tech/icon-react.png'),
      require('../assets/images/tech/icon-firebase.png'),
    ],
  },
  {
    key: 9,
    id: 9,
    status: 'active',
    title: 'Moist-Speak',
    description:
      'Social Media application with political theme. Implements expected functionality, such as posts (image and text), comments, likes and vote.',
    cardImagePath: '../../assets/images/projects/Vladculator.jpg',
    imageFileName: 'Vladculator.jpg',
    imageFilePath: require('../assets/images/projects/MoistSpeak.jpg'),
    interactPage: false,
    portfolioPage: true,
    url: '',
    url_gitHub: 'https://github.com/veeepi/front-end-moist-speaking',
    techs: [
      'React',
      'NodeJS',
      'MongoDB',
      'Amazon Web Services',
      'AWS Lambda',
      'AWS API Gateway',
      'AWS DynamoDB',
      'AWS S3',
    ],
    techIcons: [
      require('../assets/images/tech/icon-react.png'),
      require('../assets/images/tech/icon-nodejs.png'),
      require('../assets/images/tech/icon-mongodb.png'),
      require('../assets/images/tech/icon-aws.png'),
    ],
  },
  {
    key: 8,
    id: 8,
    status: 'active',
    title: 'Diamond Hands',
    description:
      'Stock trading app using the Finnhub.io API, allowing authenticated users to manage a Stock Portfolio, buy/sell stocks and keep a stock Watchlist.',
    cardImagePath: '../../assets/images/projects/Vladculator.jpg',
    imageFileName: 'Vladculator.jpg',
    imageFilePath: require('../assets/images/projects/DiamondHands.jpg'),
    interactPage: false,
    portfolioPage: true,
    url: '',
    url_gitHub: 'https://github.com/veeepi/mobile-project-team-2',
    techs: ['React-Native', 'Firebase', 'Javascript'],
    techIcons: [
      require('../assets/images/tech/icon-react.png'),
      require('../assets/images/tech/icon-firebase.png'),
    ],
  },

  {
    key: 7,
    id: 7,
    status: 'active',
    title: 'WishBucket',
    description:
      'Full-Stack App allowing users to create, edit, share and delete wishlists.',
    cardImagePath: '../../assets/images/projects/WishBucket.jpg',
    imageFileName: 'WishBucket.jpg',
    imageFilePath: require('../assets/images/projects/WishBucket.jpg'),
    interactPage: false,
    portfolioPage: true,
    url: 'https://wishbucket.netlify.app/',
    url_gitHub: 'https://github.com/veeepi/dotnetproject-team6_netproject',
    techs: ['React', 'ASP.NET', 'SQL', 'C-Sharp', 'Javascript'],
    techIcons: [
      require('../assets/images/tech/icon-react.png'),
      require('../assets/images/tech/icon-aspdotnet.png'),
      require('../assets/images/tech/icon-sql.png'),
    ],
  },
  {
    key: 6,
    id: 6,
    status: 'active',
    title: 'SHREDZ',
    description:
      'Front-end implementation of a fitness hub for interacting with Health & Wellness professionals and their services.',
    cardImagePath: '../../assets/images/projects/Shredz.jpg',
    imageFileName: 'Shredz.jpg',
    imageFilePath: require('../assets/images/projects/Shredz.jpg'),
    interactPage: false,
    portfolioPage: true,
    url: 'https://lucid-hawking-f430e1.netlify.app/',
    url_gitHub: 'https://github.com/veeepi/front-end-project-boomshakalaka',
    techs: ['HTML5', 'CSS', 'SASS', 'Javascript'],
    techIcons: [
      require('../assets/images/tech/icon-html5.png'),
      require('../assets/images/tech/icon-sass.png'),
      require('../assets/images/tech/icon-javascript.png'),
    ],
  },
  {
    key: 5,
    id: 5,
    status: 'active',
    title: 'CHILL',
    description:
      'Front-end application consuming The Movie Database (TMDb) API, displaying movies matching selected criteria.',
    cardImagePath: '../../assets/images/projects/Chill.jpg',
    imageFileName: 'Chill.jpg',
    imageFilePath: require('../assets/images/projects/Chill.jpg'),
    interactPage: false,
    portfolioPage: true,
    url: 'https://xenodochial-wilson-4239db.netlify.app/',
    url_gitHub: 'https://github.com/veeepi/lab-2---react-veeepi',
    techs: ['React', 'Javascript'],
    techIcons: [
      require('../assets/images/tech/icon-javascript.png'),
      require('../assets/images/tech/icon-react.png'),
    ],
  },
  {
    key: 4,
    id: 4,
    status: 'active',
    title: 'perfectissimo',
    description: 'Interactive menu for a cozy restaurant.',
    cardImagePath: '../../assets/images/projects/Perfectissimo.jpg',
    imageFileName: 'Perfectissimo.jpg',
    imageFilePath: require('../assets/images/projects/Perfectissimo.jpg'),
    interactPage: false,
    portfolioPage: true,
    url: 'https://hopeful-roentgen-612fae.netlify.app/',
    url_gitHub:
      'https://github.com/veeepi/lab-7-intermediate-javascript-group_i',
    techs: ['HTML5', 'CSS', 'Javascript', 'JQuery'],
    techIcons: [
      require('../assets/images/tech/icon-javascript.png'),
      require('../assets/images/tech/icon-jquery.jpg'),
    ],
  },
  {
    key: 3,
    id: 3,
    status: 'active',
    title: 'Untamed Romania',
    description: "A webpage showcasing the author's country of origin.",
    cardImagePath: '../../assets/images/projects/UntamedRomania.jpg',
    imageFileName: 'UntamedRomania.jpg',
    interactPage: false,
    portfolioPage: true,
    techs: ['HTML5', 'CSS', 'SASS', 'Javascript', 'JQuery'],
    imageFilePath: require('../assets/images/projects/UntamedRomania.jpg'),
    url: 'https://infallible-hodgkin-d8fc87.netlify.app/',
    url_gitHub: 'https://github.com/veeepi/lab-8-introduction-to-jquery-veeepi',
    techIcons: [
      require('../assets/images/tech/icon-html5.png'),
      require('../assets/images/tech/icon-sass.png'),
      require('../assets/images/tech/icon-javascript.png'),
      require('../assets/images/tech/icon-jquery.jpg'),
    ],
  },
  {
    key: 2,
    id: 2,
    status: 'active',
    title: 'Bears of Bad News',
    description: 'A webpage for a local fake news paper.',
    cardImagePath: '../../assets/images/projects/BOBN.jpg',
    imageFileName: 'BOBN.jpg',
    imageFilePath: require('../assets/images/projects/BOBN.jpg'),
    interactPage: false,
    portfolioPage: true,
    techs: ['HTML5', 'Bootstrap'],
    url: 'https://pensive-jepsen-f44ba1.netlify.app',
    url_gitHub:
      'https://github.com/veeepi/lab-4-introduction-to-bootstrap-veeepi',
    techIcons: [
      require('../assets/images/tech/icon-html5.png'),
      require('../assets/images/tech/icon-bootstrap.png'),
    ],
  },
  {
    key: 1,
    id: 1,
    status: 'active',
    title: 'Vladculator',
    description: 'A simple calculator application in C#.',
    cardImagePath: '../assets/images/projects/Vladculator.jpg',
    imageFileName: 'Vladculator.jpg',
    imageFilePath: require('../assets/images/projects/Vladculator.jpg'),
    interactPage: false,
    portfolioPage: true,
    url: '',
    url_gitHub:
      'https://github.com/veeepi/net-essentials-lab-1-calculator-veeepi',
    techs: ['C-Sharp'],
    techIcons: [require('../assets/images/tech/icon-csharp.png')],
  },
];
export default projects;
