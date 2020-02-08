export interface PromiseCanceleable<T> {
  promise: Promise<T>,
  cancel: () => void,
}

function makeCancelable<T>(promise: Promise<T>): PromiseCanceleable<T> {
  let hasCanceled_ = false;

  const wrappedPromise: Promise<T> = new Promise((resolve, reject) => {
    const makeError = val => `Promice is canceled ${JSON.stringify(val)}`;
    promise
      .then((val) => {
        if (hasCanceled_) {
          reject(makeError(val));
        } else {
          resolve(val);
        }
      })
      .catch((err) => {
        if (hasCanceled_) {
          reject(makeError(err));
        } else {
          reject(err);
        }
      });
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
}
export default makeCancelable;
