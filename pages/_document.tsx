import Document, {Html, Head, NextScript, Main} from "next/document";

export default function MWDocument()
{
    return <Html lang={"cs"}>
        <Head />
        <body className={"antialiased sm:subpixel-antialiased md:antialiased"}>
            <Main />
            <NextScript />
            <div id={"mw_portal"}></div>
        </body>
    </Html>
}