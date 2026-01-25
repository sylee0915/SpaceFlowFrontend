<script setup>
const emit = defineEmits(['prev']);
const logoUrl = 'https://i.ibb.co/KjdC2qnn/KakaoTalk-20260125-164433710.png';
</script>

<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <h1 class="main-title">이승엽님 환영합니다!</h1>
        <button class="btn-login-go">로그인 하러가기</button>
      </div>
    </main>
    <footer class="done-footer">
      <div class="progress-bar-container full">
        <div class="progress-fill" style="width: 100%"></div>
      </div>
      <div class="step-labels">
        <span>시작</span><span>단체명 설정</span><span>가입방식 설정</span><span>계정정보 기입</span><span class="active">완료</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.step-wrapper { height: 100%; display: flex; flex-direction: column; }
.main-content { flex: 1; display: flex; align-items: center; justify-content: center; }
.center-content { text-align: center; }
.main-title { font-size: 34px; font-weight: 700; margin-bottom: 40px; }
.btn-login-go { background-color: rgba(26, 26, 26, 0.05); border: none; padding: 12px 32px; border-radius: 100px; font-weight: 600; cursor: pointer; }
.done-footer { padding: 0 64px 48px; }
.progress-bar-container { width: 100%; height: 2px; background-color: rgba(26, 26, 26, 0.1); margin-bottom: 20px; }
.progress-fill { height: 100%; background-color: #1A1A1A; }
.step-labels { display: flex; justify-content: space-between; font-size: 13px; color: rgba(26, 26, 26, 0.3); }
.step-labels .active { color: #1A1A1A; font-weight: 700; }
</style>