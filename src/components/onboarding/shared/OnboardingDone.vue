<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <div v-if="!isPendingApproval" class="welcome-section">
          <h1 class="main-title">{{ formData.userName }}님 환영합니다!</h1>
          <button class="btn-login-go" @click="handleFinish">로그인 하러가기</button>
        </div>
        <div v-else class="waiting-section">
          <h1 class="main-title">관리자의 승인을 기다려 주세요.</h1>
          <p class="sub-message">가입 요청이 완료되었습니다!<br/>승인 시 알림을 보내드립니다.</p>
          <button class="btn-login-go secondary" @click="handleFinish">로그인 화면으로</button>
        </div>
      </div>
    </main>

    <StepNavigation
        :progress="progress"
        :currentIdx="currentIdx"
        :labels="labels"
        :showNext="false"
        @prev="prev"
    />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useOnboarding } from '@/composables/useOnboarding';
import StepNavigation from '../common/StepNavigation.vue';

const { formData, selectedType, prev, submitToBackend } = useOnboarding();

const props = defineProps({
  labels: Array,
  currentIdx: Number,
  progress: Number
});

onMounted(() => {
  console.log('✅ 온보딩 완료 - 최종 formData:', JSON.parse(JSON.stringify(formData)));
  console.log('✅ 선택된 타입:', selectedType.value);
});

const isPendingApproval = computed(() => {
  return selectedType.value === 'join' && formData.joinMethod === 'manual';
});

const handleFinish = async () => {
  try {
    await submitToBackend();

    /*
    추후 API 연결 시 예시:
    const result = await submitToBackend();
    if (result.status === 200) {
      // router.push('/login');
    }
    */
  } catch (error) {
    console.error('데이터 전송 실패:', error);
  }

  console.log('최종 단계 완료 및 데이터 전송 시도');
};
</script>

<style scoped>
.step-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard', sans-serif;
}

.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-content {
  text-align: center;
}

.main-title {
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.sub-message {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 48px;
}

.btn-login-go {
  background-color: #1A1A1A;
  color: #FFFFFF;
  border: none;
  padding: 18px 48px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-login-go:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.btn-login-go.secondary {
  background-color: rgba(26, 26, 26, 0.05);
  color: #1A1A1A;
}
</style>