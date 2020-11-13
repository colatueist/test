let url_config = ""

var ua = location.href.split('/');
var serveraddress = "http://zdqr2.lqnature.com/lqProject/" //ua[0] + '//' + ua[2] + '/' + ua[3] + '/';

if (process.env.NODE_ENV === 'development') {
	// 开发环境
	url_config = serveraddress + 'monitorRequest'
} else {
	// 生产环境
	url_config = serveraddress + 'monitorRequest'
}

export default url_config
