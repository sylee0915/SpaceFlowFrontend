<script setup>
import StepNavigation from '../common/StepNavigation.vue';

const props = defineProps(['joinMethod']);
const emit = defineEmits(['next', 'prev', 'update:joinMethod']);
const steps = ['시작', '단체명 설정', '가입방식 설정', '계정정보 기입', '완료'];

const handleSelect = (method) => {
  emit('update:joinMethod', method);
};
</script>

<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <h1 class="main-title">멤버들의 가입을 어떻게 관리할까요?</h1>

        <div class="method-group">
          <div
              class="method-card"
              :class="{ active: joinMethod === 'auto' }"
              @click="handleSelect('auto')"
          >
            <div class="card-tab">도메인 자동 승인</div>
            <div class="card-body">
              회사 이메일(@company.com) 소유자는 바로 가입됩니다.
            </div>
          </div>

          <div
              class="method-card"
              :class="{ active: joinMethod === 'manual' }"
              @click="handleSelect('manual')"
          >
            <div class="card-tab">관리자 직접 승인</div>
            <div class="card-body">
              가입 요청 시 관리자가 수동으로 승인합니다.
            </div>
          </div>
        </div>
      </div>
    </main>

    <StepNavigation
        :progress="60"
        :currentIdx="2"
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
  font-family: 'Pretendard', sans-serif;
  color: #1A1A1A;
}

.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-content {
  width: 100%;
  max-width: 560px;
  text-align: center;
}

.main-title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 64px;
  letter-spacing: -0.02em;
}

.method-group {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.method-card {
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.method-card:hover {
  transform: translateY(-2px);
}

.card-tab {
  position: absolute;
  top: -16px;
  left: 20px;
  background-color: #555;
  color: #FFFFFF;
  padding: 6px 20px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.25s;
}

.card-body {
  background-color: rgba(255, 255, 255, 0.4);
  border: 2px solid #1A1A1A;
  padding: 24px;
  border-radius: 0 16px 16px 16px;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  padding-left: 32px;
  transition: all 0.25s;
}

.method-card.active .card-tab {
  background-color: #1A1A1A;
}

.method-card.active .card-body {
  background-color: #1A1A1A;
  color: #FFFFFF;
}
</style>