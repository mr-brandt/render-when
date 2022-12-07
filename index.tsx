/* eslint-disable react/jsx-no-useless-fragment */
import * as React from "react";

type WhenProps = {
    children: React.ReactNode;
    isTrue?: boolean;
    limit?: number;
};

const RenderWhen = ({ limit = 1, isTrue, children }: WhenProps) => {
    const list: React.ReactNode[] = [];

    if (isTrue !== true) {
        return null;
    }

    React.Children.map(children, (child: any) => {
        const { isTrue: isChildTrue } = child?.props || {};

        if (isChildTrue === true && (limit == -1 || list.length < limit)) {
            list.push(child);
        }
    });

    return <>{list}</>;
};

RenderWhen.defaultProps = {
    limit: 1,
    isTrue: true,
};

RenderWhen.If = ({ children, isTrue }) => children;

export default RenderWhen;
