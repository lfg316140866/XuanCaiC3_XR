/// <reference path="../Cmn.js" />
//将视频画到canvas上播放
(function () {

    function _AudioPlayer(audioIDOrUrl, autoPlay) {
        /// <summary>音频播放</summary>
        /// <param name="audioIDOrUrl" type="String">音频的ID选择器 或者url地址 会优先选择器搜索 </param>
        /// <param name="autoPlay" type="bool">是否自动播放</param>

        var _Self = this;
        _Self.Audio = null;

        //音频操作选择器容器
        _Self.ControlSelectorContainer = ".AP_Container";
        //音频播放
        _Self.PlayBtnSelector = ".AP_Play";
        //音频当前状态  load(加载状态)  playing(播放状态) pause(暂停状态) ended(播放完毕的状态)
        _Self.State = "load";

        //音频播放中事件
        _Self.OnPlaying = new Cg.Event(this);
        //音频播放的事件
        _Self.OnPlay = new Cg.Event(this);
        //音频暂停的事件
        _Self.OnPause = new Cg.Event(this);
        //音频播放结束的事件
        _Self.OnEnded = new Cg.Event(this);
        //音频错误的事件
        _Self.OnError = new Cg.Event(this);
        //音频更换的事件
        _Self.OnChange = new Cg.Event(this);


        //检测是选择器还是url音频地址
        if ((audioIDOrUrl.indexOf(".") < 0 && audioIDOrUrl.indexOf("/") < 0)) {
            _Self.Audio = document.getElementById(audioIDOrUrl.replace(/[#|.]/, ""));
            $(_Self.Audio).css({ position: "absolute", opacity: "0", top: "-1000px" });
        }
        else { _Self.Audio = new Audio(audioIDOrUrl); }
      
        _Self.Audio.preload = "auto";


        //添加时间轴
        var _TimelineEvent = function () {
            if (_Self.State == "playing") {
                _Self.OnPlaying.Trigger([_Self.Audio.currentTime*1000]);
            }
        }

        Cg.Animate.Timeline.Add(_TimelineEvent, 200).Stop(_TimelineEvent);

        $(_Self.Audio).on("error", function () {
            Cg.Animate.Timeline.Stop(_TimelineEvent);
            _Self.State = "error";
            Cg.DebugLog("音频加载错误！请检查视频路径是否正确！");
        });

        $(_Self.Audio).on("playing", function () {
            //开启时间轴
            Cg.Animate.Timeline.Start(_TimelineEvent);
            
            _Self.State = "playing";
        });

        $(_Self.Audio).on("pause", function () {
            //关闭时间轴
            Cg.Animate.Timeline.Stop(_TimelineEvent);

            _Self.State = "pause";
        });

        $(_Self.Audio).on("ended", function () {
            //关闭时间轴
            Cg.Animate.Timeline.Stop(_TimelineEvent);

            _Self.State = "pause";
        });

        _Self.Play = function () {
            /// <summary>播放音频</summary>
            _Self.Audio.play(); return this;
        }

        _Self.Pause = function () {
            /// <summary>暂停</summary>
            _Self.Audio.pause(); return this;
        }

        _Self.IsMute = function (ismute) {
            /// <summary>是否静音</summary>
            _Self.Audio.muted = ismute; return this;
        }

        _Self.SetVolume = function (volume) {
            /// <summary>设置当前音频的音量 0-1</summary>
            if (arguments.length > 0) { _Self.Audio.volume = volume; }
            return this;
        }

        _Self.GetVolume = function (volume) {
            /// <summary>设置当前音频的音量 0-1</summary>
            return _Self.Audio.volume;
        }

        //更换音频路径
        _Self.ReplaceAudioUrl = function (audioUrl,autoplay) {
            /// <summary>更换音频路径</summary>
            /// <param name="audioUrl" type="String">音频的url地址</param>
            /// <param name="autoPlay" type="bool">是否自动播放</param>

            _Self.Pause();
            _Self.Audio.src = audioUrl;
            _Self.State = "load";
            _Self.Audio.load();

            if (autoPlay) {
                _Self.Audio.autoplay = true;
                if (Cg.Func.IsMobile()) {
                    //无法自动播放的的手机兼容
                    $(function () { $("body").one("touchstart", function () { if (_Self.State != "playing") { _Self.Play(); } }); });
                    if (_Self.State != "playing") { _Self.Play(); }
                }
                else { if (_Self.State != "playing") { _Self.Play(); } }
            }
            else { _Self.Audio.autoplay = false; }

            _Self.OnChange.Trigger();
        }

        if (autoPlay) {
            _Self.Audio.autoplay = true;
            if (Cg.Func.IsMobile()) {
                //无法自动播放的的手机兼容
                $(function () { $("body").one("touchstart", function () { if (_Self.State != "playing") { _Self.Play(); } }); });
                if (_Self.State != "playing") { _Self.Play(); }
            }
            else { if (_Self.State != "playing") { _Self.Play(); } }
        }

    }


    if (!Cg.Plugin) { Cg.Plugin = {}; }
    Cg.Extend(Cg.Plugin, {

        AudioPlayer: function (audioIDOrUrl, autoPlay) {
            /// <summary>音频播放</summary>
            /// <param name="audioIDOrUrl" type="String">音频的选择器 或者url地址</param>
            /// <param name="autoPlay" type="bool">是否自动播放</param>

            return new _AudioPlayer(audioIDOrUrl, autoPlay);
        }
    })

})();