<script setup>
import { ref } from 'vue';

const emit = defineEmits(['next', 'prev']);

const steps = ['시작', '단체명 설정', '가입방식 설정', '계정정보 기입', '완료'];
const currentStep = 0;
const selectedType = ref('new');

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

    <footer class="bottom-nav">
      <div class="nav-top">
        <button class="btn-back" @click="emit('prev')">뒤로</button>
        <button class="btn-next" @click="emit('next')">다음</button>
      </div>

      <div class="progress-section">
        <div class="progress-bar-container">
          <div class="progress-fill" :style="{ width: '20%' }"></div>
        </div>
        <div class="step-labels">
          <div
              v-for="(step, index) in steps"
              :key="index"
              class="step-label-item"
              :class="{ active: index === currentStep }"
          >
            {{ step }}
          </div>
        </div>
      </div>
    </footer>
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
  background-color: rgba(255, 255, 255, 0.3);
  border: 1.5px solid #1A1A1A;
  padding: 26px;
  border-radius: 18px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.selection-card.active {
  background-color: #1A1A1A;
  color: #FFFFFF;
}

.bottom-nav {
  padding: 0 64px 48px 64px;
}

.nav-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
}

.btn-back {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
}

.btn-next {
  background-color: #1A1A1A;
  color: #FFFFFF;
  border: none;
  padding: 16px 56px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.progress-bar-container {
  width: 100%;
  height: 2px;
  background-color: rgba(26, 26, 26, 0.1);
  margin-bottom: 20px;
}

.progress-fill {
  height: 100%;
  background-color: #1A1A1A;
}

.step-labels {
  display: flex;
  justify-content: space-between;
}

.step-label-item {
  font-size: 13px;
  color: rgba(26, 26, 26, 0.3);
}

.step-label-item.active {
  color: #1A1A1A;
  font-weight: 700;
}
</style>