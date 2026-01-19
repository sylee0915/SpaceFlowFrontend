<script setup>
const handleSignUp = () => {
  console.log('회원가입 페이지로 이동');
};

const handleLogin = () => {
  console.log('로그인 페이지로 이동');
};
</script>

<template>
  <div class="entry-container">
    <header class="header">
      <div class="logo">
        <div class="logo-box">S</div>
      </div>
      <div class="auth-links">
        <span>이미 회원이신가요?</span>
        <button @click="handleLogin" class="btn-login">로그인</button>
      </div>
    </header>

    <main class="main-content">
      <h1 class="main-title">
        어디서나, 무엇이든. 당신의 필요에 맞춰<br />
        유연하게 반응하는 예약 시스템
      </h1>
      <p class="sub-title">Smart Booking, Better Space</p>

      <button @click="handleSignUp" class="btn-signup">
        바로 회원가입
      </button>
    </main>

    <footer class="footer">
      <button class="btn-help">?</button>
    </footer>
  </div>
</template>

<style scoped>
.entry-container {
  background-color: #F4E0D4;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
  color: #000;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 60px;
}

.logo-box {
  width: 40px;
  height: 40px;
  border: 3px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 24px;
}

.auth-links {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
}

.btn-login {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 100px;
}

.main-title {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 20px;
  word-break: keep-all;
}

.sub-title {
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 60px;
  letter-spacing: -0.5px;
}

.btn-signup {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 18px 60px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn-signup:hover {
  transform: scale(1.02);
}

.footer {
  position: absolute;
  bottom: 40px;
  right: 40px;
}

.btn-help {
  width: 40px;
  height: 40px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>