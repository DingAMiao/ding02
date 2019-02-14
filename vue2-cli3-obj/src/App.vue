<template>
  <div>
     <router-view></router-view>
     <footbar></footbar>
  </div>
</template>
<script>

import footbar from './components/footbar';
import {mapGetters} from 'vuex';

export default {
  components:{footbar}
  }
</script>
