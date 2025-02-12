/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/canvas-confetti@1.1.2/dist/confetti.browser.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function (t, e) {
    ! function t(e, n, a, i) {
        var o = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL);

        function r() {}

        function l(t) {
            var a = n.exports.Promise,
                i = void 0 !== a ? a : e.Promise;
            return "function" == typeof i ? new i(t) : (t(r, r), null)
        }
        var c, s, h, u, f, d, g, m, b = (h = Math.floor(1e3 / 60), u = {}, f = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (c = function (t) {
                var e = Math.random();
                return u[e] = requestAnimationFrame((function n(a) {
                    f === a || f + h - 1 < a ? (f = a, delete u[e], t()) : u[e] = requestAnimationFrame(n)
                })), e
            }, s = function (t) {
                u[t] && cancelAnimationFrame(u[t])
            }) : (c = function (t) {
                return setTimeout(t, h)
            }, s = function (t) {
                return clearTimeout(t)
            }), {
                frame: c,
                cancel: s
            }),
            v = (m = {}, function () {
                if (d) return d;
                if (!a && o) {
                    var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");
                    ! function (t) {
                        function e(e, n) {
                            t.postMessage({
                                options: e || {},
                                callback: n
                            })
                        }
                        t.init = function (e) {
                            var n = e.transferControlToOffscreen();
                            t.postMessage({
                                canvas: n
                            }, [n])
                        }, t.fire = function (n, a, i) {
                            if (g) return e(n, null), g;
                            var o = Math.random().toString(36).slice(2);
                            return g = l((function (a) {
                                function r(e) {
                                    e.data.callback === o && (delete m[o], t.removeEventListener("message", r), g = null, i(), a())
                                }
                                t.addEventListener("message", r), e(n, o), m[o] = r.bind(null, {
                                    data: {
                                        callback: o
                                    }
                                })
                            }))
                        }, t.reset = function () {
                            for (var e in t.postMessage({
                                    reset: !0
                                }), m) m[e](), delete m[e]
                        }
                    }(d = new Worker(URL.createObjectURL(new Blob([e]))))
                }
                return d
            }),
            y = {
                particleCount: 50,
                angle: 90,
                spread: 45,
                startVelocity: 45,
                decay: .9,
                gravity: 1,
                ticks: 200,
                x: .5,
                y: .5,
                shapes: ["square", "circle"],
                zIndex: 100,
                colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"]
            };

        function p(t, e, n) {
            return function (t, e) {
                return e ? e(t) : t
            }(t && null != t[e] ? t[e] : y[e], n)
        }

        function M(t) {
            return parseInt(t, 16)
        }

        function w(t) {
            t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight
        }

        function x(t) {
            var e = t.getBoundingClientRect();
            t.width = e.width, t.height = e.height
        }

        function C(t, e, n, o, r) {
            var c, s, h = e.slice(),
                u = t.getContext("2d"),
                f = l((function (e) {
                        function l() {
                            c = s = null, u.clearRect(0, 0, o.width, o.height), r(), e()
                        }
                        c = b.frame((function e() {
                                !a || o.width === i.width && o.height === i.height || (o.width = t.width = i.width, o.height = t.height = i.height), o.width || o.height || (n(t), o.width = t.width, o.height = t.height), u.clearRect(0, 0, o.width, o.height), h = h.filter((function (t) {
                                        return function (t, e) {
                                            e.x += Math.cos(e.angle2D) * e.velocity, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.wobble += .1, e.velocity *= e.decay, e.tiltAngle += .1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 5, e.wobbleX = e.x + 10 * Math.cos(e.wobble), e.wobbleY = e.y + 10 * Math.sin(e.wobble);
                                            var n = e.tick++/e.totalTicks,a=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,o=e.wobbleX+e.random*e.tiltCos,r=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(o-a)*e.ovalScalar,Math.abs(r-i)*e.ovalScalar,Math.PI/
                                            10 * e.wobble, 0, 2 * Math.PI): function (t, e, n, a, i, o, r, l, c) {
                                            t.save(), t.translate(e, n), t.rotate(o), t.scale(a, i), t.arc(0, 0, 1, r, l, c), t.restore()
                                        }(t, e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(r - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI): (t.moveTo(Math.floor(e.x), Math.floor(e.y)), t.lineTo(Math.floor(e.wobbleX), Math.floor(i)), t.lineTo(Math.floor(o), Math.floor(r)), t.lineTo(Math.floor(a), Math.floor(e.wobbleY))), t.closePath(), t.fill(), e.tick < e.totalTicks
                                    }(u, t)
                                })), h.length ? c = b.frame(e) : l()
                        })), s = l
                }));
        return {
            addFettis: function (t) {
                return h = h.concat(t), f
            },
            canvas: t,
            promise: f,
            reset: function () {
                c && b.cancel(c), s && s()
            }
        }
    }

    function I(t, n) {
        var a, i = !t,
            r = !!p(n || {}, "resize"),
            l = o && !!p(n || {}, "useWorker") ? v() : null,
            c = i ? w : x,
            s = !(!t || !l) && !!t.__confetti_initialized;

        function h(e, n, i) {
            for (var o, r, l, s, h, u, f, d = p(e, "particleCount", Math.floor), g = p(e, "angle", Number), m = p(e, "spread", Number), b = p(e, "startVelocity", Number), v = p(e, "decay", Number), y = p(e, "gravity", Number), w = p(e, "colors"), x = p(e, "ticks", Number), I = p(e, "shapes"), T = function (t) {
                    var e = p(t, "origin", Object);
                    return e.x = p(e, "x", Number), e.y = p(e, "y", Number), e
                }(e), k = d, E = [], S = t.width * T.x, z = t.height * T.y; k--;) E.push((o = {
                x: S,
                y: z,
                angle: g,
                spread: m,
                startVelocity: b,
                color: w[k % w.length],
                shape: I[(u = 0, f = I.length, Math.floor(Math.random() * (f - u)) + u)],
                ticks: x,
                decay: v,
                gravity: y
            }, r = void 0, l = void 0, s = void 0, h = void 0, s = o.angle * (Math.PI / 180), h = o.spread * (Math.PI / 180), {
                x: o.x,
                y: o.y,
                wobble: 10 * Math.random(),
                velocity: .5 * o.startVelocity + Math.random() * o.startVelocity,
                angle2D: -s + (.5 * h - Math.random() * h),
                tiltAngle: Math.random() * Math.PI,
                color: (r = o.color, l = String(r).replace(/[^0-9a-f]/gi, ""), l.length < 6 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), {
                    r: M(l.substring(0, 2)),
                    g: M(l.substring(2, 4)),
                    b: M(l.substring(4, 6))
                }),
                shape: o.shape,
                tick: 0,
                totalTicks: o.ticks,
                decay: o.decay,
                random: Math.random() + 5,
                tiltSin: 0,
                tiltCos: 0,
                wobbleX: 0,
                wobbleY: 0,
                gravity: 3 * o.gravity,
                ovalScalar: .6
            }));
            return a ? a.addFettis(E) : (a = C(t, E, c, n, i)).promise
        }

        function u(n) {
            var o = p(n, "zIndex", Number);
            i && a ? t = a.canvas : i && !t && (t = function (t) {
                var e = document.createElement("canvas");
                return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = t, e
            }(o), document.body.appendChild(t)), r && !s && c(t);
            var u = {
                width: t.width,
                height: t.height
            };

            function f() {
                if (l) {
                    var e = {
                        getBoundingClientRect: function () {
                            if (!i) return t.getBoundingClientRect()
                        }
                    };
                    return c(e), void l.postMessage({
                        resize: {
                            width: e.width,
                            height: e.height
                        }
                    })
                }
                u.width = u.height = null
            }

            function d() {
                a = null, r && e.removeEventListener("resize", f), i && t && (document.body.removeChild(t), t = null, s = !1)
            }
            return l && !s && l.init(t), s = !0, l && (t.__confetti_initialized = !0), r && e.addEventListener("resize", f, !1), l ? l.fire(n, u, d) : h(n, u, d)
        }
        return u.reset = function () {
            l && l.reset(), a && a.reset()
        }, u
    }
    n.exports = I(null, {
        useWorker: !0,
        resize: !0
    }), n.exports.create = I
}(function () {
    return void 0 !== t ? t : "undefined" != typeof self ? self : this
}(), e, !1), t.confetti = e.exports
}(window, {});
//# sourceMappingURL=/sm/981a601de908ec9df1d1a82bcb3b4271a4a0795843a47b2679476a93016286f4.map
