<template>
  <div class="sph-container" ref="ic">
    <!--  -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VSPH from '../lib/VSph';

@Component({})
export default class ComSPH extends Vue {
  private _vSPH!: VSPH;

  async _initSPH() {
    const {
      $refs: { ic }
    } = this;

    this._vSPH = new VSPH(ic as Element);
  }
  mounted() {
    this.$nextTick(this._initSPH);
  }
}
</script>
<style scoped>
.sph-container {
  height: 100vh;
  width: 100vw;
  background: #f1f1f1;
}
</style>
