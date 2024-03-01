<script setup>
import {token} from '../components/firebase/messaging'
import { db } from '@/components/firebase/firebase';
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
const student = ref({
  firstname: '',
  lastname: '',
  token: token
})

const isSuccess = ref(false)

async function add(){
  await addDoc(collection(db, 'students'), student.value).then((res) => {
    console.log("successfully added");
    isSuccess.value = !isSuccess.value
  })
}
</script>

<template>
  <main>
    <div class="header">

    </div>
    <form @submit.prevent="add" v-if="!isSuccess">
      <h3>Register student</h3><br>
      <div class="mb-3">
        <input type="text" v-model="student.firstname" class="form-control" id="exampleFormControlInput1" placeholder="lastname">
        <input type="text" v-model="student.lastname" class="form-control" id="exampleFormControlInput1" placeholder="firstname">
      </div>
      <!-- <div class="mb-3">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="lastname">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="lastname">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="lastname">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="lastname">
      </div> -->
      <button>Submit</button>
    </form>
    <div class="success" v-if="isSuccess">
      <h1>Thank! you for Registering</h1>
    </div>
  </main>
</template>
<style>
main{
  background: #2074c2;
}

.header{
  height: 7rem;
}

form{
  padding: 20px 10px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: white;
}

.mb-3{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.form-control{
  background: #2074c24b;
  border: none;
  padding: 10px;
}

button{
  background: #2074c2;
  padding: 10px 15px;
  border: none;
  position: relative;
  left:80%;
  color: white;
}

.success{
  display: flex;
  text-align: center;
  padding: 50px 30px;
  height: 50rem;
  color: white;
}
</style>