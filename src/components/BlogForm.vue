<template>
    <div class="component">
        <form @submit.prevent="handleSubmit()">
            <div class="mb-3 col-3">
                <label for="blog-title">Title</label>
                <input v-model="blogData.title" required name="blog-title" id="blog-title">
            </div>
            <div class="mb-3 col-3">
                <label for="blog-body">Body</label>
                <input v-model="blogData.body" required name="blog-body" id="blog-body">
            </div>
            <div class="mb-3 col-3">
                <label for="blog-imgUrl">imgUrl</label>
                <input v-model="blogData.imgUrl" required name="blog-imgUrl" id="blog-imgUrl">
            </div>
        </form>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Profile } from '../models/Profile.js';
import { blogService } from '../services/BlogService.js';
export default {
    props: { editProfileData: { type: Profile } },
    setup(props) {
        const profileData = {}
        return {
            profileData,
            async createBlog() {
                await blogService.createBlog()
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>