<template lang="pug">
div.chat
  div.container.chat__container
    |Hello
    div.chat__footer
      input.input.chat__input(type="text" placeholder="Write message")
</template>

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
  &__footer {
    width: 100%;
    background-color: $dark2;
  }
  &__input {
    background-color: transparent;
    border: none;
    color: $white;
    &:focus {
      border: 1px solid $purple;
      box-shadow: none;
    }
    &::placeholder {
      color: $white2;
    }
  }
}
</style>
