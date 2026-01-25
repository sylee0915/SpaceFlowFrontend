<template>
  <div class="calendar-container">
    <header class="calendar-header">
      <div class="header-left">
        <button class="btn-back" @click="$emit('prev')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E54D42" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          Back
        </button>
        <h1 class="room-name-title">313 - 1 Conference Room</h1>
      </div>
      <div class="view-switcher">
        <button class="switch-btn active">Month</button>
        <button class="switch-btn">Day</button>
      </div>
    </header>

    <div class="main-layout">
      <section class="calendar-section">
        <div class="month-nav">
          <button class="nav-btn">＜</button>
          <span class="current-month">June 2021</span>
          <button class="nav-btn">＞</button>
        </div>
        <div class="calendar-grid">
          <div v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" :key="day" class="weekday">{{ day }}</div>
          <div v-for="d in 30" :key="d" class="date-cell" :class="{ 'selected': d === 2 }">
            {{ d }}
            <div class="dots"><span v-if="d % 3 === 0" class="dot"></span></div>
          </div>
        </div>
      </section>

      <aside class="info-sidebar">
        <div class="digital-clock">19:15</div>
        <div class="timeline-list">
          <p class="label">TIMELINE</p>
          <div class="time-card booked">
            <div class="time">08:30 - 09:30</div>
            <div class="title">UX Team Meeting</div>
          </div>
          <div class="time-card available">
            <div class="time">09:30 - 11:00</div>
            <div class="title">Available</div>
          </div>
        </div>
        <button class="btn-book-now">회의실 예약하기</button>
      </aside>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['prev']);
</script>

<style scoped>
.calendar-container { width: 100vw; height: 100vh; background-color: #F8F9FA; display: flex; flex-direction: column; }
.calendar-header { padding: 30px 60px; background: white; border-bottom: 1px solid #EEE; display: flex; justify-content: space-between; align-items: center; }
.header-left { display: flex; align-items: center; gap: 24px; }
.btn-back { display: flex; align-items: center; gap: 8px; border: none; background: none; color: #E54D42; font-weight: 700; cursor: pointer; }
.room-name-title { font-size: 24px; font-weight: 800; }
.view-switcher { background: #EEE; padding: 4px; border-radius: 10px; }
.switch-btn { padding: 8px 20px; border: none; border-radius: 8px; background: none; font-weight: 600; cursor: pointer; }
.switch-btn.active { background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }

.main-layout { flex: 1; display: flex; padding: 40px 60px; gap: 40px; }
.calendar-section { flex: 1; background: white; border-radius: 30px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
.month-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.current-month { font-size: 20px; font-weight: 800; color: #E54D42; }
.calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 15px; }
.weekday { text-align: center; color: #BBB; font-weight: 700; font-size: 13px; }
.date-cell { aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 15px; cursor: pointer; font-weight: 600; }
.date-cell.selected { background: #1A1A1A; color: white; }
.dot { width: 4px; height: 4px; background: #E54D42; border-radius: 50%; margin-top: 4px; }

/* 오른쪽 사이드바 (다크 통일) */
.info-sidebar { width: 340px; background-color: #1A1A1A; padding: 40px; border-radius: 30px; color: white; display: flex; flex-direction: column; }
.digital-clock { font-size: 64px; font-weight: 200; margin-bottom: 40px; text-align: center; }
.label { font-size: 12px; color: rgba(255,255,255,0.3); letter-spacing: 1px; margin-bottom: 20px; }
.time-card { padding: 20px; border-radius: 15px; margin-bottom: 12px; border-left: 4px solid #E54D42; background: rgba(255,255,255,0.05); }
.time-card.available { border-left-color: #00BA34; }
.time { font-size: 13px; opacity: 0.5; margin-bottom: 4px; }
.title { font-weight: 700; }
.btn-book-now { margin-top: auto; background: #E54D42; border: none; padding: 20px; border-radius: 15px; color: white; font-weight: 800; cursor: pointer; }
</style>