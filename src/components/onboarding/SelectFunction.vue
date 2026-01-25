<script setup>
import { ref } from 'vue';
import StepNavigation from './common/StepNavigation.vue';

const emit = defineEmits(['next', 'prev']);
const selectedType = ref('new');
const steps = ['시작', '단체명 설정', '가입방식 설정', '계정정보 기입', '완료'];

const handleSelect = (type) => {
  selectedType.value = type;
};
</script>

<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <h1 class="main-title">어떤 기능을 먼저 시작할까요?</h1>

        <div class="selection-group">
          <div
              class="selection-card"
              :class="{ active: selectedType === 'new' }"
              @click="handleSelect('new')"
          >
            <span>새로운 공간 생성 및 관리 도구 시작하기</span>
          </div>
          <div
              class="selection-card"
              :class="{ active: selectedType === 'join' }"
              @click="handleSelect('join')"
          >
            <span>기존 공간 참여 및 예약하기</span>
          </div>
        </div>
      </div>
    </main>

    <StepNavigation
        :progress="20"
        :currentIdx="0"
        :labels="steps"
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
}

.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-content {
  width: 100%;
  max-width: 520px;
  text-align: center;
}

.main-title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 56px;
  letter-spacing: -0.02em;
}

.selection-group {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.selection-card {
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(26, 26, 26, 0.1);
  padding: 30px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.selection-card:hover {
  border-color: rgba(26, 26, 26, 0.3);
  background-color: rgba(255, 255, 255, 0.8);
  transform: translateX(4px);
}

.selection-card.active {
  background-color: #1A1A1A;
  color: #FFFFFF;
  border-color: #1A1A1A;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
</style>