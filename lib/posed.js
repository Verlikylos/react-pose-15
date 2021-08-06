"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PoseElement_1 = require("./components/PoseElement");
var supported_elements_1 = require("./utils/supported-elements");
var componentCache = new Map();
var createComponentFactory = function (key) {
    var componentFactory = function (poseConfig) {
        if (poseConfig === void 0) { poseConfig = {}; }
        return function (_a) {
            var _b = _a.withParent, withParent = _b === void 0 ? true : _b, props = __rest(_a, ["withParent"]);
            return !withParent || props.parentValues ? (React.createElement(PoseElement_1.PoseElement, __assign({ poseConfig: poseConfig, elementType: key }, props))) : (React.createElement(PoseElement_1.PoseParentContext.Consumer, null, function (parentCtx) { return (React.createElement(PoseElement_1.PoseElement, __assign({ poseConfig: poseConfig, elementType: key }, props, parentCtx))); }));
        };
    };
    componentCache.set(key, componentFactory);
    return componentFactory;
};
var getComponentFactory = function (key) {
    return componentCache.has(key)
        ? componentCache.get(key)
        : createComponentFactory(key);
};
var posed = (function (component) {
    return getComponentFactory(component);
});
supported_elements_1.default.reduce(function (acc, key) {
    acc[key] = getComponentFactory(key);
    return acc;
}, posed);
exports.default = posed;
//# sourceMappingURL=posed.js.map