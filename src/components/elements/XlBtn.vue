<template>
    <div :class="['xl_btn', buttonClass]">{{ buttonText }}</div>
</template>
  
  <script>
  export default {
    name: 'XlBtn',
    props: {
        buttonText: {     
            type: String,
            default: 'Join Us',
        },
        buttonClass: {
            type: String,
            default: 'filled',
            validator: (value) => ['filled', 'border'].includes(value),
        },
    }
  };
  </script>
  
  <style scoped>
    .xl_btn{
        width: 200px;
        height: 50px;
        background-color: #FF4C96;
        border-radius: 30px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
        transition: .2s;
        border: 1px solid #FF4C96;
        cursor: pointer;
    }

    .xl_btn.border{
      background: none;
      color: #FF4C96
    }

    .xl_btn:hover{
      border-radius: 5px;
    }

    .xl_btn.border:hover{
      background-color: #FF4C96;
      color: white;
    }

    .xl_btn.filled:hover{
      background: none;
      border: 1px solid #FF4C96;
      color: #FF4C96
    }
  </style>