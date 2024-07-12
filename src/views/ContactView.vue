<template>
    <div class="bg-black w-full h-20">
      </div>
    <div class="relative">
        <!-- Background image -->
        
        <!-- Form content -->
        <img src="../assets/contact.png" alt="Background Image" class="absolute inset-0 w-full h-full object-cover opacity-15">
        <div class="md:flex justify-center w-screen min-h-screen container md:mx-auto relative z-10">
           

            <div class=" p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 m-auto rounded-2xl shadow  bg-opacity-90 ">
                <div v-show="isSent">
                    <p class="text-center text-black mt-44 font-bold text-4xl">Thank you {{ name }} for reaching out to us. We will get back to you soon.</p>
                </div>

                <form v-show="!isSent" @submit.prevent="submitForm" class="mt-8">
                    <div>
                        <h1 class="font-bold  uppercase text-3xl text-center mb-4">Contact Us</h1>
                    </div>
                    <div class="grid grid-cols-1 px-16 gap-5 md:grid-cols-2">
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Name
                            <input type="text" class="grow text-sm" placeholder="Enter Your Name here" v-model="name" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Email
                            <input type="email" class="grow text-sm" placeholder="Enter Your Email here" v-model="email" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Phone
                            <input type="email" class="grow text-sm" placeholder="+91" v-model="email" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Name of Sports Centre:
                            <input type="email" class="grow text-sm" placeholder="Enter Your Sport" v-model="email" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Sports you offer:
                            <input type="email" class="grow text-sm" placeholder="Enter " v-model="email" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Number of sportgrounds:
                            <input type="email" class="grow text-sm" placeholder="Enter " v-model="email" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Website:
                            <input type="tel" class="grow text-sm" placeholder="Enter" v-model="phno" />
                        </label>
                    </div>
                    <div class="my-4 px-16">
                        <textarea class="textarea textarea-accent w-full h-32" placeholder="Enter your optional Message here" v-model="message"></textarea>
                    </div>
                    <div class="my-2 w-full md:w-1/2 lg:w-1/4 mx-auto">
                        <button type="submit" class="border border-spacing-1 border-orange-600 px-5 py-2 rounded-xl text-white font-bold text-md w-full bg-orange-600">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>





    </template>
    
<script setup>
import { ref } from 'vue';

const isSent = ref(false);
const name = ref('');
const email = ref('');
const phno = ref('');
const message = ref('');

const submitForm = () => {
    // Your form submission logic here
    // For demonstration, just toggle isSent
    isSent.value = true;
};
</script>
    <style scoped>
    /* Scoped styles for adjustments */
    /* Adjustments for better readability on the form */
    .input {
        width: 100%;
    }
    .textarea {
        min-height: 10rem; /* Ensure textarea has a minimum height */
    }
    .btn {
        padding: 1rem; /* Ensure button has adequate padding */
    }
    </style>