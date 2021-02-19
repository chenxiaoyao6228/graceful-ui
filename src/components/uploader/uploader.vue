<script>
import Icon from '../icon/icon.vue';
import Button from '../button/button.vue';

const prefixCls = 'g-uploader';

let seed = 0;
function getUuid() {
  seed += 1;
  return `uploader-${seed}`;
}

export default {
  name: 'GUploader',
  components: { Icon, Button },
  filters: {
    formatFileSize(size) {
      const KB = 1024;
      const MB = 1024 * 1024;
      const GB = 1024 * 1024 * 1024;
      if (size <= KB) {
        return `${size}B`;
      }
      if (size > KB && size <= MB) {
        return `${(size / KB).toFixed(2)}KB`;
      }
      if (size > MB && size <= GB) {
        return `${(size / MB).toFixed(2)}MB`;
      }
      return `${(size / GB).toFixed(2)}GB`;
    }
  },
  props: {
    action: {
      type: String,
      required: true
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    listType: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'picture'].indexOf(value) > -1;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls,
      rawFile: null,
      fileList: []
    };
  },
  methods: {
    onClickUpload() {
      const input = this.createInput();
      input.addEventListener('change', (e) => {
        const rawFile = e.target.files[0];
        this.rawFile = rawFile;
        const tempFile = {
          name: rawFile.name,
          id: getUuid(),
          size: rawFile.size,
          status: 'loading'
        };
        this.fileToBase64(rawFile, (result) => {
          tempFile.src = result;
        });
        this.fileList.push(tempFile);
        this.uploadFile(rawFile, this.handleUploadSuccess, this.handleUploadError);
        input.remove();
      });
      input.click();
    },
    fileToBase64(file, successCallback, errorCallback) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        successCallback(reader.result);
        console.log(reader.result);
      };
      reader.onerror = (error) => {
        errorCallback(error);
        console.log('Error: ', error);
      };
    },
    createInput() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = this.accept;
      console.log('inputs', input);
      document.body.appendChild(input);
      return input;
    },
    uploadFile(rawFile, successCallback, errorCallback) {
      const formData = new FormData();
      formData.append('file', rawFile);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', this.action, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
          const fileRes = JSON.parse(xhr.response);
          successCallback(fileRes);
        } else {
          const fileRes = JSON.parse(xhr.response);
          errorCallback(fileRes);
        }
      };
      xhr.send(formData);
    },
    createTempFile(response, type) {
      const tempFile = this.fileList.pop();
      const newTempFile = {
        ...tempFile,
        ...response,
        ...{ status: type === 'success' ? 'normal' : 'error' }
      };
      this.fileList.push(newTempFile);
    },
    handleUploadSuccess(response) {
      this.createTempFile(response, 'success');
      this.rawFile = null;
      console.log('files', this.fileList);
    },
    handleUploadError(response) {
      this.createTempFile(response, 'errors');
    },
    handleReUpload() {
      this.uploadFile(this.rawFile, this.handleUploadSuccess, this.handleUploadError);
    },
    removeFile(index) {
      this.fileList.splice(index, 1);
    }
  }
};
</script>
<template>
  <div
    :class="{
      [`${prefixCls}`]: true,
      [`${prefixCls}-${listType}`]: true,
    }"
  >
    <form :atcion="action">
      <div
        :class="{
          [`${prefixCls}-trigger`]: true,
          [`${prefixCls}-trigger-disabled`]: disabled,
        }"
        @click="onClickUpload"
      >
        <slot>
          <Button
            :disabled="disabled"
            :class="[`${prefixCls}-trigger-btn`]"
          >
            上传文件
          </Button>
        </slot>
      </div>
      <div :class="[`${prefixCls}-file-list`]">
        <div
          v-for="(file,index) in fileList"
          :key="file.id"
          :class="{
            [`${prefixCls}-file-item`]: true,
            [`${prefixCls}-file-item-error`]: file.status === 'error',
            [`${prefixCls}-file-item-disabled`]: disabled,
          }"
        >
          <div
            :class="{
              [ `${prefixCls}-file-item-icon-wrapper`]: true,
              loading: file.status === 'loading'
            }"
          >
            <template v-if="listType === 'text'">
              <Icon
                v-if="file.status === 'loading'"
                :class="[`${prefixCls}-file-item-icon loading`]"
                type="loading"
              />
              <Icon
                v-else
                :class="[`${prefixCls}-file-item-icon`]"
                type="pin"
              />
            </template>
            <template v-if="listType === 'picture'">
              <img
                v-if="['success','normal'].indexOf(file.status) > -1"
                :src="file.src"
                :alt="file.name"
                :class="[`${prefixCls}-file-item-icon-img`]"
              >
              <div
                v-if="file.status === 'loading'"
                :class="[`${prefixCls}-file-item-icon-img`]"
              />
              <Icon
                v-if="file.status === 'loading'"
                :class="[`${prefixCls}-file-item-icon loading`]"
                type="loading"
              />
            </template>
          </div>
          <div
            :class="[`${prefixCls}-file-item-panel`]"
          >
            <div
              :class="[`${prefixCls}-file-item-content`]"
            >
              <div :class="[`${prefixCls}-file-item-name`]">
                {{ file.name }}
              </div>
              <div
                v-if="['normal','loading'].indexOf(file.status) > -1"
                :class="[`${prefixCls}-file-item-size`]"
              >
                {{ file.size | formatFileSize }}
              </div>
              <div
                v-if="file.status === 'error'"
                :class="{
                  [`${prefixCls}-file-item-error-tip`]: true
                }"
              >
                <span>上传出错</span>
                <i
                  :class="[`${prefixCls}-file-item-icon-retry`]"
                  @click="handleReUpload"
                ><Icon type="retry" /> </i>
              </div>
            </div>
          </div>
          <div
            :class="[`${prefixCls}-file-item-icon-clear`]"
            @click="removeFile(index)"
          >
            <Icon
              type="cross"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style lang="less" scoped>
@import './uploader.less';
</style>
