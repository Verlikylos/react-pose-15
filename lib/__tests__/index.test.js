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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var posed_1 = require("../posed");
var PoseGroup_1 = require("../components/Transition/PoseGroup");
var enzyme_1 = require("enzyme");
var enzyme_adapter_react_15_1 = require("enzyme-adapter-react-15");
require("jest-enzyme");
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_15_1.default() });
var Parent = posed_1.default.div({
    init: { x: 10, transition: { duration: 30 } },
    foo: { x: 20, transition: { duration: 30 } },
    bar: { x: 30, transition: { duration: 30 } },
    fromProps: { x: function (_a) {
            var i = _a.i;
            return i;
        }, transition: { duration: 30 } },
    preEnter: { x: 40, transition: { duration: 30 } },
    enter: { x: 50, transition: { duration: 30 } },
    exit: { x: 60, transition: { duration: 30 } },
    dynamicEnter: { x: function (_a) {
            var x = _a.x;
            return x * 2;
        }, transition: { duration: 30 } },
    dynamicExit: {
        x: function (_a) {
            var x = _a.x;
            return x;
        },
        transition: { duration: 30 }
    }
});
var Child = posed_1.default.div({
    init: { y: 15, transition: { duration: 30 } },
    foo: { y: 25, transition: { duration: 30 } },
    bar: { y: 35, transition: { duration: 30 } },
    fromProps: { y: function (_a) {
            var i = _a.i;
            return i;
        }, transition: { duration: 30 } },
    preEnter: { y: 45, transition: { duration: 30 } },
    enter: { y: 55, transition: { duration: 30 } },
    exit: { y: 65, transition: { duration: 30 } },
    dynamicEnter: { y: 75, transition: { duration: 30 } },
    dynamicExit: { y: 85, transition: { duration: 30 } },
    dynamicExitDuration: {
        y: 85,
        transition: function (_a) {
            var i = _a.i;
            return ({ duration: (i + 1) * 30 });
        }
    }
});
test('posed: initial state', function () {
    var x = 0;
    var y = 0;
    var namedInit = enzyme_1.mount(react_1.default.createElement(Parent, { pose: "foo", onValueChange: { x: function (v) { return (x = v); } } },
        react_1.default.createElement(Child, { onValueChange: { y: function (v) { return (y = v); } } })));
    expect(namedInit.props().pose).toBe('foo');
    expect(x).toBe(20);
    expect(y).toBe(25);
    enzyme_1.mount(react_1.default.createElement(Parent, { onValueChange: { x: function (v) { return (x = v); } } },
        react_1.default.createElement(Child, { onValueChange: { y: function (v) { return (y = v); } } })));
    expect(x).toBe(10);
    expect(y).toBe(15);
});
test('posed: mount animation with `initialPose`', function () {
    var x = 0;
    var y = 0;
    return new Promise(function (resolve) {
        enzyme_1.mount(react_1.default.createElement(Parent, { initialPose: "bar", pose: "foo", onPoseComplete: function () {
                expect(x).toBe(20);
                expect(y).toBe(25);
                resolve();
            }, onValueChange: { x: function (v) { return (x = v); } } },
            react_1.default.createElement(Child, { onValueChange: { y: function (v) { return (y = v); } } })));
        expect(x).toBe(30);
        expect(y).toBe(35);
    });
});
test('posed: passes through props', function () {
    var x = 0;
    var y = 0;
    enzyme_1.mount(react_1.default.createElement(Parent, { pose: "fromProps", i: 1, onValueChange: { x: function (v) { return (x = v); } } },
        react_1.default.createElement(Child, { i: 2, onValueChange: { y: function (v) { return (y = v); } } })));
    expect(x).toBe(1);
    expect(y).toBe(2);
});
test('posed: `onPoseComplete` gets called with pose as argument', function () {
    return new Promise(function (resolve) {
        enzyme_1.mount(react_1.default.createElement(Parent, { initialPose: "bar", pose: "foo", onPoseComplete: function (pose) {
                expect(pose).toBe('foo');
                resolve();
            } }));
    });
});
test('PoseGroup: Initial visibility (visible)', function () {
    var x = 0;
    var y = 0;
    var Group = function (_a) {
        var _b = _a.isVisible, isVisible = _b === void 0 ? true : _b;
        return (react_1.default.createElement(PoseGroup_1.default, null, isVisible && (react_1.default.createElement(Parent, { key: "a", onValueChange: { x: function (v) { return (x = v); } } },
            react_1.default.createElement(Child, { onValueChange: { y: function (v) { return (y = v); } } })))));
    };
    enzyme_1.mount(react_1.default.createElement(Group, null));
    expect(x).toBe(50);
    expect(y).toBe(55);
});
test('PoseGroup: Initial visibility (hidden)', function () {
    var x = 0;
    var y = 0;
    var Group = function (_a) {
        var _b = _a.isVisible, isVisible = _b === void 0 ? false : _b;
        return (react_1.default.createElement(PoseGroup_1.default, null, isVisible && (react_1.default.createElement(Parent, { key: "a", onValueChange: { x: function (v) { return (x = v); } } },
            react_1.default.createElement(Child, { onValueChange: { y: function (v) { return (y = v); } } })))));
    };
    enzyme_1.mount(react_1.default.createElement(Group, null));
    expect(x).toBe(0);
    expect(y).toBe(0);
});
test('PoseGroup: Animate on mount', function () {
    var x = 0;
    var y = 0;
    return new Promise(function (resolve) {
        var Group = function (_a) {
            var _b = _a.isVisible, isVisible = _b === void 0 ? true : _b;
            return (react_1.default.createElement(PoseGroup_1.default, { animateOnMount: true }, isVisible && (react_1.default.createElement(Parent, { key: "a", onPoseComplete: function () {
                    expect(x).toBe(50);
                    expect(y).toBe(55);
                    resolve();
                }, onValueChange: { x: function (v) { return (x = v); } } },
                react_1.default.createElement(Child, { onValueChange: { y: function (v) { return (y = v); } } })))));
        };
        enzyme_1.mount(react_1.default.createElement(Group, null));
        expect(x).toBe(60);
        expect(y).toBe(65);
    });
});
test('PoseGroup: onRest fires', function () {
    var x = 0;
    var y = 0;
    return new Promise(function (resolve) {
        var Group = function (_a) {
            var _b = _a.isVisible, isVisible = _b === void 0 ? true : _b;
            return (react_1.default.createElement(PoseGroup_1.default, { onRest: function () {
                    expect(x).toBe(60);
                    expect(y).toBe(65);
                    resolve();
                } }, isVisible && (react_1.default.createElement(Parent, { key: "a", onValueChange: { x: function (v) { return (x = v); } } },
                react_1.default.createElement(Child, { onValueChange: { y: function (v) { return (y = v); } } })))));
        };
        var wrapper = enzyme_1.mount(react_1.default.createElement(Group, null));
        wrapper.setProps({ isVisible: false });
        expect(x).toBe(50);
        expect(y).toBe(55);
    });
});
test('PoseGroup: onRest fires when exit pose starts during exit pose', function () {
    var range = function (n) { return Array.from({ length: n }, function (_, i) { return i; }); };
    return new Promise(function (resolve) {
        var Group = (function (_super) {
            __extends(Group, _super);
            function Group() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    list: range(6)
                };
                _this.pop2 = function () {
                    var list = _this.state.list;
                    if (!list.length) {
                        return;
                    }
                    _this.setState({ list: list.slice(0, -2) });
                };
                return _this;
            }
            Group.prototype.componentDidMount = function () {
                this.pop2();
            };
            Group.prototype.render = function () {
                var _this = this;
                return (react_1.default.createElement(PoseGroup_1.default, { exitPose: "dynamicExitDuration", onRest: resolve }, this.state.list.map(function (i) { return (react_1.default.createElement(Child, { i: i, key: i, onPoseComplete: _this.pop2 })); })));
            };
            return Group;
        }(react_1.default.Component));
        enzyme_1.mount(react_1.default.createElement(Group, null));
    });
});
test('PoseGroup: Animate conditionally', function () {
    var x = 0;
    var y = 0;
    return new Promise(function (resolve) {
        var Group = function (_a) {
            var _b = _a.isVisible, isVisible = _b === void 0 ? false : _b;
            return (react_1.default.createElement(PoseGroup_1.default, { animateOnMount: true }, isVisible && (react_1.default.createElement(Parent, { key: "a", onPoseComplete: function () {
                    expect(x).toBe(50);
                    expect(y).toBe(55);
                    resolve();
                }, onValueChange: { x: function (v) { return (x = v); } } },
                react_1.default.createElement(Child, { onValueChange: { y: function (v) { return (y = v); } } })))));
        };
        var wrapper = enzyme_1.mount(react_1.default.createElement(Group, null));
        expect(x).toBe(0);
        expect(y).toBe(0);
        wrapper.setProps({ isVisible: true });
        expect(x).toBe(60);
        expect(y).toBe(65);
    });
});
test('PoseGroup: Forward props from PoseGroup to direct child', function () {
    var x = 0;
    var y = 0;
    return new Promise(function (resolve) {
        var Group = function (_a) {
            var _b = _a.isVisible, isVisible = _b === void 0 ? false : _b;
            return (react_1.default.createElement(PoseGroup_1.default, { animateOnMount: true, enterPose: "dynamicEnter", exitPose: "dynamicExit", preEnterPose: "dynamicExit", x: 100 }, isVisible && (react_1.default.createElement(Parent, { key: "a", onPoseComplete: function () {
                    expect(x).toBe(200);
                    expect(y).toBe(75);
                    resolve();
                }, onValueChange: { x: function (v) { return (x = v); } } },
                react_1.default.createElement(Child, { onValueChange: { y: function (v) { return (y = v); } } })))));
        };
        var wrapper = enzyme_1.mount(react_1.default.createElement(Group, null));
        expect(x).toBe(0);
        expect(y).toBe(0);
        wrapper.setProps({ isVisible: true });
        expect(x).toBe(100);
        expect(y).toBe(85);
    });
});
test('PoseGroup: Override props on child', function () {
    var x = 0;
    var y = 0;
    return new Promise(function (resolve) {
        var Group = function (_a) {
            var _b = _a.isVisible, isVisible = _b === void 0 ? false : _b;
            return (react_1.default.createElement(PoseGroup_1.default, { animateOnMount: true, enterPose: "dynamicEnter", exitPose: "dynamicExit", preEnterPose: "dynamicExit", x: isVisible ? 101 : 333 }, isVisible && (react_1.default.createElement(Parent, { key: "a", onPoseComplete: function (pose) {
                    if (pose === 'dynamicExit') {
                        expect(x).toBe(333);
                        expect(y).toBe(85);
                        resolve();
                    }
                    else {
                        expect(x).toBe(202);
                        expect(y).toBe(75);
                        wrapper.setProps({ isVisible: false });
                    }
                }, onValueChange: { x: function (v) { return (x = v); } } },
                react_1.default.createElement(Child, { onValueChange: { y: function (v) { return (y = v); } } })))));
        };
        var wrapper = enzyme_1.mount(react_1.default.createElement(Group, null));
        expect(x).toBe(0);
        expect(y).toBe(0);
        wrapper.setProps({ isVisible: true });
        expect(x).toBe(101);
        expect(y).toBe(85);
    });
});
test('PoseGroup: Provides group props to children on mount', function () {
    return new Promise(function (resolve) {
        var Group = function (_a) {
            var _b = _a.isVisible, isVisible = _b === void 0 ? false : _b;
            return (react_1.default.createElement(PoseGroup_1.default, { animateOnMount: true, someProp: "value" },
                react_1.default.createElement(Parent, { key: "a", onPoseComplete: function (pose) {
                        var child = wrapper.children().first();
                        expect(child.prop('someProp')).toBe('value');
                        resolve();
                    } },
                    react_1.default.createElement(Child, { test: 2 }))));
        };
        var wrapper = enzyme_1.mount(react_1.default.createElement(Group, null));
    });
});
test('PoseGroup: `onPoseComplete` gets called for leaving child', function () {
    return new Promise(function (resolve) {
        var Group = function (_a) {
            var _b = _a.isVisible, isVisible = _b === void 0 ? true : _b;
            return (react_1.default.createElement(PoseGroup_1.default, { animateOnMount: true }, isVisible && (react_1.default.createElement(Parent, { key: "a", onPoseComplete: function (pose) {
                    if (pose === 'enter') {
                        wrapper.setProps({ isVisible: false });
                        return;
                    }
                    expect(pose).toBe('exit');
                    resolve();
                } },
                react_1.default.createElement(Child, null)))));
        };
        var wrapper = enzyme_1.mount(react_1.default.createElement(Group, null));
    });
});
test('PoseGroup: special pre-enter pose', function () {
    var x = 0;
    var y = 0;
    return new Promise(function (resolve) {
        var Group = function (_a) {
            var _b = _a.isVisible, isVisible = _b === void 0 ? false : _b;
            return (react_1.default.createElement(PoseGroup_1.default, { animateOnMount: true, preEnterPose: "foo" }, isVisible && (react_1.default.createElement(Parent, { key: "a", onPoseComplete: function () {
                    expect(x).toBe(50);
                    expect(y).toBe(55);
                    resolve();
                }, onValueChange: { x: function (v) { return (x = v); } } },
                react_1.default.createElement(Child, { onValueChange: { y: function (v) { return (y = v); } } })))));
        };
        var wrapper = enzyme_1.mount(react_1.default.createElement(Group, null));
        expect(x).toBe(0);
        expect(y).toBe(0);
        wrapper.setProps({ isVisible: true });
        expect(x).toBe(20);
        expect(y).toBe(25);
    });
});
//# sourceMappingURL=index.test.js.map