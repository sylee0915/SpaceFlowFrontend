<script setup>
import { computed } from 'vue';

const props = defineProps({
  groupJoinType: {
    type: String,
    default: 'auto'
  },
  userName: {
    type: String,
    default: '이승엽'
  }
});

const emit = defineEmits(['prev']);
const logoUrl = 'https://i.ibb.co/KjdC2qnn/KakaoTalk-20260125-164433710.png';

const isManual = computed(() => props.groupJoinType === 'manual');

const handleLoginGo = () => {
  console.log('로그인 페이지로 이동');
};
</script>

<template>
  <div class="step-wrapper">
    <main class="main-content">
      <div class="center-content">
        <div v-if="!isManual" class="welcome-section">
          <h1 class="main-title">{{ userName }}님 환영합니다!</h1>
          <p class="sub-message">공간 참여가 완료되었습니다.<br/>지금 바로 예약을 시작해보세요.</p>
          <button class="btn-login-go" @click="handleLoginGo">로그인 하러가기</button>
        </div>

        <div v-else class="waiting-section">
          <h1 class="main-title">관리자의 승인을 기다려 주세요.</h1>
          <p class="sub-message">가입 요청이 완료되었습니다!<br/>승인 시 알림을 보내드립니다.</p>
          <button class="btn-login-go secondary" @click="handleLoginGo">로그인 화면으로</button>
        </div>
      </div>
    </main>

    <footer class="done-footer">
      <div class="progress-section">
        <div class="progress-bar-container full">
          <div class="progress-fill" style="width: 100%"></div>
        </div>
        <div class="step-labels">
          <span>시작</span>
          <span>정보 입력</span>
          <span>인증</span>
          <span>추가 설정</span>
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

.welcome-section, .waiting-section {
  animation: fadeInUp 0.6s ease-out;
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
  margin-bottom: 48px;
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

.btn-login-go.secondary {
  background-color: rgba(26, 26, 26, 0.05);
  color: #1A1A1A;
  box-shadow: none;
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>