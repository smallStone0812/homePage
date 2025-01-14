<template>
    <div :class="store.isPhone ? 'phonePageright' :'pageright'">
        <!-- 功能区 -->
        <Func />
        <!-- 网站链接 -->
        <Link />
    </div>
</template>

<script setup lang='ts'>
import Func from "@/views/Func/index.vue"
import Link from "@/components/Link.vue"
import { ref, } from "vue"
import { mainStore } from "@/stores/index.ts";
const store = mainStore();
</script>

<style lang="scss" scoped>
.pageright {
    width: 50%;
    margin-left: 0.75rem;
    display: flex;
    flex-direction: column;
   justify-content: center;
}
.phonePageright{
    width: 100%;
    margin:  auto 20px;
}
</style>