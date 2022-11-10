import { useSelector } from 'react-redux';
import Toast from './Toast';

function NofiticationCenter() {
  const state = useSelector(state => state.notificationReducer);

  return <aside className="notification-container top-right">
    {
      state.notifications.map((n) =>
        <Toast key={n.uuid} text={n.message} dismissTime={n.dismissTime} />
      )
    }
  </aside>
}

export default NofiticationCenter