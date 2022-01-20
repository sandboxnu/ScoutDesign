import {
  MaterialCommunityIcons,
  Foundation,
  Ionicons,
  EvilIcons,
  Entypo,
} from "@expo/vector-icons";

import { Icon } from "../library";

export const compass = new Icon.Payload({
  name: "compass-sharp",
  library: Ionicons,
});

export const downCaret = new Icon.Payload({
  name: "chevron-thin-down",
  library: Entypo,
});

export const gearThin = new Icon.Payload({
  name: "gear",
  library: EvilIcons,
});

export const light = new Icon.Payload({
  name: "light-up",
  library: Entypo,
});

export const plusBold = new Icon.Payload({
  name: "plus",
  library: Foundation,
});

export const plusThin = new Icon.Payload({
  name: "plus",
  library: MaterialCommunityIcons,
});

export const searchThin = new Icon.Payload({
  name: "search",
  library: EvilIcons,
});

export const trash = new Icon.Payload({
  name: "trash",
  library: Ionicons,
});

export const upCaret = new Icon.Payload({
  name: "chevron-thin-up",
  library: Entypo,
});
