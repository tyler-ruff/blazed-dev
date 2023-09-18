<script setup lang="ts">
    import Card from "~/components/forum/card.vue";
	useHead({
		title: "Forums"
	});
</script>
<template>
    <div class="px-5 md:px-10 py-5 space-y-5">
        <Card />
        <Card />
    </div>
</template>