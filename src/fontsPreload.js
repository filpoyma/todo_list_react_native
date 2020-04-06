import * as Font from 'expo-font'

export async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf')
  })
}