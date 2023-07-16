import { auth } from "$db/fake_auth"

export async function handle({ event, resolve }) {
    const user = auth();
    event.locals.user = user;
    event.locals.this_is_test = 'Test';
    console.log('event', event)
    return resolve(event)
}