/* Created by Nic Raboy
 * http://www.nraboy.com
 *
 * DESCRIPTION: Use Oauth sign in for various web services.
 *
 * REQUIRES:  Apache Cordova 3.5+, Apache InAppBrowser Plugin, jsSHA (Twitter only)
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
 */

angular.module("ngCordova.plugins.oauth", ["ngCordova.plugins.oauthUtility"])

  .factory('$cordovaOauth', ['$q', '$http', '$cordovaOauthUtility', function ($q, $http, $cordovaOauthUtility) {

    return {

      /*
       * Sign into the Dropbox service
       *
       * @param    string appKey
       * @return   promise
       */
      dropbox: function (appKey) {
        var deferred = $q.defer();
        if (window.cordova) {
          var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
          if(cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
              var browserRef = window.open("https://www.dropbox.com/1/oauth2/authorize?client_id=" + appKey + "&redirect_uri=http://localhost/callback" + "&response_type=token", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
              browserRef.addEventListener("loadstart", function (event) {
                if ((event.url).indexOf("http://localhost/callback") === 0) {
                  var callbackResponse = (event.url).split("#")[1];
                  var responseParameters = (callbackResponse).split("&");
                  var parameterMap = [];
                  for (var i = 0; i < responseParameters.length; i++) {
                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                  }
                  if (parameterMap["access_token"] !== undefined && parameterMap["access_token"] !== null) {
                    var promiseResponse = {
                      access_token: parameterMap["access_token"],
                      token_type: parameterMap["token_type"],
                      uid: parameterMap["uid"]
                    };
                    deferred.resolve(promiseResponse);
                  } else {
                    deferred.reject("Problem authenticating");
                  }
                  browserRef.close();
                }
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
      digitalOcean: function (clientId, clientSecret) {
        var deferred = $q.defer();
        if (window.cordova) {
          var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
          if(cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
              var browserRef = window.open("https://cloud.digitalocean.com/v1/oauth/authorize?client_id=" + clientId + "&redirect_uri=http://localhost/callback&response_type=code&scope=read%20write", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
              browserRef.addEventListener("loadstart", function (event) {
                if ((event.url).indexOf("http://localhost/callback") === 0) {
                  var requestToken = (event.url).split("code=")[1];
                  $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                  $http({
                    method: "post",
                    url: "https://cloud.digitalocean.com/v1/oauth/token",
                    data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost/callback" + "&grant_type=authorization_code" + "&code=" + requestToken
                  })
                    .success(function (data) {
                      deferred.resolve(data);
                    })
                    .error(function (data, status) {
                      deferred.reject("Problem authenticating");
                    });
                  browserRef.close();
                }
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
       * @return   promise
       */
      google: function (clientId, appScope) {
        var deferred = $q.defer();
        if (window.cordova) {
          var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
          if(cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
              var browserRef = window.open('https://accounts.google.com/o/oauth2/auth?client_id=' + clientId + '&redirect_uri=http://localhost/callback&scope=' + appScope.join(" ") + '&approval_prompt=force&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
              browserRef.addEventListener("loadstart", function (event) {
                if ((event.url).indexOf("http://localhost/callback") === 0) {
                  var callbackResponse = (event.url).split("#")[1];
                  var responseParameters = (callbackResponse).split("&");
                  var parameterMap = [];
                  for (var i = 0; i < responseParameters.length; i++) {
                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                  }
                  if (parameterMap["access_token"] !== undefined && parameterMap["access_token"] !== null) {
                    var promiseResponse = {
                      access_token: parameterMap["access_token"],
                      token_type: parameterMap["token_type"],
                      uid: parameterMap["uid"]
                    };
                    deferred.resolve({access_token: parameterMap["access_token"], token_type: parameterMap["token_type"], expires_in: parameterMap["expires_in"]});
                  } else {
                    deferred.reject("Problem authenticating");
                  }
                  browserRef.close();
                }
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
      github: function (clientId, clientSecret, appScope) {
        var deferred = $q.defer();
        if (window.cordova) {
          var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
          if(cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
              var browserRef = window.open('https://github.com/login/oauth/authorize?client_id=' + clientId + '&redirect_uri=http://localhost/callback&scope=' + appScope.join(","), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
              browserRef.addEventListener('loadstart', function (event) {
                if ((event.url).indexOf("http://localhost/callback") === 0) {
                  var requestToken = (event.url).split("code=")[1];
                  $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                  $http.defaults.headers.post['Accept'] = 'application/json';
                  $http({method: "post", url: "https://github.com/login/oauth/access_token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost/callback" + "&code=" + requestToken})
                    .success(function (data) {
                      deferred.resolve(data);
                    })
                    .error(function (data, status) {
                      deferred.reject("Problem authenticating");
                    });
                  browserRef.close();
                }
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
       * @return   promise
       */
      facebook: function (clientId, appScope) {
        var deferred = $q.defer();
        if (window.cordova) {
          var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
          if(cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
              var browserRef = window.open('https://www.facebook.com/dialog/oauth?client_id=' + clientId + '&redirect_uri=http://localhost/callback&response_type=token&scope=' + appScope.join(","), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
              browserRef.addEventListener('loadstart', function (event) {
                if ((event.url).indexOf("http://localhost/callback") === 0) {
                  var callbackResponse = (event.url).split("#")[1];
                  var responseParameters = (callbackResponse).split("&");
                  var parameterMap = [];
                  for (var i = 0; i < responseParameters.length; i++) {
                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                  }
                  if (parameterMap["access_token"] !== undefined && parameterMap["access_token"] !== null) {
                    var promiseResponse = {
                      access_token: parameterMap["access_token"],
                      expires_in: parameterMap["expires_in"]
                    };
                    deferred.resolve(promiseResponse);
                  } else {
                    deferred.reject("Problem authenticating");
                  }
                  browserRef.close();
                }
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
      linkedin: function (clientId, clientSecret, appScope, state) {
        var deferred = $q.defer();
        if (window.cordova) {
          var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
          if(cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
              var browserRef = window.open('https://www.linkedin.com/uas/oauth2/authorization?client_id=' + clientId + '&redirect_uri=http://localhost/callback&scope=' + appScope.join(" ") + '&response_type=code&state=' + state, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
              browserRef.addEventListener('loadstart', function (event) {
                if ((event.url).indexOf("http://localhost/callback") === 0) {
                  var requestToken = (event.url).split("code=")[1];
                  $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                  $http({
                    method: "post",
                    url: "https://www.linkedin.com/uas/oauth2/accessToken",
                    data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost/callback" + "&grant_type=authorization_code" + "&code=" + requestToken
                  })
                    .success(function (data) {
                      deferred.resolve(data);
                    })
                    .error(function (data, status) {
                      deferred.reject("Problem authenticating");
                    });
                  browserRef.close();
                }
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
       * @return   promise
       */
      instagram: function (clientId, appScope) {
        var deferred = $q.defer();
        if (window.cordova) {
          var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
          if(cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
              var browserRef = window.open('https://api.instagram.com/oauth/authorize/?client_id=' + clientId + '&redirect_uri=http://localhost/callback&scope=' + appScope.join(" ") + '&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
              browserRef.addEventListener('loadstart', function (event) {
                if ((event.url).indexOf("http://localhost/callback") === 0) {
                  var callbackResponse = (event.url).split("#")[1];
                  var responseParameters = (callbackResponse).split("&");
                  var parameterMap = [];
                  for (var i = 0; i < responseParameters.length; i++) {
                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                  }
                  if (parameterMap["access_token"] !== undefined && parameterMap["access_token"] !== null) {
                    var promiseResponse = {
                      access_token: parameterMap["access_token"]
                    };
                    deferred.resolve(promiseResponse);
                  } else {
                    deferred.reject("Problem authenticating");
                  }
                  browserRef.close();
                }
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
      box: function (clientId, clientSecret, appState) {
        var deferred = $q.defer();
        if (window.cordova) {
          var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
          if(cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
              var browserRef = window.open('https://app.box.com/api/oauth2/authorize/?client_id=' + clientId + '&redirect_uri=http://localhost/callback&state=' + appState + '&response_type=code', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
              browserRef.addEventListener('loadstart', function (event) {
                if ((event.url).indexOf("http://localhost/callback") === 0) {
                  var requestToken = (event.url).split("code=")[1];
                  $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                  $http({
                    method: "post",
                    url: "https://app.box.com/api/oauth2/token",
                    data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost/callback" + "&grant_type=authorization_code" + "&code=" + requestToken
                  })
                    .success(function (data) {
                      deferred.resolve(data);
                    })
                    .error(function (data, status) {
                      deferred.reject("Problem authenticating");
                    });
                  browserRef.close();
                }
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
      reddit: function (clientId, clientSecret, appScope) {
        var deferred = $q.defer();
        if (window.cordova) {
          var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
          if(cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
              var browserRef = window.open('https://ssl.reddit.com/api/v1/authorize?client_id=' + clientId + '&redirect_uri=http://localhost/callback&duration=permanent&state=ngcordovaoauth&scope=' + appScope.join(",") + '&response_type=code', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
              browserRef.addEventListener('loadstart', function (event) {
                if ((event.url).indexOf("http://localhost/callback") === 0) {
                  requestToken = (event.url).split("code=")[1];
                  $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                  $http.defaults.headers.post.Authorization = 'Basic ' + btoa(clientId + ":" + clientSecret);
                  $http({method: "post", url: "https://ssl.reddit.com/api/v1/access_token", data: "redirect_uri=http://localhost/callback" + "&grant_type=authorization_code" + "&code=" + requestToken})
                    .success(function (data) {
                      deferred.resolve(data);
                    })
                    .error(function (data, status) {
                      deferred.reject("Problem authenticating");
                    });
                  browserRef.close();
                }
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
      twitter: function (clientId, clientSecret) {
        var deferred = $q.defer();
        if (window.cordova) {
          var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
          if(cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
              if (typeof jsSHA !== "undefined") {
                var nonceObj = new jsSHA(Math.round((new Date()).getTime() / 1000.0), "TEXT");
                var oauthObject = {
                  oauth_consumer_key: clientId,
                  oauth_nonce: nonceObj.getHash("SHA-1", "HEX"),
                  oauth_signature_method: "HMAC-SHA1",
                  oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
                  oauth_version: "1.0"
                };
                var signatureObj = $cordovaOauthUtility.createSignature("POST", "https://api.twitter.com/oauth/request_token", oauthObject, {oauth_callback: "http://localhost/callback"}, clientSecret);
                $http.defaults.headers.post.Authorization = signatureObj.authorization_header;
                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                $http({method: "post", url: "https://api.twitter.com/oauth/request_token", data: "oauth_callback=http://localhost/callback"})
                  .success(function (requestTokenResult) {
                    var requestTokenParameters = (requestTokenResult).split("&");
                    var parameterMap = {};
                    for (var i = 0; i < requestTokenParameters.length; i++) {
                      parameterMap[requestTokenParameters[i].split("=")[0]] = requestTokenParameters[i].split("=")[1];
                    }
                    if (parameterMap.hasOwnProperty("oauth_token") === false) {
                      deferred.reject("Oauth request token was not received");
                    }
                    var browserRef = window.open('https://api.twitter.com/oauth/authenticate?oauth_token=' + parameterMap.oauth_token, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                    browserRef.addEventListener('loadstart', function (event) {
                      if ((event.url).indexOf("http://localhost/callback") === 0) {
                        var callbackResponse = (event.url).split("?")[1];
                        var responseParameters = (callbackResponse).split("&");
                        var parameterMap = {};
                        for (var i = 0; i < responseParameters.length; i++) {
                          parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                        }
                        if (parameterMap.hasOwnProperty("oauth_verifier") === false) {
                          deferred.reject("Browser authentication failed to complete.  No oauth_verifier was returned");
                        }
                        delete oauthObject.oauth_signature;
                        oauthObject.oauth_token = parameterMap.oauth_token;
                        var signatureObj = $cordovaOauthUtility.createSignature("POST", "https://api.twitter.com/oauth/access_token", oauthObject, {oauth_verifier: parameterMap.oauth_verifier}, clientSecret);
                        $http.defaults.headers.post.Authorization = signatureObj.authorization_header;
                        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                        $http({method: "post", url: "https://api.twitter.com/oauth/access_token", data: "oauth_verifier=" + parameterMap.oauth_verifier})
                          .success(function (result) {
                            var accessTokenParameters = result.split("&");
                            var parameterMap = {};
                            for (var i = 0; i < accessTokenParameters.length; i++) {
                              parameterMap[accessTokenParameters[i].split("=")[0]] = accessTokenParameters[i].split("=")[1];
                            }
                            if (parameterMap.hasOwnProperty("oauth_token_secret") === false) {
                              deferred.reject("Oauth access token was not received");
                            }
                            deferred.resolve(parameterMap);
                          })
                          .error(function (error) {
                            deferred.reject(error);
                          });
                        browserRef.close();
                      }
                    });
                  })
                  .error(function (error) {
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
        * @return   promise
        */
        meetup: function(clientId) {
            var deferred = $q.defer();
            if(window.cordova) {
                var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
                if(cordovaMetadata.hasOwnProperty("org.apache.cordova.inappbrowser") === true) {
                    var browserRef = window.open('https://secure.meetup.com/oauth2/authorize/?client_id=' + clientId + '&redirect_uri=http://localhost/callback&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
                    browserRef.addEventListener('loadstart', function(event) {
                        if((event.url).indexOf("http://localhost/callback") === 0) {
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
                            browserRef.close();
                        }
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
