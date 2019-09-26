<template>
  <div id="app" class="bg-gray-200 antialiased">
    <header class="flex justify-between bg-gray-900 px-4 py-3">
      <div>
        <img class="h-8" src="img/logo-inverted.svg" alt="Workcation" />
      </div>
      <div class="flex">
        <button>
          <svg class="w-6 h-6 fill-current text-gray-500" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </header>
    <section class="flex justify-between bg-gray-800 px-4 py-3">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.32 12.906l1.096 1.096c.412-.023.83.123 1.145.437l3 3a1.5 1.5 0 0 1-2.122 2.122l-3-3a1.497 1.497 0 0 1-.437-1.145l-1.096-1.096a8 8 0 1 1 1.414-1.414zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
          </svg>
        </div>
        <input
          class="bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2"
          placeholder="Search by keywords"
        />
      </div>
      <button
        class="inline-flex bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow px-4"
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
    </section>
    <main class="px-4 py-6">
      <h3 class="text-gray-900 text-xl">Los Angleles</h3>
      <p class="text-gray-600">Life like the stars in these luxurious Southern California estates.</p>
      <div>
        <div>
          <div>
            <img
              class="rounded-lg shadow-md h-64"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <div class="relative px-4 -mt-16">
            <div class="bg-white rounded-lg px-4 py-3 shadow-lg">
              <div class="flex">
                <span class="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 font-semibold uppercase tracking-wide text-xs rounded-full">Plus</span>
                <div class="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">3 beds &bull; 2 baths</div>
              </div>
              <h4 class="mt-1 text-gray-900 font-semibold text-lg">Modern home in city center</h4>
              <div class="mt-1">
                <span class="text-gray-900">$1,400</span>
                <span class="ml-1 text-sm text-gray-600">/wk</span>
              </div>
              <div class="text-sm text-gray-600">34 reviews</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>
