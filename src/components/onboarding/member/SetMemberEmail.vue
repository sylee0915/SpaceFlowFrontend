<script setup>
import { ref, computed } from 'vue';
import StepNavigation from '../common/StepNavigation.vue';

const props = defineProps(['groupJoinType']);
const emit = defineEmits(['next', 'prev']);

const email = ref('');
const steps = ['시작', '정보 입력', '인증', '추가 설정', '완료'];

const title = computed(() => {
  return props.groupJoinType === 'manual'
      ? '관리자의 승인 후 가입이 완료되는 공간입니다.<br/>사용하실 이메일을 입력해 주세요.'
      : '참여하실 공간에서 사용하는 이메일을 입력해 주세요.';
});
</script>

<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <h1 class="main-title" v-html="title"></h1>
        <div class="input-container">
          <input
              type="email"
              v-model="email"
              class="name-input"
              placeholder="example@email.com"
              @keyup.enter="email && emit('next')"
          />
        </div>
      </div>
    </main>

    <StepNavigation
        :progress="60"
        :currentIdx="1"
        :labels="steps"
        :disabledNext="!email"
        @next="emit('next')"
        @prev="prev"
    />
  </div>
</template>

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
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.main-title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 56px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  word-break: keep-all;
}

.name-input {
  width: 100%;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  padding: 24px;
  border-radius: 20px;
  font-size: 18px;
  text-align: center;
  outline: none;
  transition: all 0.3s ease;
}

.name-input:focus {
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}
</style>