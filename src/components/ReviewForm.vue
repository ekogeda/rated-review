<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import ReviewRating from "@/components/ReviewRating.vue";

import { useReviewStore } from "@/stores/reviews";
const store = useReviewStore();

const { editedReview } = storeToRefs(store); // *** Data
const { addReview, updateReview } = store; // *** Actions

const review = ref();
const rating = ref();
const setRating = (params) => (rating.value = params);

watch(
  () => editedReview.value,
  (newEdit) => {
    if (newEdit.editable) {
      rating.value = newEdit.item.rating;
      review.value = newEdit.item.review;
    }
  }
);

const loaded = ref(false);
const loading = ref(false);
const error = ref();
const clearField = () => {
  rating.value = null;
  review.value = "";
}

const postReview = () => {
  loading.value = true;
  error.value =
    (review.value?.length < 10 || review.value == undefined)
      ? "Text must be at least 10 characters."
      : rating.value == null
        ? "Star rating is required."
        : "";

  const form = {
    rating: rating.value,
    review: review.value,
  };

  if (!editedReview.value.editable) {
    if (error.value != "") return (loading.value = false);

    addReview(form);
    clearField()
  } else {
    updateReview({ ...form, id: editedReview.value.item.id });
    clearField()
  }

  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 1000);
};
</script>

<template>
  <v-card elevation="5" class="pa-3 mb-5">
    <v-card-title class="text-center">
      How would you rate your service with us?
    </v-card-title>

    <v-card-text class="text-center">
      <ReviewRating @ratingValue="setRating" :rated="rating" />

      <v-form @submit.prevent>
        <v-text-field v-model="review" :loading="loading" density="compact" variant="solo" label="Write a review"
          single-line clearable hide-details="auto">
          <template v-slot:append-inner>
            <v-btn type="submit" size="small" color="success" flat @click="postReview" :disabled="loading">Send</v-btn>
          </template>
        </v-text-field>
        <small class="text-error">{{ error }}</small>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
