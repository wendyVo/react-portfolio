import { v4 as uuidv4 } from "uuid";
import travelImg from "../images/travelImg.png";
import weatherImg from "../images/weather-dashboard-main.PNG";
import restaurateurImg from "../images/restaurateur.png";
import iTHubImg from "../images/itHub.png";
import scheduleImg from "../images/scheduler-main.PNG";
import burgerImg from "../images/burger.png";
import empDirImg from "../images/emp-directory.png"

const ProjectData = [
    {
        id: uuidv4(),
        title: "IT Hub",
        description: 
        "IT Hub is a full stack MERN application with authentication where the user have to create an account and login to create a post. After login the user will be taken to their dashboard page with their profile pictures and information. In their dashboard, they can create a post, remove post, add to Favorite and remove favorite.",
        img: iTHubImg,
        tech: "MERN Stacks : MongoDb, Express, React, Node; Semantic React; Passport for authentication; React Quill for rich Text Editor; React –particles; Cloudinary",
        gitHubLink: "https://github.com/wendyVo/IT-Hub",
        demoLink: "https://it-hub-0305.herokuapp.com/"
    },
    {
        id: uuidv4(),
        title: "Restaurateur",
        description: 
        "Restaurateur is a restaurant management app allowing the user to easily manage employees, order new stock and manage table orders. This application is using Handlebars for front end and Nodejs, Sequelize and MySQL for backend.",
        img: restaurateurImg,
        tech: "Handlebars, Bootstrap, Node.js, Sequelize,MySql, Hroku, Travis, Eslint, Day.js",
        gitHubLink: "https://github.com/wendyVo/Project02.git",
        demoLink: "https://frozen-woodland-65100.herokuapp.com/"
    },
    {
        id: uuidv4(),
        title: "Travel Planner Application",
        description: 
        "In this group project, we built a web application from scratch by integrating data received from multiple server-side API requests. Working as a team, we have learned agile development methodologies and implement feature and bug fixes using git branch worklflow and pull requests.",
        img: travelImg,
        tech: "Fomantic UI, JQuery, JavaScript, GitHub, Web API: Flight Search: Amadeus API: https://developers.amadeus.com/, Currency Exchange: http://exchangeratesapi.io/",
        gitHubLink: "https://github.com/phamthomas12/Project-1.git",
        demoLink: "https://phamthomas12.github.io/Project-1/"
    },
    {
        id: uuidv4(),
        title: "Employee Directory",
        description: 
        "The employee directory has been created with React. The application UI has many components, manage component state and respond to user event. Given a table of random users generated from the Random User API, when the user loads the page, a table of employees should render. The user should be able to: Sort the table by at least one category, filter the users by at least one property.",
        img: empDirImg,
        tech: "Node.js, React, Random User API, Bootstrap, Github",
        gitHubLink: "https://github.com/wendyVo/employee-directory",
        demoLink: "https://wendyvo.github.io/employee-directory/"
    },
    {
        id: uuidv4(),
        title: "Eat-Da-Burger",
        description: 
        "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. This application is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM . This application has been followed the MVC design pattern; use Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.",
        img: burgerImg,
        tech: "Node.js, MySQL, JAWSQL, Express, Handlebars, ORM",
        gitHubLink: "https://github.com/wendyVo/burger",
        demoLink: "https://burger-2305.herokuapp.com/"
    },
    {
        id: uuidv4(),
        title: "Weather DashBoard",
        description: 
        "Weather Dashboard is a weather outlook that display current and future 5-days weather conditions for multiple cities. This application is using third-party API OpenWeather API to retrieve weather data for the city. In addition, localStorage has been used to store city name in the search history section.",
        img: weatherImg,
        tech: "OpenWeather API, BootStrap, Javascript, JQueryJS, HTML, localStorage",
        gitHubLink: "https://github.com/wendyVo/weather-dashboard.git",
        demoLink: "https://wendyvo.github.io/weather-dashboard/"
    },
    {
        id: uuidv4(),
        title: "Work day Scheduler",
        description: 
        "This is a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Moment.js library has been used to work with date and time.",
        img: scheduleImg,
        tech: "HTML, CSS, Jquery, Moment.js",
        gitHubLink: "https://github.com/wendyVo/weather-dashboard.git",
        demoLink: "https://wendyvo.github.io/weather-dashboard/"
    },
];

export default ProjectData;