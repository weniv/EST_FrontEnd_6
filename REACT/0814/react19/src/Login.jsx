import { useActionState, useState } from "react";

export default function Login() {
    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    // const [message, setMessage] = useState("");
    // const [isLoading, setIsLoading] = useState(false);
    const [state, formAction, isPending] = useActionState(
        async (previousState, formData) => {
            const userName = formData.get("userName");
            const password = formData.get("password");

            if (!userName || !password) {
                return { success: false, message: "아이디와 비밀번호 모두 입력해주세요.", user: null };
            }

            try {
                const response = await fetch("http://localhost:3001/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userName: userName,
                        password: password,
                    }),
                });

                const result = await response.json();

                if (response.ok) {
                    return { success: true, message: `로그인 성공! ${result.user.userName}님 환영합니다.`, user: result.user };
                } else {
                    return { success: false, message: result.message || "로그인에 실패했습니다.", user: null };
                }
            } catch (error) {
                return { success: false, message: `서버 연결 실패: ${error.message}`, user: null };
            }
        },
        {
            success: false,
            message: "",
            user: null,
        }
    );

    // const handleSubmit = async (e) => {
    //     e.preventDefault(); // 폼의 기본 제출 동작 방지

    //     if (!userName || !password) {
    //         setMessage("아이디와 비밀번호를 모두 입력해주세요.");
    //         return;
    //     }

    //     setIsLoading(true);
    //     setMessage("");

    //     try {
    //         const response = await fetch("http://localhost:3001/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 userName: userName,
    //                 password: password,
    //             }),
    //         });

    //         const result = await response.json();

    //         if (response.ok) {
    //             setMessage(`로그인 성공! ${result.user.userName}님 환영합니다.`);
    //         } else {
    //             setMessage(result.message || "로그인에 실패했습니다.");
    //         }
    //     } catch (error) {
    //         setMessage(`서버 연결 실패: ${error.message}`);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // const handleReset = () => {
    //     setUserName("");
    //     setPassword("");
    //     setMessage("");
    // };

    return (
        <div>
            <h2>로그인</h2>

            {/* <form onSubmit={handleSubmit}> */}
            <form action={formAction}>
                <div>
                    <label htmlFor="userName">
                        아이디:
                        <input
                            id="userName"
                            type="text"
                            name="userName"
                            // value={useName}
                            // onChange={(e) => setUserName(e.target.value)}
                            placeholder="아이디를 입력하세요"
                            // disabled={isLoading}
                            disabled={isPending}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="password">
                        비밀번호:
                        <input
                            id="password"
                            type="password"
                            name="password"
                            // value = {password}
                            // onChange = {(e) => setPassword(e.target.value)}
                            placeholder="비밀번호를 입력하세요"
                            // disabled={isLoading}
                            disabled={isPending}
                            required
                        />
                    </label>
                </div>

                <div>
                    <button
                        type="submit"
                        //disabled={isLoading}
                        disabled={isPending}
                    >
                        {/* {isLoading ? "로그인 중..." : "로그인"} */}
                        {isPending ? "로그인 중..." : "로그인"}
                    </button>
                    <button
                        type="reset"
                        // onClick={handleReset}
                        //disabled={isLoading}
                        disabled={isPending}
                    >
                        초기화
                    </button>
                </div>
            </form>
            {state.message && (
                <div>
                    <p>{state.message}</p>
                </div>
            )}
        </div>
    );
}
