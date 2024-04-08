import React, { useEffect } from 'react';
import Sandesh from '../assets/projects/sandeshh.png';
import Gist from '../assets/projects/gist.png';
import Chatbot from '../assets/projects/chatbot.png';
import Ide from '../assets/projects/ide.png';
import ShopEasy from '../assets/projects/shopeasy.png';
import Upscale from '../assets/projects/upscale.png';
import chatApp from '../assets/projects/chat-app.png';
import journeyNest from '../assets/projects/journeyNest.png';
import storeManagement from '../assets/projects/store-management.png';
import codeEditor from '../assets/projects/code-editor.png';
import bankManagement from '../assets/projects/bank-management.png';
import restro from '../assets/projects/online-restro.png';
import collegeSearch from '../assets/projects/college-search.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      id: 1,
      src: chatApp,
      desc: "Chat App made using Express +  ReactJS + Socket.io +  Tailwind CSS + JWT authentication...",
      demo: "https://chat-app-4kpz.onrender.com/",
      code: "https://github.com/manikerisaurabh/chat-app",
      working: "https://www.linkedin.com/posts/saurabh-manikeri-624b3a284_mernstack-socketio-realtimechat-activity-7182436685496954881-Kswy?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 2,
      src: journeyNest,
      desc: "This Full-Stack Travelling/Listing website is made using Express, EJS, Tailwind CSS, MongoDb....",
      demo: "https://journeynest.onrender.com/listings",
      code: "https://github.com/manikerisaurabh/Journey-Nest",
      working: "https://www.linkedin.com/posts/saurabh-manikeri-624b3a284_journeynest-technologie-mernstack-activity-7172490848360710144-cLaP?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 3,
      src: storeManagement,
      desc: "Store-management a Full-Stack project using Angular + DotNet + SQL + C# ",
      demo: "",
      code: "https://github.com/manikerisaurabh/Store-Management",
      working: "https://www.linkedin.com/posts/saurabh-manikeri-624b3a284_fullstackdeveloper-project-angular-activity-7150247067842412545-Cg3G?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 4,
      src: codeEditor,
      desc: "CODE EDITOR is a Editor which works on browser made using Express + HTML +JS",
      code: "https://github.com/manikerisaurabh/Code-Editor",
      working: "https://www.linkedin.com/posts/saurabh-manikeri-624b3a284_project-codeeditor-webdevelopment-activity-7140765615958507520-Qe6J?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 5,
      src: bankManagement,
      desc: "Bank Management made up with JAVA + MYSql",
      demo: "",
      code: "https://github.com/manikerisaurabh/Bank-Management-System",
      working: "https://www.linkedin.com/posts/saurabh-manikeri-624b3a284_java-mysql-learnings-activity-7139323602314657792-RpsW?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 6,
      src: restro,
      desc: "Online Restaurant",
      demo: "",
      code: "https://github.com/manikerisaurabh/Restaurant-Web-Page",
      working: "https://www.linkedin.com/posts/saurabh-manikeri-624b3a284_html-css-css-activity-7106682609283334145-7hEc?utm_source=share&utm_medium=member_desktop"
    },

  ];

  return (
    <div name="projects" className='h-auto max-h-screen-lg bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {projects.map(({ id, src, desc, demo, code, working }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
              <p className='p-2 text-justify font-extralight'>{desc}</p>
              <div className='flex items-center justify-center'>
                {demo && (
                  <button className='w-1/3 ml-2 px-3 py-2 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
                  </button>
                )}
                {code && (
                  <button className='w-1/3 px-3 py-2 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code} target="_blank" rel="noopener noreferrer">Code</a>
                  </button>
                )}
                {working && (
                  <button className='w-1/3 px-3 py-2 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={working} target="_blank" rel="noopener noreferrer">Working</a>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
