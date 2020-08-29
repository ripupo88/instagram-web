import FirebaseAuth from "../components/FirebaseAuth";
import { getUserFromCookie } from "../utils/auth/userCookies";

const Auth = () => {
    if (true) {
        return (
            <div className="contenedor">
                <div>
                    <FirebaseAuth />
                </div>
                <style jsx>{`
                    .contenedor {
                        border: solid 1px;
                        min-height: 90vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                `}</style>
            </div>
        );
    }
    return <h2>Ya estás autenticado</h2>;
};

export default Auth;

//!getUserFromCookie("auth")?.id
