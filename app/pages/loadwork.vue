<template>
  <div class="file-manager-page">
    <main class="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
      
      <nav class="space-y-2">
        <NuxtLink to="/" class="nav block cursor-pointer group bg-white hover:bg-[#e85a4f]/10 p-3 rounded-xl border border-gray-100 shadow-sm transition-all" id="homeNav">
          <div class="nav-menu flex items-center gap-3">
            <img class="icon-small w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" src="/icons/home_8396590.png" alt="Home">
            <h3 class="font-medium text-gray-700 group-hover:text-[#e85a4f] transition-colors">Главная</h3>
          </div>
        </NuxtLink>

        <div class="nav cursor-pointer group bg-white hover:bg-[#e85a4f]/10 p-3 rounded-xl border border-gray-100 shadow-sm transition-all" id="navigationNav">
          <div class="nav-menu flex items-center gap-3">
            <img class="icon-small w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" src="/icons/magnification_8396560.png" alt="Search">
            <h3 class="font-medium text-gray-700 group-hover:text-[#e85a4f] transition-colors">Навигация</h3>
          </div>
        </div>

        <div class="nav bg-white p-3 rounded-xl border border-gray-100 shadow-sm" id="libraryNav">
          <div class="nav-menu flex items-center gap-3 border-b border-gray-100 pb-2 mb-2">
            <img class="icon-small w-5 h-5 opacity-70" src="/icons/book_4855350.png" alt="Library">
            <h3 class="font-medium text-gray-800">Библиотека</h3>
          </div>
          <div class="nav-submenu">
            <ul class="nav-list space-y-1 text-sm text-gray-500 pl-8 list-none">
              <li class="hover:text-[#e85a4f] cursor-pointer py-1 transition-colors">Ваши публикации</li>
              <li class="text-[#e85a4f] font-semibold py-1">Загрузить материал</li>
            </ul>
          </div>
        </div>
      </nav>

      <article class="space-y-6">
        <div class="article-part bg-gradient-to-r from-[#e85a4f] to-[#e98074] p-6 rounded-2xl shadow-md text-white">
          <div class="article-subpart">
            <div class="article-header flex justify-between items-center">
              <h1 class="text-2xl font-bold tracking-tight">Загрузить новую работу</h1>
              <img class="icon-small w-8 h-8 brightness-0 invert" src="/icons/document_4941734.png" alt="Doc">
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden p-6 space-y-6">
          <div class="article-part space-y-3">
            <div class="article-subpart">
              <h3 class="article-subheader text-lg font-bold text-slate-800 border-l-4 border-[#e85a4f] pl-3">Загрузить файл</h3>
            </div>
            <div class="article-subpart">
              <div class="upload-form">
                <div class="form-group">
                  <label for="file-input" class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer bg-slate-50 hover:bg-[#e85a4f]/5 hover:border-[#e85a4f] transition-all group">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                      <p class="mb-2 text-sm text-slate-500 font-medium group-hover:text-[#e85a4f]">
                        <span v-if="!selectedFileName">Нажмите, чтобы выбрать файл</span>
                        <span v-else class="text-[#e85a4f] font-bold">Выбран: {{ selectedFileName }}</span>
                      </p>
                      <p class="text-xs text-slate-400">Любые учебные материалы, курсовые, методички</p>
                    </div>
                    <input type="file" id="file-input" class="hidden" @change="onFileChange" accept="*" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="article-part space-y-3 pt-4 border-t border-slate-100">
            <div class="article-subpart">
              <h3 class="article-subheader text-lg font-bold text-slate-800 border-l-4 border-[#e85a4f] pl-3">Задать данные</h3>
            </div>

            <div class="article-subpart grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-3">
                <input class="navigation-input w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#e85a4f] focus:bg-white transition-all text-sm" type="text" placeholder="Автор">
                <input class="navigation-input w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#e85a4f] focus:bg-white transition-all text-sm" type="text" placeholder="Издатель">
              </div>
              <div class="space-y-3">
                <input class="navigation-input w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#e85a4f] focus:bg-white transition-all text-sm" type="text" placeholder="Год выпуска">
                <input class="navigation-input w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#e85a4f] focus:bg-white transition-all text-sm" type="text" placeholder="Предмет">
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100">
            <button type="button" :disabled="!selectedFileName" class="btn btn-upload w-full bg-[#e85a4f] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#d64f45] active:scale-[0.99] disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all shadow-sm">
              Опубликовать на HintBook
            </button>
          </div>
        </div>

        <div class="article-part bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-4">
          <div class="article-subpart">
            <h3 class="article-subheader text-lg font-bold text-slate-800 border-l-4 border-[#e85a4f] pl-3">Уже загруженные публикации</h3>
          </div>

          <ul class="files-list divide-y divide-slate-100">
            <li v-for="demoFile in demoFiles" :key="demoFile.id" class="file-item py-3.5 flex justify-between items-center gap-4 first:pt-0 last:pb-0">
              <div class="file-info flex flex-col">
                <strong class="filename text-sm font-semibold text-slate-700 hover:text-[#e85a4f] cursor-pointer transition-colors">{{ demoFile.filename }}</strong>
                <span class="uploaded-at text-xs text-slate-400 mt-0.5">
                  Загружен: {{ demoFile.date }} • Предмет: {{ demoFile.subject }}
                </span>
              </div>
              <button type="button" class="btn btn-delete text-xs font-semibold text-red-500 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors">
                Удалить
              </button>
            </li>
          </ul>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selectedFileName = ref('')
const onFileChange = (event) => {
  const files = event.target.files
  if (files && files.length > 0) { selectedFileName.value = files[0].name }
}
const demoFiles = ref([
  { id: 1, filename: 'Высшая_математика_Лабораторная_2.pdf', date: '25 мая 2026', subject: 'Вышмат' },
  { id: 2, filename: 'История_конспект_лекций.docx', date: '24 мая 2026', subject: 'История' },
  { id: 3, filename: 'Физика_Методичка_Расчеты.pdf', date: '20 мая 2026', subject: 'Физика' }
])
</script>
