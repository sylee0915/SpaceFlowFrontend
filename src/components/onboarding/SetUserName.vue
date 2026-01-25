<script setup>
import { ref } from 'vue';
import StepNavigation from './StepNavigation.vue';
const emit = defineEmits(['next', 'prev']);
const userName = ref('');
const steps = ['시작', '단체명 설정', '가입방식 설정', '계정정보 기입', '완료'];
</script>

<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <h1 class="main-title">사용하실 이름을 입력해 주세요.</h1>
        <div class="input-container">
          <input v-model="userName" class="name-input" placeholder="이름 입력" @keyup.enter="userName && emit('next')" />
        </div>
      </div>
    </main>
    <StepNavigation :progress="95" :currentIdx="3" :labels="steps" :disabledNext="!userName" @next="emit('next')" @prev="emit('prev')" />
  </div>
</template>

<style scoped>
.step-wrapper { height: 100%; display: flex; flex-direction: column; }
.main-content { flex: 1; display: flex; align-items: center; justify-content: center; }
.center-content { width: 100%; max-width: 600px; text-align: center; }
.main-title { font-size: 34px; font-weight: 700; margin-bottom: 56px; }
.name-input { width: 100%; background-color: rgba(26, 26, 26, 0.05); border: none; padding: 24px; border-radius: 20px; font-size: 17px; text-align: center; outline: none; }
</style>