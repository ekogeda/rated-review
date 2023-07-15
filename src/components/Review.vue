<script setup>
import ReviewForm from '@/components/ReviewForm.vue'
import ReviewStat from '@/components/ReviewStat.vue'
import ReviewList from '@/components/ReviewList.vue'
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <ReviewForm />
      </v-col>

      <v-col cols="11" sm="10">
        <ReviewStat />

        <ReviewList />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>