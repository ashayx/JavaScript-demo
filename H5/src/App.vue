<template>
    <div id="app">
		<router-view></router-view>
	</div>
</template>


<script>
export default {
}  
</script>

<style >
* {
    margin: 0;
    padding: 0;
}
html,
body,
#app {
    position: relative;
    height: 100%;
    width: 100%;
}

body {
    background: #eee;
}
</style>