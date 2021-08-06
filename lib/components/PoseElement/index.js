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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
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
var react_1 = require("react");
var create_react_15_context_1 = __importDefault(require("create-react-15-context"));
var popmotion_pose_1 = __importDefault(require("popmotion-pose"));
var is_prop_valid_1 = __importDefault(require("@emotion/is-prop-valid"));
var hey_listen_1 = require("hey-listen");
var has_changed_1 = require("../../utils/has-changed");
var pick_assign_1 = require("../../utils/pick-assign");
exports.PoseParentContext = create_react_15_context_1.default({});
var calcPopFromFlowStyle = function (el) {
    var offsetTop = el.offsetTop, offsetLeft = el.offsetLeft, offsetWidth = el.offsetWidth, offsetHeight = el.offsetHeight;
    return {
        position: 'absolute',
        top: offsetTop,
        left: offsetLeft,
        width: offsetWidth,
        height: offsetHeight
    };
};
var hasPose = function (pose, key) {
    return Array.isArray(pose) ? pose.indexOf(key) !== -1 : pose === key;
};
var objectToMap = function (obj) {
    return Object.keys(obj).reduce(function (map, key) {
        map.set(key, { raw: obj[key] });
        return map;
    }, new Map());
};
var testAlwaysTrue = function () { return true; };
var filterProps = function (_a) {
    var elementType = _a.elementType, poseConfig = _a.poseConfig, onValueChange = _a.onValueChange, innerRef = _a.innerRef, _pose = _a._pose, pose = _a.pose, initialPose = _a.initialPose, poseKey = _a.poseKey, onPoseComplete = _a.onPoseComplete, getParentPoseConfig = _a.getParentPoseConfig, registerChild = _a.registerChild, onUnmount = _a.onUnmount, getInitialPoseFromParent = _a.getInitialPoseFromParent, popFromFlow = _a.popFromFlow, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd, props = __rest(_a, ["elementType", "poseConfig", "onValueChange", "innerRef", "_pose", "pose", "initialPose", "poseKey", "onPoseComplete", "getParentPoseConfig", "registerChild", "onUnmount", "getInitialPoseFromParent", "popFromFlow", "values", "parentValues", "onDragStart", "onDragEnd", "onPressStart", "onPressEnd"]);
    return props;
};
var PoseElement = (function (_super) {
    __extends(PoseElement, _super);
    function PoseElement(props) {
        var _this = _super.call(this, props) || this;
        _this.children = new Set();
        _this.childrenHandlers = {
            registerChild: function (props) {
                _this.children.add(props);
                if (_this.poser)
                    _this.flushChildren();
            },
            onUnmount: function (child) { return _this.poser.removeChild(child); },
            getParentPoseConfig: function () { return _this.poseConfig; },
            getInitialPoseFromParent: function () { return _this.getInitialPose(); }
        };
        _this.getRefs = function () {
            var refs = {};
            var elementType = _this.props.elementType;
            if (typeof elementType === 'string') {
                refs.ref = _this.setRef;
            }
            else {
                refs.innerRef = _this.setRef;
                refs.hostRef = _this.setRef;
            }
            return refs;
        };
        _this.setRef = function (ref) {
            if (ref instanceof Element || (_this.ref && ref === null)) {
                var innerRef = _this.props.innerRef;
                if (innerRef) {
                    if (typeof innerRef === 'function') {
                        innerRef(ref);
                    }
                    else {
                        innerRef.current = ref;
                    }
                }
                _this.ref = ref;
            }
        };
        _this.shouldForwardProp =
            typeof _this.props.elementType === 'string' ? is_prop_valid_1.default : testAlwaysTrue;
        var poseConfig = _this.props.poseConfig;
        _this.poseConfig =
            typeof poseConfig === 'function'
                ? poseConfig(filterProps(props))
                : poseConfig;
        return _this;
    }
    PoseElement.prototype.getInitialPose = function () {
        var _a = this.props, getInitialPoseFromParent = _a.getInitialPoseFromParent, pose = _a.pose, _pose = _a._pose, initialPose = _a.initialPose;
        if (initialPose) {
            return initialPose;
        }
        else {
            var parentPose = getInitialPoseFromParent && getInitialPoseFromParent();
            var initialPoses = (Array.isArray(parentPose)
                ? parentPose
                : [parentPose])
                .concat(pose, _pose)
                .filter(Boolean);
            return initialPoses.length > 0 ? initialPoses : undefined;
        }
    };
    PoseElement.prototype.getFirstPose = function () {
        var _a = this.props, initialPose = _a.initialPose, pose = _a.pose, _pose = _a._pose;
        if (!initialPose)
            return;
        var firstPose = (Array.isArray(pose) ? pose : [pose])
            .concat(_pose)
            .filter(Boolean);
        return firstPose.length === 1 ? firstPose[0] : firstPose;
    };
    PoseElement.prototype.getSetProps = function () {
        var props = filterProps(this.props);
        if (this.props.popFromFlow && this.ref && this.ref instanceof HTMLElement) {
            if (!this.popStyle) {
                props.style = __assign({}, props.style, calcPopFromFlowStyle(this.ref));
                this.popStyle = props.style;
            }
            else {
                props.style = this.popStyle;
            }
        }
        else {
            this.popStyle = null;
        }
        return props;
    };
    PoseElement.prototype.componentDidMount = function () {
        var _this = this;
        hey_listen_1.invariant(typeof this.ref !== 'undefined', "No DOM ref found. If you're converting an existing component via posed(Component), you must ensure you're passing the hostRef prop to your underlying DOM element.");
        var _a = this.props, onValueChange = _a.onValueChange, registerChild = _a.registerChild, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd;
        var config = __assign({}, this.poseConfig, { initialPose: this.getInitialPose(), values: values || this.poseConfig.values, parentValues: parentValues ? objectToMap(parentValues) : undefined, props: this.getSetProps(), onDragStart: onDragStart,
            onDragEnd: onDragEnd,
            onPressStart: onPressStart,
            onPressEnd: onPressEnd, onChange: onValueChange });
        if (!registerChild) {
            this.initPoser(popmotion_pose_1.default(this.ref, config));
        }
        else {
            registerChild({
                element: this.ref,
                poseConfig: config,
                onRegistered: function (poser) { return _this.initPoser(poser); }
            });
        }
    };
    PoseElement.prototype.componentWillUpdate = function (_a) {
        var pose = _a.pose, _pose = _a._pose;
        if (hasPose(pose, 'flip') || hasPose(_pose, 'flip'))
            this.poser.measure();
    };
    PoseElement.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, pose = _a.pose, _pose = _a._pose, poseKey = _a.poseKey;
        this.poser.setProps(this.getSetProps());
        if (poseKey !== prevProps.poseKey ||
            has_changed_1.hasChanged(prevProps.pose, pose) ||
            pose === 'flip') {
            this.setPose(pose);
        }
        if (_pose !== prevProps._pose || _pose === 'flip')
            this.setPose(_pose);
    };
    PoseElement.prototype.componentWillUnmount = function () {
        if (!this.poser)
            return;
        var onUnmount = this.props.onUnmount;
        if (onUnmount)
            onUnmount(this.poser);
        this.poser.destroy();
    };
    PoseElement.prototype.initPoser = function (poser) {
        this.poser = poser;
        this.flushChildren();
        var firstPose = this.getFirstPose();
        if (firstPose)
            this.setPose(firstPose);
    };
    PoseElement.prototype.setPose = function (pose) {
        var _this = this;
        var onPoseComplete = this.props.onPoseComplete;
        var poseList = Array.isArray(pose) ? pose : [pose];
        Promise.all(poseList.map(function (key) { return key && _this.poser.set(key); })).then(function () { return onPoseComplete && onPoseComplete(pose); });
    };
    PoseElement.prototype.flushChildren = function () {
        var _this = this;
        this.children.forEach(function (_a) {
            var element = _a.element, poseConfig = _a.poseConfig, onRegistered = _a.onRegistered;
            return onRegistered(_this.poser.addChild(element, poseConfig));
        });
        this.children.clear();
    };
    PoseElement.prototype.render = function () {
        var elementType = this.props.elementType;
        return (React.createElement(exports.PoseParentContext.Provider, { value: this.childrenHandlers }, react_1.createElement(elementType, pick_assign_1.pickAssign(this.shouldForwardProp, [
            this.getSetProps(),
            this.getRefs()
        ]))));
    };
    return PoseElement;
}(React.PureComponent));
exports.PoseElement = PoseElement;
//# sourceMappingURL=index.js.map