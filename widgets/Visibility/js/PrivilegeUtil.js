// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang jimu/portalUtils jimu/portalUrlUtils jimu/Role esri/lang".split(" "),function(l,c,k,d,m,e){var f=null,h=l([],{userRole:null,userPortalUrl:null,portalAnalysis:null,portalSelf:null,portalUrl:null,_isServiceAvailable:!1,constructor:function(a){this.portalUrl=a},_clearLoadedInfo:function(){this.portalUrl=this.portalSelf=this.userPortalUrl=this.userRole=null},loadPrivileges:function(a){this.portalSelf=this.userPortalUrl=this.userRole=null;this._isServiceAvailable=
!1;a&&(this.portalUrl=a);a=k.getPortal(this.portalUrl);return a.haveSignIn()?this._loadUserInfo(a):this._signIn(a)},getPortalUrl:function(a){return a?d.getStandardPortalUrl(a):this.portalUrl?d.getStandardPortalUrl(this.portalUrl):d.getStandardPortalUrl(this.appConfig.portalUrl)},_privilegeLoaded:function(){return null!==this.portalSelf},getUserPortal:function(){return this._privilegeLoaded()?this.getPortalUrl(this.userPortalUrl):null},_signIn:function(a){return a.loadSelfInfo().then(c.hitch(this,
function(b){var g=k.getPortal(b.portalHostname);return null===g?!1:g.signIn().then(c.hitch(this,function(n){return this._loadUserInfo(g,n)}),function(){return!1})}),function(){return!1})},_loadUserInfo:function(a){return a.loadSelfInfo().then(c.hitch(this,function(b){this.userPortalUrl=b.urlKey?b.urlKey+"."+b.customBaseUrl:this.portalUrl;return b&&b.user?(this.userRole=new m({id:b.user.roleId?b.user.roleId:b.user.role,role:b.user.role}),b.user.privileges&&this.userRole.setPrivileges(b.user.privileges),
this.portalSelf=b,!0):!1}),function(){return!1})},_canPerformElevationAnalysis:function(){this.portalSelf&&(this._isServiceAvailable=e.isDefined(this.portalSelf.helperServices.elevation));return this.canPerformAnalysis()&&this._isServiceAvailable},canPerformAnalysis:function(){var a=!1;this.userRole&&(this.userRole.isAdmin()||this.userRole.isPublisher())?a=!0:this.userRole&&this.userRole.isCustom()&&(a=this.userRole.canCreateItem()&&this.userRole.canPublishFeatures()&&this.userRole.canUseSpatialAnalysis());
this.portalSelf&&this.portalSelf.isPortal&&(a=a&&e.isDefined(this.portalSelf.helperServices.analysis)&&e.isDefined(this.portalSelf.helperServices.analysis.url));return a}});h.getInstance=function(a){null===f&&(f=new h(a));return f};return h});