import {
  MaterialCommunityIcons,
  Foundation,
  Ionicons,
  EvilIcons,
} from "@expo/vector-icons";

import { Icon } from "../library";

export const compass = new Icon.Payload({
  name: "compass-sharp",
  component: (props) => <Ionicons {...props} />,
});

export const gearThin = new Icon.Payload({
  name: "gear",
  component: (props) => <EvilIcons {...props} />,
});

export const plusBold = new Icon.Payload({
  name: "plus",
  component: (props) => <Foundation {...props} />,
});

export const plusThin = new Icon.Payload({
  name: "plus",
  component: (props) => <MaterialCommunityIcons {...props} />,
});

export const trash = new Icon.Payload({
  name: "trash",
  component: (props) => <Ionicons {...props} />,
});
