<template>
  <div ref="dragDom" id="drag">
    <input type="file" name="file" @change="handleFileChange" />
  </div>
    <button type="" @click="uploadFile">上传</button>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import { bindEvents, upload } from './upload'
  export default defineComponent({
    setup(props) {

      const dragDom = ref(null)
      onMounted(() => {
        bindEvents(dragDom)
      })

      return {
        dragDom,
        ...upload()
      }
    }
  })
</script>
<style scoped>
  #drag {
    height: 100px;
    line-height: 100px;
    border: 2px dashed #eee;
    text-align: center;
  }
  </style>
