<template>
  <footer class="bottom-nav">
    <div class="nav-top">
      <button class="btn-back" @click="$emit('prev')">뒤로</button>
      <button
          class="btn-next"
          :disabled="disabledNext"
          @click="$emit('next')"
      >
        다음
      </button>
    </div>

    <div class="progress-section">
      <div class="progress-bar-container">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="step-labels">
        <div
            v-for="(label, index) in labels"
            :key="index"
            class="step-label-item"
            :class="{ active: currentIdx === index }"
        >
          {{ label }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  progress: Number,
  currentIdx: Number,
  disabledNext: Boolean,
  labels: {
    type: Array,
    default: () => []
  }
});
defineEmits(['next', 'prev']);
</script>

<style scoped>
.bottom-nav {
  padding: 0 64px 48px 64px;
}

.nav-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.btn-back {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: #1A1A1A;
  opacity: 0.5;
  transition: opacity 0.2s;
}

.btn-back:hover { opacity: 1; text-decoration: underline; }

.btn-next {
  background-color: #1A1A1A;
  color: #FFFFFF;
  border: none;
  padding: 18px 64px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.btn-next:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.btn-next:disabled {
  background-color: rgba(26, 26, 26, 0.1);
  color: rgba(26, 26, 26, 0.3);
  cursor: not-allowed;
  box-shadow: none;
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
  transition: width 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.step-labels {
  display: flex;
  justify-content: space-between;
}

.step-label-item {
  font-size: 13px;
  font-weight: 500;
  color: rgba(26, 26, 26, 0.3);
  transition: color 0.3s;
}

.step-label-item.active {
  color: #1A1A1A;
  font-weight: 700;
}
</style>