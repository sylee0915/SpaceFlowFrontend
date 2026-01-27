<script setup>
const emit = defineEmits(['prev']);
const logoUrl = 'https://i.ibb.co/KjdC2qnn/KakaoTalk-20260125-164433710.png';

const handleLoginGo = () => {
  console.log('로그인 페이지로 이동');
};
</script>

<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <div class="welcome-section">
          <h1 class="main-title">이승엽님 환영합니다!</h1>
        </div>
        <button class="btn-login-go" @click="handleLoginGo">로그인 하러가기</button>
      </div>
    </main>

    <footer class="done-footer">
      <div class="progress-section">
        <div class="progress-bar-container full">
          <div class="progress-fill" style="width: 100%"></div>
        </div>
        <div class="step-labels">
          <span>시작</span>
          <span>단체명 설정</span>
          <span>가입방식 설정</span>
          <span>계정정보 기입</span>
          <span class="active">완료</span>
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
  font-family: 'Pretendard', sans-serif;
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

.welcome-section {
  margin-bottom: 48px;
}

.main-title {
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.sub-message {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
}

.btn-login-go {
  background-color: #1A1A1A;
  color: #FFFFFF;
  border: none;
  padding: 18px 48px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-login-go:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.done-footer {
  padding: 0 64px 48px;
}

.progress-bar-container {
  width: 100%;
  height: 4px;
  background-color: rgba(26, 26, 26, 0.05);
  border-radius: 2px;
  margin-bottom: 24px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #1A1A1A;
}

.step-labels {
  display: flex;
  justify-content: space-between;
}

.step-labels span {
  font-size: 13px;
  font-weight: 500;
  color: rgba(26, 26, 26, 0.3);
}

.step-labels .active {
  color: #1A1A1A;
  font-weight: 700;
}
</style>