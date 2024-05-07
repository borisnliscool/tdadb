<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLImgAttributes;
</script>

<img class={twMerge('rounded', $$props.class)} alt={$$props.alt} {...$$restProps} />
