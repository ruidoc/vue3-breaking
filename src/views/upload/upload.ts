import { ref, computed } from 'vue';
import { isImage } from './imgType';

let file = ref('');

export const bindEvents = (dragDom: any) => {
  const drag = dragDom.value;
  drag.addEventListener('dragover', (e) => {
    drag.style.borderColor = 'red';
    e.preventDefault();
  });
  drag.addEventListener('dragleave', (e) => {
    drag.style.borderColor = '#eee';
    e.preventDefault();
  });
  drag.addEventListener('drop', (e) => {
    const fileList = e.dataTransfer.files;
    // console.log('fileList :>> ', fileList)
    drag.style.borderColor = '#eee';
    file.value = fileList[0];
    e.preventDefault();
  });
};

const handleFileChange = (e) => {
  // 上传多个文件这里获取有点问题，只能上传单个的
  const files = e.target.files[0];
  if (!files) return;
  file.value = files;
};

const uploadFile = async() => {
  console.log(123);
  
  if (!(await isImage(file.value))) {
    alert('图片格式不正确！')
    return
  }
};

export const upload = () => {
  return {
    handleFileChange,
    uploadFile,
  };
};
