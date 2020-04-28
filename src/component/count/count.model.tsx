import { observable, action, runInAction } from 'mobx';

export class CountStore {
    @observable
    count!: number;

    constructor(initialCount?: number) {
        runInAction(() => {
            this.count = initialCount || 1;
        });
    }
}

export class CountPresenter {
    @action
    setCount(store: CountStore, count: number) {
        store.count = count;
    }
}

export class LoadingStore {
    @observable loading: boolean = false;
}

export class LoadingPresenter {
    @action
    setLoading(store: LoadingStore, loading: boolean) {
        store.loading = loading
    }
}