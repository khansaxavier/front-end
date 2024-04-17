import Button from "./componen/Menu";

function IndukMenu() {
    function handleonclick(){
        alert("Sudah Di Klik!");
    }
    return <Button onClick={handleonclick}/>
}

export default IndukMenu;