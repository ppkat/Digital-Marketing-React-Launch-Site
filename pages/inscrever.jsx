import Authority from "../components/Authority";
import CallToAction from "../components/CallToAction";
import CTAButtonSession from "../components/CTAButtonSession";
import EventDeliverables from "../components/EventDeliverables";
import Programation from "../components/Programation";
import Footer from "../components/Footer"
import InputContext from "../Contexts/InputContext";
import React, { useRef } from "react";

export default function subscriptionPage() {
    const inputRef = useRef(null)
    return (
        <InputContext.Provider value={inputRef}>
            <CallToAction />
            <Programation />
            <EventDeliverables />
            <Authority />
            <CTAButtonSession />
            <Footer />
        </InputContext.Provider>
    )
}