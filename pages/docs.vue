<script setup lang="ts">
    import Sidebar from "~/components/docs/sidebar.vue";
    import Intro from "~/components/docs/intro.vue";
</script>
<template>
    <div class="flex">
        <div class="inline-flex">
            <Sidebar />
        </div>
        <div class="inline-flex">
            <Intro />
        </div>
    </div>
</template>