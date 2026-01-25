<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <h1 class="main-title" v-html="title"></h1>
        <div class="input-container">
          <input
              type="text"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
              class="name-input"
              :placeholder="placeholder"
              @keyup.enter="modelValue && $emit('next')"
          />
        </div>
      </div>
    </main>

    <StepNavigation
        :progress="progress"
        :currentIdx="currentIdx"
        :labels="steps"
        :disabledNext="!modelValue"
        @next="$emit('next')"
        @prev="$emit('prev')"
    />
  </div>
</template>

<script setup>
import StepNavigation from './StepNavigation.vue';

defineProps({
  title: String,
  placeholder: String,
  modelValue: String,
  progress: Number,
  currentIdx: Number
});

defineEmits(['next', 'prev', 'update:modelValue']);

const steps = ['시작', '단체명 설정', '가입방식 설정', '계정정보 기입', '완료'];
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
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.main-title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 56px;
  line-height: 1.4;
}

.name-input {
  width: 100%;
  background-color: #FFFFFF;
  border: 2px solid transparent;
  padding: 24px;
  border-radius: 24px;
  font-size: 18px;
  text-align: center;
  outline: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  transition: all 0.3s ease;
}

.name-input:focus {
  border-color: #1A1A1A;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.name-input::placeholder {
  color: rgba(26, 26, 26, 0.3);
}
</style>