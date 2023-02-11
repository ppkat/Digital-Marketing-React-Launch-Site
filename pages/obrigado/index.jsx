import DiscordServer from "./Sections/DiscordServer";
import EmailResearch from "./Sections/EmailReasearch";
import EventTimer from "./Sections/EventTimer";
import Roma from "./Sections/Roma";
import Footer from '/components/Footer'

export default function ThanksPage() {

    return (
        <>
            <DiscordServer />
            <EmailResearch />
            <EventTimer />
            <Roma />
            <Footer />
        </>
    )
}