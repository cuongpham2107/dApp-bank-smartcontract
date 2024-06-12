<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";

    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div class="flex items-center justify-center py-12">
        <div class="mx-auto grid w-[350px] gap-6">
            <div class="grid gap-2 text-center">
                <h1 class="text-3xl font-bold">Login</h1>
                <p class="text-balance text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>
            <div class="grid gap-4">
                <form action="?/login" method="post">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Password</Label>
                            <a
                                href="##"
                                class="ml-auto inline-block text-sm underline"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <Input id="password" type="password" name="password" required />
                    </div>
                    <Button type="submit" class="w-full">Login</Button>
                </form>
               
                
            </div>
            <div class="mt-4 text-center text-sm">
                Don&apos;t have an account?
                <a href="##" class="underline"> Sign up </a>
            </div>
        </div>
    </div>
    <div class="hidden bg-muted lg:block">
        <img
            src="https://www.shadcn-svelte.com/images/placeholder.svg"
            alt="placeholder"
            width="1920"
            height="1080"
            class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
    </div>
</div>
