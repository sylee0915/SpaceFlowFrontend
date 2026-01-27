<script setup>
const emit = defineEmits(['next']);

const handleSignUp = () => {
  emit('next');
};

const handleLogin = () => {
  console.log('로그인 페이지로 이동');
};
</script>

<template>
  <div class="entry-wrapper">
    <div class="auth-corner">
      <span class="auth-text">이미 회원이신가요?</span>
      <button @click="handleLogin" class="btn-login">로그인</button>
    </div>

    <main class="main-content">
      <div class="center-content">
        <h1 class="main-title">
          어디서나, 무엇이든. 당신의 필요에 맞춰<br />
          유연하게 반응하는 예약 시스템
        </h1>
        <p class="sub-title">Smart Booking, Better Space</p>

        <button @click="handleSignUp" class="btn-signup">
          바로 회원가입
        </button>
      </div>
    </main>

    <footer class="footer">
      <button class="btn-help">?</button>
    </footer>
  </div>
</template>

<style scoped>
.entry-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard', sans-serif;
  color: #1A1A1A;
  position: relative;
}

.auth-corner {
  position: absolute;
  top: 48px;
  right: 64px;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 10;
}

.auth-text {
  font-size: 15px;
  font-weight: 500;
  color: #4A4A4A;
}

.btn-login {
  background-color: #1A1A1A;
  color: #FFFFFF;
  border: none;
  padding: 10px 24px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.btn-login:hover {
  opacity: 0.8;
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
  font-size: 42px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  word-break: keep-all;
}

.sub-title {
  font-size: 22px;
  font-weight: 400;
  color: #333;
  margin-bottom: 60px;
}

.btn-signup {
  background-color: #1A1A1A;
  color: #FFFFFF;
  border: none;
  padding: 20px 80px;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-signup:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.footer {
  position: absolute;
  bottom: 48px;
  right: 64px;
}

.btn-help {
  width: 44px;
  height: 44px;
  background-color: #1A1A1A;
  color: #FFFFFF;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>