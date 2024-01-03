<template>
  <div class="modal-overlay" v-if="show">
    <div class="modal flex" >
      
        <dialog open>
        <div>
          <slot name="image"></slot>
        </div>  
        <div>
          <slot>
            <p>{{content}}</p>
          </slot>
        </div>
        <div class="actions">
          <slot name="action">
            <button class="blue btn" @click="close"> Close</button>
          </slot>
        </div>
        </dialog>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    content: {
      type: String,
      required: false,
    },
  },

  emits: ['close'],

  methods: {
    close(){
      this.$emit('close');
    }
    
  },

}
</script>

<style lang="scss" scoped>
  .modal {
  // z-index: 1;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  dialog {
    border-radius: 20px;
    padding: 40px 32px;
    max-width: 450px;
    background-color: #252945;
    color: #fff;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
    }

    .actions {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  z-index: 2; /* Position it above other content, but below the modal */
}

</style>