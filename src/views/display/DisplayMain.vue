<template>
  <div class="display-root">
    <transition name="page-fade" mode="out-in">
      <component
          :is="viewComponents[currentView]"
          @next="handleNext"
          @prev="handlePrev"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RoomDisplay from './RoomDisplay.vue';
import RoomSelection from './RoomSelection.vue';
import RoomCalendar from './RoomCalendar.vue';

const currentView = ref('display'); // 'display' | 'selection' | 'calendar'

const viewComponents = {
  display: RoomDisplay,
  selection: RoomSelection,
  calendar: RoomCalendar
};

const handleNext = () => {
  if (currentView.value === 'display') currentView.value = 'selection';
  else if (currentView.value === 'selection') currentView.value = 'calendar';
};

const handlePrev = () => {
  if (currentView.value === 'calendar') currentView.value = 'selection';
  else if (currentView.value === 'selection') currentView.value = 'display';
};
</script>

<style>
.display-root { background-color: #121212; min-height: 100vh; overflow: hidden; }
.page-fade-enter-active, .page-fade-leave-active { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.page-fade-enter-from { opacity: 0; transform: translateX(20px); }
.page-fade-leave-to { opacity: 0; transform: translateX(-20px); }
</style>