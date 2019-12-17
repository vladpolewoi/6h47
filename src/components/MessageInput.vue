<template lang="pug">
  input.input(type="text" placeholder="Write message")
</template>

<style lang="scss" scoped>
.input {
  background-color: transparent;
  border: none;
  color: $white;
  border-radius: 0;
  &:focus,
  &:active {
    border-top: 1px solid $purple;
    box-shadow: none;
  }
  &::placeholder {
    color: $white2;
  }
}
</style>
