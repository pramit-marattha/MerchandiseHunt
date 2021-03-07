import React, { useState, useContext, useEffect } from "react";
import useFormValidation from "../Hooks/useFormValidation";
import validateCreateProduct from "../components/Product/validateCreateProduct";
import firebase from "../firebase";
import UserContext from "../contexts/UserContexts";
import { IonPage, IonContent, IonItem, IonInput, IonRow } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";
import { toast } from "../utils/toast";

const INITIAL_STATE = {
  title: "",
  description: "",
  url: "",
};

const Submit = ({ history }) => {
  const { user } = useContext(UserContext);
  const [submitting, setSubmitting] = useState(false);
  const { handleSubmit, handleChange, values } = useFormValidation(
    INITIAL_STATE,
    validateCreateProduct,
    handleCreate
  );

  async function handleCreate() {
    try {
      if (!user) {
        history.push("/login");
        return;
      }
      setSubmitting(true);
      const { url, description, title } = values;
      const id = firebase.db.collection("products").doc().id;
      const newProduct = {
        title,
        url,
        description,
        postedBy: {
          id: user.uid,
          name: user.displayName,
        },
        voteCount: 1,
        comments: [],
        votes: [
          {
            votedBy: { id: user.uid, name: user.displayName },
          },
        ],
        created: Date.now(),
      };
      await firebase.db.collection("products").doc(id).set(newProduct);
      history.push("/");
    } catch (e) {
      console.error(e);
      toast(e.message);
      setSubmitting(false);
    }
  }

  return (
    <>
      <IonPage>
        <SmallHeader title="Submit" />
        <IonContent fullscreen>
          <LargeHeader title="Submit" />
          <IonItem lines="full">
            <IonLabel position="floating">Title</IonLabel>
            <IonInput
              name="title"
              value={values.title}
              type="text"
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>

          <IonItem lines="full">
            <IonLabel position="floating">Description</IonLabel>
            <IonInput
              name="description"
              value={values.description}
              type="text"
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>

          <IonItem lines="full">
            <IonLabel position="floating">URL</IonLabel>
            <IonInput
              name="url"
              value={values.url}
              type="url"
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>

          <IonRow>
            <IonCol>
              <IonButton
                type="submit"
                color="primary"
                expand="block"
                disabled={submitting}
                onClick={handleSubmit}
              >
                Submit
              </IonButton>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Submit;
