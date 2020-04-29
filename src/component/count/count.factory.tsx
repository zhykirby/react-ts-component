import React from 'react';
import { Injectable } from '../../core/inject';
import { observer } from 'mobx-react';
import { CountView } from './views/count.view';
import {
    CountStore,
    CountPresenter,
    LoadingStore,
    LoadingPresenter
} from './count.model'

@Injectable()
export class CountFactory {
    // 依赖注入
    constructor(
        private countStore: CountStore,
        private countPresenter: CountPresenter,
        private loadingStore: LoadingStore,
        private loadingPresenter: LoadingPresenter
    ) {}

    onClick = () => {
        this.countPresenter.setCount(this.countStore, this.countStore.count + 1);
    }
    
    didMount = async () => {
        this.loadingPresenter.setLoading(this.loadingStore, true);
        const newCount = await Promise.resolve(1);
        this.countPresenter.setCount(this.countStore, newCount);
        this.loadingPresenter.setLoading(this.loadingStore, false);
    }

    render = () => {
        return observer(() => (
            <CountView
                loading={this.loadingStore.loading}
                count={this.countStore.count}
                onClick={this.onClick}
                didMount={this.didMount}
            />
        ));
    }
}

