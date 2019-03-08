const composeValidators = (validators, ...args) =>
  validators.reduce(
    (error, validator) => error || validator(...args),
    undefined
  );

export const composeFormValidators = validators => (...args) =>
  composeValidators(validators, ...args);

export const composeFieldValidators = validators => () => (...args) =>
  composeValidators(validators, ...args);
