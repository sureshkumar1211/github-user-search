import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "./SearchForm/SearchForm";
import ProfileCard from "./ProfileCard/ProfileCard";
import Loader from "../Layouts/Loader/Loader";
import "./style.css";
class GitSearch extends Component
{
    render()
    {
        return (
            <div className="container">
                <section className="hero is-success is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="column is-4 is-offset-4">
                                <h3 className="title has-text-black"><a href="https://webwide.io" rel="noopener noreferrer" target="_blank">Github</a> Profile Viewer</h3>
                                <hr className="login-hr" />
                                <SearchForm isLoading={this.props.data.isFetching} />
                                {this.props.data.isFetching && <Loader />}
                                {this.props.data.isError ? (
                                    <h3 className="error">No such User exists.</h3>
                                ) : null}
                                {Object.keys(this.props.data.userData).length > 0 ? (
                                    <ProfileCard user={this.props.data.userData} />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({ data: state.gitSearch });
export default connect(mapStateToProps)(GitSearch);

