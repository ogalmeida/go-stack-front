import React, { useEffect } from 'react';

import {
  FiAlertCircle,
  FiXOctagon,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ContainerProps {
  data: ToastMessage;
  style: object;
}

const ToastIconType = {
  info: <FiInfo size={22} />,
  success: <FiCheckCircle size={22} />,
  error: <FiAlertCircle size={22} />,
};

const Toast: React.FC<ContainerProps> = ({ data, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(data.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, data.id]);

  return (
    <Container
      type={data.type}
      style={style}
      hasDescription={!!data.description}
    >
      {ToastIconType[data.type || 'info']}

      <div>
        <strong>{data.title}</strong>
        {data.description && <p>{data.description}</p>}
      </div>

      <button onClick={() => removeToast(data.id)} type="button">
        <FiXOctagon size={20} />
      </button>
    </Container>
  );
};

export default Toast;
