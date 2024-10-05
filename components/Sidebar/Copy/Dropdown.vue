<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { copyBackgroundHTML, copyBackgroundCSS } from '@/utils/exportCode'
</script>

<template>
  <Menu as="div" class="relative inline-block grow z-[100] rounded-md">
    <MenuButton
      class="flex w-full justify-center gap-x-1.5 rounded-md bg-[#dcdcdc] dark:bg-[#111111] px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset text-neutral-900 dark:text-neutral-300 grow hover:bg-gray-50"
    >
      Copiar código
    </MenuButton>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="-top-2 transform -translate-y-full absolute right-50 w-56 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="flex">
          <MenuItem v-slot="{ active }">
            <button
              @click="copyBackgroundHTML()"
              class="flex justify-center grow bg-gradient-to-r from-[#e34f26] to-[#ef652a]"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                'block px-4 py-2 text-xs font-semibold hover:duration-100 hover:text-white',
              ]"
            >
              <div class="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 452 520"
                  class="w-4 h-4"
                >
                  <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                  <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                  <path
                    fill="#f0f0f0"
                    d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
                  />
                  <path
                    fill="#f0f0f0"
                    d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
                  />
                </svg>
                HTML
              </div>
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              @click="copyBackgroundCSS()"
              class="flex justify-center grow bg-gradient-to-r from-[#0c73b8] to-[#30a9dc]"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                'block px-4 py-2 text-sm font-semibold hover:duration-100 hover:text-white',
              ]"
            >
              <div class="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 452 520"
                  class="w-4 h-4"
                >
                  <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
                  <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
                  <path
                    fill="#f0f0f0"
                    d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
                  />
                  <path
                    fill="#f0f0f0"
                    d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
                  />
                </svg>
                CSS
              </div>
            </button>
          </MenuItem>
        </div>
        <div>
          <MenuItem v-slot="{ active }">
            <button
              href="#"
              class="flex justify-center grow w-full bg-gradient-to-r from-[#2298BD] to-[#0ED7B5]"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                'block px-4 py-2 text-sm font-semibold hover:duration-100 hover:text-white',
              ]"
            >
              <div class="flex items-center gap-x-2">
                <svg
                  viewBox="0 0 256 154"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  class="w-4 h-4 brightness-200"
                >
                  <defs>
                    <linearGradient
                      x1="-2.778%"
                      y1="32%"
                      x2="100%"
                      y2="67.556%"
                      id="gradient"
                    >
                      <stop stop-color="#2298BD" offset="0%"></stop>
                      <stop stop-color="#0ED7B5" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
                    fill="url(#gradient)"
                  ></path>
                </svg>

                TailwindCSS
              </div>
            </button>
          </MenuItem>
        </div>
        <div>
          <MenuItem v-slot="{ active }">
            <button
              href="#"
              class="flex justify-center grow w-full bg-gradient-to-r from-[#41B883] via-[#41B883] to-[#35495E]"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                'block px-4 py-2 text-sm font-semibold hover:duration-100 hover:text-white',
              ]"
            >
              <div class="flex items-center gap-x-2">
                <svg
                  viewBox="0 0 256 221"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  class="w-4 h-4 brightness-150"
                >
                  <path
                    d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"
                    fill="#41B883"
                  />
                  <path
                    d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"
                    fill="#41B883"
                  />
                  <path
                    d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"
                    fill="#35495E"
                  />
                </svg>
                Vue
              </div>
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
