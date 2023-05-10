const Contact = () => {
    return (
        <section
            className="relative flex flex-col lg:w-full m-auto items-center h-fit bg-green mt-20 font-opensans"
            id="contact"
        >
            <img
                src="/images/undraw_agreement_re_d4dv.svg"
                alt="illustration"
                className="absolute block left-5 top-[30%] w-[150px] m-auto md:left-0 md:w-[100px] lg:w-[200px] lg:left-[5vw] xl:left-[10vw]"
            />
            <h1 className="mt-10 font-header text-3xl">Let's get in touch</h1>
            <form
                action="https://usebasin.com/f/fcc41a6ec201"
                method="post"
                className="mt-5 flex flex-col gap-10"
            >
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="py-4 px-9 rounded"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="py-4 px-9 rounded"
                        />
                    </div>
                </div>
                <div className="m-auto w-full">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        className="py-3 px-6 w-full h-[200px] rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="border border-dark rounded-full m-auto py-3 px-12 bg-white hover:bg-dark hover:text-white mb-6"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Contact;
