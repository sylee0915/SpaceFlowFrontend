<script setup>
import { ref } from 'vue';
import EntryScreen from '@/components/onboarding/EntryScreen.vue';
import SelectFunction from '@/components/onboarding/SelectFunction.vue';

const step = ref('entry');
const logoUrl = 'https://img.icons8.com/ios-filled/100/000000/booking.png';

const goToSelect = () => { step.value = 'select'; };
const goToEntry = () => { step.value = 'entry'; };
</script>

<template>
  <div class="onboarding-layout">
    <header class="global-header">
      <img :src="logoUrl" alt="Logo" class="logo-img" />
    </header>

    <main class="step-content">
      <EntryScreen v-if="step === 'entry'" @next="goToSelect" />
      <SelectFunction v-if="step === 'select'" @prev="goToEntry" />
    </main>
  </div>
</template>

<style scoped>
.onboarding-layout {
  background-color: #F4E0D4;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.global-header {
  padding: 48px 64px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}

.logo-img {
  height: 44px;
  width: auto;
}

.step-content {
  height: 100vh;
  width: 100%;
}
</style>