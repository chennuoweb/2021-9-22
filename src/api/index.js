import axios from "./axios";
const BASE_URL = '/api';

// 测试
export const reqNews = () => axios(`${BASE_URL}/news`);

