<script setup>
import { storeToRefs } from 'pinia'
import ReviewItem from '@/components/ReviewItem.vue'

import { useReviewStore } from '@/stores/reviews'
const store = useReviewStore()

const { getAllReviews } = store // *** Actions
const { reviewLists } = storeToRefs(store) // *** Data

getAllReviews()
</script>

<template>
  <ReviewItem v-for="(review) in reviewLists" :key="review.id" :review="review" />
</template>

<style scoped></style>