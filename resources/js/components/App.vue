<template>
    <div class="max-w-lg mx-auto mt-16">
        <div>
            <h1 class="text-xl">Larastack Testing</h1>
        </div>

        <div class="mt-8 mb-32">
            <div class="p-4 flex justify-start items-start" v-for="endpoint in endpoints">
                <div>
                    <!-- VERB -->
                    <div class="inline text-xs p-1 rounded-lg bg-orange-500 uppercase">POST</div>
                    <!--<div class="inline text-xs p-1 rounded-lg bg-green-500 uppercase">PUT</div>-->
                    <!--<div class="inline text-xs p-1 rounded-lg bg-red-500 uppercase">DEL</div>-->
                    <!--<div class="inline text-xs p-1 rounded-lg bg-blue-400 uppercase">GET</div>-->
                </div>
                <div class="flex-grow px-4">
                    <!-- REQUEST INFO -->
                    <div class="text-lg"><span v-text="endpoint.title"></span></div>
                    <div class="text-sm"><span v-text="endpoint.description"></span></div>
                </div>
                <div>
                    <!-- STATUS -->
                    <div class="inline-block w-6 h-6">
                        <img src="/img/icons/cancel-24px.svg" alt=""/>
                        <img src="/img/icons/check_circle-24px.svg" alt=""/>

                        <div class="loader">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import manifest from '../manifest';

    export default {
        data() {
            return {
                m: manifest,
            };
        },
        computed: {
            endpoints: function () {
                return this.m.filter((value) => value.is_active);
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    @keyframes rotate-loading {
        0% {
            transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
        }
    }

    .loader {
        @apply w-6 h-6;
        @apply border-red-400;

        & > .loading {
            @apply w-full h-full;
            border-radius: 100%;
            border: 3px solid transparent;
            border-left: 3px solid #b2c3c4;
            border-right: 3px solid #b2c3c4;
            animation: rotate-loading 0.8s linear 0s infinite
        }
    }
</style>