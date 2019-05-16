! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
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
            for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
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
    }, n.p = "", n(n.s = 7)
}([function (e, t, n) {
    "use strict";
    var r = this && this.__assign || function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, a = function () {
        function e(e) {
            this._name = e
        }
        return Object.defineProperty(e.prototype, "_level", {
            get: function () {
                return "undefined" != typeof window && window.logLevel || i.Info
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.debug = function (e, t) {
            this._level > i.Debug || console.log(e, r({
                timestamp: new Date,
                component: this._name
            }, t))
        }, e.prototype.info = function (e, t) {
            this._level > i.Info || console.info(e, r({
                timestamp: new Date,
                component: this._name
            }, t))
        }, e.prototype.warn = function (e, t) {
            this._level > i.Warn || console.warn(e, r({
                timestamp: new Date,
                component: this._name
            }, t))
        }, e.prototype.error = function (e, t) {
            this._level > i.Error || console.error(e, r({
                timestamp: new Date,
                component: this._name
            }, t))
        }, e
    }();
    t.Logger = a,
        function (e) {
            e[e.None = 0] = "None", e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warn = 3] = "Warn", e[e.Error = 4] = "Error"
        }(i = t.LogLevel || (t.LogLevel = {})), t.default = a
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
            return new(n || (n = Promise))(function (i, a) {
                function o(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        a(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }

                function c(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(o, s)
                }
                c((r = r.apply(e, t || [])).next())
            })
        },
        i = this && this.__generator || function (e, t) {
            var n, r, i, a, o = {
                label: 0,
                sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                return this
            }), a;

            function s(a) {
                return function (s) {
                    return function (a) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; o;) try {
                            if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                            switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                case 0:
                                case 1:
                                    i = a;
                                    break;
                                case 4:
                                    return o.label++, {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++, r = a[1], a = [0];
                                    continue;
                                case 7:
                                    a = o.ops.pop(), o.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                        o.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && o.label < i[1]) {
                                        o.label = i[1], i = a;
                                        break
                                    }
                                    if (i && o.label < i[2]) {
                                        o.label = i[2], o.ops.push(a);
                                        break
                                    }
                                    i[2] && o.ops.pop(), o.trys.pop();
                                    continue
                            }
                            a = t.call(e, o)
                        } catch (e) {
                            a = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & a[0]) throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
        function e() {}
        return e.Get = function (e) {
            return r(this, void 0, void 0, function () {
                return i(this, function (t) {
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
    t.Storage = a
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
            return new(n || (n = Promise))(function (i, a) {
                function o(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        a(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }

                function c(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(o, s)
                }
                c((r = r.apply(e, t || [])).next())
            })
        },
        i = this && this.__generator || function (e, t) {
            var n, r, i, a, o = {
                label: 0,
                sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                return this
            }), a;

            function s(a) {
                return function (s) {
                    return function (a) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; o;) try {
                            if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                            switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                case 0:
                                case 1:
                                    i = a;
                                    break;
                                case 4:
                                    return o.label++, {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++, r = a[1], a = [0];
                                    continue;
                                case 7:
                                    a = o.ops.pop(), o.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                        o.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && o.label < i[1]) {
                                        o.label = i[1], i = a;
                                        break
                                    }
                                    if (i && o.label < i[2]) {
                                        o.label = i[2], o.ops.push(a);
                                        break
                                    }
                                    i[2] && o.ops.pop(), o.trys.pop();
                                    continue
                            }
                            a = t.call(e, o)
                        } catch (e) {
                            a = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & a[0]) throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(0),
        o = n(2),
        s = n(4),
        c = function () {
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
                    return i(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return [4, e.get(t)];
                            case 1:
                                return n = i.sent(), r = !n.mutedInfo.muted, [4, this.update(t, {
                                    muted: r
                                })];
                            case 2:
                                return i.sent(), [2, r]
                        }
                    })
                })
            }, e
        }();
    t.Tabs = c;
    var u = function () {
        function e() {}
        return e.clear = function (e) {
            return new Promise(function (t, n) {
                chrome.notifications.clear(e, function (e) {
                    t(e)
                })
            })
        }, e.create = function (t, n) {
            return r(this, void 0, void 0, function () {
                var r, a;
                return i(this, function (i) {
                    switch (i.label) {
                        case 0:
                            return this._logger.info("Notifications enabled - displaying", n), [4, new Promise(function (e, r) {
                                chrome.notifications.create(t + "-" + s.newGuid(), n, function (t) {
                                    e(t)
                                })
                            })];
                        case 1:
                            return r = i.sent(), [4, o.Storage.Get("notifications-duration")];
                        case 2:
                            return a = i.sent(), [4, s.delay(1e3 * (a || 3))];
                        case 3:
                            return i.sent(), [4, e.clear(r)];
                        case 4:
                            return i.sent(), [2]
                    }
                })
            })
        }, e._logger = new a.Logger("Notifications Process"), e
    }();
    t.Notifications = u
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
}, , , function (module, exports, __webpack_require__) {
    "use strict";
    var __awaiter = this && this.__awaiter || function (e, t, n, r) {
            return new(n || (n = Promise))(function (i, a) {
                function o(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        a(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }

                function c(e) {
                    e.done ? i(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(o, s)
                }
                c((r = r.apply(e, t || [])).next())
            })
        },
        __generator = this && this.__generator || function (e, t) {
            var n, r, i, a, o = {
                label: 0,
                sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                return this
            }), a;

            function s(a) {
                return function (s) {
                    return function (a) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; o;) try {
                            if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                            switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                case 0:
                                case 1:
                                    i = a;
                                    break;
                                case 4:
                                    return o.label++, {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++, r = a[1], a = [0];
                                    continue;
                                case 7:
                                    a = o.ops.pop(), o.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                        o.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && o.label < i[1]) {
                                        o.label = i[1], i = a;
                                        break
                                    }
                                    if (i && o.label < i[2]) {
                                        o.label = i[2], o.ops.push(a);
                                        break
                                    }
                                    i[2] && o.ops.pop(), o.trys.pop();
                                    continue
                            }
                            a = t.call(e, o)
                        } catch (e) {
                            a = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & a[0]) throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var asynchrome_1 = __webpack_require__(3),
        logger_1 = __webpack_require__(0),
        message_bus_1 = __webpack_require__(1),
        storage_1 = __webpack_require__(2),
        Process = function () {
            function Process() {
                var e = this;
                this._bus = new message_bus_1.Bus, this._logger = new logger_1.Logger("Background Process"), this.heartBeatInterval = null, this.tabId = null, this._cacheArtist = null, this._cacheTitle = null, this.registerHotKeys(), this.subscribe(), __awaiter(e, void 0, void 0, function () {
                    return __generator(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.heartBeat()];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                }), this._heartBeatInterval = setInterval(function () {
                    __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.heartBeat()];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }, 700)
            }
            return Process.prototype.plantAgent = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var e;
                    return __generator(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return this._logger.debug("Planting Agent"), [4, asynchrome_1.Tabs.find()];
                            case 1:
                                return (e = t.sent()).length < 1 ? (this._logger.error("Player tab not found", {
                                    pattern: /^http(s)?:\/\/\w+\.spotify\.com.+/
                                }), [2]) : (this.tabId = e[0].id, this._logger.debug("Tab ID " + this.tabId, {
                                    tabs: e
                                }), [2])
                        }
                    })
                })
            }, Process.prototype.registerHotKeys = function () {
                var e = this;
                this._logger.info("Registering hotkeys"), chrome.commands.onCommand.addListener(function (t) {
                    switch (t) {
                        case "player-toggle":
                            e._bus.send("idea.cmd.player.toggle");
                            break;
                        case "player-next":
                            e._bus.send("idea.cmd.player.next");
                            break;
                        case "player-previous":
                            e._bus.send("idea.cmd.player.previous");
                            break;
                        case "player-forward":
                            e._bus.send("idea.cmd.player.forward");
                            break;
                        case "player-backward":
                            e._bus.send("idea.cmd.player.backward");
                            break;
                        case "player-mute":
                            e._bus.send("idea.cmd.player.mute");
                            break;
                        case "player-shuffle":
                            e._bus.send("idea.cmd.player.shuffle");
                            break;
                        case "player-repeat":
                            e._bus.send("idea.cmd.player.repeat");
                            break;
                        case "player-save":
                            e._bus.send("idea.cmd.player.save");
                            break;
                        case "player-show":
                            e._bus.send("idea.cmd.player.show")
                    }
                }), chrome.notifications.onButtonClicked.addListener(function (t, n) {
                    e._logger.info("Notification button clicked", {
                        notificationId: t,
                        buttonIndex: n
                    }), e._bus.send("idea.cmd.player." + (0 == n ? "previous" : "next"))
                })
            }, Process.prototype.subscribe = function () {
                var e = this;
                this._logger.info("Subscribing"), this._bus.on("idea.cmd.player.rewind", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.Rewind(" + t.location + ")"
                                    })] : [2];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.cmd.player.forward", function () {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.Forward()"
                                    })] : [2];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.cmd.player.backward", function () {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.Backward()"
                                    })] : [2];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.cmd.player.volume", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.SetVolume(" + t.level + ")"
                                    })] : [2];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.cmd.player.toggle", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.Toggle()"
                                    })] : [2];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.cmd.player.next", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.Next()"
                                    })] : [2];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.cmd.player.previous", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.Previous()"
                                    })] : [2];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.cmd.player.shuffle", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.Shuffle()"
                                    })] : [2];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.cmd.player.repeat", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.Repeat()"
                                    })] : [2];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.cmd.player.mute", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.tabId ? [3, 2] : [2];
                                case 1:
                                    return e.sent(), [3, 4];
                                case 2:
                                    return [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.Mute(" + this.tabId + ")"
                                    })];
                                case 3:
                                    e.sent(), e.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }), this._bus.on("idea.cmd.player.save", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.Save()"
                                    })] : [2];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.cmd.player.show", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        var e, t;
                        return __generator(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.GetTrackInfo()"
                                    })] : [2];
                                case 1:
                                    return !(e = n.sent()) || e.length < 1 || !e[0] ? [2] : (t = {
                                        type: "progress",
                                        iconUrl: e[0].art,
                                        title: e[0].title,
                                        message: e[0].artist,
                                        progress: Math.round(100 * e[0].progress),
                                        buttons: [{
                                            title: "previous"
                                        }, {
                                            title: "next"
                                        }]
                                    }, [4, asynchrome_1.Notifications.create("progress", t)]);
                                case 2:
                                    return n.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.track.changed", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        var e;
                        return __generator(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return e = {
                                        type: "basic",
                                        iconUrl: t.art,
                                        title: t.title,
                                        message: t.artist,
                                        buttons: [{
                                            title: "previous"
                                        }, {
                                            title: "next"
                                        }]
                                    }, [4, storage_1.Storage.Get("notifications-disabled")];
                                case 1:
                                    return n.sent() ? (this._logger.info("Notifications for track change disabled - skipping"), [3, 4]) : [3, 2];
                                case 2:
                                    return [4, asynchrome_1.Notifications.create("next", e)];
                                case 3:
                                    n.sent(), n.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }), this._bus.on("idea.evt.player.playing", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        var e, t;
                        return __generator(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return this.tabId ? [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                        code: "agent.GetTrackInfo()"
                                    })] : [2];
                                case 1:
                                    return !(e = n.sent()) || e.length < 1 || !e[0] ? [2] : (t = {
                                        type: "progress",
                                        iconUrl: e[0].art,
                                        title: e[0].title,
                                        message: e[0].artist,
                                        progress: Math.round(100 * e[0].progress),
                                        buttons: [{
                                            title: "previous"
                                        }, {
                                            title: "next"
                                        }]
                                    }, [4, storage_1.Storage.Get("notifications-play-disabled")]);
                                case 2:
                                    return n.sent() ? (this._logger.info("Notifications for play disabled - skipping"), [3, 5]) : [3, 3];
                                case 3:
                                    return [4, asynchrome_1.Notifications.create("playing", t)];
                                case 4:
                                    n.sent(), n.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }), this._bus.on("idea.track.changed", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getLyrics(t.artist, t.title)];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }), this._bus.on("idea.evt.player.saved", function (t) {
                    return __awaiter(e, void 0, void 0, function () {
                        var e;
                        return __generator(this, function (n) {
                            return e = {
                                type: "basic",
                                iconUrl: t.art,
                                title: t.feedback,
                                message: t.song,
                                buttons: [{
                                    title: "previous"
                                }, {
                                    title: "next"
                                }]
                            }, asynchrome_1.Notifications.create("saved", e), [2]
                        })
                    })
                })
            }, Process.prototype.getLyrics = function (artist, title) {
                return __awaiter(this, void 0, void 0, function () {
                    var response, data, song, lyric, lines, lyr, i;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                return this._logger.info("Getting lyrics"), [4, window.fetch("http://lyrics.wikia.com/api.php?action=lyrics&artist=" + artist + "&song=" + title + "&fmt=json")];
                            case 1:
                                return response = _a.sent(), [4, response.text()];
                            case 2:
                                return data = _a.sent(), song = eval(data), lyric = song, "not found" !== lyric.lyrics.toLowerCase() ? [3, 5] : (storage_1.Storage.Remove("lyric"), title.indexOf(" - ") > -1 ? [4, this.getLyrics(artist, title.substring(0, title.indexOf(" - ")))] : [3, 4]);
                            case 3:
                                _a.sent(), _a.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                for (i in lines = lyric.lyrics.split(/\r\n|\r|\n/).filter(function (e) {
                                        return "" !== e.replace(/\s/g, "")
                                    }).splice(0, 4), lyr = "", lines)
                                    if (lines.hasOwnProperty(i)) {
                                        if (lyr.length > 120) break;
                                        lyr += "\r\n" + lines[i].replace("[...]", "")
                                    } lyric.lyrics = lyr + "..", storage_1.Storage.Set("lyric", lyric), _a.label = 6;
                            case 6:
                                return [2]
                        }
                    })
                })
            }, Process.prototype.heartBeat = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var e, t, n, r;
                    return __generator(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return this._logger.debug("Heartbeat"), this.tabId ? [3, 2] : (this._logger.warn("Tab ID not set"), [4, this.plantAgent()]);
                            case 1:
                                return i.sent(), [2];
                            case 2:
                                return [4, asynchrome_1.Tabs.get(this.tabId)];
                            case 3:
                                return i.sent() ? [3, 5] : (this.tabId = null, this._logger.warn("Tab ID not found", {
                                    tabId: this.tabId
                                }), [4, this.plantAgent()]);
                            case 4:
                                return i.sent(), [2];
                            case 5:
                                return this._logger.debug("Tab ID found", {
                                    tabId: this.tabId
                                }), [4, asynchrome_1.Tabs.executeScript(this.tabId, {
                                    code: "agent.GetTrackInfo()"
                                })];
                            case 6:
                                return !(e = i.sent()) || e.length < 1 || !e[0] ? (this._logger.debug("Agent returned no track info", {
                                    tabId: this.tabId,
                                    tracks: e
                                }), [4, this.plantAgent()]) : [3, 8];
                            case 7:
                                return i.sent(), [2];
                            case 8:
                                return t = e[0], this._bus.send("idea.track.updated", t), n = this._cacheArtist !== t.artist || this._cacheTitle !== t.title, r = t.art && "" !== t.art, n && r && (this._cacheArtist = t.artist, this._cacheTitle = t.title, this._bus.send("idea.track.changed", t)), [2]
                        }
                    })
                })
            }, Process
        }(),
        process = new Process
}]);
//# sourceMappingURL=background.js.map