<script setup>
import { computed } from 'vue';
import { useOnboarding } from '@/composables/useOnboarding';
import EntryScreen from '@/components/onboarding/EntryScreen.vue';
import SelectFunction from '@/components/onboarding/SelectFunction.vue';
import SetGroupName from "@/components/onboarding/SetGroupName.vue";
import SetJoinMethod from "@/components/onboarding/SetJoinMethod.vue";

const { currentStep, STEPS, next, prev } = useOnboarding();

const components = {
  [STEPS.ENTRY]: EntryScreen,
  [STEPS.SELECT]: SelectFunction,
  [STEPS.GROUP_NAME]: SetGroupName,
  [STEPS.JOIN_METHOD]: SetJoinMethod
};

const currentComponent = computed(() => components[currentStep.value]);
const logoUrl = 'https://i.ibb.co/KjdC2qnn/KakaoTalk-20260125-164433710.png';
</script>

<template>
  <div class="onboarding-layout">
    <header class="global-header">
      <img :src="logoUrl" alt="Logo" class="logo-img" />
    </header>

    <main class="step-content">
      <transition name="fade" mode="out-in">
        <component
            :is="currentComponent"
            @next="next"
            @prev="prev"
        />
      </transition>
    </main>
  </div>
</template>

<style scoped>
.onboarding-layout { background-color: #F4E0D4; min-height: 100vh; width: 100vw; position: relative; overflow: hidden; }
.global-header { padding: 48px 64px; position: absolute; top: 0; left: 0; z-index: 100; }
.logo-img { height: 44px; width: auto; }
.step-content { height: 100vh; width: 100%; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>