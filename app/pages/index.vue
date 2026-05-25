<template>
  <div 
    class="home-page min-h-[calc(100vh-80px)] flex items-center justify-center bg-cover bg-center bg-no-repeat relative px-4"
    style="background-image: url('/img/library-book-shelf-interior-graphic-cropped.png');">
    <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
    
    <div class="start text-center p-8 md:p-12 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl max-w-2xl w-full relative z-10 transform hover:scale-[1.01] transition-transform">
      <div class="start-form space-y-4">
        <p class="start-text text-5xl md:text-6xl font-black tracking-wider text-[#e85a4f] drop-shadow-sm">
          HINTBOOK
        </p>
        <p class="start-text text-2xl md:text-3xl font-bold text-[#e98074]">
          Сайт для помощи студентам
        </p>
      </div>
      
      <div class="mt-8">
        <NuxtLink to="/loadwork" class="inline-block bg-[#e85a4f] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#d64f45] hover:shadow-[#e85a4f]/20 hover:shadow-lg transition-all active:scale-95 shadow-md">
          Перейти к материалам
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup>
</script>
