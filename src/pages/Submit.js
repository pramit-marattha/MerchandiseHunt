import React from "react";
import useFormValidation from "../Hooks/useFormValidation";
import validateCreateProduct from "../components/Product/validateCreateProduct";
import firebase from "../firebase";
import UserContext from "../contexts/UserContexts";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Submit = () => {
    return (

        <IonPage>
            <SmallHeader title="Submit" />
            <IonContent fullscreen>
                <LargeHeader title="Submit" />
            </IonContent>

        </IonPage>
    );
};

export default Submit;
