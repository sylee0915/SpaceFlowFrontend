<template>
  <div class="onboarding-layout">
    <header class="global-header">
      <img :src="logoUrl" alt="Logo" class="logo-img" />
    </header>

    <main class="step-content">
      <transition name="fade" mode="out-in">
        <component
            :is="currentComponent"
            v-model:selectedType="selectedType"
            v-model:joinMethod="selectedJoinMethod"
            :groupJoinType="groupJoinType"
            :userName="userName"
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
  selectedJoinMethod,
  groupJoinType,
  next,
  prev
} = useOnboarding();

const userName = ref('이승엽');

const currentComponent = computed(() => {
  switch (currentStep.value) {
    case STEPS.ENTRY: return EntryScreen;
    case STEPS.SELECT: return SelectFunction;
    case STEPS.GROUP_NAME: return SetGroupName;
    case STEPS.JOIN_METHOD: return SetJoinMethod;
    case STEPS.SET_DOMAIN: return SetDomain;
    case STEPS.SEARCH_GROUP: return SearchGroup;
    case STEPS.SET_ADMIN: return SetAdminAccount;
      // 멤버용 이메일/비밀번호 입력 단계는 별도 컴포넌트 사용
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