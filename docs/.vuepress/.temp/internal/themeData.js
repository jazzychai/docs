export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"工作\",\"prefix\":\"/work/\",\"children\":[{\"text\":\"四方\",\"link\":\"/sf/\"},{\"text\":\"通达\",\"link\":\"/tdoa/\"}]},{\"text\":\"技术\",\"prefix\":\"/tech/\",\"children\":[{\"text\":\"vue\",\"link\":\"/vue/\"},{\"text\":\"vue2\",\"link\":\"/vue2/\"}]},{\"text\":\"生活\",\"prefix\":\"/life/\",\"children\":[{\"text\":\"读书\",\"link\":\"/book/\"}]}],\"sidebar\":{\"/\":[{\"text\":\"首页\",\"prefix\":\"/\",\"link\":\"/\",\"children\":[\"index.md\"]}],\"/tdoa/\":[{\"text\":\"通达OA\",\"prefix\":\"/tdoa/\",\"link\":\"/tdoa/\",\"children\":[\"index.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
