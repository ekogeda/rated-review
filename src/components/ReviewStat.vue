<script setup>
import { storeToRefs } from 'pinia'
import { useReviewStore } from '@/stores/reviews'

const store = useReviewStore()

const { reviewCount, averageRating } = storeToRefs(store) // *** Data
</script>

<template>
  <div class="d-flex justify-space-between mb-3">
    <span>{{ reviewCount != 0 ? reviewCount : 'No' }} Reviews</span>
    <span>Average Ratings: {{ isNaN(averageRating) ? 0 : averageRating }}</span>
  </div>
</template>

<style scoped></style>