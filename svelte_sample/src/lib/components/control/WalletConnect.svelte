<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { ethers } from "ethers";
    import { shortenAddress } from "$lib/helpers/string";

    let signer = null;
    let provider = null;
    let account:string;
    async function connectWallet() {
        if ((window as any).ethereum == null) {
            console.log("Metamask chưa được cài đặt;Sử dụng mặc định chỉ đọc")
            provider = ethers.getDefaultProvider()

        } else {
            provider = new ethers.BrowserProvider((window as any).ethereum)
            signer = await provider.getSigner();
            account = await signer.getAddress();
        }
    }
</script>

{#if !account}
    <Button on:click={connectWallet}>Connect</Button>
{:else}
    <p class="px-4 py-1 rounded-3xl text-sm  bg-blue-400 font-semibold text-white">{shortenAddress(account)}</p>
{/if}
