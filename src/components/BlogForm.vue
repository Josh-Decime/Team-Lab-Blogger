<template>
    <div class="component">
        <form @submit.prevent="handleSubmit()">
            <div class="mb-3 col-3">
                <label for="blog-title">Title</label>
                <!-- TODO inputs need v-model -->
                <input required name="blog-title" id="blog-title">
            </div>
            <div class="mb-3 col-3">
                <label for="blog-body">Body</label>
                <input required name="blog-body" id="blog-body">
            </div>
            <div class="mb-3 col-3">
                <label for="blog-imgUrl">imgUrl</label>
                <input required name="blog-imgUrl" id="blog-imgUrl">
            </div>
        </form>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Profile } from '../models/Profile.js';
import { blogService } from '../services/BlogService.js';
import { Blog } from '../models/Blog.js';
export default {
    props: { blogProp: { type: Blog } },
    setup(props) {
        // const profileData = {}
        return {
            // profileData,
            async createBlog() {
                await blogService.createBlog()
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>