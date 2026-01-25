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
  labels: Array
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
  margin-bottom: 36px;
}

.btn-back {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
  color: #1A1A1A;
  opacity: 0.6;
}

.btn-next {
  background-color: #1A1A1A;
  color: #FFFFFF;
  border: none;
  padding: 16px 56px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-next:disabled {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.3);
  cursor: not-allowed;
}

.progress-bar-container {
  width: 100%;
  height: 2px;
  background-color: rgba(26, 26, 26, 0.1);
  margin-bottom: 20px;
}

.progress-fill {
  height: 100%;
  background-color: #1A1A1A;
  transition: width 0.4s ease;
}

.step-labels {
  display: flex;
  justify-content: space-between;
}

.step-label-item {
  font-size: 13px;
  font-weight: 500;
  color: rgba(26, 26, 26, 0.3);
}

.step-label-item.active {
  color: #1A1A1A;
  font-weight: 700;
}
</style>