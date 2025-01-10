<template>
    <div class="LinkList">
        <div class="link-title">
            <i class="icon-lianjie iconfont"></i>
            <span>网站列表</span>
        </div>
        <el-carousel class="LinkList-page" :autoplay="false" arrow="never">
            <el-carousel-item v-for="(item, index) in paginatedList" :key="index">
                <div class="LinkList-page-block">
                    <div v-for="(obj, num) in item" class="card LinkList-page-block-li" :key="num">
                        {{ obj.title }}
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang='ts'>
import { reactive, ref, computed } from "vue"
const LinkList = reactive({
    list: [
        {
            icon: "",
            title: "博客",
            link: ""
        },
        {
            icon: "",
            title: "网盘",
            link: ""
        },
        {
            icon: "",
            title: "音乐",
            link: ""
        },
        {
            icon: "",
            title: "起始页",
            link: ""
        },
        {
            icon: "",
            title: "网址集",
            link: ""
        },
        {
            icon: "",
            title: "今日热榜",
            link: ""
        },
        {
            icon: "",
            title: "私人订制",
            link: ""
        },
    ],
    pageNum: 6,//轮播图每页个数
})
// 分页方法
const paginatedList = computed(() => {
    const pages = [];
    for (let i = 0; i < LinkList.list.length; i += LinkList.pageNum) {
        pages.push(LinkList.list.slice(i, i + LinkList.pageNum));
    }
    return pages;
});
</script>

<style lang="scss" scoped>
.LinkList {
    margin-top: 15px;

    .link-title {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        color: #ffffff;
        margin-bottom: 10px;
        font-weight: 700;

        .icon-lianjie {

            margin-right: 10px;
        }
    }

    .LinkList-page {

        // display: flex;
        .LinkList-page-block {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            row-gap: 24px;
            column-gap: 15px;
            padding: 24px 0;
            &-li{
                width: calc(33.33% - 15px);
                height: calc(50% - 12px);
                display: flex;
                align-items: center;
                justify-content: center;

            }
        }

    }
}
</style>