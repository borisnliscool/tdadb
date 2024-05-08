<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.scss';
</script>

<ModeWatcher />

<div class="min-h-screen w-full">
	<slot />
</div>
