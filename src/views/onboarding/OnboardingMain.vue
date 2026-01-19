<script setup>
import { ref } from 'vue';
import EntryScreen from '@/components/onboarding/EntryScreen.vue';

const currentStep = ref(1);

const nextStep = () => currentStep.value++;
</script>

<template>
  <div class="onboarding-layout">
    <EntryScreen v-if="currentStep === 1" @next="nextStep" />
  </div>
</template>

<style scoped>
.onboarding-layout {
  width: 100%;
  height: 100vh;
}
</style>