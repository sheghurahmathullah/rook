window.ZohoHCAsap =
  window.ZohoHCAsap ||
  function (a, b) {
    window.ZohoHCAsap[a] = b;
  };
window.ZohoHCAsap.nonceScript = window.document.querySelector("script[nonce]");
if (window.ZohoHCAsap.nonceScript) {
  window.ZohoHCAsap.nonce =
    window.ZohoHCAsap.nonceScript.nonce ||
    window.ZohoHCAsap.nonceScript.getAttribute("nonce") ||
    false;
}
window.ZohoHCAsap("_defaultoptions", {
  _helpCenterUrl: "https://resource.rookfellows.com/portal/",
  chatDetails: { ziaGuides: {} },
  departmentId: "-1",
  tabs: [
    {
      tabName: "TICKETS",
      name: "Tickets",
      isdefault: true,
      position: "0",
      status: true,
    },
    {
      tabName: "KB",
      name: "Knowledge Base",
      isdefault: false,
      position: "1",
      status: true,
    },
    {
      tabName: "HOME",
      name: "Home",
      isdefault: false,
      position: "2",
      status: false,
    },
    {
      tabName: "ADDTICKET",
      name: "Submit a Ticket",
      isdefault: false,
      position: "3",
      status: false,
    },
  ],
  _helpCenterName: "rookfellows",
  editorPath: "//static.zohocdn.com/zoho-desk-editor/",
  i18NLangFile: "en_US",
  _orgId:
    "edbsn6e2cebb89cc0953bf03bdb08d5532bee6c093b170d3c199aac38ee0abba3c196",
  _cssstaticdomain_fallback: "//css.zohostatic.in/support/asapweb/app.v1/",
  livechatConfig: {},
  isOldChatConfig: true,
  poweredByDomain: "zoho.in",
  id: "129922000000218015",
  _staticPath: "//static.zohocdn.com/helpcenter/asapweb/",
  lang: "en_US",
  _version: "https://desk.zoho.in/portal/api/",
  _jsstaticdomain: "//js.zohostatic.in/support/asapweb/app.v1/",
  editorVersion: "5.0.8",
  _cssstaticdomain: "//css.zohostatic.in/support/asapweb/app.v1/",
  isMultilingualEnabledForOrg: true,
  _helpCenterDepartmentId: "129922000000010772",
  editorUrl:
    "https://static.zohocdn.com/zoho-desk-editor/EV5.0.8/js/ZohoDeskEditor.js",
  activeLocales: [
    {
      i18nLocaleName: "English",
      name: "Rook Fellows",
      locale: "en",
      type: "DEFAULT",
      status: "ACCESIBLE_IN_HELPCENTER",
    },
  ],
  _basedomain: "https://desk.zoho.in",
  communityTopicTypes: {
    defaultTopicType: "QUESTION",
    topicTypes: ["ANNOUNCEMENT", "QUESTION", "IDEA", "PROBLEM"],
  },
  myAppPortalId: "60025162283",
  deploymentType: "IN",
  _jsstaticdomain_fallback: "//js.zohostatic.in/support/asapweb/app.v1/",
  name: "How can we help?",
  styles: {
    customThemeColors: null,
    shape: "SQUARE",
    icon: "HELP",
    isPoweredByEnabled: true,
    theme: "WHITEHOUSE",
    position: "BOTTOM RIGHT",
    boxshadow: { elevation: "3", isactive: true, opacity: "4" },
    customLauncherIconURL: "",
  },
  _preferences: {
    isKBWatchListEnabled: false,
    isAccountTicketViewable: false,
    isArticleUpdatedTimeVisible: true,
    isMultiLayoutGridViewEnabled: false,
    articleFeedbackFormOnDislike: "show",
    isSEONoIndexNoFollowSetAcrossAllPages: false,
    isSignUpFormCustomized: false,
    tocPosition: "top",
    showFeedbackFormOnDislike: true,
    isTicketViewsEnabled: true,
    isCustomStatusFilterEnabled: false,
    isArticleAuthorInfoVisible: false,
    isSelfSignUp: false,
    isImageWaitEnabled: false,
    isKBEndUsersCommentEnabled: false,
    isCommunityEnabled: false,
    isTocEnabled: true,
    isClientDebuggingEnabled: false,
    guestUserAccessRestriction: { submitTicket: false },
    signupFormLayout: "STATIC_FORM",
    isUserDeletionEnabled: true,
    isSEOSetAcrossAllPages: true,
    isHelpCenterPublic: true,
    searchScope: "section",
    isKBCommentAttachmentsEnabled: true,
    isCommunityAtMentionEnabled: false,
    imageWaitingTime: "1000",
    isMultilingualEnabled: false,
    communityLandingPage: "allcategory",
    isKBEnabled: true,
    isSecondaryContactsEnabled: false,
    isOnHoldEnabled: true,
    isContactAccountMultiMappingEnabled: false,
    isOTPBasedAuthenticationEnabled: false,
    isGamificationEnabled: false,
    isTagsEnabled: true,
  },
  status: "ACTIVE",
});
window.ZohoHCAsap._defaultoptions.nonce = window.ZohoHCAsap.nonce;
(function () {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src =
    "//static.zohocdn.com/helpcenter/asapweb/zohohcasap-efc-sdk-v1.0.8ba3562d184ff93cb61b.js";
  if (window.ZohoHCAsap.nonce) {
    s.setAttribute("nonce", window.ZohoHCAsap.nonce);
  }
  document.getElementsByTagName("head")[0].appendChild(s);
})();
