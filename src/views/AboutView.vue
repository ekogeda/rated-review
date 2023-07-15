<template>
  <v-container class="about">
    <v-timeline>
      <v-timeline-item size="large">
        <template v-slot:icon>
          <v-icon color="red" size="large">mdi-timeline-alert-outline</v-icon>
        </template>
        <template v-slot:opposite>
          <span>About Page</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            <h5>Rated Review</h5>
          </v-card-title>
          <v-card-text>
            <h5>Coming soon!</h5>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<style>
.about {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
