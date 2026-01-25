<template>
  <div class="selection-container">
    <main class="selection-main">
      <header class="selection-header">
        <button class="btn-icon-back" @click="$emit('prev')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <nav class="category-nav">
          <button class="cat-item active">회의실 예약</button>
          <button class="cat-item">차량 예약</button>
          <button class="cat-item">장비 예약</button>
        </nav>
      </header>

      <section class="room-list-section">
        <h2 class="section-title">예약하실 회의실을 선택해 주세요</h2>
        <div class="room-grid">
          <div v-for="room in rooms" :key="room.id" class="room-card" :class="{ 'unavailable': !room.isAvailable }" @click="room.isAvailable && $emit('next')">
            <div class="room-image" :style="{ backgroundImage: `url(${room.image})` }">
              <div v-if="!room.isAvailable" class="status-badge busy">사용 중</div>
              <div v-else class="status-badge available">예약 가능</div>
            </div>
            <div class="room-info">
              <div class="info-top">
                <h3 class="room-name">{{ room.name }}</h3>
                <span class="capacity">{{ room.capacity }}인석</span>
              </div>
              <p class="room-desc">{{ room.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <aside class="info-sidebar">
      <div class="digital-clock">19:15</div>
      <div class="upcoming-list">
        <p class="label">TODAY SCHEDULE</p>
        <div class="event-item active"><span class="dot"></span><span>Team Sync Interview</span></div>
        <div class="event-item"><span class="dot empty"></span><span>Weekly Review</span></div>
      </div>
      <div class="sidebar-footer">:::</div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['next', 'prev']);
const rooms = ref([
  { id: 1, name: 'Conference Room A', capacity: 8, isAvailable: true, description: '대형 모니터 완비', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400' },
  { id: 2, name: 'Focus Room 1', capacity: 2, isAvailable: false, description: '개인 면담용 공간', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400' },
  { id: 3, name: 'Idea Lounge', capacity: 6, isAvailable: true, description: '브레인스토밍 라운지', image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=400' }
]);
</script>

<style scoped>
.selection-container { display: flex; width: 100vw; height: 100vh; background-color: #121212; color: #fff; overflow: hidden; }
.selection-main { flex: 1; padding: 40px 60px; display: flex; flex-direction: column; overflow-y: auto; }
.selection-header { display: flex; align-items: center; gap: 30px; margin-bottom: 50px; }
.btn-icon-back { background: none; border: none; color: #fff; cursor: pointer; }
.category-nav { display: flex; background: rgba(255,255,255,0.05); padding: 6px; border-radius: 100px; gap: 8px; }
.cat-item { padding: 12px 28px; border-radius: 100px; border: none; background: transparent; color: rgba(255,255,255,0.4); font-weight: 700; cursor: pointer; }
.cat-item.active { background: #E54D42; color: #fff; }
.section-title { font-size: 28px; font-weight: 800; margin-bottom: 32px; }
.room-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
.room-card { background: rgba(255,255,255,0.03); border-radius: 24px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05); cursor: pointer; transition: transform 0.3s; }
.room-card:hover:not(.unavailable) { transform: translateY(-8px); border-color: #E54D42; }
.room-image { height: 180px; background-size: cover; background-position: center; position: relative; padding: 16px; }
.status-badge { padding: 6px 12px; border-radius: 100px; font-size: 11px; font-weight: 800; }
.status-badge.available { background: #00BA34; }
.status-badge.busy { background: #E54D42; }
.room-info { padding: 24px; }
.room-name { font-size: 20px; font-weight: 700; margin-bottom: 8px; }

/* 공통 사이드바 (기존 스타일 유지) */
.info-sidebar { width: 340px; background-color: #1A1A1A; padding: 60px 40px; display: flex; flex-direction: column; border-left: 1px solid rgba(255,255,255,0.05); }
.digital-clock { font-size: 72px; font-weight: 200; margin-bottom: 60px; }
.event-item.active { color: #5B9AFF; }
.event-item .dot { width: 8px; height: 8px; border-radius: 50%; background: #5B9AFF; }
</style>