import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { MaterialCommunityIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { NewsContext } from '../Api/Context';

const TopNavigation = ({ index, setIndex }) => {

	const { fetchNews, darkTheme, setDarkTheme } = useContext(NewsContext);

	return (
		<View style={{ ...styles.container, backgroundColor: darkTheme ? '#282C35' : "white" }}>
			{
				index === 0 ?
					(
						<TouchableOpacity
							style={styles.left}
							onPress={() => setDarkTheme(!darkTheme)}
						>
							<Text style={{ ...styles.text, color: "lightgrey" }}>
								<MaterialCommunityIcons
									name="theme-light-dark"
									size={24}
									color={darkTheme ? "white" : "black"}
								/>
							</Text>
						</TouchableOpacity>
					)
					:
					(
						<TouchableOpacity
							style={styles.left}
							onPress={() => setIndex(index === 0 ? 1 : 0)}
						>
							<SimpleLineIcons
								name="arrow-left"
								size={15}
								color="#e61736"
							/>
							<Text
								style={{ ...styles.text, color: darkTheme ? "lightgrey" : "black" }}
							>
								Discover
							</Text>
						</TouchableOpacity>
					)
			}
			<Text style={{ ...styles.center, color: darkTheme ? "white" : "black" }}>
				{index ? "All News" : "Discover"}
			</Text>
			{
				index ? (
					<TouchableOpacity
						onPress={() => fetchNews("general")}
						style={styles.right}
					>
						<Text
							style={styles.text}
						>
							<AntDesign
								name="reload1"
								size={24}
								color="#e61736"
							/>
						</Text>
					</TouchableOpacity>
				)
					:
					(
						<TouchableOpacity
							style={styles.left}
							onPress={() => setIndex(index === 0 ? 1 : 0)}
						>
							<Text
								style={{ ...styles.rext, color: darkTheme ? "white" : "black" }}
							>
								All News
							</Text>
							<SimpleLineIcons
								name="arrow-right"
								size={15}
								color="#e61736"
							/>
						</TouchableOpacity>
					)
			}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
		alignItems: "center",
		borderBottomColor: "black",
		borderBottomWidth: 0.5,
	},
	center: {
		paddingBottom: 6,
		borderBottomColor: "#e61736",
		borderBottomWidth: 5,
		borderRadius: 10,
		fontSize: 16,
		fontWeight: "700",
	},
	left: {
		flexDirection: "row",
		alignItems: "center",
		width: 90,
		justifyContent: "space-between",
	},
	text: {
		fontSize: 16,
	},
	right: {
		width: 80,
		alignItems: "flex-end",
	},
});

export default TopNavigation;

