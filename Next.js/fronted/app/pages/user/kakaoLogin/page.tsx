export default function KakaoLogin() {
  // const { kakaoLogin } = useAuth();
  const {
    kakaoLogin,
  } = () => {
    console.log("카카오 로그인");
  };

  return (
    <div>
      <button onClick={kakaoLogin}>카카오 로그인</button>
    </div>
  );
}
