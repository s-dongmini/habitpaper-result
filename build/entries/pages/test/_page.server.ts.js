const load = async ({ cookies }) => {
  const user = cookies.get("token");
  return {
    user: user || null
  };
};
export {
  load
};
