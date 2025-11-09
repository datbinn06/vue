<script setup>
import { ref, reactive } from "vue";

// 1 Dữ liệu nguyên thủy
let count = ref(0);
let studentName = ref("FE Framework Vue 3");
let studentEmail = ref("ducdh33@gmail.com");
let studentAge = ref(19);
let studentIsActive = ref(true);

// 2 Đối tượng reactive
let state = reactive({ amount: 0, name: "Duc", status: true });

// 3 Hàm tăng giá trị
function increamentCount() {
  count.value++;
}
const increamentAmount = () => {
  state.amount++;
};

// 4 Two-way data binding
let hovaten = ref("Đào Hồng Đức");

// 5 Event binding
const onClickDangKy = () => {
  alert("Đăng ký thành công");
};

const onBlurInput = () => {
  alert("Thành công");
};
//styte binding
let styleString = "font-size: 20px";

// property binding
let logoUrl = "/img/logo.png";
let caunoiyeuthich = "Không làm mà đòi có ăn chỉ có ăn đầu B**i ăn cứt thế thôi";
</script>

<template>
  <h1>Thông tin :</h1>
  <ul class="list-group">
    <li class="list-group-item">Tên sinh viên: {{ studentName }}</li>
    <li class="list-group-item">Email: {{ studentEmail }}</li>
    <li class="list-group-item">Tuổi: {{ studentAge }}</li>
    <li class="list-group-item">
      Trạng thái: {{ studentIsActive ? "đang học" : "bảo lưu" }}
    </li>
  </ul>

  <hr />

  COUNT: {{ count }}
  <button class="btn btn-danger" @click="increamentCount">Increament count</button>
  <br /><br />
  State amount: {{ state.amount }}
  <button class="btn btn-warning" @click="increamentAmount">Increament amount</button>

  <hr />
  <h3>2 Way Data Binding</h3>
  <p>Đồng bộ dữ liệu giữa input và biến</p>
  <div>
    <input type="text" class="form-control" v-model="hovaten" />
    <p>Xin chào {{ hovaten }}</p>
  </div>

  <hr />
  <h3>Event Binding</h3>
  <p>Bắt sự kiện người dùng tương tác với HTML</p>
  <div>
    <h6>Bắt sự kiện click</h6>
    <button class="btn btn-primary" @click="onClickDangKy()">Đăng ký</button>

    <h6>Bắt sự kiện blur</h6>
    <input type="text" class="form-control" @blur="onBlurInput()" />
  </div>
  <hr />
  <h3>Class Binding</h3>
  <p>v-bind:class dùng để binding các lớp css cho phần tử</p>
  <p>Class binding - CHUỖI</p>
  <div v-bind:class="'active'">
    {{ hovaten }}
  </div>
  <p>Class binding - Đối Tượng</p>
  <div :class="{ active: state.amount >= 3 }">
    {{ state.amount }}
  </div>

  <!-- styte binding -->
  <hr />
  <h3>STYLE BINDING</h3>
  <p>Style chuỗi, đối tượng, điều kiện</p>
  <div :style="styleString">This is a style div</div>
  <h3>kết hợp class binding và style binding</h3>
  <div
    :class="['card', state.status ? 'active-card' : 'inactive-card']"
    :style="{ backgroundColor: state.status ? 'lightgreen' : lightcoral }"
  >
    {{ state.name }} - {{ state.status }}
  </div>
  <hr />
  <h3>PROPETY BINDING</h3>
  <p>Sử dụng fill giá trị vào các property của thẻ html</p>
  <input type="text" class="form-control" v-bind:value="caunoiyeuthich" />
</template>
<style scoped>
.active {
  background-color: red;
  color: white;
  padding: 10px;
}
</style>
