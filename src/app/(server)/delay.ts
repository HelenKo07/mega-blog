type DelayOptions =
  | { timeout: number; shouldFail?: boolean }
  | { timeout: number; shouldFail: boolean };

export function delayed<T>(
  data: T,
  options: DelayOptions = { shouldFail: true, timeout: 1500 }
) {
  const { timeout, shouldFail } = options;
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => (shouldFail ? reject(data) : resolve(data)), timeout);
  });
}
