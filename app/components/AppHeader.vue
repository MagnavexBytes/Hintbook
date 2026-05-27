<template>
  <header class="bg-white border-b border-[#e2e8f0] px-6 py-4 shadow-sm sticky top-0 z-50">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      
      <NuxtLink to="/" class="header-part flex items-center gap-3 cursor-pointer group">
        <img class="logo w-10 h-10 object-contain" src="/logo/history-book_18396190.png" alt="HintBook Logo">
        <h1 class="text-2xl font-black tracking-wider text-[#e85a4f] group-hover:text-[#d64f45] transition-colors">HINTBOOK</h1>
      </NuxtLink>

      <div class="flex items-center gap-6">
        <div class="header-part flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <img class="icon-small w-5 h-5" src="/icons/magnification_8396560.png" alt="">
          <span class="text-sm font-medium text-slate-700">Навигация</span>
        </div>

        <NuxtLink to="/loadwork" class="header-part flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <img class="icon-small w-5 h-5" src="/icons/book_4855350.png" alt="">
          <span class="text-sm font-medium text-slate-700">Библиотека</span>
        </NuxtLink>

        <!-- <div class="header-part flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <img class="icon-small w-5 h-5" src="/icons/tool_5161448.png" alt="">
          <span class="text-sm font-medium text-slate-700">Поддержка</span>
        </div> -->

        <div class="header-part flex items-center gap-2 border-l border-slate-200 pl-6 cursor-pointer hover:opacity-80 transition-opacity">
          <img class="icon-big w-6 h-6" src="/icons/user_4855270.png" alt="User">
          <h3 class="font-semibold text-sm text-slate-700">Авторизация</h3>
        </div>
      </div>

    </div>
  </header>
</template>
