import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
    return (
        <Layout title={"Not Found"}>
            <div className={`flex flex-col w-full h-screen mt-24 items-center`}>
                <div className={`mb-12`}>
                    <Image src="/images/404.svg" width="1920" height="300"></Image>
                </div>
                <h1 className={`text-gscale-dark-text-ternary text-6xl`}>404</h1>
                <div className={`text-gscale-dark-text-ternary`}>Not Found</div>
            </div>
        </Layout>
    );
};

export default NotFound;
