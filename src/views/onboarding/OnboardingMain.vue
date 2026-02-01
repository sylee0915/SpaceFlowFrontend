<template>
  <div class="onboarding-layout">
    <header class="global-header">
      <img :src="logoUrl" alt="Logo" class="logo-img" />
    </header>

    <main class="step-content">
      <transition name="fade" mode="out-in">
        <component
            :is="currentComponent"
            :labels="currentLabels"
            :currentIdx="currentStepInfo.idx"
            :progress="currentStepInfo.progress"
            @next="next"
            @prev="prev"
        />
      </transition>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useOnboarding } from '@/composables/useOnboarding';

import EntryScreen from '@/components/onboarding/EntryScreen.vue';
import SelectFunction from '@/components/onboarding/SelectFunction.vue';
import SetGroupName from "@/components/onboarding/manager/SetGroupName.vue";
import SetJoinMethod from "@/components/onboarding/manager/SetJoinMethod.vue";
import SetDomain from "@/components/onboarding/manager/SetDomain.vue";
import SetAdminAccount from "@/components/onboarding/manager/SetAdminAccount.vue";
import SearchGroup from "@/components/onboarding/member/SearchGroup.vue";
import SetMemberEmail from "@/components/onboarding/member/SetMemberEmail.vue";
import SetMemberPassword from "@/components/onboarding/member/SetMemberPassword.vue";
import VerifyEmail from "@/components/onboarding/shared/VerifyEmail.vue";
import SetUserName from "@/components/onboarding/shared/SetUserName.vue";
import OnboardingDone from "@/components/onboarding/shared/OnboardingDone.vue";

const {
  currentStep,
  STEPS,
  selectedType,
  formData,
  next,
  prev
} = useOnboarding();

const managerLabels = ['시작', '단체명 설정', '가입방식 설정', '계정정보 기입', '완료'];
const memberLabels = ['시작', '이메일 입력', '이메일 인증', '정보 입력', '완료'];

const currentLabels = computed(() => {
  return selectedType.value === 'new' ? managerLabels : memberLabels;
});

const currentStepInfo = computed(() => {
  const s = STEPS;
  const step = currentStep.value;
  const isManager = selectedType.value === 'new';

  if (isManager) {
    switch (step) {
      case s.GROUP_NAME: return { idx: 1, progress: 20 };
      case s.JOIN_METHOD: return { idx: 2, progress: 40 };
      case s.SET_DOMAIN: return { idx: 3, progress: 60 };
      case s.SET_ADMIN: return { idx: 3, progress: 60 };
      case s.VERIFY_EMAIL: return { idx: 3, progress: 80 };
      case s.SET_USER_NAME: return { idx: 3, progress: 80 };
      case s.DONE: return { idx: 4, progress: 100 };
      default: return { idx: 0, progress: 0 };
    }
  } else {
    switch (step) {
      case s.SEARCH_GROUP: return { idx: 1, progress: 20 };
      case s.SET_MEMBER_EMAIL: return { idx: 2, progress: 40 };
      case s.VERIFY_EMAIL: return { idx: 3, progress: 60 };
      case s.SET_MEMBER_PASSWORD: return { idx: 3, progress: 80 };
      case s.SET_USER_NAME: return { idx: 3, progress: 80 };
      case s.DONE: return { idx: 4, progress: 100 };
      default: return { idx: 0, progress: 0 };
    }
  }
});

const currentComponent = computed(() => {
  switch (currentStep.value) {
    case STEPS.ENTRY: return EntryScreen;
    case STEPS.SELECT: return SelectFunction;
    case STEPS.GROUP_NAME: return SetGroupName;
    case STEPS.JOIN_METHOD: return SetJoinMethod;
    case STEPS.SET_DOMAIN: return SetDomain;
    case STEPS.SEARCH_GROUP: return SearchGroup;
    case STEPS.SET_ADMIN: return SetAdminAccount;
    case STEPS.SET_MEMBER_EMAIL: return SetMemberEmail;
    case STEPS.SET_MEMBER_PASSWORD: return SetMemberPassword;
    case STEPS.VERIFY_EMAIL: return VerifyEmail;
    case STEPS.SET_USER_NAME: return SetUserName;
    case STEPS.DONE: return OnboardingDone;
    default: return EntryScreen;
  }
});

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