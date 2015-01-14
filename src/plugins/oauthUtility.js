angular.module("ngCordova.plugins.oauthUtility", [])

  .factory('$cordovaOauthUtility', ['$q', function ($q) {

    return {

      /*
       * Sign an Oauth 1.0 request
       *
       * @param    string method
       * @param    string endPoint
       * @param    object headerParameters
       * @param    object bodyParameters
       * @param    string secretKey
       * @return   object
       */
       createSignature: function(method, endPoint, headerParameters, bodyParameters, secretKey, tokenSecret) {
           if(typeof jsSHA !== "undefined") {
               var headerAndBodyParameters = angular.copy(headerParameters);
               var bodyParameterKeys = Object.keys(bodyParameters);
               for(var i = 0; i < bodyParameterKeys.length; i++) {
                   headerAndBodyParameters[bodyParameterKeys[i]] = encodeURIComponent(bodyParameters[bodyParameterKeys[i]]);
               }
               var signatureBaseString = method + "&" + encodeURIComponent(endPoint) + "&";
               var headerAndBodyParameterKeys = (Object.keys(headerAndBodyParameters)).sort();
               for(i = 0; i < headerAndBodyParameterKeys.length; i++) {
                   if(i == headerAndBodyParameterKeys.length - 1) {
                       signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]]);
                   } else {
                       signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]] + "&");
                   }
               }
               var oauthSignatureObject = new jsSHA(signatureBaseString, "TEXT");

               var encodedTokenSecret = '';
               if (tokenSecret) {
                   encodedTokenSecret = encodeURIComponent(tokenSecret);
               }

               headerParameters.oauth_signature = encodeURIComponent(oauthSignatureObject.getHMAC(encodeURIComponent(secretKey) + "&" + encodedTokenSecret, "TEXT", "SHA-1", "B64"));
               var headerParameterKeys = Object.keys(headerParameters);
               var authorizationHeader = 'OAuth ';
               for(i = 0; i < headerParameterKeys.length; i++) {
                   if(i == headerParameterKeys.length - 1) {
                       authorizationHeader += headerParameterKeys[i] + '="' + headerParameters[headerParameterKeys[i]] + '"';
                   } else {
                       authorizationHeader += headerParameterKeys[i] + '="' + headerParameters[headerParameterKeys[i]] + '",';
                   }
               }
               return { signature_base_string: signatureBaseString, authorization_header: authorizationHeader, signature: headerParameters.oauth_signature };
           } else {
               return "Missing jsSHA JavaScript library";
           }
       },

    /*
    * Create Random String Nonce
    *
    * @param    integer length
    * @return   string
    */
    createNonce: function(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    };

  }]);
