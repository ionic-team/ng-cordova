#import "Toast.h"
#import "Toast+UIView.h"
#import <Cordova/CDV.h>

@implementation Toast

- (void)show:(CDVInvokedUrlCommand*)command {

  NSString *message  = [command.arguments objectAtIndex:0];
  NSString *duration = [command.arguments objectAtIndex:1];
  NSString *position = [command.arguments objectAtIndex:2];

  if (![position isEqual: @"top"] && ![position isEqual: @"center"] && ![position isEqual: @"bottom"]) {
    CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"invalid position. valid options are 'top', 'center' and 'bottom'"];
    [self writeJavascript:[pluginResult toErrorCallbackString:command.callbackId]];
    return;
  }

  NSInteger durationInt;
  if ([duration isEqual: @"short"]) {
    durationInt = 2;
  } else if ([duration isEqual: @"long"]) {
    durationInt = 5;
  } else {
    CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"invalid duration. valid options are 'short' and 'long'"];
    [self writeJavascript:[pluginResult toErrorCallbackString:command.callbackId]];
    return;
  }

  [self.webView makeToast:message duration:durationInt position:position];
    
  CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
  [self writeJavascript:[pluginResult toSuccessCallbackString:command.callbackId]];
}

@end