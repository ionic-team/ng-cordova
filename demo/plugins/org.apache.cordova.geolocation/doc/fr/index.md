<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->

# org.apache.cordova.geolocation

Ce plugin fournit des informations sur l'emplacement de l'appareil, tels que la latitude et la longitude. Les sources habituelles d'information incluent le Système de Positionnement Global (GPS) et la position déduite de signaux des réseaux tels que l'adresse IP, RFID, les adresses MAC WiFi et Bluetooth et les IDs cellulaires GSM/CDMA. Il n'y a cependant aucune garantie que cette API renvoie la position réelle de l'appareil.

Cette API est basée sur la [Spécification de l'API Geolocation du W3C][1] et s'exécute uniquement sur les appareils qui n'en proposent pas déjà une implémentation.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Avertissement**: collecte et utilisation des données de géolocalisation soulève des questions importantes de la vie privée. La politique de confidentialité de votre application devrait traiter de la manière dont l'application utilise les données de géolocalisation, si elle les partage avec d'autres parties ou non et définir le niveau de précision de celles-ci (par exemple grossier, fin, restreint au code postal, etc.). Données de géolocalisation sont généralement considéré comme sensibles car elle peut révéler la localisation de l'utilisateur et, si stocké, l'histoire de leurs voyages. Par conséquent, en plus de la politique de confidentialité de l'application, vous devez envisager fortement fournissant un avis juste-à-temps, avant que l'application accède aux données de géolocalisation (si le système d'exploitation de périphérique n'est pas faire déjà). Cette notice devrait contenir les informations susmentionnées, ainsi que permettre de recueillir l'autorisation de l'utilisateur (par exemple, en offrant les possibilités **OK** et **Non merci**). Pour plus d'informations, veuillez vous référer à la section "Guide du respect de la vie privée".

## Installation

    cordova plugin add org.apache.cordova.geolocation
    

## Plates-formes prises en charge

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   Firefox OS
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Méthodes

*   navigator.geolocation.getCurrentPosition
*   navigator.geolocation.watchPosition
*   navigator.geolocation.clearWatch

## Objets (lecture seule)

*   Position
*   PositionError
*   Coordonnées

## navigator.geolocation.getCurrentPosition

Retourne la position actuelle de l'appareil à la `geolocationSuccess` rappel avec un `Position` objet comme paramètre. Si une erreur se produit, le `geolocationError` rappel est passé un `PositionError` objet.

    navigator.geolocation.getCurrentPosition (geolocationSuccess, [geolocationError], [geolocationOptions]) ;
    

### Paramètres

*   **geolocationSuccess** : la fonction callback à laquelle est transmise la position actuelle.

*   **geolocationError** : *(facultative)* la fonction callback s'exécutant si une erreur survient.

*   **geolocationOptions** : *(facultatives)* des préférences de géolocalisation.

### Exemple

    onSuccess rappel / / cette méthode accepte un objet de Position, qui contient le / / coordonnées GPS actuel / / var onSuccess = function(position) {alert ('Latitude: ' + position.coords.latitude + « \n » + ' Longitude: ' + position.coords.longitude + « \n » + ' Altitude: ' + position.coords.altitude + « \n » + ' précision: ' + position.coords.accuracy + « \n » + ' Altitude précision: ' + position.coords.altitudeAccuracy + « \n » + ' rubrique: ' + position.coords.heading + « \n » + ' vitesse: ' + position.coords.speed + « \n » + ' Timestamp: ' + position.timestamp + « \n »);} ;
    
    onError rappel reçoit un objet PositionError / / function onError(error) {alert ('code: "+ error.code + « \n » + ' message: ' + error.message + « \n »);}
    
    navigator.geolocation.getCurrentPosition (onSuccess, onError) ;
    

## navigator.geolocation.watchPosition

Retourne la position actuelle de l'appareil lorsqu'un changement de position est détecté. Lorsque l'appareil récupère un nouvel emplacement, le `geolocationSuccess` rappel s'exécute avec un `Position` objet comme paramètre. Si une erreur se produit, le `geolocationError` rappel s'exécute avec un `PositionError` objet comme paramètre.

    var watchId = navigator.geolocation.watchPosition (geolocationSuccess, [geolocationError], [geolocationOptions]) ;
    

### Paramètres

*   **geolocationSuccess**: la fonction de rappel qui est passée de la position actuelle.

*   **geolocationError** : (facultative) la fonction callback s'exécutant lorsqu'une erreur survient.

*   **geolocationOptions** : (facultatives) options de personnalisation de la géolocalisation.

### Retours

*   **Chaîne**: retourne un id de montre qui fait référence à l'intervalle de position montre. L'id de la montre doit être utilisé avec `navigator.geolocation.clearWatch` d'arrêter de regarder pour les changements de position.

### Exemple

    onSuccess rappel / / cette méthode accepte un objet « Position », qui contient / / coordonnées de GPS le courant / / function onSuccess(position) {var element = document.getElementById('geolocation') ;
        element.innerHTML = ' Latitude: "+ position.coords.latitude + ' < br / >' + ' Longitude:" + position.coords.longitude + ' < br / >' + ' < hr / >' + element.innerHTML ;
    } / / onError rappel reçoit un objet PositionError / / function onError(error) {alert ('code: ' + error.code + « \n » + "message: ' + error.message + « \n »);}
    
    Options : lever une erreur si aucune mise à jour n'est reçu toutes les 30 secondes.
    var watchID = navigator.geolocation.watchPosition (onSuccess, onError, {timeout : 30000}) ;
    

## geolocationOptions

Paramètres optionnels pour personnaliser la récupération de la géolocalisation`Position`.

    {maximumAge : 3000, délai d'attente : 5000, enableHighAccuracy : true} ;
    

### Options

*   **enableHighAccuracy** : indique que l'application nécessite les meilleurs résultats possibles. Par défaut, l'appareil tente de récupérer une `Position` à l'aide de méthodes basées sur le réseau. Définir cette propriété à `true` demande à Cordova d'utiliser des méthodes plus précises, telles que la localisation par satellite. *(Boolean)*

*   **délai d'attente**: la longueur maximale de temps (en millisecondes) qui peut passer de l'appel à `navigator.geolocation.getCurrentPosition` ou `geolocation.watchPosition` jusqu'à ce que le correspondant `geolocationSuccess` rappel s'exécute. Si `geolocationSuccess` n'est pas appelée dans ce délai, le code d'erreur `PositionError.TIMEOUT` est transmis à la fonction callback `geolocationError`. (Notez que, dans le cas de `geolocation.watchPosition`, la fonction callback `geolocationError` pourrait être appelée à un intervalle régulier de `timeout` millisecondes !) *(Number)*

*   **maximumAge** : accepter une position mise en cache dont l'âge ne dépasse pas le délai spécifié en millisecondes. *(Number)*

### Quirks Android

Émulateurs Android 2.x ne pas retournent un résultat de géolocalisation, à moins que le `enableHighAccuracy` option est définie sur`true`.

## navigator.geolocation.clearWatch

Arrêter de regarder pour les modifications à l'emplacement de l'appareil référencé par le `watchID` paramètre.

    navigator.geolocation.clearWatch(watchID) ;
    

### Paramètres

*   **watchID** : l'identifiant de l'intervalle `watchPosition` à effacer. (String)

### Exemple

    Options : suivi des modifications dans la position et utilise le plus / / exacte position méthode d'acquisition disponible.
    var watchID = navigator.geolocation.watchPosition (onSuccess, onError, {enableHighAccuracy : true}) ;
    
    .. plus sur...
    
    navigator.geolocation.clearWatch(watchID) ;
    

## Position

Contient `Position` coordonnées et timestamp, créé par l'API de géolocalisation.

### Propriétés

*   **coords** : un ensemble de coordonnées géographiques. *(Coordinates)*

*   **timestamp** : horodatage de la création de `coords`. *(Date)*

## Coordonnées

A `Coordinates` objet est attaché à un `Position` objet qui n'existe pas de fonctions de rappel dans les requêtes pour la position actuelle. Il contient un ensemble de propriétés qui décrivent les coordonnées géographiques d'une position.

### Propriétés

*   **latitude** : latitude en degrés décimaux. *(Number)*

*   **longitude** : longitude en degrés décimaux. *(Number)*

*   **altitude** : hauteur de la position en mètres au-dessus de l'ellipsoïde. *(Number)*

*   **accuracy** : niveau de précision des valeurs de latitude et longitude, en mètres. *(Number)*

*   **altitudeAccuracy** : niveau de précision de la valeur d'altitude, en mètres. *(Number)*

*   **heading** : direction du trajet, indiquée en degrés comptés dans le sens horaire par rapport au vrai Nord. *(Number)*

*   **speed** : vitesse au sol actuelle de l'appareil, indiquée en mètres par seconde. *(Number)*

### Amazon Fire OS Quirks

**altitudeAccuracy**: ne pas pris en charge par les appareils Android, retour`null`.

### Quirks Android

**altitudeAccuracy** : n'est pas prise en charge par les appareils Android, renvoie alors `null`.

## PositionError

Le `PositionError` objet est passé à la `geolocationError` fonction de rappel lorsqu'une erreur se produit avec navigator.geolocation.

### Propriétés

*   **code**: l'un des codes d'erreur prédéfinis énumérés ci-dessous.

*   **message** : un message d'erreur détaillant l'erreur rencontrée.

### Constantes

*   `PositionError.PERMISSION_DENIED` 
    *   Retourné lorsque les utilisateurs ne permettent pas l'application extraire des informations de position. Cela dépend de la plate-forme.
*   `PositionError.POSITION_UNAVAILABLE` 
    *   Retourné lorsque le périphérique n'est pas en mesure de récupérer une position. En général, cela signifie que l'appareil n'est pas connecté à un réseau ou ne peut pas obtenir un correctif de satellite.
*   `PositionError.TIMEOUT` 
    *   Retourné lorsque le périphérique n'est pas en mesure de récupérer une position dans le délai précisé par le `timeout` inclus dans `geolocationOptions` . Lorsqu'il est utilisé avec `navigator.geolocation.watchPosition` , cette erreur pourrait être transmise à plusieurs reprises à la `geolocationError` rappel chaque `timeout` millisecondes.