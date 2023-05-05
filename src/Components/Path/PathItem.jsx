import React from "react";

const PathItem = ({ title, icon }) => {
    return (
        <article className="flex flex-col items-center text-center m-auto md:w-2/6">
            {icon}
            <h1 className="font-opensans font-bold">{title}</h1>
            <p className="mt-6">
                I love to code websites, and see the changes happen in my
                browser while I code
            </p>
        </article>
    );
};

export default PathItem;
