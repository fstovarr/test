<template>
  <v-img :src="src" height="130" contain></v-img>
</template>
<script>
export default { props: { src: { type: String } } };
</script>
