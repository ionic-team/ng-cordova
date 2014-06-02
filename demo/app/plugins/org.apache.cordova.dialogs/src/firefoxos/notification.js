/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

function _empty() {}

function modal(message, callback, title, buttonLabels, domObjects) {
    /*
      <form role="dialog">
          <section>
              <h1>Some Title</h1>
              <p>Can't find a proper question for that ...</p>
          </section>
          <menu>
              <button>Cancel</button>
              <button class="danger">Delete</button>
              <button class="recommend">Recommend</button>
              <button>Standard</button>
          </menu>
      </form>
     */
    // create a modal window
    var box = document.createElement('form');
    box.setAttribute('role', 'dialog');
    // prepare and append empty section
    var section = document.createElement('section');
    box.appendChild(section);
    // add title
    var boxtitle = document.createElement('h1');
    boxtitle.appendChild(document.createTextNode(title));
    section.appendChild(boxtitle);
    // add message
    var boxMessage = document.createElement('p');
    boxMessage.appendChild(document.createTextNode(message));
    section.appendChild(boxMessage);
    // inject what's needed
    if (domObjects) {
        section.appendChild(domObjects);
    }
    // add buttons and assign callbackButton on click
    var menu = document.createElement('menu');
    box.appendChild(menu);
    for (var index = 0; index < buttonLabels.length; index++) {
        // TODO: last button listens to the cancel key
        addButton(buttonLabels[index], index, (index === 0));
    }
    document.body.appendChild(box);

    function addButton(label, index, recommended) {
        var button = document.createElement('button');
        button.appendChild(document.createTextNode(label));
        button.labelIndex = index + 1;
        button.addEventListener('click', callbackButton, false);
        if (recommended) {
          // TODO: default one listens to Enter key
          button.classList.add('recommend');
        }
        menu.appendChild(button);
    }

    // call callback and destroy modal
    function callbackButton() {
        var promptInput = document.getElementById('prompt-input');
        var promptValue;
        var response;
        if (promptInput) {
            response = {
                input1: promptInput.value,
                buttonIndex: this.labelIndex
            }
        }
        response = response || this.labelIndex;
        callback(response);
        box.parentNode.removeChild(box);
    }
}

var Notification = {
    vibrate: function(milliseconds) {
        navigator.vibrate(milliseconds);
    },
    alert: function(successCallback, errorCallback, args) {
        var message = args[0];
        var title = args[1];
        var _buttonLabels = [args[2]];
        var _callback = (successCallback || _empty);
        modal(message, _callback, title, _buttonLabels);
    },
    confirm: function(successCallback, errorCallback, args) {
        var message = args[0];
        var title = args[1];
        var buttonLabels = args[2];
        var _callback = (successCallback || _empty);
        modal(message, _callback, title, buttonLabels);
    },
    prompt: function(successCallback, errorCallback, args) {
        var message = args[0];
        var title = args[1];
        var buttonLabels = args[2];
        var defaultText = args[3];
        var _callback = (successCallback || _empty);
        // function _callback(labelIndex) {
        //     console.log(content);
        //     successCallback(labelIndex, content);
        // }
        var inputParagraph = document.createElement('p');
        inputParagraph.classList.add('input');
        var inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.id = 'prompt-input';
        if (defaultText) {
            inputElement.setAttribute('placeholder', defaultText);
        }
        inputParagraph.appendChild(inputElement);
        modal(message, _callback, title, buttonLabels, inputParagraph);
    }
};

module.exports = Notification;
require('cordova/firefoxos/commandProxy').add('Notification', Notification);
