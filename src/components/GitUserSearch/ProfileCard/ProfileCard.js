import React from "react";

const profileCard = (props) =>
{
    return (


        <div className="box">
            <figure className="avatar">
                <img id="avatar" alt="avatar" src={props.user.avatar_url} />
            </figure>
            <h3 className="title has-text-black"><span id="name">Name</span> <sup><i id="pronoun"></i></sup></h3>
            <div id="bio"></div>
            <br />
            <table className="table details">
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><span id="name">{props.user.name}</span></td>
                    </tr>
                    <tr>
                        <td>Location:</td>
                        <td><span id="points" className="tag is-info">{props.user.location || "N.A"}</span></td>
                    </tr>
                    <tr>
                        <td>Public Repos:</td>
                        <td><span id="posts" className="tag is-warning">{props.user.public_repos}</span></td>
                    </tr>
                    <tr>
                        <td>Followers:</td>
                        <td><span id="reactions" className="tag is-light">{props.user.followers}</span></td>
                    </tr>
                    <tr>
                        <td>Following:</td>
                        <td><span id="moderator" className="tag is-danger">{props.user.following}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default profileCard;
