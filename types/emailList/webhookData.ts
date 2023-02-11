import MailerLiteWebHookEvents from "./mailerLiteWebHookEvents";

export default interface WebhookData {
    name: string;
    events: MailerLiteWebHookEvents[] | MailerLiteWebHookEvents;
    url: string;
}