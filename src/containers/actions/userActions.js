export const fetch_post = () => ({ type: "FETCH_USER" });
export const receive_post = (data) => ({ type: "FETCHED_USER", data });
export const receive_error = () => ({ type: "RECEIVE_ERROR" });