import React, {Fragment} from "react";
import {connect, useSelector} from "react-redux";
import {setFirstname, setLastname, setEmail} from "../../actions/actions-type";
import {useState, useEffect} from "react";
import "./profile.scss";
import {getLocalStorageData} from "../../utils/localStorage";

const ProfileForm = ({setFirstname, setLastname, setEmail}) => {

    const { firstname, lastname, email } = useSelector(getLocalStorageData);
    const [newFirstname, setNewFirstname] = useState("");
    const [newLastname, setNewLastname] = useState("");
    const [newEmail, setNewEmail] = useState("");
    //Verify input is an email
    const [isValidEmail, setIsValidEmail] = useState(false);
    //Error Handler
    const [inputError, setInputError] = useState("");

    //Moved to localStorage.js
    // useEffect(() => {
    //     // ページ読み込み時にローカルストレージからデフォルトの名前とメールアドレスを取得する
    //     const storedFirstname = localStorage.getItem('firstname');
    //     const storedLastname = localStorage.getItem('lastname');
    //     const storedEmail = localStorage.getItem('email');
    //
    //     // 取得した値が存在する場合はstateにセットする
    //     if (storedFirstname) {
    //         setFirstname(storedFirstname);
    //     }
    //     if (storedLastname) {
    //         setLastname(storedLastname);
    //     }
    //     if (storedEmail) {
    //         setEmail(storedEmail);
    //     }
    // }, []); // 空の配列を渡すことで、初回のみ実行するようにする

    //
    const handleSave = () => {

        // 入力の検証
        if (!isValidEmail) {
            setInputError("Invalid email");
            return;
        }

        setFirstname(newFirstname);
        setLastname(newLastname);
        setEmail(newEmail);
        setInputError("");// エラーメッセージをリセット

        // Save to localStorage データの保存 : localStorage.setItem('key', 'value');
        localStorage.setItem("firstname", newFirstname);
        localStorage.setItem("lastname", newLastname);
        localStorage.setItem("email", newEmail);
    };

    //Check email input
    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setNewEmail(emailValue);

        // email のバリデーション
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailPattern.test(emailValue);
        setIsValidEmail(isValid);
    };

    return (
        <Fragment>
            <section className="profile_form">
                <h3>Hi {firstname}!</h3>
                <p>Customize your profile here</p>

                <div>
                    <label>Your firstname:</label>
                    <input
                        type="text"
                        value={newFirstname}
                        onChange={(e) => setNewFirstname(e.target.value)}
                    />
                </div>

                <div>
                    <label>Your lastname: </label>
                    <input
                        type="text"
                        value={newLastname}
                        onChange={(e) => setNewLastname(e.target.value)}
                    />
                </div>

                <div>
                    <label>Your email: </label>
                    <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => {
                            handleEmailChange(e);
                            setNewEmail(e.target.value);
                        }}
                    />
                    {inputError && <p className="error-message alert alert-danger">{inputError}</p>}
                </div>

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
