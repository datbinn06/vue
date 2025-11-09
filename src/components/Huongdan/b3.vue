
<script setup>
  import { ref , reactive } from 'vue';
    let age = ref(15);
    let score = ref(80);
    //khai bao theo doi trang thai diem danh
    let issAbsent = ref(true)
    //ham de chuyen doi trang thai hien thi
    const tonggleAbsent =()=>{
        issAbsent.value= !issAbsent.value;
    }
    //mang doi tuong
    let list_foods = reactive([
    {id:"F01",name:"DUC CHO",quanity:10,price:5000},
    {id:"F02",name:"DUC CHO CON",quanity:11,price:2000},
    {id:"F03",name:"DUC lON",quanity:13,price:3000},
    {id:"F04",name:"DUC bUOI",quanity:14,price:4000},
    {id:"F05",name:"DUC DOG",quanity:16,price:6000},
    ]);
    const total = () => list_foods.reduce((sum, item) => sum + item.price * item.quanity, 0);


</script>
<template>
    <div class="container">
    <h3>V-IF / V-ELSE</h3>
    <div v-if="age>=18" class="alert alert-success mt-4">Ban da du tuoi</div>
    <div v-else class="alert alert-danger mt-4"> Ban ch du tuoi</div>
    <div>
    <p>Thong bao</p>
    <span v-if="score>=90">Xuat sac</span>
    <span v-else-if="score>=80">Gioi</span>
     <span v-else-if="score>=70">Kha</span>
     <span v-else-if="score>=60">TB</span>
     <span v-else>Yeu</span>
    </div>
    <h3>v-show: check diem danh</h3>
    <div v-show="issAbsent" class="alert alert-danger">Vang  mat</div>
    <div v-show="!issAbsent" class="alert alert-success">Co mat</div>
    <button @click="tonggleAbsent" :class="issAbsent ? 'btn btn-danger' : 'btn btn-success'">
    {{ issAbsent ? 'Vang mat' : 'co mat' }}
    </button>
    
    <h3>List renderning</h3>
    <p>Danh sach</p>
    <ul v-for="item in list_foods" :key="item.id">
        <li>{{ item }}</li>
    </ul>
    <p>Danh sach</p>
    <ul v-for="(item,index) in list_foods" :key="index">
        <li>{{ index }} - {{ item.price * item.quanity }} </li>
    </ul>
    <table class="table">
        <thead>
            <tr>
                <td>ID</td>
                <td>Ten</td>
                <td>So luong</td>
                <td>Gia tien</td>
                <td>Tong tien</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="food in list_foods" :key="food.id">
        <td>{{ food.id }}</td>
        <td>{{ food.name }}</td>
        <td>{{ food.quanity }}</td>
        <td>{{ food.price }}</td>
        <td>{{ (food.price * food.quanity).toFixed(2) }}</td>
      </tr>
        </tbody>
    </table>
    <h2>Tong tin hang: {{ total() }}</h2>
     </div>


</template>

<style scoped></style>