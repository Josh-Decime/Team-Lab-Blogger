<template>
  Profile sSTuff goes HERE

  <div class="container-fluid">
    <section>

    </section>

  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js'
import { profilesService } from '../services/ProfilesService.js';


export default {
  setup() {
    const route = useRoute();
    const watchableProfileId = computed(() => route.params.profileId)

    async function getProfileById() {
      try {
        const profileId = route.params.profileId
        await profilesService.getProfileById(profileId);
      }
      catch (error) {
        Pop.error(error);
      }
    }
  },
}
</script>

<style scoped lang="scss"></style>
