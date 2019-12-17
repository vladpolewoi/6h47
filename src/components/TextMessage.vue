<template lang="pug">
 div.textMessage(:class="{ 'textMessage--right': position === 'right' }")
    div.textMessage__content {{ message1 }}
</template>

<script>
export default {
  name: 'TextMessage',
  props: {
    'position': {
      type: String,
      default: 'left'
    },
    'message': {
      type: String,
      default: '',
    }
  },
  computed: {
    message1() {
      return this.$store.getters['socket/getConnection']
    },
  },
}
</script>

<style lang="scss" scoped>
.textMessage {
  display: flex;
  margin-bottom: 10px;
  &__content {
    width: fit-content;
    min-height: 30px;
    min-width: 35px;
    color: $white;
    font-size: 16px;
    padding: 3px 15px;
    border-radius: 15px;
    background: $green;
  }
  &--right {
    justify-content: flex-end;
    .textMessage__content {
      background-color: $purple;
    }
  }
}
</style>
