import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "./Profile.css";

const Profile = () => {
  var authData = getAuth();

  if (authData.currentUser) {
    var displayName = authData.currentUser.displayName;
    var photoURL = authData.currentUser.photoURL;

    // phoneNumber can possibily be null
    var phoneNumber = authData.currentUser.phoneNumber;
    var email = authData.currentUser.email;

    // save uid for later use
    var uid = authData.currentUser.uid;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 mx-auto">
            <div className="my-4">
              <ul className="nav nav-tabs mb-4" id="myTab" role="tablist"></ul>
              <form>
                <div className="row mt-5 align-items-center">
                  <div className="col-md-3 text-center mb-5">
                    <div className="avatar avatar-xl">
                      <img
                        src={photoURL}
                        alt="..."
                        className="avatar-img rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="row align-items-center">
                      <div className="col-md-7">
                        <h4 className="mb-1">{displayName}</h4>
                        <p className="small mb-3">
                          <span className="badge badge-dark">Evanston</span>
                        </p>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-7">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris blandit nisl ullamcorper, rutrum metus
                          in, congue lectus. In hac habitasse platea dictumst.
                          Cras urna quam, malesuada vitae risus at, pretium
                          blandit sapien.
                        </p>
                      </div>
                      <div className="col">
                        <p className="small mb-0 text-muted">
                          {"put address here"}
                        </p>
                        <p className="small mb-0 text-muted">{phoneNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="firstname">Username</label>
                    <input
                      type="text"
                      id="firstname"
                      className="form-control"
                      placeholder={displayName}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder={email}
                  />
                </div>
                <div className="form-group">
                  <label for="inputAddress5">Major</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress5"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label for="inputAddress5">Favorite Dining Hall</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress5"
                    placeholder=""
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCompany5">Dorm</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCompany5"
                      placeholder=""
                    />
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="inputPassword4">Old Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword5"
                      />
                    </div>
                    <div className="form-group">
                      <label for="inputPassword5">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword5"
                      />
                    </div>
                    <div className="form-group">
                      <label for="inputPassword6">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword6"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="mb-2">Password requirements</p>
                    <p className="small text-muted mb-2">
                      To create a new password, you have to meet all of the
                      following requirements:
                    </p>
                    <ul className="small text-muted pl-4 mb-0">
                      <li>Minimum 8 character</li>
                      <li>At least one special character</li>
                      <li>At least one number</li>
                      <li>Can’t be the same as a previous password</li>
                    </ul>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Change
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
