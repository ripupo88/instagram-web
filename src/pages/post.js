import firebase from "firebase/app";
import "firebase/storage";
import initFirebase from "../utils/auth/initFirebase";

initFirebase();

const Post = (props) => {
    const handleSubmit = (e) => {
        const file = document.getElementById("file").files[0];
        const fireRef = firebase.storage().ref(file.name);
        fireRef.put(file);
    };
    return (
        <div className="container-lg">
            <img
                className="mt-3 mb-3 imgtemplate"
                src="./hotty.svg"
                alt="template image"
            />
            <div className="fil ml-auto mr-auto input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Upload</span>
                </div>
                <div className="custom-file">
                    <input
                        accept="image/jpeg"
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                    />
                    <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile01"
                    >
                        Choose your best photo
                    </label>
                </div>
            </div>
            <div className="filaa form-group">
                <label htmlFor="exampleFormControlTextarea1">
                    <b>Caption</b>
                </label>
                <textarea
                    placeholder="Call to action and mention your account"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
            </div>
            <div className="filaa form-group">
                <input
                    placeholder="Tag your account"
                    type="text"
                    className="mt-3 mb-5 center form-control-file"
                    id="exampleFormControlTextarea1"
                    onChange={handleSubmit}
                />
            </div>
            <div className="waytouse mb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Way of use</h2>
                        <ol>
                            <li>
                                <p>
                                    Choose your best picture (No porn). It's
                                    important you choose your best picture, no
                                    matter if it is old, a good way to know if
                                    it is a good pic is picking a pic with lots
                                    of like in your profile, that is a pic that
                                    works well. Remember, our main goal is to
                                    make your profile to grow up
                                </p>
                            </li>
                            <li>
                                <p>
                                    Caption is very important too, you should
                                    call to action and try to get horny the
                                    readers. Always have to mention your account
                                    so they can click and go to follow you
                                </p>
                            </li>
                            <li>
                                <p>
                                    Tag your account, this is the tag into the
                                    posted image.
                                </p>
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-6">
                        <img className="w-100" src="./assets/img/grow.jpg" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .waytouse {
                    margin-left: auto;
                    margin-right: auto;
                    text-align: justify;
                }
                .waytouse p {
                    color: #555555b1;
                }
                textarea {
                    resize: none;
                }
                .imgtemplate {
                    max-width: 300px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    border: solid 1px;
                    object-fit: cover;
                }
                .fil {
                    max-width: 400px;
                }
                .filaa {
                    max-width: 400px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .container textarea,
                input {
                    max-width: 400px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>
        </div>
    );
};

export default Post;
