import React from 'react';
import SignInScreen from '../screens/signIn';
import SignUpScreen from '../screens/signUp';
import ForgotPwdScreen from '../screens/forgotPwd';
import HomeScreen from '../screens/home'; 
import FavouritesScreen from '../screens/favourites';
import HistoryScreen from '../screens/history';
import CartScreen from '../screens/cart';
import AccountScreen from '../screens/account';
import PrevistaScreen from '../screens/prevista';
import Drawer from '../components/drawer'; 
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { COLORS , SIZES } from '../constants/theme';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from 'react-navigation-drawer';


const authStack = createStackNavigator({
    signin: {
        screen: SignInScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    signup: {
        screen: SignUpScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    forgotpwd: {
        screen: ForgotPwdScreen,
        navigationOptions: {
            headerTitle: () => null,
            headerBackTitle: 'back',
            headerBackTitleStyle: {
                fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
            headerStyle: {
                backgroundColor: COLORS.primary,
            }
        }
    },
});

const homeStack = createStackNavigator({
    home: {
        screen: HomeScreen,
    },
},{
    defaultNavigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: COLORS.primary,
            shadowOpacity: 0,
        },
        headerTitle: 'Best tienda de segunda',
        headerTitleStyle: {
            color: COLORS.white,
            fontWeight: '800',
        },
        headerRight: (
            <Icon2 name="options-sharp"
                size={30} color={COLORS.white}
                style={{paddingRight: 10}}
                onPress={() => { navigation.openDrawer() }}
            />
        ),
    }),
}) 

const bottomStack = createBottomTabNavigator({
    history: {
        screen: HistoryScreen,
        navigationOptions: {
            tabBarLabel: 'Historial',
            tabBarIcon: ({tintColor, focused}) => <Icon name='history' size={focused ? 30: 20} color={tintColor} />
        }
    },
    cart: {
        screen: CartScreen,
        navigationOptions: {
            tabBarLabel: 'Carrito',
            tabBarIcon: ({tintColor, focused}) => <Icon name='cart-outline' size={focused ? 30: 20} color={tintColor} />
        }
    },
    home: {
        screen: homeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor, focused}) => <Icon name='home-outline' size={focused ? 30: 20} color={tintColor} />
        }
    },
    favourite: {
        screen: FavouritesScreen,
        navigationOptions: {
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({tintColor, focused}) => <Icon name='heart-outline' size={focused ? 30: 20} color={tintColor} />
        }
    },
    account: {
        screen: AccountScreen,
        navigationOptions: {
            tabBarLabel: 'Cuenta',
            tabBarIcon: ({tintColor, focused}) => <Icon name='account-outline' size={focused ? 30: 20} color={tintColor} />
        }
    },
    prevista: {
        screen: PrevistaScreen,
        navigationOptions: {
            tabBarLabel: 'prevista',
            tabBarIcon: ({tintColor, focused}) => <Icon name='camera-outline' size={focused ? 30: 20} color={tintColor} />
        }
    }

},{
    initialRouteName: 'home',
    tabBarOptions: {
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.grey,
        labelStyle: {
            fontWeight: 'bold',
        },
        tabStyle: {
            paddingTop: 5,
            height: 50,
        }
    }
});


const drawerStack = createDrawerNavigator({
    drawer: {
        screen: bottomStack,
    },
}, {
    contentComponent: Drawer,
    drawerPosition: 'right',
    drawerWidth: SIZES.width - 60
})

const mainStack = createSwitchNavigator({
    auth: {
        screen: authStack,
        navigationOptions: {
            headerShown: false,
        }
    },
    main : {
        screen: drawerStack,
    }
})

const router = createAppContainer(mainStack); 

export default router;