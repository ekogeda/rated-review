<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['ratingValue'])
const props = defineProps({ rated: Number })

const rating = ref(0)
watch(() => [rating.value, props.rated],
  ([newRating, newRated], [oldRating, oldRated]) => {
    if (newRating != oldRating) emit('ratingValue', newRating)
    if (newRated != oldRated) rating.value = newRated
  })

const colors = ref(['red', 'orange', 'grey', 'cyan', 'green'])
const labels = ref(['bad', 'fair', 'ok', 'good', 'great'])
</script>

<template>
  <div class="text-center my-3">
    <v-rating v-model="rating" :item-labels="labels" hover half-increments size="x-large" color="orange-darken-3">
      <template v-slot:item-label="props">
        <span class="font-weight-black text-caption" :class="`text-${colors[props.index]}`">
          {{ props.label }}
        </span>
      </template>
    </v-rating>
  </div>
</template>

<style scoped></style>