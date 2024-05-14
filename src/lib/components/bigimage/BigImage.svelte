<script lang="ts">
	import { cn } from '$lib/cn';
	import { bigImageStore } from '.';
	import Button from '../ui/button/button.svelte';

	let className = '';
	export { className as class };
	export let image: string;
</script>

<Button variant="none" on:click={() => bigImageStore.set(image)} class="h-fit cursor-zoom-in">
	<enhanced:img src={image} alt="" class={cn('overflow-hidden rounded', className)} />
</Button>
