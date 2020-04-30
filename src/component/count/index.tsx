import { Factory } from '../../core/inject';
import { CountFactory } from './count.factory';

// 工厂将依赖实例化后注入依赖
const countFactory = Factory(CountFactory);

export default countFactory;