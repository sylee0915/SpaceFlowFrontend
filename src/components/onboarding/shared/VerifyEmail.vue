<script setup>
import { ref } from 'vue';
import StepNavigation from '../common/StepNavigation.vue';
const emit = defineEmits(['next', 'prev']);
const code = ref(['', '', '', '', '', '']);
const steps = ['시작', '단체명 설정', '가입방식 설정', '계정정보 기입', '완료'];
</script>

<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <h1 class="main-title">이메일로 전송된<br/>인증번호 6자리를 입력해 주세요.</h1>
        <div class="code-container">
          <input v-for="(n, i) in 6" :key="i" v-model="code[i]" maxlength="1" class="code-input" />
        </div>
      </div>
    </main>
    <StepNavigation :progress="85" :currentIdx="3" :labels="steps" @next="emit('next')" @prev="emit('prev')" />
  </div>
</template>

<style scoped>
.step-wrapper { height: 100%; display: flex; flex-direction: column; }
.main-content { flex: 1; display: flex; align-items: center; justify-content: center; }
.center-content { text-align: center; }
.main-title { font-size: 34px; font-weight: 700; margin-bottom: 56px; line-height: 1.4; }
.code-container { display: flex; gap: 12px; justify-content: center; }
.code-input { width: 54px; height: 64px; background-color: rgba(26, 26, 26, 0.05); border: none; border-radius: 12px; font-size: 24px; font-weight: 700; text-align: center; outline: none; }
</style>