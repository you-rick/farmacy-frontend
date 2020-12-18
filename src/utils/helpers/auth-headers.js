export const authHeaders = (data) => {
  if (!!data.username && !!data.password) {
    return {
      ...data,
    };
  }
  return {};
};
