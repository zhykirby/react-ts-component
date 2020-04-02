import 'reflect-metadata';
type Constructor<T = any> = new (...args: any[]) => T;

export const Injectable = (): ClassDecorator => target => {};

export const Factory = <T>(target: Constructor<T>): T => {
    // 获取注入
    // 元数据获取依赖
    const providers = Reflect.getMetadata('design:paramtypes', target);
    // 将依赖实例化
    const arges = providers.map((provider: Constructor) => new provider())
    // 依赖注入
    return new target(...arges)
}