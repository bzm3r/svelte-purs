export const throwError = (msg: string) => {
  throw new Error(`[svelte-purs] ${msg}`);
};

export const throwTypescriptError = () => {
  throwError(`Encountered type error`);
};
