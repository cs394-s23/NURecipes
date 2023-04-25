import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { getAuth } from "firebase/auth";
import "./Profile.css";
import { useDbData } from "../utilities/firebase";
import { pushUsertoDb } from "../utilities/firebase";

const Profile = () => {
  var authData = getAuth();
  if (authData.currentUser != null) {
    const [data, error] = useDbData("/Users/" + authData.currentUser.uid);
    // const [major, setMajor] = useState("");

    let currUid = authData.currentUser.uid;
    console.log(authData.currentUser.uid);
    console.log(data);

    const onFormSubmit = (e) => {
      const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries());
      console.log(formDataObj);

      console.log(data);

      if (
        !formDataObj.username ||
        !formDataObj.dhall ||
        !formDataObj.email ||
        !formDataObj.year ||
        !formDataObj.major
      ) {
        alert("Please fill out all parts of the form");
        e.preventDefault();
        return;
      }

      var test = {
        username: formDataObj.username,
        dhall: formDataObj.dhall,
        email: formDataObj.email,
        year: formDataObj.year,
        major: formDataObj.major,
        profpic: authData.currentUser.photoURL,
      };

      pushUsertoDb(test, "Users/", currUid);
    };

    var displayName = authData.currentUser.displayName;
    var photoURL = authData.currentUser.photoURL;

    // phoneNumber can possibily be null
    var phoneNumber = authData.currentUser.phoneNumber;
    var email = authData.currentUser.email;

    if (data != null) {
      return (
        <div className="profile-container" onSubmit={onFormSubmit}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 mx-auto">
              <div className="my-4">
                <ul
                  className="nav nav-tabs mb-4"
                  id="myTab"
                  role="tablist"
                ></ul>
                <form>
                  <div className="row mt-5 align-items-center">
                    <div className="col-md-3 text-center mb-5">
                      <div className="avatar avatar-xl">
                        <img
                          id="profpic"
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Username</label>
                      <input
                        name="username"
                        type="text"
                        id="firstname"
                        className="form-control text-muted"
                        value={data.username}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control text-muted"
                      value={data.email}
                      readOnly
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Year</label>
                      <input
                        name="year"
                        type="text"
                        className="form-control"
                        id="inputCompany5"
                        placeholder={data.year}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Major</label>
                    <input
                      name="major"
                      type="text"
                      className="form-control"
                      id="inputAddress5"
                      placeholder={data.major}
                    />
                  </div>
                  <div className="form-group">
                    <label>Favorite Dining Hall</label>
                    <input
                      name="dhall"
                      type="text"
                      className="form-control"
                      id="inputAddress5"
                      placeholder={data.dhall}
                    />
                  </div>

                  <hr className="my-4" />
                  <button type="submit" className="btn btn-primary">
                    Save Change
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="profile-container" onSubmit={onFormSubmit}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 mx-auto">
              <div className="my-4">
                <ul
                  className="nav nav-tabs mb-4"
                  id="myTab"
                  role="tablist"
                ></ul>
                <form>
                  <div className="row mt-5 align-items-center">
                    <div className="col-md-3 text-center mb-5">
                      <div className="avatar avatar-xl">
                        <img
                          id="profpic"
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Username</label>
                      <input
                        name="username"
                        type="text"
                        id="firstname"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control text-muted"
                      id="inputEmail4"
                      value={email}
                      readOnly
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Year</label>
                      <input
                        name="year"
                        type="text"
                        className="form-control"
                        id="inputCompany5"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Major</label>
                    <input
                      name="major"
                      type="text"
                      className="form-control"
                      id="inputAddress5"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Favorite Dining Hall</label>
                    <input
                      name="dhall"
                      type="text"
                      className="form-control"
                      id="inputAddress5"
                      placeholder=""
                    />
                  </div>

                  <hr className="my-4" />
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
  }
};

export default Profile;
