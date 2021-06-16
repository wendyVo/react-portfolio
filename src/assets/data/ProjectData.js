import { v4 as uuidv4 } from "uuid";
import travelImg from "../images/travelImg.png";
import weatherImg from "../images/weather-dashboard-main.PNG"

const ProjectData = [
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
        title: "Weather DashBoard",
        description: 
        "Weather Dashboard is a weather outlook that display current and future 5-days weather conditions for multiple cities. This application is using third-party API OpenWeather API to retrieve weather data for the city.",
        img: weatherImg,
    },
    {
        id: uuidv4(),
        title: "Weather DashBoard 2",
        description: 
        "Weather Dashboard is a weather outlook that display current and future 5-days weather conditions for multiple cities. This application is using third-party API OpenWeather API to retrieve weather data for the city.",
        img: weatherImg,
    },
    {
        id: uuidv4(),
        title: "Travel Planner Application",
        description: 
        "In this group project, we built a web application from scratch by integrating data received from multiple server-side API requests. Working as a team, we have learned agile development methodologies and implement feature and bug fixes using git branch worklflow and pull requests.",
        img: travelImg,
    },
];

export default ProjectData;