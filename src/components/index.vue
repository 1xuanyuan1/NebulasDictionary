<template>
  <div class="contenner">
    <div class="logo">
      <div class="name">SUPER DICTIONARY</div>
      <div class="img logo_rotate">
          <img src="img/logo.png" alt="">
      </div>
    </div>
    <div class="noExtension" v-if="isHasExtension" id="noExtension">
      NOTE: Please install <a target="_blank" href="https://github.com/ChengOrangeJu/WebExtensionWallet">WebExtensionWallet</a>  to use SUPER DICTIONARY
    </div>
    <div class="search">
      <input id="search_value" v-model="search" type="text" :disabled="isHasExtension" @keyup.enter="toSearch">
      <button id="search" @click="toSearch" :disabled="isHasExtension">search</button>
    </div>

    <div class="result_success" v-if="Object.keys(result).length > 0">
      <div id=search_banner></div>
      <p id=search_result>{{result.value}}</p>
      <div class="author">
        <i><p> Author:</p> <p id=search_result_author> {{result.author}}</p></i>
      </div>
    </div>

    <div class="result_faile" v-if="fail_add">
      Failed to find related information. Do you want to <button id="add" @click="toShow">add</button> infromation for "<i id="result_faile_add">{{fail_add}}</i>"?
    </div>

    <div class="add_banner" v-if="isShowAdd">
      <input type="text" id="add_value" v-model="add_value" placeholder="input contents for your keyword">
      <button id="push" @click="toAdd">submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      isHasExtension: typeof webExtensionWallet === 'undefined',
      search: '',
      add_value: '',
      isShowAdd: false,
      hasResult: false,
      fail_add: '',
      result: {}
    }
  },
  methods: {
    toSearch () {
      this.$api.get({key: this.search}).then(res => {
        if (!res) {
          this.fail_add = this.search
          this.result = {}
        } else {
          this.fail_add = ''
          this.result = res
        }
      })
      this.isShowAdd = false
    },
    toShow () {
      this.fail_add = ''
      this.isShowAdd = true
    },
    toAdd () {
      this.$api.save({key: this.search, content: this.add_value}).then(res => {
        console.log('response of push: ' + res)
      })
    }
  }
}
</script>
