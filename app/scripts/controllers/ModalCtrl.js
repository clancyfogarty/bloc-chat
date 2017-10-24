(function() {
  function ModalCtrl($uibModalInstance, Room) {

    this.createRoom = function (){
      Room.createRoom(this.name);
       $uibModalInstance.close();
    };

    this.cancel = function() {
      $uibModalInstance.close();
    };
  }

   angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', '$cookies', ModalCtrl]);
})();
