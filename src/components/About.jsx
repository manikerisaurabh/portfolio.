import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const downloadCV = () => {
        // Assuming your CV file name is "your-cv.pdf"
        const downloadLink = document.createElement('a');
        downloadLink.href = '../assets/experience/typescript.png'; // Replace "path/to/your-cv.pdf" with the actual path to your CV file
        downloadLink.download = 'your-cv.pdf'; // Optionally set the downloaded file name
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    I embarked my journey as a B.Tech Computer Science & Engineering 3rd student at Sant Gajanan Maharaj College of  Engineering Mahagaon in 2021. Along the way, I fearlessly explored various fields, including Graphic Designing, Freelancing, and Entrepreneurship. I delved into the world of cutting-edge technologies, such as Cloud computing, React, Angular, Firebase. I also took my passion for technology and leadership to new heights by co-establishing Google Developer Student Clubs and the E-Cell in my college, alongside my equally enthusiastic classmates. At present, I serve GDSC RKMGEC as the Co-Lead and holds the significant responsibility of being the Head  of Coding Club.
                </p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    In a constant pursuit of sharing knowledge and fostering growth, I've organized numerous technical workshops, imparting valuable insights on technologies like Web-Development, Android, and Google Cloud to aspiring learners. With a commitment to personal development and a drive for making a positive impact within the tech community.
                </p>
                {/* <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    I've worked for many projects for my clients as well as my personal projects. I also contributed for the GDSC RKMGEC web page. I have a Instagram page (@codewithbiki) where I create content for those who are just starting with programming and have more that 70k followers. I have learning attitude and growth mindset which helps me to collaborate with people and work for the society.
                </p> */}
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>
                    <AiOutlineCloudDownload />
                    <a href="#" onClick={downloadCV}>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About