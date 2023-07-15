<script setup>
import { useReviewStore } from '@/stores/reviews'
const store = useReviewStore()

const { editReview, deleteReview } = store // *** Actions

const props = defineProps({ review: Object })

</script>

<template>
  <v-badge color="success" :content="review.rating" class="d-block mb-6">
    <v-card elevation="5" class="w-100">
      <v-card-actions class="justify-end py-1" style="min-height: 20px !important;">
        <v-btn color="warning" size="x-small" icon="mdi-square-edit-outline" @click="editReview(review)"></v-btn>
        <v-btn color="error" size="x-small" icon="mdi-trash-can" @click="deleteReview(review)"></v-btn>
      </v-card-actions>

      <v-card-text class="pt-0">{{ review.review }}</v-card-text>
    </v-card>
  </v-badge>
</template>

<style>
.v-badge__badge {
  right: calc(100% - 12px) !important;
  left: auto !important;
}
</style>