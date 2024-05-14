<script lang="ts">
	import { fade } from 'svelte/transition';
	import { bigImageStore } from '.';
	import Button from '../ui/button/button.svelte';
</script>

{#if $bigImageStore}
	<div
		transition:fade={{ duration: 150 }}
		class="fixed left-0 top-0 z-[100] h-screen w-full bg-black/20 backdrop-blur-sm transition-all"
	>
		<Button
			on:click={() => bigImageStore.set(null)}
			variant="none"
			class="grid h-full w-full cursor-zoom-out place-items-center p-16"
		>
			<enhanced:img
				class="w-full max-w-7xl overflow-hidden rounded-lg shadow-lg"
				src={$bigImageStore}
				alt=""
			/>
		</Button>
	</div>
{/if}
