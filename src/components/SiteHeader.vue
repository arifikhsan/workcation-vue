<template>
  <header class="bg-gray-900 sm:flex sm:items-center sm:justify-between">
    <div class="flex justify-between px-4 py-3">
      <div>
        <img class="h-8" src="img/logo-inverted.svg" alt="Workcation" />
      </div>
      <div class="flex">
        <button
          @click="toggle"
          type="button"
          class="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white sm:hidden"
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
    <nav class="sm:flex sm:items-center sm:px-4" :class="{ 'hidden': !isOpen, 'block': isOpen }">
      <div class="px-2 pt-2 pb-5 border-b border-gray-600 sm:flex sm:border-b-0 sm:py-0 sm:text-sm sm:px-0">
        <a
          href="#"
          class="block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800"
        >List your property</a>
        <a href="#" class="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2">Trips</a>
        <a href="#" class="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2">Messages</a>
      </div>
      <div class="px-5 py-5 sm:py-0 sm:px-0 sm:ml-4">
        <div class="flex items-center">
          <img
            class="h-10 w-10 object-cover rounded-full border-2 border-gray-600 sm:w-8 sm:h-8"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt
          />
          <span class="ml-4 font-semibold text-gray-200 sm:hidden">Isla Schoger</span>
        </div>
        <div class="mt-5 sm:hidden">
          <a href="#" class="block text-gray-400 hover:text-white">Account settings</a>
          <a href="#" class="mt-3 block text-gray-400 hover:text-white">Support</a>
          <a href="#" class="mt-3 block text-gray-400 hover:text-white">Sign out</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
