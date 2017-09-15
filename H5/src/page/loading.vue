<template>
    <div class="loading" style="background:#eee;">
        <div class="loader13 loader">
            <div class="loader-13">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'loading',
    data() {
        return {
            msg: 'loading'
        }
    },
    created() {
        // this.loading()
    },
    methods: {
        loading() {
            let that = this
           
            setTimeout(function() {
                that.$router.push('index')
            }, 3000)
        }
    },
     mounted: function() {
         let that = this

         setTimeout(function() {
             that.$router.push('index')
         }, 3000)
        //  window.onload = function() {
        //      console.log('全部加载完毕')
        //      that.$router.push('index')
        //  }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
    width: 100%;
    height: 100%;
    position: relative;
}

.loader {
    width: 60%;
    height: 10rem;
    position: absolute;
    top: 30%;
    left: 20%;
}
</style>
