import { auth } from '$lib/stores/app';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    auth.subscribe((value) => {
        
        if (value.accessToken === undefined || value.accessToken === "") {
            redirect(302,"/auth/login");
        }
    })

    return {};
}) satisfies PageServerLoad;