/* Created by Nic Raboy
 * http://www.nraboy.com
 *
 * DESCRIPTION: Use Oauth sign in for various web services.
 *
 * REQUIRES:  Apache Cordova 3.5+, Apache InAppBrowser Plugin, jsSHA (Twitter, Magento only)
 *
 * SUPPORTS:
 *    Dropbox
 *    Digital Ocean
 *    Google
 *    GitHub
 *    Facebook
 *    LinkedIn
 *    Instagram
 *    Box
 *    Reddit
 *    Twitter
 *    Meetup
 *    Foursquare
 *    Salesforce
 *    Strava
 *    Magento
 *    vkontakte
 *    ADFS
 *    Imgur
 *    Spotify
 *    Uber
 *    Windows Live Connect
 *    Yammer
 *    Venmo
 *    Stripe
 *    Rally
 */

angular.module("ngCordova.plugins.oauth", ["ngCordova.plugins.oauthUtility"])

  .factory('$cordovaOauth', ['$q', '$http', '$cordovaOauthUtility', function ($q, $http, $cordovaOauthUtility) {

      return {

          /*
           * Sign into the ADFS service (ADFS 3.0 onwards)
           *
           * @param    string clientId (client registered in ADFS, with redirect_uri configured to: http://localhost/callback)
           * @param	 string adfsServer (url of the ADFS Server)
           * @param	 string relyingPartyId (url of the Relying Party (resource relying on ADFS for authentication) configured in ADFS)
           * @return   promise
           */
          adfs: function(clientId, adfsServer, relyingPartyId) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var browserRef = window.open(adfsServer + '/adfs/oauth2/authorize?response_type=code&client_id=' + clientId +'&redirect_uri=http://localhost/callback&resource=' + relyingPartyId, '_blank', 'location=no');

                      browserRef.addEventListener("loadstart", function(event) {
                          if((event.url).indexOf('http://localhost/callback') === 0) {
                              var requestToken = (event.url).split("code=")[1];
                              $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                              $http({method: "post", url: adfsServer + "/adfs/oauth2/token", data: "client_id=" + clientId + "&code=" + requestToken + "&redirect_uri=http://localhost/callback&grant_type=authorization_code"  })
                                  .success(function(data) {
                                      deferred.resolve(data);
                                  })
                                  .error(function(data, status) {
                                      deferred.reject("Problem authenticating");
                                  })
                                  .finally(function() {
                                      setTimeout(function() {
                                          browserRef.close();
                                      }, 10);
                                  });
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Dropbox service
           *
           * @param    string appKey
           * @param    object options
           * @return   promise
           */
          dropbox: function(appKey, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open("https://www.dropbox.com/1/oauth2/authorize?client_id=" + appKey + "&redirect_uri=" + redirect_uri + "&response_type=token", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                      browserRef.addEventListener("loadstart", function(event) {
                          if((event.url).indexOf(redirect_uri) === 0) {
                              browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for(var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  deferred.resolve({ access_token: parameterMap.access_token, token_type: parameterMap.token_type, uid: parameterMap.uid });
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Digital Ocean service
           *
           * @param    string clientId
           * @param    string clientSecret
           * @return   promise
           */
          digitalOcean: function(clientId, clientSecret) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var browserRef = window.open("https://cloud.digitalocean.com/v1/oauth/authorize?client_id=" + clientId + "&redirect_uri=http://localhost/callback&response_type=code&scope=read%20write", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                      browserRef.addEventListener("loadstart", function(event) {
                          if((event.url).indexOf("http://localhost/callback") === 0) {
                              var requestToken = (event.url).split("code=")[1];
                              $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                              $http({method: "post", url: "https://cloud.digitalocean.com/v1/oauth/token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost/callback" + "&grant_type=authorization_code" + "&code=" + requestToken })
                                  .success(function(data) {
                                      deferred.resolve(data);
                                  })
                                  .error(function(data, status) {
                                      deferred.reject("Problem authenticating");
                                  })
                                  .finally(function() {
                                      setTimeout(function() {
                                          browserRef.close();
                                      }, 10);
                                  });
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Google service
           *
           * @param    string clientId
           * @param    array appScope
           * @param    object options
           * @return   promise
           */
          google: function(clientId, appScope, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://accounts.google.com/o/oauth2/auth?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&scope=' + appScope.join(" ") + '&approval_prompt=force&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener("loadstart", function(event) {
                          if((event.url).indexOf(redirect_uri) === 0) {
                                 browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for(var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  deferred.resolve({ access_token: parameterMap.access_token, token_type: parameterMap.token_type, expires_in: parameterMap.expires_in });
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the GitHub service
           *
           * @param    string clientId
           * @param    string clientSecret
           * @param    array appScope
           * @return   promise
           */
          github: function(clientId, clientSecret, appScope) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var browserRef = window.open('https://github.com/login/oauth/authorize?client_id=' + clientId + '&redirect_uri=http://localhost/callback&scope=' + appScope.join(","), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf("http://localhost/callback") === 0) {
                              requestToken = (event.url).split("code=")[1];
                              $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                              $http.defaults.headers.post.accept = 'application/json';
                              $http({method: "post", url: "https://github.com/login/oauth/access_token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost/callback" + "&code=" + requestToken })
                                  .success(function(data) {
                                      deferred.resolve(data);
                                  })
                                  .error(function(data, status) {
                                      deferred.reject("Problem authenticating");
                                  })
                                  .finally(function() {
                                      setTimeout(function() {
                                          browserRef.close();
                                      }, 10);
                                  });
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Facebook service
           *
           * @param    string clientId
           * @param    array appScope
           * @param    object options
           * @return   promise
           */
          facebook: function(clientId, appScope, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://www.facebook.com/v2.0/dialog/oauth?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token&scope=' + appScope.join(","), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf(redirect_uri) === 0) {
                              browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for(var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  deferred.resolve({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in });
                              } else {
                                if ((event.url).indexOf("error_code=100") !== 0)
                                  deferred.reject("Facebook returned error_code=100: Invalid permissions");
                                else
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the LinkedIn service
           *
           * @param    string clientId
           * @param    string clientSecret
           * @param    array appScope
           * @param    string state
           * @return   promise
           */
          linkedin: function(clientId, clientSecret, appScope, state) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var browserRef = window.open('https://www.linkedin.com/uas/oauth2/authorization?client_id=' + clientId + '&redirect_uri=http://localhost/callback&scope=' + appScope.join(" ") + '&response_type=code&state=' + state, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf("http://localhost/callback") === 0) {
                              requestToken = (event.url).split("code=")[1];
                              $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                              $http({method: "post", url: "https://www.linkedin.com/uas/oauth2/accessToken", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost/callback" + "&grant_type=authorization_code" + "&code=" + requestToken })
                                  .success(function(data) {
                                      deferred.resolve(data);
                                  })
                                  .error(function(data, status) {
                                      deferred.reject("Problem authenticating");
                                  })
                                  .finally(function() {
                                      setTimeout(function() {
                                          browserRef.close();
                                      }, 10);
                                  });
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Instagram service
           *
           * @param    string clientId
           * @param    array appScope
           * @param    object options
           * @return   promise
           */
          instagram: function(clientId, appScope, options) {
              var deferred = $q.defer();

              var split_tokens = {
                  'code':'?',
                  'token':'#'
              };

              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      var response_type = "token";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                          if(options.hasOwnProperty("response_type")) {
                              response_type = options.response_type;
                          }
                      }

                      var browserRef = window.open('https://api.instagram.com/oauth/authorize/?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&scope=' + appScope.join(" ") + '&response_type='+response_type, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf(redirect_uri) === 0) {
                              browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split(split_tokens[response_type])[1];
                              var parameterMap = $cordovaOauthUtility.parseResponseParameters(callbackResponse);
                              if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  deferred.resolve({ access_token: parameterMap.access_token });
                              } else if(parameterMap.code !== undefined && parameterMap.code !== null) {
                                  deferred.resolve({ code: parameterMap.code });
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Box service
           *
           * @param    string clientId
           * @param    string clientSecret
           * @param    string appState
           * @return   promise
           */
          box: function(clientId, clientSecret, appState) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var browserRef = window.open('https://app.box.com/api/oauth2/authorize/?client_id=' + clientId + '&redirect_uri=http://localhost/callback&state=' + appState + '&response_type=code', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf("http://localhost/callback") === 0) {
                              requestToken = (event.url).split("code=")[1];
                              $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                              $http({method: "post", url: "https://app.box.com/api/oauth2/token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost/callback" + "&grant_type=authorization_code" + "&code=" + requestToken })
                                  .success(function(data) {
                                      deferred.resolve(data);
                                  })
                                  .error(function(data, status) {
                                      deferred.reject("Problem authenticating");
                                  })
                                  .finally(function() {
                                      setTimeout(function() {
                                          browserRef.close();
                                      }, 10);
                                  });
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Reddit service
           *
           * @param    string clientId
           * @param    string clientSecret
           * @param    array appScope
           * @return   promise
           */
          reddit: function(clientId, clientSecret, appScope) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var browserRef = window.open('https://ssl.reddit.com/api/v1/authorize?client_id=' + clientId + '&redirect_uri=http://localhost/callback&duration=permanent&state=ngcordovaoauth&scope=' + appScope.join(",") + '&response_type=code', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf("http://localhost/callback") === 0) {
                              requestToken = (event.url).split("code=")[1];
                              $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                              $http.defaults.headers.post.Authorization = 'Basic ' + btoa(clientId + ":" + clientSecret);
                              $http({method: "post", url: "https://ssl.reddit.com/api/v1/access_token", data: "redirect_uri=http://localhost/callback" + "&grant_type=authorization_code" + "&code=" + requestToken })
                                  .success(function(data) {
                                      deferred.resolve(data);
                                  })
                                  .error(function(data, status) {
                                      deferred.reject("Problem authenticating");
                                  })
                                  .finally(function() {
                                      setTimeout(function() {
                                          browserRef.close();
                                      }, 10);
                                  });
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Twitter service
           * Note that this service requires jsSHA for generating HMAC-SHA1 Oauth 1.0 signatures
           *
           * @param    string clientId
           * @param    string clientSecret
           * @return   promise
           */
          twitter: function(clientId, clientSecret, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }

                      if(typeof jsSHA !== "undefined") {
                          var oauthObject = {
                              oauth_consumer_key: clientId,
                              oauth_nonce: $cordovaOauthUtility.createNonce(10),
                              oauth_signature_method: "HMAC-SHA1",
                              oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
                              oauth_version: "1.0"
                          };
                          var signatureObj = $cordovaOauthUtility.createSignature("POST", "https://api.twitter.com/oauth/request_token", oauthObject,  { oauth_callback: redirect_uri }, clientSecret);
                          $http({
                              method: "post",
                              url: "https://api.twitter.com/oauth/request_token",
                              headers: {
                                  "Authorization": signatureObj.authorization_header,
                                  "Content-Type": "application/x-www-form-urlencoded"
                              },
                              data: "oauth_callback=" + encodeURIComponent(redirect_uri)
                          })
                              .success(function(requestTokenResult) {
                                  var requestTokenParameters = (requestTokenResult).split("&");
                                  var parameterMap = {};
                                  for(var i = 0; i < requestTokenParameters.length; i++) {
                                      parameterMap[requestTokenParameters[i].split("=")[0]] = requestTokenParameters[i].split("=")[1];
                                  }
                                  if(parameterMap.hasOwnProperty("oauth_token") === false) {
                                      deferred.reject("Oauth request token was not received");
                                  }
                                  var browserRef = window.open('https://api.twitter.com/oauth/authenticate?oauth_token=' + parameterMap.oauth_token, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                                  browserRef.addEventListener('loadstart', function(event) {
                                      if((event.url).indexOf(redirect_uri) === 0) {
                                          var callbackResponse = (event.url).split("?")[1];
                                          var responseParameters = (callbackResponse).split("&");
                                          var parameterMap = {};
                                          for(var i = 0; i < responseParameters.length; i++) {
                                              parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                                          }
                                          if(parameterMap.hasOwnProperty("oauth_verifier") === false) {
                                              deferred.reject("Browser authentication failed to complete.  No oauth_verifier was returned");
                                          }
                                          delete oauthObject.oauth_signature;
                                          oauthObject.oauth_token = parameterMap.oauth_token;
                                          var signatureObj = $cordovaOauthUtility.createSignature("POST", "https://api.twitter.com/oauth/access_token", oauthObject,  { oauth_verifier: parameterMap.oauth_verifier }, clientSecret);
                                          $http({
                                              method: "post",
                                              url: "https://api.twitter.com/oauth/access_token",
                                              headers: {
                                                  "Authorization": signatureObj.authorization_header
                                              },
                                              params: {
                                                  "oauth_verifier": parameterMap.oauth_verifier
                                              }
                                          })
                                              .success(function(result) {
                                                  var accessTokenParameters = result.split("&");
                                                  var parameterMap = {};
                                                  for(var i = 0; i < accessTokenParameters.length; i++) {
                                                      parameterMap[accessTokenParameters[i].split("=")[0]] = accessTokenParameters[i].split("=")[1];
                                                  }
                                                  if(parameterMap.hasOwnProperty("oauth_token_secret") === false) {
                                                      deferred.reject("Oauth access token was not received");
                                                  }
                                                  deferred.resolve(parameterMap);
                                              })
                                              .error(function(error) {
                                                  deferred.reject(error);
                                              })
                                              .finally(function() {
                                                  setTimeout(function() {
                                                      browserRef.close();
                                                  }, 10);
                                              });
                                      }
                                  });
                                  browserRef.addEventListener('exit', function(event) {
                                      deferred.reject("The sign in flow was canceled");
                                  });
                              })
                              .error(function(error) {
                                  deferred.reject(error);
                              });
                      } else {
                          deferred.reject("Missing jsSHA JavaScript library");
                      }
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
          * Sign into the Meetup service
          *
          * @param    string clientId
          * @param    object options
          * @return   promise
          */
          meetup: function(clientId, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://secure.meetup.com/oauth2/authorize/?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf(redirect_uri) === 0) {
                              browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = {};
                              for(var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  deferred.resolve(parameterMap);
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Salesforce service
           *
           * Suggestion: use salesforce oauth with forcetk.js(as SDK)
           *
           * @param    string loginUrl (such as: https://login.salesforce.com ; please notice community login)
           * @param    string clientId (copy from connection app info)
           * @param    string redirectUri (callback url in connection app info)
           * @return   promise
           */
          salesforce: function (loginUrl, clientId) {
              var redirectUri = 'http://localhost/callback';
              var getAuthorizeUrl = function (loginUrl, clientId, redirectUri) {
                  return loginUrl+'services/oauth2/authorize?display=touch'+
                      '&response_type=token&client_id='+escape(clientId)+
                      '&redirect_uri='+escape(redirectUri);
              };
              var startWith = function(string, str) {
                  return (string.substr(0, str.length) === str);
              };
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var browserRef = window.open(getAuthorizeUrl(loginUrl, clientId, redirectUri), "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                      browserRef.addEventListener("loadstart", function(event) {
                          if(startWith(event.url, redirectUri)) {
                              var oauthResponse = {};

                              var fragment = (event.url).split('#')[1];

                              if (fragment) {
                                  var nvps = fragment.split('&');
                                  for (var nvp in nvps) {
                                        var parts = nvps[nvp].split('=');
                                        oauthResponse[parts[0]] = unescape(parts[1]);
                                  }
                              }

                              if (typeof oauthResponse === 'undefined' ||
                                  typeof oauthResponse.access_token === 'undefined') {
                                  deferred.reject("Problem authenticating");
                              } else {
                                  deferred.resolve(oauthResponse);
                              }
                              setTimeout(function() {
                                  browserRef.close();
                              }, 10);
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
          * Sign into the Strava service
          *
          * @param    string clientId
          * @param    string clientSecret
          * @param    array appScope
          * @return   promise
          */
          strava: function(clientId, clientSecret, appScope) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var browserRef = window.open('https://www.strava.com/oauth/authorize?client_id=' + clientId + '&redirect_uri=http://localhost/callback&scope=' + appScope.join(",") + '&response_type=code&approval_prompt=force', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf("http://localhost/callback") === 0) {
                              requestToken = (event.url).split("code=")[1];
                              $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                              $http({method: "post", url: "https://www.strava.com/oauth/token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&code=" + requestToken })
                              .success(function(data) {
                                  deferred.resolve(data);
                              })
                              .error(function(data, status) {
                                  deferred.reject("Problem authenticating");
                              })
                              .finally(function() {
                                  setTimeout(function() {
                                      browserRef.close();
                                  }, 10);
                              });
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Withings service
           * Note that this service requires jsSHA for generating HMAC-SHA1 Oauth 1.0 signatures
           *
           * @param    string clientId
           * @param    string clientSecret
           * @return   promise
           */
          withings: function(clientId, clientSecret) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      if(typeof jsSHA !== "undefined") {

                          // Step 1 : get a oAuth "request token"
                          var oauthObject = $cordovaOauthUtility.generateOauthParametersInstance(clientId);
                          oauthObject.oauth_callback = 'http://localhost/callback';

                          var requestTokenUrlBase = "https://oauth.withings.com/account/request_token";
                          var signatureObj = $cordovaOauthUtility.createSignature("GET", requestTokenUrlBase, {}, oauthObject, clientSecret);
                          oauthObject.oauth_signature = signatureObj.signature;

                          var requestTokenParameters = $cordovaOauthUtility.generateUrlParameters(oauthObject);

                          $http({method: "get", url: requestTokenUrlBase + "?" + requestTokenParameters })
                              .success(function(requestTokenResult) {

                                  // Step 2 : End-user authorization
                                  var parameterMap = $cordovaOauthUtility.parseResponseParameters(requestTokenResult);
                                  if(parameterMap.hasOwnProperty("oauth_token") === false) {
                                      deferred.reject("Oauth request token was not received");
                                  }
                                  var oauthObject = $cordovaOauthUtility.generateOauthParametersInstance(clientId);
                                  oauthObject.oauth_token = parameterMap.oauth_token;

                                  // used in step 3
                                  var oauthTokenSecret = parameterMap.oauth_token_secret;

                                  var authorizeUrlBase = "https://oauth.withings.com/account/authorize";
                                  var signatureObj = $cordovaOauthUtility.createSignature("GET", authorizeUrlBase, {}, oauthObject, clientSecret);
                                  oauthObject.oauth_signature = signatureObj.signature;

                                  var authorizeParameters = $cordovaOauthUtility.generateUrlParameters(oauthObject);
                                  var browserRef = window.open(authorizeUrlBase + '?' + authorizeParameters, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');

                                  // STEP 3: User Data Access token
                                  browserRef.addEventListener('loadstart', function(event) {
                                      if((event.url).indexOf("http://localhost/callback") === 0) {
                                          var callbackResponse = (event.url).split("?")[1];
                                          parameterMap = $cordovaOauthUtility.parseResponseParameters(callbackResponse);
                                          if(parameterMap.hasOwnProperty("oauth_verifier") === false) {
                                              deferred.reject("Browser authentication failed to complete.  No oauth_verifier was returned");
                                          }

                                          var oauthObject = $cordovaOauthUtility.generateOauthParametersInstance(clientId);
                                          oauthObject.oauth_token = parameterMap.oauth_token;

                                          var accessTokenUrlBase = "https://oauth.withings.com/account/access_token";
                                          var signatureObj = $cordovaOauthUtility.createSignature("GET", accessTokenUrlBase, {}, oauthObject, clientSecret, oauthTokenSecret);
                                          oauthObject.oauth_signature = signatureObj.signature;

                                          var accessTokenParameters = $cordovaOauthUtility.generateUrlParameters(oauthObject);

                                          $http({method: "get", url: accessTokenUrlBase + '?' + accessTokenParameters})
                                              .success(function(result) {
                                                  var parameterMap = $cordovaOauthUtility.parseResponseParameters(result);
                                                  if(parameterMap.hasOwnProperty("oauth_token_secret") === false) {
                                                      deferred.reject("Oauth access token was not received");
                                                  }
                                                  deferred.resolve(parameterMap);
                                              })
                                              .error(function(error) {
                                                  deferred.reject(error);
                                              })
                                              .finally(function() {
                                                  setTimeout(function() {
                                                      browserRef.close();
                                                  }, 10);
                                              });
                                      }
                                  });
                                  browserRef.addEventListener('exit', function(event) {
                                      deferred.reject("The sign in flow was canceled");
                                  });
                              })
                              .error(function(error) {
                                  deferred.reject(error);
                              });
                      } else {
                          deferred.reject("Missing jsSHA JavaScript library");
                      }
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
          * Sign into the Foursquare service
          *
          * @param    string clientId
          * @param    object options
          * @return   promise
          */
          foursquare: function(clientId, options) {
              var deferred = $q.defer();
              if (window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if (cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://foursquare.com/oauth2/authenticate?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function (event) {
                          if ((event.url).indexOf(redirect_uri) === 0) {
                              browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for (var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if (parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  var promiseResponse = {
                                      access_token: parameterMap.access_token,
                                      expires_in: parameterMap.expires_in
                                  };
                                  deferred.resolve(promiseResponse);
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
          * Sign into the Magento service
          * Note that this service requires jsSHA for generating HMAC-SHA1 Oauth 1.0 signatures
          *
          * @param    string baseUrl
          * @param    string clientId
          * @param    string clientSecret
          * @return   promise
          */
          magento: function(baseUrl, clientId, clientSecret) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      if(typeof jsSHA !== "undefined") {
                          var oauthObject = {
                              oauth_callback: "http://localhost/callback",
                              oauth_consumer_key: clientId,
                              oauth_nonce: $cordovaOauthUtility.createNonce(5),
                              oauth_signature_method: "HMAC-SHA1",
                              oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
                              oauth_version: "1.0"
                          };
                          var signatureObj = $cordovaOauthUtility.createSignature("POST", baseUrl + "/oauth/initiate", oauthObject,  { oauth_callback: "http://localhost/callback" }, clientSecret);
                          $http.defaults.headers.post.Authorization = signatureObj.authorization_header;
                          $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                          $http({method: "post", url: baseUrl + "/oauth/initiate", data: "oauth_callback=http://localhost/callback" })
                          .success(function(requestTokenResult) {
                              var requestTokenParameters = (requestTokenResult).split("&");
                              var parameterMap = {};
                              for(var i = 0; i < requestTokenParameters.length; i++) {
                                  parameterMap[requestTokenParameters[i].split("=")[0]] = requestTokenParameters[i].split("=")[1];
                              }
                              if(parameterMap.hasOwnProperty("oauth_token") === false) {
                                  deferred.reject("Oauth request token was not received");
                              }
                              var tokenSecret = parameterMap.oauth_token_secret;
                              var browserRef = window.open(baseUrl + '/oauth/authorize?oauth_token=' + parameterMap.oauth_token, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                              browserRef.addEventListener('loadstart', function(event) {
                                  if((event.url).indexOf("http://localhost/callback") === 0) {
                                      var callbackResponse = (event.url).split("?")[1];
                                      var responseParameters = (callbackResponse).split("&");
                                      var parameterMap = {};
                                      for(var i = 0; i < responseParameters.length; i++) {
                                          parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                                      }
                                      if(parameterMap.hasOwnProperty("oauth_verifier") === false) {
                                          deferred.reject("Browser authentication failed to complete.  No oauth_verifier was returned");
                                      }
                                      delete oauthObject.oauth_signature;
                                      delete oauthObject.oauth_callback;
                                      oauthObject.oauth_token = parameterMap.oauth_token;
                                      oauthObject.oauth_nonce = $cordovaOauthUtility.createNonce(5);
                                      oauthObject.oauth_verifier = parameterMap.oauth_verifier;
                                      var signatureObj = $cordovaOauthUtility.createSignature("POST", baseUrl + "/oauth/token", oauthObject,  {}, clientSecret, tokenSecret);
                                      $http.defaults.headers.post.Authorization = signatureObj.authorization_header;
                                      $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                                      $http({method: "post", url: baseUrl + "/oauth/token" })
                                      .success(function(result) {
                                          var accessTokenParameters = result.split("&");
                                          var parameterMap = {};
                                          for(var i = 0; i < accessTokenParameters.length; i++) {
                                              parameterMap[accessTokenParameters[i].split("=")[0]] = accessTokenParameters[i].split("=")[1];
                                          }
                                          if(parameterMap.hasOwnProperty("oauth_token_secret") === false) {
                                              deferred.reject("Oauth access token was not received");
                                          }
                                          deferred.resolve(parameterMap);
                                      })
                                      .error(function(error) {
                                          deferred.reject(error);
                                      })
                                      .finally(function() {
                                          setTimeout(function() {
                                              browserRef.close();
                                          }, 10);
                                      });
                                  }
                              });
                              browserRef.addEventListener('exit', function(event) {
                                  deferred.reject("The sign in flow was canceled");
                              });
                          })
                          .error(function(error) {
                              deferred.reject(error);
                          });
                      } else {
                          deferred.reject("Missing jsSHA JavaScript library");
                      }
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Vkontakte service
           *
           * @param    string clientId
           * @param    array appScope (for example: "friends,wall,photos,messages")
           * @return   promise
           */
          vkontakte: function(clientId, appScope) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var browserRef = window.open('https://oauth.vk.com/authorize?client_id=' + clientId + '&redirect_uri=http://oauth.vk.com/blank.html&response_type=token&scope=' + appScope.join(",") + '&display=touch&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          var tmp = (event.url).split("#");
                          if (tmp[0] == 'https://oauth.vk.com/blank.html' || tmp[0] == 'http://oauth.vk.com/blank.html') {
                              browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for(var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  var output = { access_token: parameterMap.access_token, expires_in: parameterMap.expires_in };
                                  if(parameterMap.email !== undefined && parameterMap.email !== null){
                                      output.email = parameterMap.email;
                                  }
                                  deferred.resolve(output);
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
          * Sign into the Odnoklassniki service
          *
          * @param    string clientId
          * @param    array appScope (for example: "VALUABLE_ACCESS ,GROUP_CONTENT,VIDEO_CONTENT")
          * @return   promise
          */
          odnoklassniki: function (clientId, appScope)
          {
              var deferred = $q.defer();
              if (window.cordova)
              {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if (cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true)
                  {
                      var browserRef = window.open('http://www.odnoklassniki.ru/oauth/authorize?client_id=' + clientId + '&scope=' + appScope.join(",") + '&response_type=token&redirect_uri=http://localhost/callback' + '&layout=m', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function (event)
                      {
                          if ((event.url).indexOf("http://localhost/callback") === 0)
                          {
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for (var i = 0; i < responseParameters.length; i++)
                              {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if (parameterMap.access_token !== undefined && parameterMap.access_token !== null)
                              {
                                  deferred.resolve({ access_token: parameterMap.access_token, session_secret_key: parameterMap.session_secret_key });
                              } else
                              {
                                  deferred.reject("Problem authenticating");
                              }
                              setTimeout(function ()
                              {
                                  browserRef.close();
                              }, 10);
                          }
                      });
                      browserRef.addEventListener('exit', function (event)
                      {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else
                  {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else
              {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },


          /*
           * Sign into the Imgur service
           *
           * @param    string clientId
           * @param    object options
           * @return   promise
           */
          imgur: function(clientId, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://api.imgur.com/oauth2/authorize?client_id=' + clientId + '&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf(redirect_uri) === 0) {
                              browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for(var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  deferred.resolve({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in, account_username: parameterMap.account_username });
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Spotify service
           *
           * @param    string clientId
           * @param    object options
           * @return   promise
           */
          spotify: function(clientId, appScope, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://accounts.spotify.com/authorize?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token&scope=' + appScope.join(" "), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf(redirect_uri) === 0) {
                              browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for(var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  deferred.resolve({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in, account_username: parameterMap.account_username });
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Uber service
           *
           * @param    string clientId
           * @param    appScope array
           * @param    object options
           * @return   promise
           */
          uber: function(clientId, appScope, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://login.uber.com/oauth/authorize?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token&scope=' + appScope.join(" "), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf(redirect_uri) === 0) {
                              browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for(var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  deferred.resolve({ access_token: parameterMap.access_token, token_type: parameterMap.token_type, expires_in: parameterMap.expires_in, scope: parameterMap.scope });
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Windows Live Connect service
           *
           * @param    string clientId
           * @param    array appScope
           * @param    object options
           * @return   promise
          */
          windowsLive: function (clientId, appScope, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "https://login.live.com/oauth20_desktop.srf";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://login.live.com/oauth20_authorize.srf?client_id=' + clientId + "&scope=" + appScope.join(",") + '&response_type=token&display=touch' + '&redirect_uri=' + redirect_uri, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function (event) {
                          if((event.url).indexOf(redirect_uri) === 0) {
                              browserRef.removeEventListener("exit", function (event) { });
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for (var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if (parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  deferred.resolve({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in });
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function (event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Yammer service
           *
           * @param    string clientId
           * @param    object options
           * @return   promise
           */
          yammer: function(clientId, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://www.yammer.com/dialog/oauth?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf(redirect_uri) === 0) {
                              browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for(var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  deferred.resolve({ access_token: parameterMap.access_token });
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Venmo service
           *
           * @param    string clientId
           * @param    array appScope
           * @param    object options
           * @return   promise
           */
          venmo: function(clientId, appScope, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://api.venmo.com/v1/oauth/authorize?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token&scope=' + appScope.join(" "), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf(redirect_uri) === 0) {
                              browserRef.removeEventListener("exit",function(event){});
                              browserRef.close();
                              var callbackResponse = (event.url).split("#")[1];
                              var responseParameters = (callbackResponse).split("&");
                              var parameterMap = [];
                              for(var i = 0; i < responseParameters.length; i++) {
                                  parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                              }
                              if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
                                  deferred.resolve({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in });
                              } else {
                                  deferred.reject("Problem authenticating");
                              }
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Stripe service
           *
           * @param    string clientId
           * @param    string clientSecret
           * @param    string appScope
           * @param    object options
           * @return   promise
           */
          stripe: function(clientId, clientSecret, appScope, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://connect.stripe.com/oauth/authorize?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&scope=' + appScope + '&response_type=code', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf("http://localhost/callback") === 0) {
                              requestToken = (event.url).split("code=")[1];
                              $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                              $http({method: "post", url: "https://connect.stripe.com/oauth/token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=" + redirect_uri + "&grant_type=authorization_code" + "&code=" + requestToken })
                                  .success(function(data) {
                                      deferred.resolve(data);
                                  })
                                  .error(function(data, status) {
                                      deferred.reject("Problem authenticating");
                                  })
                                  .finally(function() {
                                      setTimeout(function() {
                                          browserRef.close();
                                      }, 10);
                                  });
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          },

          /*
           * Sign into the Rally service
           *
           * @param    string clientId
           * @param    string clientSecret
           * @param    string appScope
           * @param    object options
           * @return   promise
           */
          rally: function(clientId, clientSecret, appScope, options) {
              var deferred = $q.defer();
              if(window.cordova) {
                  var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                  if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true || cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                      var redirect_uri = "http://localhost/callback";
                      if(options !== undefined) {
                          if(options.hasOwnProperty("redirect_uri")) {
                              redirect_uri = options.redirect_uri;
                          }
                      }
                      var browserRef = window.open('https://rally1.rallydev.com/login/oauth2/auth?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&scope=' + appScope + '&response_type=code', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                      browserRef.addEventListener('loadstart', function(event) {
                          if((event.url).indexOf("http://localhost/callback") === 0) {
                              requestToken = (event.url).split("code=")[1];
                              $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                              $http({method: "post", url: "https://rally1.rallydev.com/login/oauth2/auth", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=" + redirect_uri + "&grant_type=authorization_code" + "&code=" + requestToken })
                                  .success(function(data) {
                                      deferred.resolve(data);
                                  })
                                  .error(function(data, status) {
                                      deferred.reject("Problem authenticating");
                                  })
                                  .finally(function() {
                                      setTimeout(function() {
                                          browserRef.close();
                                      }, 10);
                                  });
                          }
                      });
                      browserRef.addEventListener('exit', function(event) {
                          deferred.reject("The sign in flow was canceled");
                      });
                  } else {
                      deferred.reject("Could not find InAppBrowser plugin");
                  }
              } else {
                  deferred.reject("Cannot authenticate via a web browser");
              }
              return deferred.promise;
          }

      };


  }]);
