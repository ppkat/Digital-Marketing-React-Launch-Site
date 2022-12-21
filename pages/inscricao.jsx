import Authority from "../components/Authority";
import CallToAction from "../components/CallToAction";
import CTAButtonSession from "../components/CTAButtonSession";
import EventDeliverables from "../components/EventDeliverables";
import Programation from "../components/Programation";
import Footer from "../components/Footer"

export default function subscriptionPage() {
    return (
        <>
            <CallToAction />
            <Programation />
            <EventDeliverables />
            <Authority />
            <CTAButtonSession />
            <Footer />
        </>
    )
}