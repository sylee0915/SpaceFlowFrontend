<script setup>
import { useOnboarding } from '@/composables/useOnboarding';
import StepNavigation from '../common/StepNavigation.vue';

const { formData, next, prev } = useOnboarding();

const props = defineProps({
  labels: Array,
  currentIdx: Number,
  progress: Number
});
</script>

<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <h1 class="main-title">관리자 계정 정보를 설정해 주세요.</h1>
        <div class="form-container">
          <div class="form-row">
            <label>이메일 주소 (ID)</label>
            <div class="email-input-group">
              <input
                  type="text"
                  v-model="formData.adminEmail"
                  placeholder="이메일 입력"
              />
              <span>@</span>
              <select><option>직접입력</option></select>
            </div>
          </div>
          <div class="form-row">
            <label>비밀번호</label>
            <input
                type="password"
                v-model="formData.adminPassword"
                placeholder="영문, 숫자 포함 8자리 이상"
            />
          </div>
          <div class="form-row">
            <label>비밀번호 확인</label>
            <input
                type="password"
                v-model="formData.adminConfirmPassword"
                placeholder="비밀번호를 한 번 더 입력해 주세요"
            />
          </div>
        </div>
      </div>
    </main>

    <StepNavigation
        :progress="progress"
        :currentIdx="currentIdx"
        :labels="labels"
        :disabledNext="!formData.adminEmail || !formData.adminPassword || formData.adminPassword !== formData.adminConfirmPassword"
        @next="next"
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
  max-width: 500px;
}

.main-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
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

.form-row input, .form-row select {
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

.email-input-group {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10px;
  align-items: center;
}
</style>