/**
 * Vuex의 핵심 구성은 state, mutations, actions, getters로 구성됨.
 * 
 * state
 * Application에서 공통으로 참조하는 객체를 뜻함.
 * 
 * mutaions
 * state를 변경 시키는 역활, 
 * 
 * actions
 * muations를 실행 시키는 역활
 * 
 * 
 */
export interface StoreOptions<S> {
    state? : S | (() => S),
    mutations?: any,
    actions?: any,
    getters?: any,
    modules?: any,
} 
export class Store<S> {
    private readonly state: S = {} as S;
    private readonly getters: any;

    constructor(options: StoreOptions<S>) {

    }
}