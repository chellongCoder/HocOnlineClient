export default {
    deviceWidth : window.innerWidth,
    deviceHeight : window.innerHeight,
    // AndroidRipple
    androidRipple: true,
    androidRippleColor: "rgba(256, 256, 256, 0.3)",
    androidRippleColorDark: "rgba(0, 0, 0, 0.15)",

    // Badge
    badgeBg: "#ED1727",
    badgeColor: "#fff",
    // New Variable
    badgePadding:  3,

    // Button
    btnDisabledBg: "#b5b5b5",
    btnDisabledClr: "#F7F7F6",
    btnDialpad: "#3694EE",
    btnFullWidthButton: "#3694EE",
    choiceButton: "#3694EE",
    btnDisable: "#AFAFAF",
    // CheckBox
    CheckboxRadius: 13,
    CheckboxBorderWidth:  1 ,
    CheckboxPaddingLeft:  4 ,
    CheckboxPaddingBottom:  5,
    CheckboxIconSize:  21,
    CheckboxIconMarginTop:  undefined,
    CheckboxFontSize:  23 / 0.9,
    DefaultFontSize: 13,
    checkboxBgColor: "#039BE5",
    checkboxSize: 20,
    checkboxTickColor: "#fff",

    // Segment
    segmentBackgroundColor: "#F7F7F6",
    segmentActiveBackgroundColor: "#F7F7F6",
    segmentTextColor: "#fff",
    segmentActiveTextColor: "#3F51B5",
    segmentBorderColor: "#fff",
    segmentBorderColorMain: "#3F51B5",

    // New Variable
    get defaultTextColor() {
        return this.textColor;
    },

    get btnPrimaryBg() {
        return this.brandPrimary;
    },
    get btnPrimaryColor() {
        return this.inverseTextColor;
    },
    get btnInfoBg() {
        return this.brandInfo;
    },
    get btnInfoColor() {
        return this.inverseTextColor;
    },
    get btnSuccessBg() {
        return this.brandSuccess;
    },
    get btnSuccessColor() {
        return this.inverseTextColor;
    },
    get btnDangerBg() {
        return this.brandDanger;
    },
    get btnDangerColor() {
        return this.inverseTextColor;
    },
    get btnWarningBg() {
        return this.brandWarning;
    },
    get btnWarningColor() {
        return this.inverseTextColor;
    },
    get btnTextSize() {
        return  this.fontSizeBase * 1.1;
    },
    get btnTextSizeLarge() {
        return this.fontSizeBase * 1.5;
    },
    get btnTextSizeSmall() {
        return this.fontSizeBase * 0.8;
    },
    get borderRadiusLarge() {
        return this.fontSizeBase * 3.8;
    },

    buttonPadding: 6,
    get iconSizeNormal() {
        return this.iconFontSize * 1.3;
    },
    get iconSizeLarge() {
        return this.iconFontSize * 1.8;
    },
    get iconSizeHuge() {
        return this.iconFontSize * 2.5;
    },
    get iconSizeMedium() {
        return this.iconFontSize * 0.7;
    },
    get iconSizeSmall() {
        return this.iconFontSize * 0.5;
    },
    //background
    tabbarBackground: "#0D6ED1",
    commonBackground: "#3694EE",
    contentBackground: "#F5F5F5",
    buttonBackground: "#FFFFFF",
    headerBackground: "#FFFFFF",
    whitebackground: "#FFFFFF",
    footerBackground: "#FFFFFF",
    defaultBackground: "#ECECEC",
    brownBackground: "#CDCED2",
    disableBackground: "#E8E8E8",
    //textWhite
    placeholderText: "#FFFFFF",

    textButton: "#3694EE",

    // Card
    cardDefaultBg: "#fff",
    // label
    backgroundLabel: "#E1E1E1",
    manTelLabel: {
        width: 144,
        height: 50
    },
    //slider
    imageSlider: {
        width: 305,
        height: 320
    },
    //image term
    imageTermScreen: {
        width: 248,
        height: 221
    },
    //note :
    noteBackgroundColor: "#FFF7D5",
    commonImageStyle: {
        resizeMode: "contain",
        width: 1,
        height: 1
    },
    messageButton: "#FDC006",
    // Color
    brandPrimary: "#2874F0",
    brandInfo: "#62B1F6",
    brandSuccess: "#5cb85c",
    brandDanger: "#d9534f",
    brandWarning: "#f0ad4e",
    brandSidebar: "#252932",

    // Font
    fontFamily:  "System",
    fontSizeBase: 15,
    //border
    noteBorder: "#FFE470",
    inputBlurBorderColor: "#47DE99",
    get fontSizeH1() {
        return this.fontSizeBase * 1.8;
    },
    get fontSizeH2() {
        return this.fontSizeBase * 1.6;
    },
    get fontSizeH3() {
        return this.fontSizeBase * 1.4;
    },

    // Footer
    footerHeight: 55,
    footerDefaultBg: "#3694EE",

    // FooterTab
    tabBarTextColor: "#8bb3f4",
    tabBarTextSize:  14,
    activeTab:  "#007aff",
    sTabBarActiveTextColor: "#007aff",
    tabBarActiveTextColor: "#fff",
    tabActiveBgColor:  "#1569f4",

    // Tab
    tabDefaultBg: "#F7F7F6",
    topTabBarTextColor: "#b3c7f9",
    topTabBarActiveTextColor: "#fff",
    topTabActiveBgColor:  "#1569f4",
    topTabBarBorderColor: "#707070",
    topTabBarActiveBorderColor: "#fff",

    // Header
    toolbarBtnColor: "#fff",
    toolbarDefaultBg: "#2874F0",
    toolbarHeight:  64,
    toolbarIconSize:  20,
    toolbarSearchIconSize:  20,
    toolbarInputColor:  "#CECDD2",
    searchBarHeight:  30,
    toolbarInverseBg: "#222",
    toolbarTextColor: "#fff",
    iosStatusbar: "light-content",
    toolbarDefaultBorder: "#2874F0",
    get statusBarColor() {
        return color(this.toolbarDefaultBg)
            .darken(0.2)
            .hex();
    },

    // Icon
    iconFamily: "Ionicons",
    iconFontSize:  30,
    iconMargin: 7,
    iconHeaderSize:  33,

    // InputGroup
    inputFontSize: 17,
    inputBorderColor: "#D9D5DC",
    inputSuccessBorderColor: "#2b8339",
    inputErrorBorderColor: "#ed2f2f",

    get inputColor() {
        return this.textColor;
    },
    get inputColorPlaceholder() {
        return "#575757";
    },

    inputGroupMarginBottom: 10,
    inputHeightBase: 50,
    inputPaddingLeft: 5,

    get inputPaddingLeftIcon() {
        return this.inputPaddingLeft * 8;
    },

    // Line Height
    btnLineHeight: 19,
    lineHeightH1: 32,
    lineHeightH2: 27,
    lineHeightH3: 22,
    iconLineHeight:  37 ,
    lineHeight:  20,

    // List
    listBorderColor: "#c9c9c9",
    listDividerBg: "#f4f4f4",
    listItemHeight: 45,
    listBtnUnderlayColor: "#DDD",

    // Card
    cardBorderColor: "#D1D1D1",

    // Changed Variable
    listItemPadding:  10,

    listNoteColor: "#808080",
    listNoteSize: 13,

    // Progress Bar
    defaultProgressColor: "#E4202D",
    inverseProgressColor: "#1A191B",

    // Radio Button
    radioBtnSize:  25,
    radioSelectedColorAndroid: "#5067FF",

    // New Variable
    radioBtnLineHeight:  29,

    radioColor: "#7e7e7e",

    get radioSelectedColor() {
        return color(this.radioColor)
            .darken(0.2)
            .hex();
    },

    // Spinner
    defaultSpinnerColor: "#45D56E",
    inverseSpinnerColor: "#1A191B",

    // Tabs
    tabBgColor: "#F8F8F8",
    tabFontSize: 15,
    tabTextColor: "#222222",

    // Text
    textColor: "#000",
    textHeader: "#000000",
    textColorWhite: "#FFFFFF",
    blurTextColor: "#C4C4C4",
    inverseTextColor: "#F7F7F6",
    noteFontSize: 14,
    textType: "#7B7B7B",
    textNote: "#8A8F9C",
    textNoteBold: "#59626A",
    textDanger: "#d9534f",
    // Title
    titleFontfamily:  "System",
    titleFontSize:  17,
    subTitleFontSize:  12,
    subtitleColor: "#FFF",

    // New Variable
    titleFontColor: "#FFF",

    // Other
    borderRadiusBase:  5,
    contentPadding: 10,

    get darkenHeader() {
        return color(this.tabBgColor)
            .darken(0.03)
            .hex();
    },

    dropdownBg: "#000",
    dropdownLinkColor: "#414142",
    inputLineHeight: 24,
    jumbotronBg: "#C9C9CE",
    jumbotronPadding: 30,

    // New Variable
    inputGroupRoundedBorderRadius: 30
};
