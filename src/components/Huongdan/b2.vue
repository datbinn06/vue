
<script setup>
//c1 option API
//c2 Composition API : dung ref , reactive
import {ref , reactive} from "vue";
let count = ref(0);
let state = reactive({ amount: 0, name: "Dat" });




let studentName = ref("Dat");
let studenEmail = ref("datbinn06@gmail.com");
let studentAge = ref(19)
let studentActive = ref(true)

function increamentCount() {
    count.value++;
}
console.log(state);

const increamentAmount = () =>{
    state.amount++;
}

let Fullname = ref("Nguyen thanh Dat");

const onClickDangky = ()=>{
    alert("Dang ky thanh cong");
}
const onBlurInput=()=>{
    alert("Goi ham thanh cong");
}

</script>

<template>
    <h1>Thong tin</h1>
    <ul class="list-group">
        <li class="list-group-item">{{ studentName }}</li>
        <li class="list-group-item">{{ studenEmail }}</li>
        <li class="list-group-item">{{ studentAge }}</li>
        <li class="list-group-item"> Trang thai 
                {{ studentActive ? 'Dang hoc' : 'Dang bao luu' }}
        </li>
    </ul>

    COUNT : {{ count }}
    <button class="btn btn-danger" @click="increamentCount">Increament count</button>
    State : {{ state.amount }}
    <button class="btn btn-warning" @click="increamentAmount">Increament amount</button>

    <hr>
    <h3>2 way data bining</h3>
    <p>Su dung</p>
    <hr>
    <h3>2 way data bining</h3>
    <p>Su dung</p>
    <div>
    <input type="text" name="" id="" class="form-control" v-model="Fullname">
    <p>Xin chao {{ Fullname }}</p>
    </div>

    <div>
    <h6>Bat su kien click</h6>
        <button class="btn btn-primary" @click="onClickDangky()">Dang ky</button>
        <h6>Bat su kien blur</h6>
        <input type="text" name="" id="" class="form-control" @blur="onBlurInput()">
    </div>
</template>
<style scoped></style>