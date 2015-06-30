System.register("ng-cordova/utility", [], function (_export) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            angular.module("oauth.utils", []).factory("$cordovaOauthUtility", ["$q", function ($q) {

                return {

                    /*
                     * Check to see if the mandatory InAppBrowser plugin is installed
                     *
                     * @param
                     * @return   boolean
                     */
                    isInAppBrowserInstalled: function isInAppBrowserInstalled(cordovaMetadata) {
                        var inAppBrowserNames = ["cordova-plugin-inappbrowser", "org.apache.cordova.inappbrowser"];

                        return inAppBrowserNames.some(function (name) {
                            return cordovaMetadata.hasOwnProperty(name);
                        });
                    },

                    /*
                     * Sign an Oauth 1.0 request
                     *
                     * @param    string method
                     * @param    string endPoint
                     * @param    object headerParameters
                     * @param    object bodyParameters
                     * @param    string secretKey
                     * @param    string tokenSecret (optional)
                     * @return   object
                     */
                    createSignature: function createSignature(method, endPoint, headerParameters, bodyParameters, secretKey, tokenSecret) {
                        if (typeof jsSHA !== "undefined") {
                            var headerAndBodyParameters = angular.copy(headerParameters);
                            var bodyParameterKeys = Object.keys(bodyParameters);
                            for (var i = 0; i < bodyParameterKeys.length; i++) {
                                headerAndBodyParameters[bodyParameterKeys[i]] = encodeURIComponent(bodyParameters[bodyParameterKeys[i]]);
                            }
                            var signatureBaseString = method + "&" + encodeURIComponent(endPoint) + "&";
                            var headerAndBodyParameterKeys = Object.keys(headerAndBodyParameters).sort();
                            for (i = 0; i < headerAndBodyParameterKeys.length; i++) {
                                if (i == headerAndBodyParameterKeys.length - 1) {
                                    signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]]);
                                } else {
                                    signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]] + "&");
                                }
                            }
                            var oauthSignatureObject = new jsSHA(signatureBaseString, "TEXT");

                            var encodedTokenSecret = "";
                            if (tokenSecret) {
                                encodedTokenSecret = encodeURIComponent(tokenSecret);
                            }

                            headerParameters.oauth_signature = encodeURIComponent(oauthSignatureObject.getHMAC(encodeURIComponent(secretKey) + "&" + encodedTokenSecret, "TEXT", "SHA-1", "B64"));
                            var headerParameterKeys = Object.keys(headerParameters);
                            var authorizationHeader = "OAuth ";
                            for (i = 0; i < headerParameterKeys.length; i++) {
                                if (i == headerParameterKeys.length - 1) {
                                    authorizationHeader += headerParameterKeys[i] + "=\"" + headerParameters[headerParameterKeys[i]] + "\"";
                                } else {
                                    authorizationHeader += headerParameterKeys[i] + "=\"" + headerParameters[headerParameterKeys[i]] + "\",";
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
                    createNonce: function createNonce(length) {
                        var text = "";
                        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                        for (var i = 0; i < length; i++) {
                            text += possible.charAt(Math.floor(Math.random() * possible.length));
                        }
                        return text;
                    },

                    generateUrlParameters: function generateUrlParameters(parameters) {
                        var sortedKeys = Object.keys(parameters);
                        sortedKeys.sort();

                        var params = "";
                        var amp = "";

                        for (var i = 0; i < sortedKeys.length; i++) {
                            params += amp + sortedKeys[i] + "=" + parameters[sortedKeys[i]];
                            amp = "&";
                        }

                        return params;
                    },

                    parseResponseParameters: function parseResponseParameters(response) {
                        if (response.split) {
                            var parameters = response.split("&");
                            var parameterMap = {};
                            for (var i = 0; i < parameters.length; i++) {
                                parameterMap[parameters[i].split("=")[0]] = parameters[i].split("=")[1];
                            }
                            return parameterMap;
                        } else {
                            return {};
                        }
                    },

                    generateOauthParametersInstance: function generateOauthParametersInstance(consumerKey) {
                        var nonceObj = new jsSHA(Math.round(new Date().getTime() / 1000.0), "TEXT");
                        var oauthObject = {
                            oauth_consumer_key: consumerKey,
                            oauth_nonce: nonceObj.getHash("SHA-1", "HEX"),
                            oauth_signature_method: "HMAC-SHA1",
                            oauth_timestamp: Math.round(new Date().getTime() / 1000.0),
                            oauth_version: "1.0"
                        };
                        return oauthObject;
                    }

                };
            }]);
        }
    };
});