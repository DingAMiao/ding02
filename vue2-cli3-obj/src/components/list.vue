<template>
  <div>
    <section class="aui-scrollView">
    <div class="aui-fruit-list">
      <router-link to="/collages" class="aui-flex b-line"  v-for="item of list"
      :key="item.id">
        <div class="aui-fruit-img">
          <img :src="item.src" alt>
        </div>
        <div class="aui-flex-box">
          <h2>{{item.title}}</h2>
          <h3>{{item.price}}
            <em>{{item.group}}</em>
          </h3>
          <p>{{item.oprice}}</p>
        </div>
        <div class="aui-fruit-button">
          <button>去拼团</button>
        </div>
      </router-link>
    </div>
    </section>
  </div>
</template>
<script>

export default {

props:["list","dataName"]
}
</script>
