<template>
  <div>
    <button @click="toggle" type="button" class="hidden sm:block sm:overflow-hidden sm:focus:outline-none">
        <slot name="trigger"></slot>
      </button>
    <div :class="isOpen ? 'sm:block' : 'sm:hidden'">
      <button type="button" @click="isOpen = false" class="hidden sm:block fixed opacity-0 inset-0 w-full h-full cursor-default"></button>
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    mounted() {
      const onEscape = (e) => {
        if (!this.isOpen || e.key !== 'Escape') {
          return
        }
        this.isOpen = false
      }
      document.addEventListener('keydown', onEscape)
      this.$on('hook:destroyed', () => {
        document.removeEventListener('keydown', onEscape)
      })
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      },
    }
  };
</script>
