import { writable } from "svelte/store";

export interface Auth {
    accessToken: string;
    user: {
        id: string;
        email: string;
        name: string;
        
    };
}

export const auth = writable({} as Auth);