import { writable } from "svelte/store";

export interface Auth {
    accessToken: string;
    user: {
        id: number;
        username: string;
        email: string;
        password: string;
        balance: number;
        roleId: number;
    };
}

export const auth = writable({} as Auth);