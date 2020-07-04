import React from "react";
import { Button } from "./styles";

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton : React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button 
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''} >
            {isHome && <img src="https://api.adorable.io/avatars/48/9999999999999.png"  alt='Home'/> }
        </Button>
    );
}

export default ServerButton;