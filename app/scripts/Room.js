(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
/**
* @method Room.add
* @desc Gives app the ability to add chat rooms hosted in FireBase.
*/
    Room.add = function(room){
      rooms.$add({ })
    }

    Room.createRoom = function(name) {
      rooms.$add(name);
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
