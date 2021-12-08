import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        const cloudflareToken = process.env.NEXT_PUBLIC_CLOUDFLARE;

        return (
            <Html lang="en" className="bg-gscale-dark-background-ternary">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    {cloudflareToken ? (
                        <script
                            defer
                            src="https://static.cloudflareinsights.com/beacon.min.js"
                            data-cf-beacon={`{"token": "${cloudflareToken}"}`}
                        ></script>
                    ) : null}
                </body>
            </Html>
        );
    }
}

export default MyDocument;
