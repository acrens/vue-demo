/**
 * 创建存储插件
 */
import { STORAGE_KEY } from './mutations'
import createLogger from '../../src/plugins/logger'

const localStoragePlugin = store => {

	// store 订阅，只要有触发 mutation 则调用此方法呢
	store.subscribe((mutation, { todos }) => {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	})
};

export default process.env.NODE_ENV !== 'production' ? [createLogger(), localStoragePlugin]: [localStoragePlugin]