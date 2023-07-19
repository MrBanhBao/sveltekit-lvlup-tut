import { sequence } from "@sveltejs/kit/hooks";
import { auth } from "$db/fake_auth"

async function logger({ event, resolve }) {
    const start_time = Date.now();
    console.log('start_time', start_time);
    
    const response = await resolve(event);

    console.log(`${Date.now() - start_time}ms - ${event.request.method} - ${event.url.pathname}`);

    return response;
}

function authorize({ event, resolve }) {
    const user = auth();
    console.log('hi');
    event.locals.user = user;
    return resolve(event)
}


export const handle = sequence(logger, authorize);

/* export function handleFetch({request, fetch}) {
    // intercepting fetch and tweak request and fetch it at
    return fetch(request);
}

export function handleError({error, event}) {
    return {
        message: 'Oops, I am intercepting in a hook',
        code: error.code
    }
} */