<template>
    <div>
      <h1>Parent Component</h1>
      <ChildCompo
        :stringProp="stringData"
        :arrayProp="arrayData"
        :objectProp="objectData"
        @child-event="handleChildEvent"
        />
        <div>
          <h1> Below is the data from child component</h1>
          <p>{{ messageFromChild }}</p>
    </div>
    
      </div>

   
  </template>
  
  <script>
  import ChildCompo from './ChildComp.vue';
  
  export default {
    name: 'ParenCompo',
    data() {
      return {
        stringData: "Hello from Parent!",
        arrayData: [1, 2, 3],
        objectData: { ali: "20", salman: "400" },
    
        // This is the message  that we send from child to parent component through emit function aur haya ate tima call boy
        // ki kia wqt ta custom event triggerd hoy.
        messageFromChild: '',
      };
    },
    components: {
        ChildCompo,
    },
    methods: {
    handleChildEvent(message) {
      // Haya fucntion ate tima call boy ki kia wqt ki custom event emitted hoy child componenta
      this.messageFromChild = message;
    },
  }
  };
  </script>
  