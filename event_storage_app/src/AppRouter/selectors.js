export const locationStateSelector = () => {
  let prevState;
  let prevStateJS;

  return (state) => {
    const routingState = state.get('route');

    if (!routingState.equals(prevState)) {
      prevState = routingState;
      prevStateJS = routingState.toJS();
    }

    return prevStateJS;
  };
};
