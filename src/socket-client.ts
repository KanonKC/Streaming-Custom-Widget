import { io } from 'socket.io-client';

const { VITE_STREAM_MANAGEMENET_SERVER_SOCKET_URL } = import.meta.env
const socket = io(VITE_STREAM_MANAGEMENET_SERVER_SOCKET_URL);

export default socket;