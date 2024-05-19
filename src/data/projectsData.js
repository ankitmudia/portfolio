import QuizApplication from "./../assets/portfolioImages/QuizApplication.png";
import DashBoard from "./../assets/portfolioImages/DashBoard.png";
import NoPreview from "./../assets/portfolioImages/NoPreview.png"

const ProjectsData = [
  {
    id: "dashboard",
    img: DashBoard,
    name: "DashBoard",
    stack: ["< MaterialUI />", "< React.js />", "< d3  >"],
    live: "https://assiduus--courageous-trifle-0afe3b.netlify.app/",
    source: "https://github.com/ankitmudia/Dashboard.git",
    description:
      "The Dashboard project, built using React.js, Material UI, and D3 for charts, offers a user-friendly platform for data analysis and visualization. From monitoring sales performance to tracking key metrics and exploring trends, this dashboard equips users with the necessary tools to make informed decisions and drive business success.",
  },
  {
    id: "quiz",
    img: QuizApplication,
    name: "Quiz Application",
    stack: ["< MaterialUI />", "< React.js />", "< d3  >"],
    live: "https://josh-talks-y6ts.vercel.app/",
    source: "https://github.com/ankitmudia/josh-talks.git",
    description:
      "Overall, the Quiz Application provides users with a dynamic and engaging quiz experience, leveraging a user-friendly layout, seamless navigation, and comprehensive end-of-quiz reporting. By integrating dynamic data sourcing and responsive design principles, the application delivers a versatile platform suitable for various quiz scenarios and user preferences.",
  },
  {
    id: "jwt",
    img: NoPreview,
    name: "JWT Authentication Using React and Node",
    stack: ["< Node.js />", "< React.js />"],
    live: "#",
    source: "https://github.com/ankitmudia/jwtReactAndNode.git",
    description:
      "This project showcases Authentication and Authorization through jwt token and is built using Nodejs in backend where all the token management takes place and ReactJs in frontend where token is decrypted and used for login and logout.",
  },
];

export default { ProjectsData };
