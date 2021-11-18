import { debounce } from './utils/CommonUtils';

/**
 * Observer 패턴을 이용한 Publish/Subscribe 모델 구조의 기능을 하는 함수를 제공한다.
 */

let currentObserver: Function | null = null;

export function observe(fn: Function) {
  currentObserver = debounce(fn);
  fn();
  currentObserver = null;
}

export function observable<T, K extends keyof T>(obj: T) {
  if (!(obj instanceof Object)) return obj;

  Object.keys(obj).forEach((key) => {
    let _value = obj[key as K];
    const observers: Set<Function> = new Set();
    Object.defineProperty(obj, key, {
      get() {
        if (currentObserver) observers.add(currentObserver);
        return _value;
      },
      set(value) {
        let isSameValue = false;
        if (_value instanceof Map) {
          if (checkMapValue(_value, value)) {
            isSameValue = true;
          }
        }
        if (!isSameValue && _value === value) isSameValue = true;
        if (!isSameValue && JSON.stringify(_value) === JSON.stringify(value)) isSameValue = true;
        if (!isSameValue) {
          _value = value;
          observers.forEach((fn) => fn?.());
        }
      },
    });
  });

  return obj;
}

function checkMapValue(a: Map<any, any>, b: Map<any, any>): boolean {
  const aToString = JSON.stringify(Array.from(a.entries()));
  const bToString = JSON.stringify(Array.from(b.entries()));
  if (aToString === bToString) {
    return true;
  }
  return false;
}
/**
 * Note
 *
 *
 */
