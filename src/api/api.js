import Server from './server';
class API extends Server {
    async test(params = {}) {
        try {
            let result = await this.axios('post', 'http://39.108.56.116:3000/getThemeList', params);
            if (result && result.status === 1) {
                return result;
            } else {
                let err = {
                    tip: '获得主题列表失败',
                    response: result,
                    data: params,
                    url: 'http://39.108.56.116:3000/getThemeList',
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }
}

export default new API();
