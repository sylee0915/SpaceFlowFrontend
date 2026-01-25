<template>
  <div class="display-container">
    <section class="main-status-panel">
      <div class="overlay"></div>
      <div class="content-wrap">
        <header class="display-header">
          <div class="brand-logo">
            <span class="logo-s">S</span> SpaceFlow
          </div>
          <div class="current-date">{{ formattedDate }}</div>
        </header>

        <div class="room-info">
          <p class="room-label">Conference Room A</p>
          <h1 class="meeting-title">Team Sync-up</h1>
          <div class="time-range">
            <span class="time">07:00 AM - 08:00 AM</span>
          </div>
        </div>

        <div class="footer-actions">
          <div class="attendees">
            <div v-for="n in 3" :key="n" class="avatar-sm"></div>
          </div>
          <div class="action-group">
            <button class="btn-end-meeting">End Meeting</button>
            <button class="btn-start-booking" @click="$emit('next')">예약 시작하기</button>
          </div>
        </div>
      </div>
    </section>

    <aside class="info-sidebar">
      <div class="digital-clock">{{ currentTime }}</div>
      <div class="upcoming-list">
        <p class="label">TODAY SCHEDULE</p>
        <div class="event-item active">
          <span class="dot"></span>
          <span class="text">Team Sync Interview</span>
        </div>
        <div class="event-item">
          <span class="dot empty"></span>
          <span class="text">Weekly Review</span>
        </div>
        <div class="event-item free">
          <span class="text">(Free)</span>
        </div>
      </div>
      <div class="sidebar-footer">
        <div class="grid-icon">:::</div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['next']);
const currentTime = ref('');
const formattedDate = ref('');

const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  formattedDate.value = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
};

let timer;
onMounted(() => { updateTime(); timer = setInterval(updateTime, 1000); });
onUnmounted(() => clearInterval(timer));
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;800&display=swap');

.display-container { display: flex; width: 100vw; height: 100vh; background-color: #121212; color: #FFFFFF; overflow: hidden; font-family: 'Inter', sans-serif; }
.main-status-panel { flex: 1.6; position: relative; background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'); background-size: cover; background-position: center; }
.overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%); }
.content-wrap { position: relative; height: 100%; padding: 60px; display: flex; flex-direction: column; z-index: 1; }
.brand-logo { font-size: 24px; font-weight: 800; display: flex; align-items: center; gap: 10px; }
.logo-s { background-color: #FFFFFF; color: #000; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-weight: 900; }
.current-date { margin-top: 12px; font-size: 18px; opacity: 0.7; }
.room-info { flex: 1; display: flex; flex-direction: column; justify-content: center; }
.room-label { font-size: 24px; opacity: 0.8; margin-bottom: 12px; }
.meeting-title { font-size: 72px; font-weight: 800; margin-bottom: 24px; letter-spacing: -0.02em; }
.time-range .time { font-size: 32px; font-weight: 500; opacity: 0.9; }
.footer-actions { display: flex; justify-content: space-between; align-items: center; }
.action-group { display: flex; gap: 16px; }
.avatar-sm { width: 48px; height: 48px; border-radius: 50%; background-color: #444; border: 3px solid #1a1a1a; margin-right: -12px; }

.btn-end-meeting { background-color: transparent; border: 2px solid #E54D42; color: #E54D42; padding: 18px 36px; border-radius: 100px; font-size: 18px; font-weight: 700; cursor: pointer; }
.btn-start-booking { background-color: #E54D42; color: white; border: none; padding: 18px 48px; border-radius: 100px; font-size: 18px; font-weight: 700; cursor: pointer; box-shadow: 0 8px 20px rgba(229, 77, 66, 0.3); }

/* 공통 사이드바 스타일 */
.info-sidebar { width: 340px; background-color: #1A1A1A; padding: 60px 40px; display: flex; flex-direction: column; border-left: 1px solid rgba(255,255,255,0.05); }
.digital-clock { font-size: 72px; font-weight: 200; letter-spacing: -2px; margin-bottom: 60px; }
.upcoming-list .label { font-size: 13px; color: rgba(255,255,255,0.3); letter-spacing: 1px; margin-bottom: 32px; font-weight: 700; }
.event-item { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; font-size: 17px; }
.event-item.active { color: #5B9AFF; }
.event-item .dot { width: 8px; height: 8px; border-radius: 50%; background: #5B9AFF; }
.event-item .dot.empty { border: 1px solid rgba(255,255,255,0.3); background: none; }
.event-item.free { opacity: 0.4; font-style: italic; }
.sidebar-footer { margin-top: auto; text-align: right; opacity: 0.2; font-size: 24px; }
</style>