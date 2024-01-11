<template>
  <BlogForm></BlogForm>
  <section class="">
    <div v-for="blog in blogs" class="row">
      <BlogCard :blog="blog" />
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { blogService } from '../services/BlogService.js';
import { AppState } from '../AppState.js'
import BlogCard from '../components/BlogCard.vue';
import BlogForm from '../components/BlogForm.vue';


export default {
  setup() {
    async function getBlogs() {
      try {
        await blogService.getBlogs();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getBlogs();
    });
    return {
      blogs: computed(() => AppState.blogs)
    };
  },
  components: { BlogCard, BlogForm }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
