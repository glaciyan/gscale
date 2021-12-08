import type { NextPage } from "next";
import Layout from "../components/Layout";

const Privacy: NextPage = () => {
    return (
        <Layout title="Privacy">
            <div className="max-w-screen-sm mx-5  xl:mx-auto">
                <h1 className={`text-xl font-bold my-6 text-gscale-dark-text-primary`}>
                    GScale Privacy
                </h1>
                <div className="my-4">
                    <h2 className={`text-lg font-bold text-gscale-dark-text-primary`}>
                        How are builds saved?
                    </h2>
                    <p className={`text-bg-gscale-dark-text-ternary`}>
                        Builds are saved on your device. This might change in the future
                        with additional feature additions like a potential account sync
                        feature, those features are going to be opt-in.
                    </p>
                </div>
                <div className="my-4">
                    <h2 className={`text-lg font-bold text-gscale-dark-text-primary`}>
                        What kind of analytics does this site use?
                    </h2>
                    <p className={`text-bg-gscale-dark-text-ternary`}>
                        gscale.cc uses Cloudflare Analytics. The following data is
                        collected anonymously. The purpose of collecting said data will
                        also be explained.
                        <hr className="my-2" />
                        <span className="font-bold">Visits</span> are counted to determine
                        various things.
                        <ul className="ml-6" style={{ listStyle: "circle" }}>
                            <li>
                                <span className={`font-bold`}>Visit by country</span>: To
                                help determine if localization is needed.
                            </li>
                            <li>
                                <span className={`font-bold`}>Referers</span>: To help
                                find websites which might contain feedback.
                            </li>
                            <li>
                                <span className={`font-bold`}>Hosts</span>: This is always
                                gscale.cc and is not relevant.
                            </li>
                            <li>
                                <span className={`font-bold`}>Paths</span>: Helps to
                                determine the popularity of certain characters.
                            </li>
                            <li>
                                <span className={`font-bold`}>
                                    Operating system, Browser and Device type
                                </span>
                                : Can help determine if gscale.cc can use modern web
                                technologies which might not be supported on older systems
                                and helps determine if a feature needs better mobile
                                support.
                            </li>
                        </ul>
                        <br />
                        <span className="font-bold">Page Visits</span> are counted to
                        determine the popularity of certain characters.
                        <br />
                        <span className="font-bold">
                            Page load time and Core Web Vitals (LCP, FID and CLS)
                        </span>{" "}
                        are collected to determine the performace of gscale.cc.
                    </p>
                    <br />
                    <p className={`text-bg-gscale-dark-text-ternary`}>
                        Cloudflare retains this data for 30 days.
                        <br />
                        To learn more about Cloudflare Analytics please visit{" "}
                        <a
                            href="https://developers.cloudflare.com/analytics/web-analytics"
                            target="_blank"
                            className={`text-orange-400 hover:underline`}
                        >
                            the documentation
                        </a>
                        .
                        <br />
                        <br />
                        That's it, thank you very much.
                        <br />- glaciyan
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Privacy;
