<script setup>
    //khai bao bien dang chuoi
    let courseName = "Framework Vue 3";
    let courseLevel = 'Nang cao';
    // khai bao bien dang so
    let courseTime = 30;
    // khai bao bien dang boolean
    let courseIsActive = true;
</script>
<!-- VIET CODE HTML-->
 <template>
    <div class="container">
        <h1 class="display-4 mb-3"> Thong tin : </h1>
        <ul class="list-group">
            <li class="list-group-item">
                Ten khoa hoc: {{ courseName }}
            </li>
            <li class="list-group-item">
                Cap do : {{ courseLevel }}
            </li>
            <li class="list-group-item">
                Thoi gian : {{ courseTime }}
            </li>
            <li class="list-group-item">
                Trang thai : {{ courseIsActive ? 'dang mo' : 'da dong' }}
            </li>
        </ul>
    </div>

</template>
 <!-- viet code css cho vue hien tai-->