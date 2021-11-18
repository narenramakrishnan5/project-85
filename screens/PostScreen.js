import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class PostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        if (!this.props.route.params) {
            this.props.navigation.navigate("Home");
        } else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.iconImage}
                            ></Image>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}>Spectagram</Text>
                        </View>
                    </View>
                    <View style={styles.postContainer}>
                        <ScrollView style={styles.postCard}>
                            <View style={styles.authorContainer}>
                                <View style={styles.authorImageContainer}>
                                    <Image
                                        source={require("../assets/profile_img.png")}
                                        style={styles.profileImage}
                                    ></Image>
                                </View>
                                <View style={styles.authorNameContainer}>
                                    <Text style={styles.authorNameText}>{this.props.route.params.author}</Text>
                                </View>
                            </View>
                            <Image source={require("../assets/image_1.jpg")} style={styles.postImage} />
                            <View style={styles.captionContainer}>
                                <Text style={styles.captionText}>
                                    {this.props.route.params.caption}
                                </Text>
                            </View>
                            <View style={styles.actionContainer}>
                                <View style={styles.likeButton}>
                                    <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                                    <Text style={styles.likeText}>12k</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "dark blue"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.17,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.24,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.75,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(22)
    },
    postContainer: {
        flex: 1
    },
    postCard: {
        margin: RFValue(17),
        backgroundColor: "#ec420",
        borderRadius: RFValue(12)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: RFValue(12)
    },
    likeButton: {
        width: RFValue(140),
        height: RFValue(50),
        flexDirection: "row",
        backgroundColor: "#ae425",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(21)
    },
    likeText: {
        color: "white",
        fontSize: RFValue(20),
        marginLeft: RFValue(3)
    },
    authorContainer: {
        height: RFValue(10),
        padding: RFValue(10),
        flexDirection: "row"
    },
    authorImageContainer: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: RFValue(97)
    },
    authorNameContainer: {
        flex: 0.65,
        padding: RFValue(7),
        justifyContent: "center"
    },
    authorNameText: {
        color: "white",
        fontSize: RFValue(17)
    },
    postImage: {
        width: "100%",
        alignSelf: "center",
        height: RFValue(192),
        borderTopLeftRadius: RFValue(17),
        borderTopRightRadius: RFValue(17),
        resizeMode: "contain"
    },
    captionContainer: {
        padding: RFValue(14)
    },
    captionText: {
        fontSize: 12,
        color: "white",
        paddingTop: RFValue(7)
    },
});
