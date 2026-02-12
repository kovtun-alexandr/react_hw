import { MainMenu } from "./MainMenu";
import { UserInfo } from "./UserInfo";

export function Header() {
    return (
        <header
            className="header"
        >
            <div className="container flex items-center justify-between">
                <MainMenu />
                <UserInfo />
            </div>
        </header>
    );
}

