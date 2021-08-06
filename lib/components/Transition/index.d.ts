import * as React from 'react';
import { Props, State } from './types';
declare class Transition extends React.Component<Props, State> {
    static defaultProps: {
        flipMove: boolean;
        enterAfterExit: boolean;
        preEnterPose: string;
        enterPose: string;
        exitPose: string;
    };
    state: State;
    componentWillReceiveProps(nextProps: any): void;
    componentWillMount(): void;
    setDerivedState: (props?: Readonly<{
        children?: React.ReactNode;
    }> & Readonly<Props>) => void;
    removeChild(key: string): void;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    render(): JSX.Element;
}
export default Transition;
