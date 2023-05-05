const Hero = () => {
    return (
        <section className="mt-24 flex flex-col lg:w-8/12 m-auto items-center text-center">
            <h1 className="text-4xl font-bold font-header">
                Java Full Stack Developer
            </h1>
            <p className="mt-6 text-xl font-opensans">
                I develop and code fullstack solutions, and I love what I do.
            </p>
            <img
                src="/images/portrait.jpeg"
                alt="image of me"
                className="w-3/12 mt-14 rounded-full"
            />
            <img
                src="/images/programmer.svg"
                alt="Image of programming"
                width={"90%"}
            />
        </section>
    );
};

export default Hero;
