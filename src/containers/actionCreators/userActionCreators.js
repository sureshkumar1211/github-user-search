import { fetch_post, receive_post, receive_error } from "../actions/userActions";

export const getUserInfo = (username) =>
{
    const query = username.replace(/\s/g, "");
    return (dispatch, getstate) =>
    {
        dispatch(fetch_post());
        fetch(`https://api.github.com/users/${query}`).then(data => data.json())
            .then(data =>
            {
                if (data.message === "Not Found")
                {
                    throw new Error("No such user found!!");
                } else dispatch(receive_post(data));
            })
            .catch(err => dispatch(receive_error()));
    }
};
