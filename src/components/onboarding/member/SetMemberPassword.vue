<script setup>
import { reactive } from 'vue';
import StepNavigation from '../common/StepNavigation.vue';

const emit = defineEmits(['next', 'prev']);
const form = reactive({ password: '', confirmPassword: '' });
const steps = ['시작', '정보 입력', '인증', '추가 설정', '완료'];
</script>

<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <h1 class="main-title">로그인에 사용하실<br/>비밀번호를 설정해 주세요.</h1>
        <div class="form-container">
          <div class="form-row">
            <label>비밀번호</label>
            <input
                type="password"
                v-model="form.password"
                placeholder="영문, 숫자 포함 8자리 이상"
            />
          </div>
          <div class="form-row">
            <label>비밀번호 확인</label>
            <input
                type="password"
                v-model="form.confirmPassword"
                placeholder="비밀번호를 한 번 더 입력해 주세요"
            />
          </div>
        </div>
      </div>
    </main>

    <StepNavigation
        :progress="80"
        :currentIdx="3"
        :labels="steps"
        :disabledNext="!form.password || form.password !== form.confirmPassword"
        @next="emit('next')"
        @prev="emit('prev')"
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
  max-width: 400px;
}

.main-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
  line-height: 1.4;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-row label {
  font-size: 14px;
  font-weight: 600;
  color: #4A4A4A;
}

.form-row input {
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #DDD;
  background: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
}

.form-row input:focus {
  border-color: #1A1A1A;
}
</style>