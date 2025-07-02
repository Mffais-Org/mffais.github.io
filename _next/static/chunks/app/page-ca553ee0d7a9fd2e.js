(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        7052: (e, r, s) => {
            Promise.resolve().then(s.bind(s, 9809))
        },
        6046: (e, r, s) => {
            "use strict";
            s.r(r);
            var t = s(6658),
                a = {};
            for (let e in t) "default" !== e && (a[e] = () => t[e]);
            s.d(r, a)
        },
        9809: (e, r, s) => {
            "use strict";
            s.r(r), s.d(r, {
                default: () => a
            });
            var t = s(6046);
            let a = () => (0, t.redirect)("/en")
        }
    },
    e => {
        var r = r => e(e.s = r);
        e.O(0, [441, 517, 358], () => r(7052)), _N_E = e.O()
    }
]);