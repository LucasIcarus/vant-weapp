export * from './wxs';
export function noop() {};
export const nextTick = () => new Promise(resolve => setTimeout(resolve, 1000 / 30));
