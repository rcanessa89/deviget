import { makeStyles } from '@material-ui/core/styles';

export const mainPostUseStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '30%',
    margin: `0 auto ${theme.spacing(2)}px`
  },
  modalCard: {
    width: '100%'
  }
}));
