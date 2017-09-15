<template>
    <div class="page2">
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'page2',
    data() {
        return {
            msg: 'page2'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page2 {
    width: 100%;
    height: 100%;
    position: relative;
    display: none;
}
</style>
