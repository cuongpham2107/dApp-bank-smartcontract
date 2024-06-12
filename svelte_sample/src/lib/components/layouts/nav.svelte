<script lang="ts">
    import Package2 from "lucide-svelte/icons/package-2";
</script>
<nav
    class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
>
    <a
        href="##"
        class="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
        <Package2 class="h-6 w-6" />
        <span class="sr-only">Acme Inc</span>
    </a>
    <a
        href="##"
        class="text-muted-foreground transition-colors hover:text-foreground"
    >
        Dashboard
    </a>
    <a
        href="/deposit"
        class="text-muted-foreground transition-colors hover:text-foreground"
    >
        Deposit
    </a>
    <a
        href="/withdraw"
        class="text-muted-foreground transition-colors hover:text-foreground"
    >
        Withdraw
    </a>
    <!-- <a
        href="##"
        class="text-muted-foreground transition-colors hover:text-foreground"
    >
        Customers
    </a>
    <a
        href="##"
        class="text-foreground transition-colors hover:text-foreground"
    >
        Settings
    </a> -->
</nav>
