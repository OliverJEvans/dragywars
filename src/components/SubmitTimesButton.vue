<template>
    <b-button
        :variant="variant"
        :size="size"
        target="_blank"
        href="http://m.me/shakster">
        Submit your times
    </b-button>
</template>

<script>
export default {
    props: ['variant', 'size']
}
</script>
