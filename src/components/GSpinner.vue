<template>
  <svg class="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      class="ani-pulse-1"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.2387 8.12492L22 11H13.4114L13 10.6339V3L16.238 8.12492H16.2387Z"
      fill="currentColor"
    />
    <path
      class="ani-pulse-2"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 13L16.8678 16L22 13H14V13Z"
      fill="currentColor"
    />
    <path
      class="ani-pulse-3"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 15V23L16 17.8684L13 15.0006V15Z"
      fill="currentColor"
    />
    <path
      class="ani-pulse-4"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 14L8 16.868L11 22V14.0012V14Z"
      fill="currentColor"
    />
    <path
      class="ani-pulse-5"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.96191 10L2 12.2856V12.7144L6.96191 15L10 12.5014L6.96191 10V10Z"
      fill="currentColor"
    />
    <path
      class="ani-pulse-6"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 8.13203L11 11V3L8 8.13203Z"
      fill="currentColor"
    />
  </svg>
</template>

<style scoped lang="less">
@keyframes pulse {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.1;
  }
}

@-webkit-keyframes pulse {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.1;
  }
}

.animate(@animation) {
  -webkit-animation: @animation;
  animation: @animation;
}

.generate-ani-pulse(6);

.generate-ani-pulse(@count, @i: 1) when (@i <= @count) {
  .ani-pulse-@{i} {
    .animate(pulse 0.4s ease 0.05s * @i infinite alternate);
  }

  .generate-ani-pulse(@count, (@i + 1));
}
</style>
