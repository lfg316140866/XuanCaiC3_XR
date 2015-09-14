/// <reference path="../jquery.js" />
/// <reference path="../Cmn.js" />


Cmn.Event.Register("shake", function () {
    /// <summary>摇一摇</summary>
    var _self = this;
    _shake_threshold = 800,
    _lastUpdate = 0, _x, _y, _z,
    _last_x, _last_y, _last_z;

    $(_self).on("devicemotion", function (event) {

        var _acceleration = event.accelerationIncludingGravity;
        var _curTime = new Date().getTime();
        if ((_curTime - _lastUpdate) > 100) {
            var _diffTime = (_curTime - _lastUpdate);
            _lastUpdate = _curTime;
            _x = acceleration.x;
            _y = acceleration.y;
            _z = acceleration.z;
            var _threshold = Math.abs(_x + _y + _z - _last_x - _last_y - _last_z) / _diffTime * 10000;
            if (_threshold > _shake_threshold) { Cmn.Event.Trigger(_self, "shake", []); }
            _last_x = _x; _last_y = _y; _last_z = _z;
        }
    });

});

Cmn.Event.Register("lister", function () {
    /// <summary>摇一摇</summary>

});