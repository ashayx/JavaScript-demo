<template>
    <div class="page1">

        <div class="container">
            <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="210" height="200" x="0px" y="0px" viewbox="0 0 100 100">
                <path class="yy" fill-rule="evenodd" clip-rule="evenodd" fill="none" d="M43.4,0.2c1.4,1.5,0.9,4,0.2,5.8c2-0.5,3.3-0.7,4.1-2.4
                    c0.1,0.2,0.2,0.3,0.2,0.5c0.8,1.3-0.3,3.5,0.7,3.8c1.6,0.6,3.2,1.1,4.8,1.7c3.8-3.3,15.2-6,20.6-2.4c1.3,4.4,2.1,11.5,0.7,16.8
                    c-0.6,1.6-1.3,3.2-1.9,4.8c-0.5,3,3.1,8.9,2.2,13.9c-1.4,7.4-6.1,11.1-8.9,15.8c5.3,1,9.1-3.1,16.3-1.7c10.3,2,18.4,13.5,10.6,24
                    c-2.2,2.9-8.2,6.5-13.9,5.5c-3.1-0.5-7.2-1.5-10.6-0.7c-6.5,1.6-10.9,7.3-16.8,9.8c-1.9,0.8-7,1.4-9.1,0.2c-0.8-0.4-0.4-1.4-1.7-1.4
                    c-1-0.1-6.3-0.3-7.2,0c-1.9,0.6-3.2,2.7-7.4,1.9c-7.7-1.5-12.8-11.4-12.7-20.9c-1,0.7-2.5,2-4.3,1.2c-0.4-0.2-0.8-0.5-1.2-0.7
                    c-0.8-2.6,1.9-11,1.9-11c1.3-2.8,4.5-4.2,6.5-6.5c-0.2-0.2-0.5-0.3-0.7-0.5c-8.1-4-17.5-6.2-15.1-20.4c0.6-3,1.3-5.9,1.9-8.9
                    C1.9,24.5-3.1,10.1,2.4,6.7c4.8-4.3,16.8,0.9,19.9,2.9c2.1-0.6,4.2-1.3,6.2-1.9c1.5-0.8,2.7-2.6,4.6-3.4C37.7,2.5,41.6,4.7,43.4,0.2
                    z" />
            </svg>
        </div>

    </div>
</template>

<script>

export default {
    name: 'page1',
    data() {
        return {
            msg: 'page1'
        }
    },
    mounted() {
        var obj = document.querySelector("path");
        var length = obj.getTotalLength();

        console.log(length); // 377.0433
    }
}
</script>

<style scoped>
.page1 {
    width: 100%;
    height: 100%;
    position: relative;
}

.container {
    width: 200px;
    margin: 100px auto;
}

.yy {
    stroke-width: 1;
    stroke: #ff7700;
    animation: lineMove 2s ease-out infinite;
}

@keyframes lineMove {
    0% {
        stroke-dasharray: 0, 378;
    }
    50% {
        stroke-dasharray: 378, 378;
        fill: rgba(0, 0, 0, 0);
        opacity: 1;
    }
    100% {
        stroke-dasharray: 378, 378;
        fill: rgba(255, 119, 0, .5);
        opacity: 0;
    }
}
</style>
