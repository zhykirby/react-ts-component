import React, { useEffect } from 'react';

interface CountUIProps {
    count: number;
    loading: boolean;
    onClick: () => void;
}

// Hook写法代替class
// 展示组件，无状态
export function CountUI(props: CountUIProps) {
    const { count, loading, onClick } = props;

    return loading ? (
        <p>loading...</p>
    ) : (
        <div>
            <p>count: {count}</p>
            <button onClick={onClick}>click</button>
        </div>
    )
}


export interface countViewProps extends CountUIProps {
    didMount: any;
}

// 容器组件，有状态
export function CountView(props: countViewProps) {
    const { didMount, ...restProps } = props;

    useEffect(() => {
        didMount();
    }, [didMount]);

    return <CountUI {...restProps} />
}