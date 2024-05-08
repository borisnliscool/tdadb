<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { toggleMode } from 'mode-watcher';
	import Moon from '~icons/fa6-solid/moon';
	import Sun from '~icons/fa6-solid/sun';

	let className = '';
	export { className as class };
</script>

<Button on:click={toggleMode} variant="outline" size="icon" class={className}>
	<Sun class="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
	<Moon class="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
	<span class="sr-only">Toggle theme</span>
</Button>
