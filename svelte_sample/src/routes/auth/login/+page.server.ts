import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';
import { auth } from "$lib/stores/app";

export const load = (async () => {
   
    return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
    login: async (event : any) => {
        const formData = Object.fromEntries(await event.request.formData()); // Parse form data
        const data = await fetch('http://localhost:3001/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Accept": "*/*",
            },
            body: `email=${formData.email}&password=${formData.password}`
            
        }).then(res => res.json()).then(data => data);
       
        if(data) {
            console.log(data);
            auth.set(data);
            redirect(302, '/');
        }
    }
}