! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 5)
}([function (e, t, n) {
    "use strict";
    var r = this && this.__assign || function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, i = function () {
        function e(e) {
            this._name = e
        }
        return Object.defineProperty(e.prototype, "_level", {
            get: function () {
                return "undefined" != typeof window && window.logLevel || o.Info
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.debug = function (e, t) {
            this._level > o.Debug || console.log(e, r({
                timestamp: new Date,
                component: this._name
            }, t))
        }, e.prototype.info = function (e, t) {
            this._level > o.Info || console.info(e, r({
                timestamp: new Date,
                component: this._name
            }, t))
        }, e.prototype.warn = function (e, t) {
            this._level > o.Warn || console.warn(e, r({
                timestamp: new Date,
                component: this._name
            }, t))
        }, e.prototype.error = function (e, t) {
            this._level > o.Error || console.error(e, r({
                timestamp: new Date,
                component: this._name
            }, t))
        }, e
    }();
    t.Logger = i,
        function (e) {
            e[e.None = 0] = "None", e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warn = 3] = "Warn", e[e.Error = 4] = "Error"
        }(o = t.LogLevel || (t.LogLevel = {})), t.default = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e() {
            var e = this;
            this._subscriptions = [], chrome.runtime.onMessage.addListener(function (t, n, r) {
                void 0 !== t.type && e._subscriptions.filter(function (e) {
                    return e.type === t.type
                }).forEach(function (e) {
                    e.callback(t.message)
                })
            })
        }
        return e.prototype.on = function (e, t) {
            this._subscriptions.push({
                type: e,
                callback: t
            })
        }, e.prototype.send = function (e, t) {
            this._subscriptions.filter(function (t) {
                return t.type === e
            }).forEach(function (e) {
                e.callback(t)
            }), chrome.runtime.sendMessage({
                type: e,
                message: t
            }, function (e) {})
        }, e
    }();
    t.Bus = r
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
            return new(n || (n = Promise))(function (o, i) {
                function c(e) {
                    try {
                        a(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function u(e) {
                    try {
                        a(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(c, u)
                }
                a((r = r.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator || function (e, t) {
            var n, r, o, i, c = {
                label: 0,
                sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                return this
            }), i;

            function u(i) {
                return function (u) {
                    return function (i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; c;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return c.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        c.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && c.label < o[1]) {
                                        c.label = o[1], o = i;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2], c.ops.push(i);
                                        break
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            i = t.call(e, c)
                        } catch (e) {
                            i = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function e() {}
        return e.Get = function (e) {
            return r(this, void 0, void 0, function () {
                return o(this, function (t) {
                    return [2, new Promise(function (t, n) {
                        chrome.storage.local.get(e, function (n) {
                            t(n[e])
                        })
                    })]
                })
            })
        }, e.Set = function (e, t) {
            var n;
            chrome.storage.local.set(((n = {})[e] = t, n))
        }, e.Remove = function (e) {
            chrome.storage.local.remove(e)
        }, e
    }();
    t.Storage = i
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
            return new(n || (n = Promise))(function (o, i) {
                function c(e) {
                    try {
                        a(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function u(e) {
                    try {
                        a(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(c, u)
                }
                a((r = r.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator || function (e, t) {
            var n, r, o, i, c = {
                label: 0,
                sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                return this
            }), i;

            function u(i) {
                return function (u) {
                    return function (i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; c;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return c.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        c.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && c.label < o[1]) {
                                        c.label = o[1], o = i;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2], c.ops.push(i);
                                        break
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            i = t.call(e, c)
                        } catch (e) {
                            i = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        c = n(2),
        u = n(4),
        a = function () {
            function e() {}
            return e.get = function (e) {
                return new Promise(function (t, n) {
                    chrome.tabs.get(e, function (e) {
                        t(e)
                    })
                })
            }, e.find = function () {
                return new Promise(function (e, t) {
                    chrome.tabs.query({}, function (t) {
                        e(t.filter(function (e) {
                            return /^http(s)?:\/\/\w+\.spotify\.com.+/.test(e.url)
                        }))
                    })
                })
            }, e.query = function (e) {
                return new Promise(function (t, n) {
                    chrome.tabs.query(e, function (e) {
                        t(e)
                    })
                })
            }, e.executeScript = function (e, t) {
                return new Promise(function (n, r) {
                    chrome.tabs.executeScript(e, t, function (e) {
                        n(e)
                    })
                })
            }, e.update = function (e, t) {
                return new Promise(function (n, r) {
                    chrome.tabs.update(e, t, function (e) {
                        n(e)
                    })
                })
            }, e.getCurrent = function () {
                return new Promise(function (e, t) {
                    chrome.tabs.getCurrent(function (t) {
                        e(t)
                    })
                })
            }, e.toggleMute = function (t) {
                return r(this, void 0, void 0, function () {
                    var n, r;
                    return o(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return [4, e.get(t)];
                            case 1:
                                return n = o.sent(), r = !n.mutedInfo.muted, [4, this.update(t, {
                                    muted: r
                                })];
                            case 2:
                                return o.sent(), [2, r]
                        }
                    })
                })
            }, e
        }();
    t.Tabs = a;
    var s = function () {
        function e() {}
        return e.clear = function (e) {
            return new Promise(function (t, n) {
                chrome.notifications.clear(e, function (e) {
                    t(e)
                })
            })
        }, e.create = function (t, n) {
            return r(this, void 0, void 0, function () {
                var r, i;
                return o(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return this._logger.info("Notifications enabled - displaying", n), [4, new Promise(function (e, r) {
                                chrome.notifications.create(t + "-" + u.newGuid(), n, function (t) {
                                    e(t)
                                })
                            })];
                        case 1:
                            return r = o.sent(), [4, c.Storage.Get("notifications-duration")];
                        case 2:
                            return i = o.sent(), [4, u.delay(1e3 * (i || 3))];
                        case 3:
                            return o.sent(), [4, e.clear(r)];
                        case 4:
                            return o.sent(), [2]
                    }
                })
            })
        }, e._logger = new i.Logger("Notifications Process"), e
    }();
    t.Notifications = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.newGuid = function () {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }, t.delay = function (e) {
        return new Promise(function (t) {
            setTimeout(t, e)
        })
    }, t.getChromeVersion = function () {
        var e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return !!e && parseInt(e[2], 10)
    }
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
            return new(n || (n = Promise))(function (o, i) {
                function c(e) {
                    try {
                        a(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function u(e) {
                    try {
                        a(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(c, u)
                }
                a((r = r.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator || function (e, t) {
            var n, r, o, i, c = {
                label: 0,
                sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                return this
            }), i;

            function u(i) {
                return function (u) {
                    return function (i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; c;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return c.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        c.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && c.label < o[1]) {
                                        c.label = o[1], o = i;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2], c.ops.push(i);
                                        break
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            i = t.call(e, c)
                        } catch (e) {
                            i = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        },
        i = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(0),
        u = n(1),
        a = n(6),
        s = n(2),
        l = n(3),
        f = function () {
            function e() {
                this._logger = new c.Logger("Main"), this._logger.debug("ctor"), this._bus = new u.Bus
            }
            return e.prototype.initialize = function () {
                return r(this, void 0, void 0, function () {
                    var e = this;
                    return o(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return this._logger.debug("init"), this._bus.on("idea.track.updated", function (t) {
                                    return r(e, void 0, void 0, function () {
                                        return o(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, this.updateTrackInfo(t)];
                                                case 1:
                                                    return e.sent(), [2]
                                            }
                                        })
                                    })
                                }), this._bus.on("idea.track.changed", function (t) {
                                    return r(e, void 0, void 0, function () {
                                        return o(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, this.updateTrack(t)];
                                                case 1:
                                                    return e.sent(), [2]
                                            }
                                        })
                                    })
                                }), [4, this.hideActions()];
                            case 1:
                                return t.sent(), this.registerClicks(), this.printConsoleGreetings(), [2]
                        }
                    })
                })
            }, e.prototype.updateTrackInfo = function (e) {
                return r(this, void 0, void 0, function () {
                    var t, n;
                    return o(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return this._logger.debug("updating tack info", e), document.querySelector("#main").classList.remove("no-player"), document.querySelector("#track-progress").style.width = document.querySelector("#track-bar").clientWidth * e.progress + "px", document.querySelector("#volume-level").style.width = document.querySelector("#volume-bar").clientWidth * e.volume + "px", document.querySelector("#track-elapsed").innerHTML = e.elapsed, e.shuffle_on ? document.querySelector("#shuffle").classList.add("active") : document.querySelector("#shuffle").classList.remove("active"), e.repeat_on ? document.querySelector("#repeat").classList.add("active") : document.querySelector("#repeat").classList.remove("active"), e.is_saved ? document.querySelector("#save").classList.add("active") : document.querySelector("#save").classList.remove("active"), [4, this.isTabMuted()];
                            case 1:
                                return t = r.sent(), e.mute_on || t ? (document.querySelector("#mute").classList.add("fa-volume-off"), document.querySelector("#mute").classList.remove("fa-volume-up")) : (document.querySelector("#mute").classList.add("fa-volume-up"), document.querySelector("#mute").classList.remove("fa-volume-off")), e.is_paused ? (document.querySelector("#toggle").classList.add("fa-pause-circle-o"), document.querySelector("#toggle").classList.remove("fa-play-circle-o")) : (document.querySelector("#toggle").classList.add("fa-play-circle-o"), document.querySelector("#toggle").classList.remove("fa-pause-circle-o")), document.querySelector("#track-artist").innerHTML = e.artist, document.querySelector("#track-title").innerHTML = e.title, e.art && document.querySelector("#track-art").setAttribute("src", e.art), document.querySelector("#track-length").innerHTML = e.length, [4, s.Storage.Get("lyric")];
                            case 2:
                                return (n = r.sent()) ? (document.querySelector("#lyrics-link").setAttribute("href", n.url), document.querySelector("#lyrics-text").innerHTML = n.lyrics.trim(), document.querySelector("#lyrics").classList.remove("hidden")) : document.querySelector("#lyrics").classList.add("hidden"), [2]
                        }
                    })
                })
            }, e.prototype.isTabMuted = function () {
                return r(this, void 0, void 0, function () {
                    var e, t;
                    return o(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return [4, l.Tabs.find()];
                            case 1:
                                return (e = n.sent()).length < 1 ? [2, !1] : (t = e[0].id, [4, l.Tabs.get(t)]);
                            case 2:
                                return [2, n.sent().mutedInfo.muted]
                        }
                    })
                })
            }, e.prototype.updateTrack = function (e) {
                this._logger.info("updating tack", e), document.querySelector("#main").classList.remove("no-player"), document.querySelector("#track-artist").innerHTML = e.artist, document.querySelector("#track-title").innerHTML = e.title, document.querySelector("#track-art").setAttribute("src", e.art), document.querySelector("#lyrics").classList.add("hidden")
            }, e.prototype.hideActions = function () {
                return r(this, void 0, void 0, function () {
                    var e, t;
                    return o(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return [4, s.Storage.Get("rated")];
                            case 1:
                                return n.sent() && (document.querySelector("#rate-outer").style.display = "none"), [4, s.Storage.Get("donated")];
                            case 2:
                                return n.sent() && (document.querySelector("#donation").style.display = "none"), e = document.querySelector("#settings-notification"), [4, s.Storage.Get("notifications-disabled")];
                            case 3:
                                return e.checked = !n.sent(), t = document.querySelector("#settings-notification-play"), [4, s.Storage.Get("notifications-play-disabled")];
                            case 4:
                                return t.checked = !n.sent(), [2]
                        }
                    })
                })
            }, e.prototype.registerClicks = function () {
                return r(this, void 0, void 0, function () {
                    var e, t, n, r = this;
                    return o(this, function (o) {
                        switch (o.label) {
                            case 0:
                                for (e = document.getElementsByClassName("control"), t = 0; t < e.length; t++) e[t].addEventListener("click", function (e) {
                                    r._logger.debug("click: " + e.srcElement.id), r._bus.send("idea.cmd.player." + e.srcElement.id)
                                });
                                return document.querySelector("#track-bar").addEventListener("click", function (e) {
                                    var t = document.querySelector("#track-bar").getBoundingClientRect();
                                    r._logger.debug("click: track bar", {
                                        cx: e.clientX,
                                        ox: e.offsetX,
                                        lx: e.layerX,
                                        x: e.x,
                                        sx: e.screenX,
                                        px: e.pageX,
                                        loc: e.offsetX / t.width
                                    }), r._bus.send("idea.cmd.player.rewind", {
                                        location: e.offsetX / t.width
                                    })
                                }), document.querySelector("#volume-bar").addEventListener("click", function (e) {
                                    r._logger.debug("click: volume bar");
                                    var t = document.querySelector("#volume-bar").getBoundingClientRect();
                                    r._bus.send("idea.cmd.player.volume", {
                                        level: e.offsetX / t.width
                                    })
                                }), document.querySelector("#notification a").addEventListener("click", function (e) {
                                    r._logger.debug("click: notification"), chrome.tabs.create({
                                        url: "https://open.spotify.com"
                                    }), e.preventDefault()
                                }), document.querySelector("#settings-btn").addEventListener("click", function (e) {
                                    r._logger.debug("click: settings"), document.querySelector("#settings").classList.toggle("open"), e.preventDefault()
                                }), document.querySelector("#hotkeys-lnk").addEventListener("click", function (e) {
                                    r._logger.debug("click: hotkeys"), chrome.tabs.create({
                                        url: a.Resources.urlChromeCommands
                                    }), e.preventDefault()
                                })/*, document.querySelector("#contribute").addEventListener("click", function (e) {
                                    r._logger.debug("click: contribute"), chrome.tabs.create({
                                        url: a.Resources.urlOss
                                    }), e.preventDefault()
                                }), document.querySelector("#paypal").addEventListener("click", function (e) {
                                    r._logger.debug("click: paypal"), chrome.tabs.create({
                                        url: a.Resources.urlPayPal
                                    }), s.Storage.Set("donated", !0), e.preventDefault()
                                }), document.querySelector("#rate").addEventListener("click", function (e) {
                                    r._logger.debug("click: rate"), chrome.tabs.create({
                                        url: "https://chrome.google.com/webstore/detail/spotify-web-app-playback/goikghbjckploljhlfmjjfggccmlnbea/reviews"
                                    }), s.Storage.Set("rated", !0), e.preventDefault()
                                }), document.querySelector("#settings-notification").addEventListener("change", function (e) {
                                    var t = e.target.checked;
                                    r._logger.info("change: notifications enabled: " + t), s.Storage.Set("notifications-disabled", !t), e.preventDefault()
                                }), document.querySelector("#settings-notification-play").addEventListener("change", function (e) {
                                    var t = e.target.checked;
                                    r._logger.info("change: notifications play enabled: " + t), s.Storage.Set("notifications-play-disabled", !t), e.preventDefault()
                                })*/, [4, s.Storage.Get("notifications-duration")];
                            case 1:
                                return n = o.sent(), document.querySelector("#settings-notification-duration").value = (n || 3).toString(), document.querySelector("#settings-notification-duration").addEventListener("change", function (e) {
                                    var t = ~~e.target.value;
                                    r._logger.info("change: notification duration: " + t), s.Storage.Set("notifications-duration", t), e.preventDefault()
                                }), [2]
                        }
                    })
                })
            }, e.prototype.printConsoleGreetings = function () {
                //this._logger.info(a.Resources.msgDontHack), this._logger.info(a.Resources.msgBuyBeer), this._logger.info(a.Resources.msgRate)
            }, e
        }();
    document.addEventListener("DOMContentLoaded", function () {
        return r(i, void 0, void 0, function () {
            return o(this, function (e) {
                switch (e.label) {
                    case 0:
                        return [4, (new f).initialize()];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e() {}
        return e.urlOss = "https://github.com/Sergej-Popov/SpotifyControls", e.urlPayPal = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TRUHY87YGGRLY", e.urlChromeCommands = "chrome://extensions/configureCommands", e.msgDontHack = "No need to hack around.. This app is open source: " + e.urlOss, e.msgBuyBeer = '"Learned a thing or two? Buy me a beer: ' + e.urlPayPal + ' (PayPal donation)"', e.msgRate = "And don't forget to rate! https://chrome.google.com/webstore/detail/spotify-web-app-playback/goikghbjckploljhlfmjjfggccmlnbea/reviews", e
    }();
    t.Resources = r
}]);
//# sourceMappingURL=popup.js.map