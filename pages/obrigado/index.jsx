import { useRouter } from "next/router";
import { useEffect } from "react";
import DiscordServer from "./Sections/DiscordServer";
import EmailResearch from "./Sections/EmailReasearch";
import EventTimer from "./Sections/EventTimer";
import Roma from "./Sections/Roma";
import Footer from '/components/Footer'
import emailListSubscribe from "/lib/emailListSubscribe";

export default function ThanksPage() {
    const router = useRouter()

    useEffect(() => {
        const subscribedEmail = localStorage.getItem('email')

        emailListSubscribe(subscribedEmail).then(() => localStorage.setItem('invalidEmail', false))
            .catch(err => {
                router.push('/inscrever')
                localStorage.setItem('invalidEmail', true)
                console.log(err)
            })
    }, [])

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