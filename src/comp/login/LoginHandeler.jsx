import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LoginHandeler = (props) => {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");

//인가코드 백으로 보내는 코드
    useEffect(() => {
        const kakaoLogin = async () => {
            await axios({
                method: "GET",
                url: `${process.env.REACT_APP_REDIㅁRECT_URL}/?code=${code}`,
                headers: {
                    "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
                },
            }).then((res) => { //백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
                console.log(res);
                //계속 쓸 정보들( ex: 이름) 등은 localStorage에 저장해두자
                localStorage.setItem("name", res.data.account.kakaoName);
                //로그인이 성공하면 이동할 페이지
                navigate("/home");
            });
        };
        kakaoLogin();
    }, [props.history]);

    return (
        <div className="LoginHandeler">
            <div className="notice">
                <p>로그인 중입니다.</p>
                <p>잠시만 기다려주세요.</p>
                <div className="spinner"></div>
            </div>
        </div>
    );
};

export default LoginHandeler;