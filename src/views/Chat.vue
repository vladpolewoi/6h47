<template lang="pug">
div.chat
  div.container.chat__container
    div.chat__content
      text-message(message="Hello")
      text-message(position="right")
    div.chat__footer
      message-input
</template>

<script>
import MessageInput from '@/components/MessageInput'
import TextMessage from '@/components/TextMessage'

export default {
  name: 'ChatView',
  components: { MessageInput, TextMessage },
}
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  height: 100vh;
  background-color: $dark1;
  color: $white;
  &__container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__content {
    padding: 3% 3% 0;
  }
  &__footer {
    width: 100%;
    background-color: $dark2;
  }
}
</style>
