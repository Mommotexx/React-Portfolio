const About = () => {
    return (
        <section className="flex flex-col lg:w-full m-auto items-center h-[60vh] md:h-[40vh] bg-green -mt-10 md:-mt-20">
            <section className="flex flex-col m-auto w-9/12 md:w-5/12">
                <h2 className="text-center font-header font-bold text-2xl mb-6 -mt-20">
                    Hi I'm Marcus. Nice to meet you!
                </h2>
                <p className="font-opensans text-md leading-relaxed">
                    I am a 23 year old man, and I have been highly interested in
                    technology since I was young. In the recent years I have
                    attended a Full-stack Java Bootcamp, and I work good with
                    others in a team and by myself. I'm a curious person and I
                    love to learn new technologies
                </p>
            </section>
        </section>
    );
};

export default About;
