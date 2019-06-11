<template>
  <div class="pretty p-icon p-round p-tada">
    <input type="checkbox" v-model="response.checked">
    <div class="state p-primary-o">
      <i style="    color: white;
    border-color: white;" class="icon mdi mdi-check"></i>
      <label v-html="response.label"></label>
    </div>
  </div>
</template>
<style>
.math {
  font-family: "stixgeneralregular";
  font-style: italic;
  border-color: aliceblue;
  text-decoration: none !important;
  line-height: 0.6;
}
pre.code {
  font-family:monospace!important;
  background:transparent!important;
  padding:0!important;
  overflow: hidden;
  color:white!important;
  font-size:1em!important;
}

</style>

<script>
export default {
  mounted() {},
  props: ["response"]
};
</script>

