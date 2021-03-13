<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/new-tagline">New Tagline</router-link>
  </div>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div>
          <img src="./assets/techfervour.png" class="mx-auto h-20 sm:h-20" />
        </div>
        <div class="divide-y divide-gray-200">
          <router-view />
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7 text-center">
            <p>
              <a href="https://techfervour.com" class="text-cyan-600 hover:text-cyan-700"> Want to learn dApps development &rarr; </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>