<template>
  <section class="bg-gray-800">
    <div class="flex justify-between px-4 py-3">
      <div class="relative sm:w-full sm:max-w-xs mr-4">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.32 12.906l1.096 1.096c.412-.023.83.123 1.145.437l3 3a1.5 1.5 0 0 1-2.122 2.122l-3-3a1.497 1.497 0 0 1-.437-1.145l-1.096-1.096a8 8 0 1 1 1.414-1.414zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
          </svg>
        </div>
        <input
          class="w-full block bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2"
          placeholder="Search by keywords"
        />
      </div>
      <button
        type="button"
        class="inline-flex bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg px-4"
        @click="toggle"
        :class="{ 'hover:bg-gray-600': isOpen }"
      >
        <svg
          class="h-6 w-6 fill-current text-gray-500"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z"
          />
        </svg>
        <span class="text-white ml-1 font-medium">Filters</span>
      </button>
    </div>
    <form v-show="isOpen">
      <div class="flex flex-wrap px-4 py-4 border-t border-gray-900">
        <label class="w-1/2 px-2 sm:w-1/4">
          <span class="text-sm font-semibold text-gray-500">Bedroom</span>
          <select class="mt-1 form-select block w-full shadow text-white focus:bg-gray-600">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </label>
        <label class="w-1/2 px-2 sm:w-1/4">
          <span class="text-sm font-semibold text-gray-500">Bathroom</span>
          <select class="mt-1 form-select block w-full shadow text-white focus:bg-gray-600">
            <option>2</option>
          </select>
        </label>
        <div class="mt-4 w-full px-2 sm:mt-0 sm:w-1/2">
          <label>
            <span class="text-sm font-semibold text-gray-500">Price Range</span>
            <select class="mt-1 form-select w-full shadow text-white focus:bg-gray-600">
              <option>Up to $2,000/wk</option>
            </select>
          </label>
        </div>
      </div>
      <div class="px-4 py-4 border-t border-gray-900">
        <span class="block text-sm font-semibold text-gray-500">Property Type</span>
        <div class="sm:flex">
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input
              class="form-radio focus:bg-gray-700"
              type="radio"
              name="propertyType"
              value="house"
            />
            <span class="ml-2 text-white">House</span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input
              class="form-radio focus:bg-gray-700"
              type="radio"
              name="propertyType"
              value="apartment"
            />
            <span class="ml-2 text-white">Apartment</span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input
              class="form-radio focus:bg-gray-700"
              type="radio"
              name="propertyType"
              value="loft"
            />
            <span class="ml-2 text-white">Loft</span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input
              class="form-radio focus:bg-gray-700"
              type="radio"
              name="propertyType"
              value="townhouse"
            />
            <span class="ml-2 text-white">Townhouse</span>
          </label>
        </div>
      </div>
      <div class="p-4 border-t border-gray-900">
        <span class="block text-sm font-semibold text-gray-500">Amenities</span>
        <div class="sm:flex sm:flex-wrap">
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input class="form-checkbox focus:bg-gray-700" type="checkbox" name="balcony" />
            <span class="ml-2 text-white">Balcony</span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input class="form-checkbox focus:bg-gray-700" type="checkbox" name="pool" />
            <span class="ml-2 text-white">Pool</span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input class="form-checkbox focus:bg-gray-700" type="checkbox" name="beach" />
            <span class="ml-2 text-white">Beach</span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input class="form-checkbox focus:bg-gray-700" type="checkbox" name="petFriendly" />
            <span class="ml-2 text-white">Pet friendly</span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input class="form-checkbox focus:bg-gray-700" type="checkbox" name="kidFriendly" />
            <span class="ml-2 text-white">Kid friendly</span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input class="form-checkbox" type="checkbox" name="parking" />
            <span class="ml-2 text-white">Parking</span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/2 sm:px-2">
            <input class="form-checkbox focus:bg-gray-700" type="checkbox" name="airConditioning" />
            <span class="ml-2 text-white">Air conditioning</span>
          </label>
        </div>
      </div>
      <div class="bg-gray-900 p-4">
        <!-- missing block class -->
        <button
          class="w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg"
        >Update results</button>
      </div>
    </form>
  </section>
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
