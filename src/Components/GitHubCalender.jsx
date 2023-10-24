import React from 'react'
import GitHubCalendar from "react-github-calendar";
import Title from './Title';

const GitHubCalender = () => {
    const TitleText =
        <h1 className=" text-gray-800 font-bebas-neue text-4xl dark:text-white pb-6" >
            Pixels of <strong className="text-fadeMainTheme">Progress</strong>
        </h1>
    return (
        <section className='flex justify-center items-center flex-col text-fadeMainTheme px-5'>
            <Title text={TitleText} id={1} />
            <GitHubCalendar
                username="Saurabh-8585"
                blockSize={15}
                fontSize={10}
                blockMargin={5}
                theme={{
                    light: ['hsl(0, 0%, 92%)', '#F59E0B'],
                    dark: ['#0F0F0F', '#F59E0B'],
                }}
                text="dark"
            />
        </section>
    )
}

export default GitHubCalender