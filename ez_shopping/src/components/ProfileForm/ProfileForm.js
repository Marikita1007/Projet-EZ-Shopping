import React, {Fragment} from "react";
import {connect} from "react-redux";
import {setFirstname, setLastname, setEmail} from "../../actions/actions-type";
import {useState, useEffect} from "react";
import "./profile.scss";

const ProfileForm = ({firstname, lastname, email, setFirstname, setLastname, setEmail}) => {
    const [newFirstname, setNewFirstname] = useState("");
    const [newLastname, setNewLastname] = useState("");
    const [newEmail, setNewEmail] = useState("");

    localStorage.setItem('firstname', 'Alan');
    localStorage.setItem('lastname', 'Rickman');
    localStorage.setItem('email', 'alan-fakestore@3wa');


    useEffect(() => {
        // ページ読み込み時にローカルストレージからデフォルトの名前とメールアドレスを取得する
        const storedFirstname = localStorage.getItem('firstname');
        const storedLastname = localStorage.getItem('lastname');
        const storedEmail = localStorage.getItem('email');

        // 取得した値が存在する場合はstateにセットする
        if (storedFirstname) {
            setFirstname(storedFirstname);
        }
        if (storedLastname) {
            setLastname(storedLastname);
        }
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []); // 空の配列を渡すことで、初回のみ実行するようにする


    const handleSave = () => {
        setFirstname(newFirstname);
        setLastname(newLastname);
        setEmail(newEmail);

        // Save to localStorage データの保存 : localStorage.setItem('key', 'value');
        localStorage.setItem("firstname", newFirstname);
        localStorage.setItem("lastname", newLastname);
        localStorage.setItem("email", newEmail);
    };

    return (
        <Fragment>
            <section className="profile_form">
                <h3>Hi {firstname}!</h3>
                <p>Customize your profile here</p>

                <label>First name: </label>
                <input
                    type="text"
                    value={newFirstname}
                    onChange={(e) => setNewFirstname(e.target.value)}
                />

                <label>Last name: </label>
                <input
                    type="text"
                    value={newLastname}
                    onChange={(e) => setNewLastname(e.target.value)}
                />

                <label>email: </label>
                <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />

                <button type="button" className="btn btn-warning" onClick={handleSave}>
                    Save
                </button>
            </section>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    firstname: state.profile.firstname,
    lastname: state.profile.lastname,
    email: state.profile.email,
});

const mapDispatchToProps = {
    setFirstname,
    setLastname,
    setEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
