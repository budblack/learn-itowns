<template>
  <div class="itowns-container" ref="ic">
    <!--  -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VItowns from '../lib/VItowns';

@Component({})
export default class ComCesium extends Vue {
  private _vItowns!: VItowns;

  async _initItowns() {
    const {
      $refs: { ic }
    } = this;

    this._vItowns = new VItowns(ic as Element);
  }
  mounted() {
    this.$nextTick(this._initItowns);
  }
}
</script>
<style scoped>
.itowns-container {
  height: 100vh;
  width: 100vw;
  background: #f1f1f1;
}
</style>
