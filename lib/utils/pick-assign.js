"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickAssign = function (shouldPick, sources) {
    return sources.reduce(function (picked, source) {
        for (var key in source) {
            if (shouldPick(key)) {
                picked[key] = source[key];
            }
        }
        return picked;
    }, {});
};
//# sourceMappingURL=pick-assign.js.map