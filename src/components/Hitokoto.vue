<template>
    <div @click="getHitokotoText" class="hitokoto card">
        <!-- 一言内容 -->
        <Transition name="el-fade-in-linear" mode="out-in">
            <div class="content">
                <span class="text">{{ hitokotoText.text }}</span>
                <span class="from">-「&nbsp;{{ hitokotoText.from }} &nbsp;」</span>
            </div>
        </Transition>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, } from "vue"
import { getHitokoto, type Params } from "@/api/hitokoto"
const hitokotoText = reactive({
    text: "云会变，树会变，山川河流会变，哪能奢求别人，永远不改变呢。",
    from: "思无邪",
})
const getHitokotoText = async () => {
    const params: Params = {  c: getRandomCategory(), }
    const res = await getHitokoto(params);
    hitokotoText.text = res.hitokoto;
    hitokotoText.from = res.from;
}
const categories = [
  /** 动画 */ 'a',
  /** 漫画 */ 'b',
  /** 游戏 */ 'c',
  /** 文学 */ 'd',
  /** 原创 */ 'e',
  /** 来自网络 */ 'f',
  /** 其他 */ 'g',
  /** 影视 */ 'h',
  /** 诗词 */ 'i',
  /** 网易云 */ 'j',
  /** 哲学 */ 'k',
  /** 抖机灵 */ 'l',
] as const;

type CategoryType = typeof categories[number];
// 随机返回一个分类
function getRandomCategory(): CategoryType {
  const index = Math.floor(Math.random() * categories.length);
  return categories[index];
}
onMounted(() => {
    getHitokotoText();
})
</script>

<style lang="scss" scoped>
.hitokoto {
    width: 100%;
    height: 100%;
    padding: 20px;

    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 1.1rem;

        .from {
            margin-top: 10px;
            text-align: right;
        }
    }
}
</style>