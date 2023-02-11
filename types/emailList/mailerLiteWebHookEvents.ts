type MailerLiteWebHookEvents = 'subscriber.created'
    | 'subscriber.updated'
    | 'subscriber.unsubscribed'
    | 'subscriber.added_to_group'
    | 'subscriber.removed_from_group'
    | 'subscriber.added_through_form'
    | 'subscriber.bounced'
    | 'subscriber.automation_triggered'
    | 'subscriber.automation_completed'
    | 'spam.subscriber.spam_reported'
    | 'campaign.sent';

export default MailerLiteWebHookEvents