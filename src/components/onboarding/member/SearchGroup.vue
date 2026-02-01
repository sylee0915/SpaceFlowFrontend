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
        <h1 class="main-title">참여하실 공간의 이름을 입력해 주세요.</h1>
        <div class="input-container">
          <input
              type="text"
              v-model="formData.searchQuery"
              class="name-input"
              placeholder="공간 이름 검색"
              @keyup.enter="formData.searchQuery && next()"
          />
        </div>
      </div>
    </main>

    <StepNavigation
        :progress="progress"
        :currentIdx="currentIdx"
        :labels="labels"
        :disabledNext="!formData.searchQuery"
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
  max-width: 600px;
  text-align: center;
}

.main-title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 56px;
  letter-spacing: -0.02em;
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

.name-input::placeholder {
  color: rgba(26, 26, 26, 0.3);
}
</style>