import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ahmed Ali',
  lang: 'en',
  description: 'Ahmed Ali', 
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Ahmed',
  subtitle: 'Software Developer',
  cta: 'Explore',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hi! Welcome to my site. I'm Ahmed Ali, a fullstack software developer. My web applications are built with meticulous detail to perform exceptionally across all hardware.",
  paragraphTwo: 'MERN stack development.',
  paragraphThree: 'Experienced in: HTML/CSS | JS | Node | React | jQuery | Express | Python | WordPress | MySQL | Mongo | Elasticsearch | Gatsby | Flask | Pandas | Numpy | Jest | GraphQL | REST API | Serverless | AWS | ETL | PWAs | TDD | Handlebars | Jinja | Jenkins | GIT | Linux | Apache | Docker | Airtable | Integromat | Jira/Confluence',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pangea-chat-img.png',
    title: 'Pangea',
    info: 'My most recent project Pangea, a chat application that connects people around the world. This application enables users who speak different languages to communicate with each other through a translation feature. The application also offers many other features. To test login with Username: Batman & Password: password',
    info2: 'MERN Stack application built with Chat Engine API',
    url: 'https://pangea-chat.herokuapp.com/',
    repo: 'https://github.com/Aali0/pangea-chat', // The button wont show if no repo is listed
  },
  {
    id: nanoid(),
    img: 'espero-shot.png',
    title: 'Espero',
    info: 'The second project I worked on, an uplifting application that provides the user with a quote. Espero is an elegant application with a simple & straightforward UI. It provides a user the quote of the day and the user may also then select various categories, which then provide a random quote in that category ',
    info2: 'MVC file structure built with NodeJS, Express, MySQL, Sequelize',
    url: 'https://espero2.herokuapp.com/',
    repo: 'https://github.com/Aali0/motivate-me/tree/Ali',
  },
  {
    id: nanoid(),
    img: 'vv-shot.png',
    title: 'Virtual Vacation',
    info: 'This application is the first project I worked on, it enables users to take a virtual vacation. Users can search cities and then receive information regarding the destination',
    info2: 'Built with HTML, CSS, JS',
    url: 'https://aali0.github.io/virtual_vacation/',
    repo: 'https://github.com/Aali0/virtual_vacation',
  },
  {
    id: nanoid(),
    img: 'budget-tracker.png',
    title: 'Budget Tracker',
    info: 'An application that enables users to track their spending by storing transactions, which can be viewed on a graph',
    info2: 'MVC file structure built with NodeJS, Express, MongoDB, Mongoose',
    url: 'https://the-budget-tracking.herokuapp.com/',
    repo: 'https://github.com/Aali0/budget-tracker',
  },
  {
    id: nanoid(),
    img: 'fitness-tracker.png',
    title: 'Fitness Tracker',
    info: 'An application that enables users to track their workouts',
    info2: 'MVC file structure built with NodeJS, Express, MongoDB, Mongoose',
    url: 'https://daily-workout-log.herokuapp.com/',
    repo: 'https://github.com/Aali0/workout-tracker',
  },
  {
    id: nanoid(),
    img: 'discord-bot.jpg',
    title: 'Discord Bot',
    info: 'The Hot Bot is a discord bot that provides encouragement to users when needed',
    info2: 'Built with Python',
    url: '',
    repo: 'https://github.com/Aali0/discord.hotBot',
  },
  {
    id: nanoid(),
    img: 'note-warrior.png',
    title: 'Note Taker',
    info: 'The Note Warrior is an application that enables users to input and save notes',
    info2: 'Built with NodeJS and Express',
    url: 'https://note-warrior.herokuapp.com/',
    repo: 'https://github.com/Aali0/note-taker',
  },
  {
    id: nanoid(),
    img: 'work-day-scheduler.png',
    title: 'Work Day Scheduler',
    info: 'An application that enables users to schedule their work day',
    info2: 'Built with HTML, CSS, JS',
    url: 'https://aali0.github.io/work-day-scheduler/',
    repo: 'https://github.com/Aali0/work-day-scheduler',
  },
  {
    id: nanoid(),
    img: 'first-portfolio.png',
    title: 'First Portfolio',
    info: 'The initial portfolio that I built, it offers a unrefined user interface. But still achieves necessary functionality',
    info2: 'Built with HTML, CSS, JS',
    url: 'https://aali0.github.io/responsive-portfolio',
    repo: 'https://github.com/Aali0/responsive-portfolio',
  },
];

// CONTACT DATA
// export const contactData = {
//   cta: '',
//   btn: '',
//   email: '',
// };

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ahmed-ali-b717571b7/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Aali0',
    },
  ],
};

