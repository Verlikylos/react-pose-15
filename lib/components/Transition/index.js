"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var children_1 = __importDefault(require("./children"));
var Transition = (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            displayedChildren: [],
            finishedLeaving: {},
            hasInitialized: false,
            indexedChildren: {},
            scheduleChildRemoval: function (key) { return _this.removeChild(key); }
        };
        _this.setDerivedState = function (props) {
            if (props === void 0) { props = _this.props; }
            var derivedState = children_1.default(props, _this.state);
            if (derivedState !== _this.state) {
                _this.setState(derivedState);
            }
        };
        return _this;
    }
    Transition.prototype.componentWillReceiveProps = function (nextProps) {
        this.setDerivedState(nextProps);
    };
    Transition.prototype.componentWillMount = function () {
        this.setDerivedState(this.props);
    };
    Transition.prototype.removeChild = function (key) {
        var _a = this.state, displayedChildren = _a.displayedChildren, finishedLeaving = _a.finishedLeaving;
        var _b = this.props, enterAfterExit = _b.enterAfterExit, onRest = _b.onRest;
        if (!finishedLeaving.hasOwnProperty(key))
            return;
        finishedLeaving[key] = true;
        if (!Object.keys(finishedLeaving).every(function (leavingKey) { return finishedLeaving[leavingKey]; })) {
            return;
        }
        var targetChildren = displayedChildren.filter(function (child) { return !finishedLeaving.hasOwnProperty(child.key); });
        var newState = enterAfterExit
            ? __assign({ finishedLeaving: {} }, children_1.default(__assign({}, this.props, { enterAfterExit: false }), __assign({}, this.state, { displayedChildren: targetChildren }))) : {
            finishedLeaving: {},
            displayedChildren: targetChildren
        };
        this.setState(newState, onRest);
    };
    Transition.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.state !== nextState;
    };
    Transition.prototype.render = function () {
        var displayedChildren = this.state.displayedChildren;
        var hasChildren = Array.isArray(displayedChildren) && displayedChildren.length;
        return hasChildren ? (React.createElement("div", { className: "ReactPoseTransitionGroup" }, displayedChildren)) : null;
    };
    Transition.defaultProps = {
        flipMove: false,
        enterAfterExit: false,
        preEnterPose: 'exit',
        enterPose: 'enter',
        exitPose: 'exit'
    };
    return Transition;
}(React.Component));
exports.default = Transition;
//# sourceMappingURL=index.js.map