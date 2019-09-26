<template>
  <header class="bg-gray-900">
    <div class="flex justify-between px-4 py-3">
      <div>
        <img class="h-8" src="img/logo-inverted.svg" alt="Workcation" />
      </div>
      <div class="flex">
        <button @click="toggle" type="button" class="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav v-show="isOpen">
      <div class="px-2 pt-2 pb-5 border-b border-gray-600">
        <a
          href="#"
          class="block px-3 py-1 font-semibold text-white hover:bg-gray-800"
        >List your property</a>
        <a href="#" class="mt-1 block px-3 py-1 font-semibold text-white hover:bg-gray-800">Trips</a>
        <a href="#" class="mt-1 block px-3 py-1 font-semibold text-white hover:bg-gray-800">Messages</a>
      </div>
      <div class="px-5 py-5">
        <div class="flex items-center">
          <img
            class="h-10 w-10 object-cover rounded-full border-2 border-gray-600"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt
          />
          <span class="ml-4 font-semibold text-gray-200">Isla Schoger</span>
        </div>
        <div class="mt-5">
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
            isOpen: false,
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    },
};
</script>
