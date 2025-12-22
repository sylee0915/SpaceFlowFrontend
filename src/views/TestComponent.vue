<template>
  <div class="test-container">
    <h2>백엔드 연결 테스트</h2>
    <button @click="fetchTestData">데이터 가져오기</button>

    <div v-if="loading" class="status">연결 중...</div>

    <div v-if="responseData" class="result">
      <p><strong>메시지:</strong> {{ responseData.message }}</p>
      <p><strong>상태:</strong> {{ responseData.status }}</p>
    </div>

    <div v-if="error" class="error">
      에러 발생: {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const responseData = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchTestData = async () => {
  loading.value = true;
  error.value = null;
  responseData.value = null;

  try {
    const response = await fetch('http://localhost:8080/api/test');

    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태코드: ${response.status}`);
    }

    const data = await response.json();
    responseData.value = data;
  } catch (err) {
    console.error("통신 에러:", err);
    error.value = "백엔드 서버에 연결할 수 없습니다. 서버가 켜져 있는지 확인하세요.";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.test-container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.result {
  margin-top: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  text-align: left;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>