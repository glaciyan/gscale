import React from "react";
import Layout from "../components/Layout";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
    return (
        <Layout title={"Not Found"}>
            <div className={`flex flex-col w-full h-screen mt-24 items-center`}>
                <div className={`mb-12`}>
                    <img src="/images/404.svg" width="600" height="240"></img>
                </div>
                <h1 className={`text-gscale-dark-text-secondary text-5xl`}>404</h1>
                <div className={`text-gscale-dark-text-ternary`}>Not Found</div>
            </div>
        </Layout>
    );
};

export default NotFound;