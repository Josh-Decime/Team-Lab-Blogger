<template>
    <section class="col-6">
        <div class="card">
            <img :src="blog.imgUrl" :alt="blog.title" class="blog-image">
            <h2> {{ blog.title }} </h2>
            <span> {{ blog.body }} </span>
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