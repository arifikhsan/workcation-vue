<template>
  <header class="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
    <div class="flex justify-between px-4 py-3 xl:w-72 xl:bg-gray-900 xl:justify-center xl:py-5">
      <div>
        <img class="h-8" src="img/logo-inverted.svg" alt="Workcation" />
      </div>
      <div class="flex sm:hidden">
        <button
          @click="toggle"
          type="button"
          class="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      class="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between"
      :class="{ 'hidden': !isOpen, 'block': isOpen }"
    >
      <div class="hidden xl:block xl:relative sm:w-full sm:max-w-xs xl:mr-4">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.32 12.906l1.096 1.096c.412-.023.83.123 1.145.437l3 3a1.5 1.5 0 0 1-2.122 2.122l-3-3a1.497 1.497 0 0 1-.437-1.145l-1.096-1.096a8 8 0 1 1 1.414-1.414zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
          </svg>
        </div>
        <input
          class="w-full block bg-gray-200 focus:outline-none focus:bg-white focus:text-gray-300 text-gray-900 rounded-lg pl-10 pr-4 py-2 border border-transparent focus:border-gray-400"
          placeholder="Search by keywords"
        />
      </div>
      <div class="sm:flex sm:items-center">
        <div
          class="px-2 pt-2 pb-5 border-b border-gray-600 sm:flex sm:border-b-0 sm:py-0 sm:text-sm sm:px-0"
        >
          <a
            href="#"
            class="block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 xl:text-gray-900 xl:hover:bg-gray-200"
          >List your property</a>
          <a
            href="#"
            class="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200"
          >Trips</a>
          <a
            href="#"
            class="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200"
          >Messages</a>
        </div>
        <div class="relative px-5 py-5 sm:py-0 sm:px-0 sm:ml-4">
          <div class="flex items-center sm:hidden">
            <img
              class="h-10 w-10 object-cover rounded-full border-2 border-gray-600"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            />
            <span class="ml-4 font-semibold text-gray-200 sm:hidden">Isla Schoger</span>
          </div>
          <Dropdown>
            <template #trigger>
              <img
                class="h-8 w-8 object-cover rounded-full border-2 border-gray-600 sm:focus:border-white xl:border-gray-300"
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
              />
            </template>
            <template #dropdown>
              <div
                class="mt-5 sm:bg-white sm:rounded-lg sm:absolute sm:right-0 sm:w-48 sm:mt-3 sm:shadow-xl sm:py-2"
              >
                <a
                  href="#account"
                  class="block text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:hover:bg-indigo-500"
                >Account settings</a>
                <a
                  href="#support"
                  class="mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500"
                >Support</a>
                <a
                  href="#signup"
                  class="mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500"
                >Sign out</a>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Dropdown from "@/components/Dropdown";
export default {
  components: {
    Dropdown
  },
  props: [],
  data() {
    return {
      isOpen: false,
      dropdownOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
