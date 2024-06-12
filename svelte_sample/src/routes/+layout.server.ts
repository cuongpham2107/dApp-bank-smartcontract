import type { PageServerLoad } from './$types';
import { auth, type Auth } from "$lib/stores/app";

export const load = (async () => {
    let accounts: Auth = {} as Auth;
    auth.subscribe((value) => {
        accounts = value;
    });
    return {
        user : accounts.user
    };
});
