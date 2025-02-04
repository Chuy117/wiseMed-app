import { StyleSheet } from 'react-native';

export const colours = {
    background: '#F3EDF7',
    backgroundCard: '#FFF',
    letters: '#000',
    primary: '#154FBF'
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colours.background,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerCard: {
        alignSelf: 'center',
        backgroundColor: colours.backgroundCard,
        borderRadius: 10,
        borderColor: colours.primary,
        borderWidth: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    subtitle: {
        fontSize: 12,
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    header: {
        backgroundColor: colours.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        width: 276,
        height: 71,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    image: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bones: {
        width: 50,
        height: 50,
        marginRight: 20
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 20,
    },
    avatar: {
        width: 20,
        height: 20,
        borderRadius: 40,
        marginRight: 20,
    },
    infoLetters: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    infoTitle: {
        fontSize: 12,
        marginBottom: 5,
        color: colours.primary,
    },
    infoText: {
        fontSize: 12,
        marginBottom: 5,
    },
    info: {
        marginLeft: 20,
        flexDirection: 'row'
    },
    urgencia: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: colours.primary,
    },
});