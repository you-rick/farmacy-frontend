// @Todo add localStorage verification

export const authHeaders = (data) => {
  if (!!data.username && !!data.password) {
    return {
      username: data.username,
      password: data.password,
    };
  }
  return {};
};
