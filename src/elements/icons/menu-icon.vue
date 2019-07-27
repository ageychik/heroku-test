<template>
    <button class="menu-icon">
        <svg viewBox="0 0 512 512">
            <path d="m80 233h90v40h-90zm0-39.878906h90v-40h-90zm0-117v40h90v-40zm0 273.878906h90v-40h-90zm432-290v392c0 33.085938-26.914062 60-60 60h-392c-33.085938 0-60-26.914062-60-60v-392c0-33.085938 26.914062-60 60-60h392c33.085938 0 60 26.914062 60 60zm-452 412h150v-432h-150c-11.027344 0-20 8.972656-20 20v392c0 11.027344 8.972656 20 20 20zm412-412c0-11.027344-8.972656-20-20-20h-202v193h107.714844l-46-46 28.285156-28.285156 94.285156 94.285156-94.285156 94.285156-28.285156-28.285156 46-46h-107.714844v199h202c11.027344 0 20-8.972656 20-20zm0 0"/>
        </svg>
    </button>
</template>

<script>
    export default {
        name: "menu-icon"
    }
</script>

<style lang="scss" scoped>
    .menu-icon {
        z-index: 1;
        width: 40px;
        height: 30px;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all .2s;
        svg {
            max-height: 100%;
            max-width: 100%;
        }
    }
</style>