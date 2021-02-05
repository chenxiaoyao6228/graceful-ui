// manage.js: renders the UI of addons, the navigator and toolbar.
import { addons } from "@storybook/addons";
import defaultTheme from './theme.default.js'

// addons.setConfig({
//   /**
//    * display the top-level grouping as a "root" in the sidebar
//    * @type {Boolean}
//    */
//   showRoots: false,
//   /**
//    * show story component as full screen
//    * @type {Boolean}
//    */
//   isFullscreen: false,

//   /**
//    * display panel that shows a list of stories
//    * @type {Boolean}
//    */
//   showNav: true,

//   /**
//    * display panel that shows addon configurations
//    * @type {Boolean}
//    */
//   showPanel: true,

//   /**
//    * where to show the addon panel
//    * @type {('bottom'|'right')}
//    */
//   panelPosition: "bottom",

//   /**
//    * sidebar tree animations
//    * @type {Boolean}
//    */
//   sidebarAnimations: true,

//   /**
//    * enable/disable shortcuts
//    * @type {Boolean}
//    */
//   enableShortcuts: true,

//   /**
//    * show/hide tool bar
//    * @type {Boolean}
//    */
//   isToolshown: true,

//   /**
//    * theme storybook, see link below
//    */
//   theme: undefined,

//   /**
//    * id to select an addon panel
//    * @type {String}
//    */
//   selectedPanel: undefined,
// });

addons.setConfig({
  theme: defaultTheme,
});
