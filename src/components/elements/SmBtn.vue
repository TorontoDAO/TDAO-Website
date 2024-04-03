<template>
    <div :class="['sm_btn', buttonClass, { long: isLong }]">{{ buttonText }}</div>
</template>
  
  <script>
  export default {
    name: 'SmBtn',
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
        isLong: {     
          type: Boolean,
          default: false,
        },
    }
  };
  </script>
  
  <style scoped>
    .sm_btn{
        width: 120px;
        height: 30px;
        background-color: #FF4C96;
        border-radius: 30px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 16px;
        transition: .2s;
        border: 1px solid #FF4C96;
        cursor: pointer;
    }

    .sm_btn.long{
      width: 140px;
    }

    .sm_btn.border{
      background: none;
      color: #FF4C96
    }

    .sm_btn:hover{
      border-radius: 5px;
    }

    .sm_btn.border:hover{
      background-color: #FF4C96;
      color: white;
    }

    .sm_btn.filled:hover{
      background: none;
      border: 1px solid #FF4C96;
      color: #FF4C96
    }
  </style>