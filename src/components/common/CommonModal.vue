<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-container">
        <div class="modal-content">
          <h2 class="modal-title">{{ title }}</h2>
          <p class="modal-message">
            <slot name="message">{{ message }}</slot>
          </p>
        </div>

        <div class="modal-actions">
          <button class="btn-cancel" @click="$emit('close')">
            {{ cancelText }}
          </button>
          <button class="btn-confirm" @click="$emit('confirm')">
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: Boolean,
  title: { type: String, default: '확인' },
  message: String,
  confirmText: { type: String, default: '확인' },
  cancelText: { type: String, default: '취소' }
});

defineEmits(['confirm', 'close']);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal-container {
  background: #FFFFFF;
  width: 90%;
  max-width: 400px;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  animation: modal-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-content {
  text-align: center;
  margin-bottom: 32px;
}

.modal-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1A1A1A;
}

.modal-message {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  word-break: keep-all;
}

.modal-actions {
  display: flex;
  gap: 12px;
}

.modal-actions button {
  flex: 1;
  padding: 16px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-cancel {
  background-color: rgba(26, 26, 26, 0.05);
  color: #666;
}

.btn-cancel:hover {
  background-color: rgba(26, 26, 26, 0.1);
}

.btn-confirm {
  background-color: #1A1A1A;
  color: #FFFFFF;
}

.btn-confirm:hover {
  background-color: #333;
}

/* Transitions & Animations */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

@keyframes modal-pop {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>