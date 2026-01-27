<script setup>
import { ref } from 'vue';
import StepNavigation from '../common/StepNavigation.vue';

const emit = defineEmits(['next', 'prev']);
const code = ref(['', '', '', '', '', '']);
const inputs = ref([]);

const steps = ['시작', '단체명 설정', '가입방식 설정', '계정정보 기입', '완료'];

const handleInput = (e, index) => {
  const val = e.target.value;
  if (val.length >= 1) {
    code.value[index] = val.substring(val.length - 1);
    if (index < 5) inputs.value[index + 1].focus();
  }
};

const handleKeyDown = (e, index) => {
  if (e.key === 'Backspace' && !code.value[index] && index > 0) {
    inputs.value[index - 1].focus();
  }
};

const isComplete = () => code.value.every(v => v !== '');
</script>

<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <h1 class="main-title">이메일로 전송된<br/>인증번호 6자리를 입력해 주세요.</h1>
        <div class="code-container">
          <input
              v-for="(n, i) in 6"
              :key="i"
              ref="inputs"
              v-model="code[i]"
              type="text"
              maxlength="1"
              class="code-input"
              @input="handleInput($event, i)"
              @keydown="handleKeyDown($event, i)"
          />
        </div>
      </div>
    </main>

    <StepNavigation
        :progress="85"
        :currentIdx="3"
        :labels="steps"
        :disabledNext="!isComplete()"
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
  text-align: center;
}

.main-title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 56px;
  line-height: 1.4;
}

.code-container {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.code-input {
  width: 54px;
  height: 64px;
  background-color: rgba(26, 26, 26, 0.05);
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  outline: none;
  transition: all 0.2s;
}

.code-input:focus {
  background-color: #FFFFFF;
  border-color: #1A1A1A;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
</style>