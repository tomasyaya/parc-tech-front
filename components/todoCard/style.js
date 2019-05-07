import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    minWidth: 250,
    height: 80,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  btnView: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  textTitle: {
    paddingBottom: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
})