import { FlatList } from "react-native";
import Box from "../../Atoms/utility/Box/Box";
import LineItem from "../LineItem/LineItem";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const ComponentStack = ({}) => {
  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <LineItem
      accessibilityLabel={item.title}
      type="static"
      key={item.id}
      backgroundColor="brandAction"
      onPress={() => {}}
    >
      <LineItem.Heading color="white" weight="medium">
        {item.title}
      </LineItem.Heading>
    </LineItem>
  );
  return (
    <FlatList
      style={{
        borderRadius: 8,
      }}
      ItemSeparatorComponent={() => (
        <Box
          height={0}
          borderBottomColor="white"
          marginHorizontal="m"
          borderBottomWidth={0.25}
        />
      )}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ComponentStack;
