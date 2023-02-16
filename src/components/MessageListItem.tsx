/*import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
  */
import { Message } from '../data/messages';
import './MessageListItem.css';

import KnitSocks from '../imgs/Knit socks.jpg';
import PatagoniaRefugio from '../imgs/Patagonia Refugio pack 28L.jpg';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    /*
    <IonItem routerLink={`/message/${message.itemId}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {message.name}
          <span>
            <IonNote>{message.availability.quantity}</IonNote>
          </span>
        </h2>
        <h3>{message.description}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </IonLabel>
    </IonItem>
    */
    <IonCard>
    <IonCardHeader>
      <IonCardTitle>{message.name}</IonCardTitle>
      <p>{message.img}</p>
      <img alt="Silhouette of mountains" src= {message.img} height='100px'/>
      <IonCardSubtitle><b>Price: </b> {message.price}</IonCardSubtitle>
      <IonCardSubtitle><b>Quantity: </b> {message.availability.quantity}</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>
    
      {message.description}
    </IonCardContent>
  </IonCard>



  );
};

export default MessageListItem;
