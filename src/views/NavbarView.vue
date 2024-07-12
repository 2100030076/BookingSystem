<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="navbar md:bg-transparent bg-blue-600 absolute top-0 left-0 w-full z-10 h-20">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w5.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-5 w-52 p-2 shadow">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/feature">Features</router-link></li>
          <li><router-link to="/product">Products</router-link></li>
          <li><router-link to="/demo">Demo</router-link></li>
          <li><router-link to="/customer">Customers</router-link></li>
          <li><router-link to="/price">Pricing</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <a class="md:text-5xl text-4xl font-serif text-orange-600"><span class="md:text-white text-blue-600">Fit</span>Appoint</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-white ">
        <li><router-link to="/" class="text-xl mr-5 font-bold">Home</router-link></li>
        <li><router-link to="/feature" class="text-xl mr-5 font-bold">Features</router-link></li>
        <li><router-link to="/product" class="text-xl mr-5 font-bold">Products</router-link></li>
        <li><router-link to="/demo" class="text-xl mr-5 font-bold">Demo</router-link></li>
        <li><router-link to="/customer" class="text-xl mr-5 font-bold">Customers</router-link></li>
        <li><router-link to="/price" class="text-xl mr-5 font-bold">Pricing</router-link></li>
        <li><router-link to="/contact" class="text-xl mr-5 font-bold">Contact</router-link></li>
      </ul>
    </div>
  </div>
  <main>
    <RouterView/>
  </main>
  
</template>
