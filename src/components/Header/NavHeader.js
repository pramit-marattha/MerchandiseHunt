import React from "react";
import {
  IonBackButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";

const NavHeader = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButton slot="start">
          <IonBackButton defaultHref="/" />
        </IonButton>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default NavHeader;
