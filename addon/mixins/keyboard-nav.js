import Mixin from '@ember/object/mixin';

export default Mixin.create({

  bindKeys($object) {
    $object.keyup((e) => {
      if(e.which === 13) {
        this.onEnterPress();
      } else if(e.which === 27) {
        this.onEscPress();
      } else if(e.which === 40) {
        this.onDownPress();
      } else if(e.which === 38) {
        this.onUpPress();
      } else {
        this.onCustomPress(e.which);
      }
    });
  },

  // keypress actions

  onEnterPress() {},

  onEscPress() {},

  onDownPress() {},

  onUpPress() {},

  onCustomPress() {}

});
