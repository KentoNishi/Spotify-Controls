! function (t) {
    var e = {};

    function r(o) {
        if (e[o]) return e[o].exports;
        var n = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = t, r.c = e, r.d = function (t, e, o) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var n in t) r.d(o, n, function (e) {
                return t[e]
            }.bind(null, n));
        return o
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 8)
}({
    0: function (t, e, r) {
        "use strict";
        var o = this && this.__assign || function () {
            return (o = Object.assign || function (t) {
                for (var e, r = 1, o = arguments.length; r < o; r++)
                    for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, i = function () {
            function t(t) {
                this._name = t
            }
            return Object.defineProperty(t.prototype, "_level", {
                get: function () {
                    return "undefined" != typeof window && window.logLevel || n.Info
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.debug = function (t, e) {
                this._level > n.Debug || console.log(t, o({
                    timestamp: new Date,
                    component: this._name
                }, e))
            }, t.prototype.info = function (t, e) {
                this._level > n.Info || console.info(t, o({
                    timestamp: new Date,
                    component: this._name
                }, e))
            }, t.prototype.warn = function (t, e) {
                this._level > n.Warn || console.warn(t, o({
                    timestamp: new Date,
                    component: this._name
                }, e))
            }, t.prototype.error = function (t, e) {
                this._level > n.Error || console.error(t, o({
                    timestamp: new Date,
                    component: this._name
                }, e))
            }, t
        }();
        e.Logger = i,
            function (t) {
                t[t.None = 0] = "None", t[t.Debug = 1] = "Debug", t[t.Info = 2] = "Info", t[t.Warn = 3] = "Warn", t[t.Error = 4] = "Error"
            }(n = e.LogLevel || (e.LogLevel = {})), e.default = i
    },
    1: function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
            function t() {
                var t = this;
                this._subscriptions = [], chrome.runtime.onMessage.addListener(function (e, r, o) {
                    void 0 !== e.type && t._subscriptions.filter(function (t) {
                        return t.type === e.type
                    }).forEach(function (t) {
                        t.callback(e.message)
                    })
                })
            }
            return t.prototype.on = function (t, e) {
                this._subscriptions.push({
                    type: t,
                    callback: e
                })
            }, t.prototype.send = function (t, e) {
                this._subscriptions.filter(function (e) {
                    return e.type === t
                }).forEach(function (t) {
                    t.callback(e)
                }), chrome.runtime.sendMessage({
                    type: t,
                    message: e
                }, function (t) { })
            }, t
        }();
        e.Bus = o
    },
    8: function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(0),
            n = r(1),
            i = function () {
                function t() {
                    var t = this;
                    this._player = document.querySelector(".now-playing-bar"), this._logger = new o.Logger("Agent"), this._bus = new n.Bus, this._track = {}, this._clickAt = function (e, r) {
                        var o = e.getBoundingClientRect();
                        t._logger.info("click at", {
                            x: r,
                            offset: o.x + r
                        });
                        var n = document.createEvent("MouseEvents"),
                            i = document.createEvent("MouseEvents");
                        n.initMouseEvent("mousedown", !0, !0, window, null, 0, 0, o.x + r, o.y, !1, !1, !1, !1, 0, void 0), i.initMouseEvent("mouseup", !0, !0, window, null, 0, 0, o.x + r, o.y, !1, !1, !1, !1, 0, void 0), e.dispatchEvent(n), e.dispatchEvent(i)
                    }, this._logger.info("Agent planted")
                }
                return t.prototype.isReady = function () {
                    return this._player || (this._player = document.querySelector(".now-playing-bar")), !!this._player
                }, t.prototype.GetTrackInfo = function () {
                    if (this.isReady()) return {
                        artist: this.GetArtist(),
                        title: this.GetTitle(),
                        art: this.GetArt(),
                        progress: this.GetProgress(),
                        elapsed: this.GetElapsed(),
                        length: this.GetLength(),
                        volume: this.GetVolume(),
                        shuffle_on: this.GetShuffleState(),
                        repeat_on: this.GetRepeatState(),
                        mute_on: this.GetMuteState(),
                        is_paused: this.GetPauseState(),
                        is_saved: this.GetSavedState()
                    }
                }, t.prototype.Toggle = function () {
                    var t = this._player.querySelector(".spoticon-pause-16");
                    t || (t = this._player.querySelector(".spoticon-play-16")), t.click(), this.GetPauseState() || this._bus.send("idea.evt.player.playing")
                }, t.prototype.Next = function () {
                    this._player.querySelector(".spoticon-skip-forward-16").click()
                }, t.prototype.Previous = function () {
                    this._player.querySelector(".spoticon-skip-back-16").click()
                }, t.prototype.Repeat = function () {
                    (this._player.querySelector("[data-testid=control-button-repeat]") || this._player.querySelector(".spoticon-repeatonce-16")).click()
                }, t.prototype.Shuffle = function () {
                    this._player.querySelector("[data-testid=control-button-shuffle]").click()
                }, t.prototype.Mute = function () {
                    this._player.querySelector(".volume-bar button").click()
                }, t.prototype.Save = function () {
                    var t = this._player.querySelector(".spoticon-heart-16"),
                        e = this._player.querySelector(".spoticon-heart-active-16");
                    (t || e).click(), this._bus.send("idea.evt.player.saved", {
                        feedback: t ? "Added to your Favorite Songs" : "Removed from your Favorite Songs",
                        song: this.GetArtist() + " - " + this.GetTitle(),
                        art: this.GetArt()
                    })
                }, t.prototype.Forward = function () {
                    var t = this.GetProgress();
                    this._logger.info("forward", {
                        current: t
                    }), this.Rewind(t >= .9 ? .99 : t + .1)
                }, t.prototype.Backward = function () {
                    var t = this.GetProgress();
                    this._logger.info("backward", {
                        current: t
                    }), this.Rewind(t <= .1 ? .01 : t - .1)
                }, t.prototype.Rewind = function (t) {
                    var e = this._player.querySelector(".playback-bar .progress-bar");
                    this._logger.info("rewinding", {
                        target: t
                    }), this._clickAt(e, e.offsetWidth * t)
                }, t.prototype.SetVolume = function (t) {
                    var e = this._player.querySelector(".volume-bar .progress-bar");
                    this._logger.info(e), this._logger.info("rewinding to target" + t), this._clickAt(e, e.offsetWidth * t)
                }, t.prototype.GetArtist = function () {
                    try {
                        var t = this._player.querySelector("[href*=artist]").text;
                        if (t === undefined) {
                            return "Unknown Artist";
                        }
                        return t
                    } catch (t) {
                        return
                    }
                }, t.prototype.GetTitle = function () {
                    try {
                        var t = this._player.querySelector("[data-testid=nowplaying-track-link]").text;
                        if (t === undefined) {
                            return "Unknown Title"
                        }
                        return t;
                    } catch (t) {
                        return
                    }
                }, t.prototype.GetArt = function () {
                    try {
                        var url = this._player.querySelector("[data-testid=nowplaying-track-link]").href;
                        if (this._song == url) {
                            return this._bg;
                        }
                        this._song = url;
                        var t = this._player.querySelector(".cover-art-image").style.backgroundImage;
                        this._bg = t.slice(5, t.length - 2);
                        return this._bg;
                    } catch (t) {
                        return
                    }
                }, t.prototype.GetProgress = function () {
                    try {
                        var t = this.GetElapsed().split(":").map(function (t) {
                            return ~~t
                        }),
                            e = 60 * t[0] + t[1],
                            r = this.GetLength().split(":").map(function (t) {
                                return ~~t
                            });
                        return e / (r[0] > 0 ? 60 * r[0] + r[1] : 60 * r[0] * -1 + r[1] + e)
                    } catch (t) {
                        return
                    }
                }, t.prototype.GetElapsed = function () {
                    try {
                        return this._player.querySelector(".playback-bar__progress-time").innerHTML
                    } catch (t) {
                        return
                    }
                }, t.prototype.GetLength = function () {
                    try {
                        var t = this._player.querySelectorAll(".playback-bar__progress-time");
                        return t[t.length - 1].innerHTML
                    } catch (t) {
                        return
                    }
                }, t.prototype.GetVolume = function () {
                    try {
                        var t = this._player.querySelector(".volume-bar .progress-bar__fg_wrapper").getBoundingClientRect(),
                            e = this._player.querySelector(".volume-bar .progress-bar__fg").getBoundingClientRect();
                        return 1 - (t.x - e.x) / t.width
                    } catch (t) {
                        return
                    }
                }, t.prototype.GetShuffleState = function () {
                    try {
                        return this._player.querySelector("[data-testid=control-button-shuffle]").classList.contains("control-button--active")
                    } catch (t) {
                        return
                    }
                }, t.prototype.GetRepeatState = function () {
                    try {
                        var t = this._player.querySelector("[data-testid=control-button-repeat]");
                        return t || (t = this._player.querySelector(".spoticon-repeatonce-16")), t.classList.contains("control-button--active")
                    } catch (t) {
                        return
                    }
                }, t.prototype.GetMuteState = function () {
                    try {
                        return this._player.querySelector(".volume-bar button").classList.contains("spoticon-volume-off-16")
                    } catch (t) {
                        return
                    }
                }, t.prototype.GetPauseState = function () {
                    try {
                        return !!this._player.querySelector(".spoticon-pause-16")
                    } catch (t) {
                        return
                    }
                }, t.prototype.GetSavedState = function () {
                    try {
                        return !!this._player.querySelector(".spoticon-heart-active-16")
                    } catch (t) {
                        return
                    }
                }, t
            }();
        window.agent = new i
    }
});
//# sourceMappingURL=agent.js.map