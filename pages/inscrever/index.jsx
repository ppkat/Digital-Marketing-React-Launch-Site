import React, { useRef } from "react";
import Footer from "/components/Footer";
import CallToAction from "./Sections/CallToAction";
import CTAButtonSession from "./Sections/CTAButtonSection";
import EventDeliverables from "./Sections/EventDeliverables";
import Programming from "./Sections/Programming";
import InputContext from "/Contexts/InputContext";
import Authority from "./Sections/Authority";


export default function SubscriptionPage() {
    const inputRef = useRef(null)
    return (
        <InputContext.Provider value={inputRef}>
            <CallToAction />
            <Programming />
            <EventDeliverables />
            <Authority />
            <CTAButtonSession />
            <Footer />
        </InputContext.Provider>
    )
}