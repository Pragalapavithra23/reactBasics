import {ReactNode, useState} from "react";
import Button from "./Button";

interface Props {
    children: ReactNode;
}

const Alert = ({children}: Props) => {
    let [alertVisible, setAlertVisible] = useState(false);
    return (
        <>
            {alertVisible &&
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    {children}
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={
                      () => setAlertVisible(false)
                  }></button>
                </div>}
            <Button onClick={() => setAlertVisible(true)} color={'secondary'}>My Dynamic button</Button></>
    )
}

export default Alert;
