<template>
  <div class="onboarding-layout">
    <header class="global-header">
      <img :src="logoUrl" alt="Logo" class="logo-img" />
    </header>

    <main class="step-content">
      <transition name="fade" mode="out-in">
        <SimpleInputStep
            v-if="currentStep === STEPS.SET_DOMAIN"
            title="허용할 이메일 도메인을 입력해 주세요."
            placeholder="ex) @company.com"
            :progress="70"
            :currentIdx="3"
            v-model="domain"
            @next="next"
            @prev="prev"
        />

        <SimpleInputStep
            v-else-if="currentStep === STEPS.SET_USER_NAME"
            title="사용하실 이름을 입력해 주세요."
            placeholder="이름 입력"
            :progress="95"
            :currentIdx="3"
            v-model="userName"
            @next="next"
            @prev="prev"
        />

        <component
            v-else
            :is="components[currentStep]"
            v-model:joinMethod="selectedJoinMethod"
            @next="next"
            @prev="prev"
        />
      </transition>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useOnboarding } from '@/composables/useOnboarding';
import EntryScreen from '@/components/onboarding/EntryScreen.vue';
import SelectFunction from '@/components/onboarding/SelectFunction.vue';
import SetGroupName from "@/components/onboarding/SetGroupName.vue";
import SetJoinMethod from "@/components/onboarding/SetJoinMethod.vue";
import SetAdminAccount from "@/components/onboarding/SetAdminAccount.vue";
import VerifyEmail from "@/components/onboarding/VerifyEmail.vue";
import OnboardingDone from "@/components/onboarding/OnboardingDone.vue";
import SimpleInputStep from "@/components/onboarding/SimpleInputStep.vue";

const { currentStep, STEPS, selectedJoinMethod, next, prev } = useOnboarding();

const domain = ref('');
const userName = ref('');

const components = {
  [STEPS.ENTRY]: EntryScreen,
  [STEPS.SELECT]: SelectFunction,
  [STEPS.GROUP_NAME]: SetGroupName,
  [STEPS.JOIN_METHOD]: SetJoinMethod,
  [STEPS.SET_ADMIN]: SetAdminAccount,
  [STEPS.VERIFY_EMAIL]: VerifyEmail,
  [STEPS.DONE]: OnboardingDone
};

const logoUrl = 'https://i.ibb.co/KjdC2qnn/KakaoTalk-20260125-164433710.png';
</script>

<style scoped>
.onboarding-layout {
  background: linear-gradient(135deg, #F4E0D4 0%, #F8EFEA 100%);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>