import * as React from 'react';
import { DomPopmotionPoser, DomPopmotionConfig } from 'popmotion-pose';
import { ChildRegistration, CurrentPose, PoseElementInternalProps, PopStyle } from './types';
export declare const PoseParentContext: import("../../../../../../../Users/verlikylos/Workspace/react-pose-15/node_modules/create-react-15-context").Context<{}>;
declare type Ref = (ref: Element) => any;
declare type RefSetters = {
    ref?: Ref;
    innerRef?: Ref;
    hostRef?: Ref;
};
declare class PoseElement extends React.PureComponent<PoseElementInternalProps> {
    props: PoseElementInternalProps;
    poser: DomPopmotionPoser;
    poseConfig: DomPopmotionConfig;
    ref: Element;
    styleProps: {
        [key: string]: any;
    };
    shouldForwardProp: (key: string) => boolean;
    children: Set<ChildRegistration>;
    popStyle?: PopStyle;
    private childrenHandlers;
    constructor(props: PoseElementInternalProps);
    getInitialPose(): CurrentPose | undefined;
    getFirstPose(): CurrentPose | void;
    getSetProps(): {
        [key: string]: any;
        children?: any;
        withParent?: boolean;
    };
    getRefs: () => RefSetters;
    setRef: (ref: Element) => void;
    componentDidMount(): void;
    componentWillUpdate({ pose, _pose }: PoseElementInternalProps): void;
    componentDidUpdate(prevProps: PoseElementInternalProps): void;
    componentWillUnmount(): void;
    initPoser(poser: DomPopmotionPoser): void;
    setPose(pose: CurrentPose): void;
    flushChildren(): void;
    render(): JSX.Element;
}
export { PoseElement };
