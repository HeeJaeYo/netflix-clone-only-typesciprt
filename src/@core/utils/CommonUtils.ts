/**
 * class extends 에서는 다중 상속이 되지 않으므로 mixin을 통해 다중 상속을 지원한다.
 * @param targetClass
 * @param baseClasses
 */
export function applyMixins(targetClass: any, baseClasses: any[]): void {
  baseClasses.forEach((baseClass) => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach((name) => {
      Object.defineProperty(
        targetClass.proptotype,
        name,
        Object.getOwnPropertyDescriptor(baseClass.prototype, name) || Object.create(null)
      );
    });
  });
}

/**
 * 1frame 뒤에 실행 시켜 주는 debounce 함수
 * @param fn 
 * @returns 
 */
export function debounce(fn: Function) {
  let call: number = 0;
  return (...args: any[]) => {
    cancelAnimationFrame(call);
    call = requestAnimationFrame(() => fn(...args));
  }
}