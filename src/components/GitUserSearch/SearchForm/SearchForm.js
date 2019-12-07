import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../../containers/actionCreators/userActionCreators";

class SearchForm extends Component
{
    constructor(props)
    {
        super(props);
        this.getUsername = createRef();
    }
    handleSubmit = (e) =>
    {
        e.preventDefault();
        const username = this.getUsername.current.value;
        this.props.dispatch(getUserInfo(username));
        this.getUsername.current.value = '';
        this.getUsername.current.focus();
    }
    componentDidMount()
    {
        this.getUsername.current.focus();
    }
    render()
    {

        return (
            <div className="field is-horizontal userid-label-field">
                <div className="field-label is-normal">
                    <label className="label">User-Name:</label>
                </div>
                <div className="field-body userid-field">
                    <div className="field">
                        <p className="control">
                            <input id="user_id" className="input" ref={this.getUsername} type="text" required />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <input className="button is-link" type="submit" onClick={this.handleSubmit} value="Submit" />
                        </p>
                    </div>
                </div>
            </div>
        );
    };
};
const mapStateToProps = (state) => ({ data: state.gitSearch });

export default connect(mapStateToProps)(SearchForm);
