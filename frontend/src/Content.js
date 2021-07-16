import Title from "./Title";
import Options from "./Options";

import "./styles/Content.scss";

function Content(){
    return (
        <div className="container">
            <Title/>
            <Options/>
        </div>
    );  
}

export default Content;