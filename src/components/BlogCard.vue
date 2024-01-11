<template>
    <section class="col-4">
        <div class="card">
            <img :src="blog.imgUrl" alt="Blog image" class="blog-image">
        </div>
    </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Blog } from '../models/Blog.js';
export default {
    props: {
        blog: { type: Blog, required: true }
    },
    setup() {

        return {

        }
    }
};
</script>


<style lang="scss" scoped>
.blog-image {
    height: 15vh;
    width: 15vh;
    object-fit: cover;
}
</style>