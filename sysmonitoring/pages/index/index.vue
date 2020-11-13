<template>
	<view class="table">

		<view class="header">桂林公司</view>
		<view class="content">
			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">1.漓泉深信服VPN(双线)</text>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">域名：</view>
						<view class="content-ip">vpn.lqnature.com</view>
					</view>
					<view class="badge">
						<view v-if="this.flag[0] == 1 ? true : false" class="badge-content"></view>
						<image v-if="this.flag[0] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-if="this.flag[0] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[0] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">220.173.141.130</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image class="rich-img-content" src="/static/img/telecom.png"></image>
							<text class="rich-text-content">（电信）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[1] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[1] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[1] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[1] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 内网 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.203.235</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[2] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[2] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[2] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[2] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">2.服务器访问互联网</text>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">域名：</view>
						<view class="content-ip">服务器上网出口</view>
					</view>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">220.173.141.140</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image class="rich-img-content" src="/static/img/telecom.png"></image>
							<text class="rich-text-content">（电信）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[3] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[3] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[3] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[3] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 内网 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">服务器上网出口</view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">3.微信服务</text>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">域名：</view>
						<view class="content-ip">zdqr.lqnature.com</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[4] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[4] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[4] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[4] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 域名1 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom-white">域名：</view>
						<view class="content-ip">zdqr1.lqnature.com</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[5] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[5] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[5] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[5] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">220.173.141.149</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image class="rich-img-content" src="/static/img/telecom.png"></image>
							<text class="rich-text-content">（电信）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[6] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[6] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[6] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[6] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 内网 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.199.82</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[7] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[7] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[7] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[7] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">4.微信服务测试(双线)</text>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">域名：</view>
						<view class="content-ip">zdqr2.lqnature.com</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[8] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[8] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[8] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[8] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">220.173.141.152</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image class="rich-img-content" src="/static/img/telecom.png"></image>
							<text class="rich-text-content">（电信）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[9] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[9] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[9] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[9] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 内网 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.119.110</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[10] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[10] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[10] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[10] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">5.手机办公APP下载</text>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">域名：</view>
						<view class="content-ip">download.liquan.com</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[11] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[11] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[11] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[11] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 域名1 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom-white">域名：</view>
						<view class="content-ip">pay.lqnature.com</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[12] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[12] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[12] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[12] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">220.173.141.157</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image class="rich-img-content" src="/static/img/telecom.png"></image>
							<text class="rich-text-content">（电信）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[13] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[13] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[13] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[13] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">6.普通用户上网出口</text>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">域名：</view>
						<view class="content-ip">普通用户上网出口</view>
					</view>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">222.52.142.181</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image class="rich-img-content" src="/static/img/mobile.png"></image>
							<text class="rich-text-content">（移动）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[14] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[14] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[14] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[14] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 内网 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">普通用户上网出口</view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">7.漓泉深信服VPN(双线)</text>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">域名：</view>
						<view class="content-ip">vpn.lqnature.com</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[15] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[15] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[15] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[15] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">222.52.142.183</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image class="rich-img-content" src="/static/img/mobile.png"></image>
							<text class="rich-text-content">（移动）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[16] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[16] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[16] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[16] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 内网 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.203.235</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[17] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[17] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[17] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[17] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">8.微信服务测试(双线)</text>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">域名：</view>
						<view class="content-ip">zdqr2.lqnature.com</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[18] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[18] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[18] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[18] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">222.52.142.184</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image class="rich-img-content" src="/static/img/mobile.png"></image>
							<text class="rich-text-content">（移动）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[19] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[19] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[19] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[19] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 内网 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.199.110</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[20] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[20] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[20] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[20] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">9.绿色供应链</text>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">域名：</view>
						<view class="content-ip">gyl.liquan.com</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[21] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[21] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[21] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[21] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">222.52.142.185</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image class="rich-img-content" src="/static/img/mobile.png"></image>
							<text class="rich-text-content">（移动）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[22] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[22] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[22] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[22] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 内网 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.199.222</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[23] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[23] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[23] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[23] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">10.暂未使用</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">222.52.142.186</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image class="rich-img-content" src="/static/img/mobile.png"></image>
							<text class="rich-text-content">（移动）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[24] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[24] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[24] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[24] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>
		</view>

		<view class="header">玉林公司</view>
		<view class="content">
			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">11.玉林上网</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">218.21.92.118</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image class="rich-img-content" src="/static/img/telecom.png"></image>
							<text class="rich-text-content">（电信）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[25] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[25] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[25] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[25] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
				<!-- 内网 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.20.254</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[26] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[26] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[26] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[26] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>
		</view>

		<view class="header">贵阳公司</view>
		<view class="content">
			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">12.贵阳上网</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">流动IP</view>
						</view>
					</view>
				</view>
				<!-- 内网 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.31.254</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[27] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[27] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[27] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[27] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>
		</view>

		<view class="header">昆明公司</view>
		<view class="content">
			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">13.昆明上网</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">流动IP</view>
						</view>
					</view>
				</view>
				<!-- 内网 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.9.254</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[28] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[28] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[28] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[28] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>
		</view>

		<view class="header">云上业务</view>
		<view class="ysyw-content">
			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">14.B2C商城①</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">120.77.152.37</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image mode="heightFix" class="rich-img-content" src="/static/img/ali.png"></image>
							<text class="rich-text-content">（阿里云）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[29] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[29] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[29] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[29] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">15.B2C商城②</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">119.23.242.250</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image mode="heightFix" class="rich-img-content" src="/static/img/ali.png"></image>
							<text class="rich-text-content">（阿里云）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[30] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[30] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[30] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[30] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">16.B2B商城</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">39.108.154.188</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image mode="heightFix" class="rich-img-content" src="/static/img/ali.png"></image>
							<text class="rich-text-content">（阿里云）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[31] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[31] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[31] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[31] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">17.一瓶一码①</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">54.222.235.139</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image mode="heightFix" class="rich-img-content" src="/static/img/amazon.png"></image>
							<text class="rich-text-content">（亚马逊）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[32] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[32] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[32] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[32] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">18.一瓶一码②</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">54.223.118.221</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image mode="heightFix" class="rich-img-content" src="/static/img/amazon.png"></image>
							<text class="rich-text-content">（亚马逊）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[33] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[33] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[33] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[33] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">19.一瓶一码③</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">54.223.23.9</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image mode="heightFix" class="rich-img-content" src="/static/img/amazon.png"></image>
							<text class="rich-text-content">（亚马逊）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[34] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[34] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[34] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[34] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">20.一瓶一码④</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">54.223.31.116</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image mode="heightFix" class="rich-img-content" src="/static/img/amazon.png"></image>
							<text class="rich-text-content">（亚马逊）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[35] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[35] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[35] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[35] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">21.一瓶一码⑤</text>
				</view>
				<!-- 外网 -->
				<view class="flex-row">
					<view class="flex-row-oip-content">
						<view class="flex-row-oip">
							<view class="content-dom">外网：</view>
							<view class="content-ip">54.223.31.185</view>
						</view>
						<!-- 运营商 -->
						<view class="rich-content">
							<image mode="heightFix" class="rich-img-content" src="/static/img/amazon.png"></image>
							<text class="rich-text-content">（亚马逊）</text>
						</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[36] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[36] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[36] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[36] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>
		</view>

		<view class="header">服务器:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;192.*.*.82</view>
		<view class="content">
			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">1.tomcat:dept</text>
					<view v-show="this.flag[37] == 1 ? true : false" class="badge-server-content"></view>
					<image v-show="this.flag[37] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-server-img-gif"></image>
					<view v-show="this.flag[37] == 3 ? true : false" class="text-server-content">请求超时</view>
					<view v-if="this.flag[37] == 4 ? true : false" class="badge-server-content-red"></view>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">系统：</view>
						<view class="content-ip">办事处经理</view>
					</view>
				</view>
				<!-- 域名1 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom-white">系统：</view>
						<view class="content-ip">办事处文员</view>
					</view>
				</view>
				<!-- 域名2 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom-white">系统：</view>
						<view class="content-ip">主管</view>
					</view>
				</view>
				<!-- 域名3 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom-white">系统：</view>
						<view class="content-ip">业务员</view>
					</view>
				</view>
				<!-- 域名4 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom-white">系统：</view>
						<view class="content-ip">总监</view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">2.tomcat:yjlqwx</text>
					<view v-show="this.flag[38] == 1 ? true : false" class="badge-server-content"></view>
					<image v-show="this.flag[38] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-server-img-gif"></image>
					<view v-show="this.flag[38] == 3 ? true : false" class="text-server-content">请求超时</view>
					<view v-if="this.flag[38] == 4 ? true : false" class="badge-server-content-red"></view>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">系统：</view>
						<view class="content-ip">终端老板</view>
					</view>
				</view>
				<!-- 域名1 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom-white">系统：</view>
						<view class="content-ip">经销商仓管员（广西）</view>
					</view>
				</view>
			</view>

			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">3.tomcat:jxsgz</text>
					<view v-show="this.flag[39] == 1 ? true : false" class="badge-server-content"></view>
					<image v-show="this.flag[39] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-server-img-gif"></image>
					<view v-show="this.flag[39] == 3 ? true : false" class="text-server-content">请求超时</view>
					<view v-if="this.flag[39] == 4 ? true : false" class="badge-server-content-red"></view>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">系统：</view>
						<view class="content-ip">经销商老板</view>
					</view>
				</view>
			</view>
		</view>

		<view class="header">服务器:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wx01</view>
		<view class="content">
			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">4.tomcat:lqb2bServer</text>
					<view v-show="this.flag[40] == 1 ? true : false" class="badge-server-content"></view>
					<image v-show="this.flag[40] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-server-img-gif"></image>
					<view v-show="this.flag[40] == 3 ? true : false" class="text-server-content">请求超时</view>
					<view v-if="this.flag[40] == 4 ? true : false" class="badge-server-content-red"></view>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">系统：</view>
						<view class="content-ip">B2B商城（经销商）</view>
					</view>
				</view>
				<!-- 域名1 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom-white">系统：</view>
						<view class="content-ip">B2B商城（终端）</view>
					</view>
				</view>
			</view>
		</view>

		<view class="header">服务器:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wx02</view>
		<view class="content">
			<view class="container">
				<!-- 服务器名 -->
				<view class="header-wrap">
					<text class="header-server">5.tomcat:yjlqwx_shg</text>
					<view v-show="this.flag[41] == 1 ? true : false" class="badge-server-content"></view>
					<image v-show="this.flag[41] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-server-img-gif"></image>
					<view v-show="this.flag[41] == 3 ? true : false" class="text-server-content">请求超时</view>
					<view v-if="this.flag[41] == 4 ? true : false" class="badge-server-content-red"></view>
				</view>
				<!-- 域名 -->
				<view class="flex-row">
					<view class="flex-row-content">
						<view class="content-dom">系统：</view>
						<view class="content-ip">送货员（广西）</view>
					</view>
				</view>
			</view>
		</view>

		<view class="header">GDCA网关服务器</view>
		<view class="content">
			<view class="container">
				<!-- 服务器名 -->
				<!-- <view class="header-wrap">
					<text class="header-server"></text>
				</view> -->
				<!-- 内网 -->
				<view class="flex-row-single">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.199.95</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[42] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[42] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[42] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[42] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>
		</view>

		<view class="header">管控平台</view>
		<view class="content">
			<view class="container">
				<!-- 服务器名 -->
				<!-- <view class="header-wrap">
					<text class="header-server"></text>
				</view> -->
				<!-- 内网 -->
				<view class="flex-row-single">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.199.193</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[43] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[43] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[43] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[43] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>
		</view>

		<view class="header">Token服务器</view>
		<view class="content">
			<view class="container">
				<!-- 服务器名 -->
				<!-- <view class="header-wrap">
					<text class="header-server"></text>
				</view> -->
				<!-- 内网 -->
				<view class="flex-row-single">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.199.107</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[44] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[44] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[44] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[44] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>
		</view>

		<view class="header">转发服务器</view>
		<view class="content">
			<view class="container">
				<!-- 服务器名 -->
				<!-- <view class="header-wrap">
					<text class="header-server"></text>
				</view> -->
				<!-- 内网 -->
				<view class="flex-row-single">
					<view class="flex-row-content">
						<view class="content-dom">内网：</view>
						<view class="content-ip">192.168.199.106</view>
					</view>
					<view class="badge">
						<view v-show="this.flag[45] == 1 ? true : false" class="badge-content"></view>
						<image v-show="this.flag[45] == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif"></image>
						<text v-show="this.flag[45] == 3 ? true : false" class="text-content">请求超时</text>
						<view v-if="this.flag[45] == 4 ? true : false" class="badge-content-red"></view>
					</view>
				</view>
			</view>
		</view>

		<view class="header" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">监控平台
			<view style="display: flex; flex-direction: row; justify-content: center;" @click="chooseDate">
				<text class="jk-text-time">{{this.timeString}}</text>
				<image class="jk-image" src="../../static/img/downArrow.png"></image>
			</view>
		</view>

		<datePicker ref="datePicker" @up-data="upData"></datePicker>

		<view class="jk-table">
			<!-- 标题 -->
			<view style="display: flex; justify-content: space-between; flex-direction: row; align-items: center;">
				<view class="jk-title">1.{{this.b2bTitle}}</view>
				<image v-show="this.b2bFlag == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif-new"></image>
			</view>
			<view v-show="this.b2bFlag == 1 ? (this.b2bSummaryFlag == 1 ? true : false) : false" class="jk-title-second">成功
				<text class="jk-text-blue">
					{{b2bSuccessNum}}
				</text>
				条，失败
				<text class="jk-text-blue" style="color: #df4a49;">
					{{b2bFailNum}}
				</text>
				条，平均时长
				<text class="jk-text-blue">
					{{b2bAverageNum}}
				</text>
				秒
			</view>

			<!-- 内容 -->
			<view v-show="this.b2bFlag == 1 ? true : false" class="jk-content">
				<view class="jk-content-second" v-for="(item,index) in b2bList" :key="index">
					<!-- 第一行内容 -->
					<view class="jk-row-wrap" @click="goToB2BDetail(item.request, item.name)">
						<view class="jk-row-wrap-first">
							<!-- 圆圈 -->
							<view class="jk-circle-wrap" :style="activationWrap(item.avg)">
								<view class="jk-circle" :style="activation(item.avg)"></view>
							</view>

							<view>
								<view class="jk-row-title">接口：{{item.name}}</view>
								<view class="jk-col-text-wrap">总请求次数
									<text class="jk-row-text">
										{{item.count}}
									</text>
									次</view>
							</view>
						</view>

						<view class="jk-col-wrap">
							<view class="jk-col-text">平均时长</view>
							<view class="jk-col-text-wrap">
								<text class="jk-col-text-num" :style="activationText(item.avg)">
									{{item.avg}}
								</text>
								秒
							</view>
						</view>
					</view>

					<!-- 第二行内容 -->
					<view class="jk-row-wrap">
						<view class="jk-left-row">
							<text class="jk-left-row-text">最大值</text>
							<text class="jk-left-row-text-wrap">
								<text class="jk-left-row-text-second">{{item.maxTime}}</text>
								秒</text>
						</view>
						<view class="jk-right-row">
							<text class="jk-left-row-text">最小值</text>
							<text class="jk-left-row-text-wrap">
								<text class="jk-left-row-text-second">{{item.minTime}}</text>
								秒</text>
						</view>
					</view>

					<!-- 第三行内容 -->
					<view style="display: flex; flex-direction: row; justify-content: space-between;">
						<view class="jk-left-row">
							<text class="jk-left-row-text">成功</text>
							<text class="jk-left-row-text-wrap">
								<text class="jk-left-row-text-second">{{item.success}}</text>
								次</text>
						</view>
						<view class="jk-right-row">
							<text class="jk-left-row-text">失败</text>
							<text class="jk-left-row-text-wrap">
								<text class="jk-left-row-text-second">{{item.error}}</text>
								次</text>
						</view>
					</view>
				</view>

				<view class="jk-button-more" @click="goToB2BMore">查看更多</view>

			</view>
		</view>

		<view class="jk-table">
			<!-- 标题 -->
			<view style="display: flex; justify-content: space-between; flex-direction: row; align-items: center;">
				<view class="jk-title">2.{{this.shgTitle}}</view>
				<image v-show="this.shgFlag == 2 ? true : false" src="/static/img/wait_w.gif" class="badge-img-gif-new"></image>
			</view>
			<view v-show="this.shgFlag == 1 ? (this.shgSummaryFlag == 1 ? true : false) : false" class="jk-title-second">成功
				<text class="jk-text-blue">
					{{shgSuccessNum}}
				</text>
				条，失败
				<text class="jk-text-blue" style="color: #df4a49;">
					{{shgFailNum}}
				</text>
				条，平均时长
				<text class="jk-text-blue">
					{{shgAverageNum}}
				</text>
				秒
			</view>

			<!-- 内容 -->
			<view v-show="this.shgFlag == 1 ? true : false" class="jk-content">
				<view class="jk-content-second" v-for="(item,index) in shgList" :key="index">
					<!-- 第一行内容 -->
					<view class="jk-row-wrap" @click="goToSHGDetail(item.request, item.name)">
						<view class="jk-row-wrap-first">
							<!-- 圆圈 -->
							<view class="jk-circle-wrap" :style="activationWrap(item.avg)">
								<view class="jk-circle" :style="activation(item.avg)"></view>
							</view>

							<view>
								<view class="jk-row-title">接口：{{item.name}}</view>
								<view class="jk-col-text-wrap">总请求次数
									<text class="jk-row-text">
										{{item.count}}
									</text>
									次</view>
							</view>
						</view>

						<view class="jk-col-wrap">
							<view class="jk-col-text">平均时长</view>
							<view class="jk-col-text-wrap">
								<text class="jk-col-text-num" :style="activationText(item.avg)">
									{{item.avg}}
								</text>
								秒
							</view>
						</view>
					</view>

					<!-- 第二行内容 -->
					<view class="jk-row-wrap">
						<view class="jk-left-row">
							<text class="jk-left-row-text">最大值</text>
							<text class="jk-left-row-text-wrap">
								<text class="jk-left-row-text-second">{{item.maxTime}}</text>
								秒</text>
						</view>
						<view class="jk-right-row">
							<text class="jk-left-row-text">最小值</text>
							<text class="jk-left-row-text-wrap">
								<text class="jk-left-row-text-second">{{item.minTime}}</text>
								秒</text>
						</view>
					</view>

					<!-- 第三行内容 -->
					<view style="display: flex; flex-direction: row; justify-content: space-between;">
						<view class="jk-left-row">
							<text class="jk-left-row-text">成功</text>
							<text class="jk-left-row-text-wrap">
								<text class="jk-left-row-text-second">{{item.success}}</text>
								次</text>
						</view>
						<view class="jk-right-row">
							<text class="jk-left-row-text">失败</text>
							<text class="jk-left-row-text-wrap">
								<text class="jk-left-row-text-second">{{item.error}}</text>
								次</text>
						</view>
					</view>
				</view>

				<view class="jk-button-more" @click="goToSHGMore">查看更多</view>

			</view>
		</view>

	</view>
</template>

<script>
	import datePicker from '@/components/date-picker/date-picker.vue'
	import urlConfig from '@/common/config.js'
	var _self;

	export default {
		components: {
			datePicker
		},
		data() {
			return {
				urlList: [
					'pingDomainName?action=pingVpnlqnature',
					'pingIpExtranet?action=pingIp130',
					'pingIpIntranet?action=pingIp235',

					'pingIpExtranet?action=pingIp140',

					'pingDomainName?action=pingZdqrlqnature',
					'pingIpExtranet?action=pingIp149',
					'pingIpIntranet?action=pingIp82',
					'pingDomainName?action=pingZdqr1lqnature',

					'pingDomainName?action=pingZdqr2lqnature',
					'pingIpExtranet?action=pingIp152',
					'pingIpIntranet?action=pingIp110',

					'pingDomainName?action=pingDownloadliquan',
					'pingIpExtranet?action=pingIp157',
					'pingDomainName?action=pingPaylqnature',

					'pingIpExtranet?action=pingIp181',

					'pingDomainName?action=pingVpnlqnature',
					'pingIpExtranet?action=pingIp183',
					'pingIpIntranet?action=pingIp235',

					'pingDomainName?action=pingZdqr2lqnature',
					'pingIpExtranet?action=pingIp184',
					'pingIpIntranet?action=pingIp110',

					'pingDomainName?action=pingGylliquan',
					'pingIpExtranet?action=pingIp185',
					'pingIpIntranet?action=pingIp222',

					'pingIpExtranet?action=pingIp186',

					'pingIpExtranet?action=pingIp118',
					'pingIpIntranet?action=pingIp254',

					'pingIpIntranet?action=pingIp31254',

					'pingIpIntranet?action=pingIp9254',

					'pingIpExtranet?action=pingIp37',
					'pingIpExtranet?action=pingIp250',
					'pingIpExtranet?action=pingIp188',
					'pingIpExtranet?action=pingIp139',
					'pingIpExtranet?action=pingIp221',
					'pingIpExtranet?action=pingIp9',
					'pingIpExtranet?action=pingIp116',
					'pingIpExtranet?action=pingIp31185',

					//http://zdqr2.lqnature.com/lqProject/project?action=projectofficeManager
					'project?action=projectofficeManager', //经理
					//			'project?action=projectofficeClerk', //文员
					//			'project?action=projectexecutiveDirector', //主管
					//			'project?action=projectsalesman', //业务员
					//			'project?action=projectchiefInspector', //总监

					'project?action=projectterminalOwner', //终端老板
					//			'project?action=projectdealerKeeper', //仓管

					'project?action=projectdealerOwner', //经销商老板

					//wx01
					'project?action=projectb2bDistriButor', //B2B经销商
					//			'project?action=projectb2bTerminal', //B2B终端

					//wx02
					'project?action=projectdeliveryBoy', //送货员

					'pingIpIntranet?action=pingGDCA', //GDCA网关服务器
					'pingIpIntranet?action=pingIpgk', //管控平台
					'pingIpIntranet?action=pingIpToken', //Token服务器
					'pingIpIntranet?action=pingIpzf' //转发服务器
				],
				flag: [
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0
				],
				b2bFlag: 2,
				b2bTitle: "b2b商城",
				shgFlag: 2,
				shgTitle: "送货工",
				workStream: 0,
				time: 5,
				timeString: '5分钟',
				b2bSuccessNum: 0,
				b2bFailNum: 0,
				b2bAverageNum: 0,
				b2bSummaryFlag: 0,
				shgSuccessNum: 0,
				shgFailNum: 0,
				shgAverageNum: 0,
				shgSummaryFlag: 0,
				b2bList: [],
				shgList: [],
			}
		},
		onLoad: function(options) {
			_self = this;
			// var ua = location.href.split('/');
			// var serveraddress = ua[0] + '//' + ua[2] + '/' + ua[3] + '/';
			// console.log(serveraddress)
			this.getB2BTotalRequest();
		},
		onShow() {
			this.getNetStatus();
		},
		computed: {
			activation() {
				return (content) => {
					if (content >= 60) {
						return {
							'background-color': '#df4a49'
						}
					} else if (content < 60 && content >= 20) {
						return {
							'background-color': '#fe9200'
						}
					} else if (content < 20 && content >= 10) {
						return {
							'background-color': '#fbea04'
						}
					} else if (content < 10 && content > 5) {
						return {
							'background-color': '#a9d08e'
						}
					} else if (content <= 5) {
						return {
							'background-color': '#1cabf2'
						}
					}
				}
			},
			activationText(content) {
				return (content) => {
					if (content >= 60) {
						return {
							'color': '#df4a49'
						}
					} else if (content < 60 && content >= 20) {
						return {
							'color': '#fe9200'
						}
					} else if (content < 20 && content >= 10) {
						return {
							'color': '#fbea04'
						}
					} else if (content < 10 && content > 5) {
						return {
							'color': '#a9d08e'
						}
					} else if (content <= 5) {
						return {
							'color': '#1cabf2'
						}
					}
				}
			},
			activationWrap(content) {
				return (content) => {
					if (content >= 60) {
						return {
							'border': '1px solid #df4a49'
						}
					} else if (content < 60 && content >= 20) {
						return {
							'border': '1px solid #fe9200'
						}
					} else if (content < 20 && content >= 10) {
						return {
							'border': '1px solid #fbea04'
						}
					} else if (content < 10 && content > 5) {
						return {
							'border': '1px solid #a9d08e'
						}
					} else if (content <= 5) {
						return {
							'border': '1px solid #1cabf2'
						}
					}
				}
			}
		},
		methods: {
			getB2BTotalRequest: function() { //第一次取数据
				uni.request({
					url: urlConfig,
					method: 'GET',
					data: {
						'action': 'getTotalSuccessEooroList',
						'time': this.time,
						'request': "",
						'avg': "",
						'startTime': "", //2020-11-09
						'endTime': "",
						'type': 1
					},
					success: (res) => {
						// console.log("B2BTotalRequest: ")
						// console.log(res);
						if (res.data.data) {
							_self.b2bAverageNum = res.data.data.avg;
							_self.b2bFailNum = res.data.data.error;
							_self.b2bSuccessNum = res.data.data.success;
							_self.b2bSummaryFlag = 1;
						} else {
							_self.b2bSummaryFlag = 0;
						}
						this.getB2BList();
					},
					fail: (err) => {
						// console.log("B2BTotalRequest Err: ")
						// console.log(err)
						_self.b2bSummaryFlag = 0;
						this.getB2BList();
					}
				});
			},
			getSHGTotalRequest: function() { //第一次取数据
				uni.request({
					url: urlConfig,
					method: 'GET',
					data: {
						'action': 'getTotalSuccessEooroList',
						'time': this.time,
						'request': "",
						'avg': "",
						'startTime': "", //2020-11-09
						'endTime': "",
						'type': 2
					},
					success: (res) => {
						// console.log("SHGTotalRequest: ")
						// console.log(res);
						if (res.data.data) {
							_self.shgAverageNum = res.data.data.avg;
							_self.shgFailNum = res.data.data.error;
							_self.shgSuccessNum = res.data.data.success;
							_self.shgSummaryFlag = 1;
						} else {
							_self.shgSummaryFlag = 0;
						}
						this.getSHGList();
					},
					fail: (err) => {
						// console.log("SHGTotalRequest Err: ")
						// console.log(err)
						_self.shgSummaryFlag = 0;
						this.getSHGList();
					}
				});
			},
			getB2BList: function() { //第一次取数据
				uni.request({
					url: urlConfig,
					method: 'GET',
					data: {
						'action': 'getB2BRequestList',
						'time': this.time,
						'request': "",
						'avg': "",
						'startTime': "", //2020-11-09
						'endTime': "",
						'page': 1,
						'pageSize': 3
					},
					success: (res) => {
						// console.log("B2BList: ")
						// console.log(res);
						if (res.data.data) {
							if (res.data.data.length != 0) {
								_self.b2bList = res.data.data;
								_self.b2bFlag = 1;
								_self.b2bTitle = "b2b商城";
							} else {
								_self.b2bFlag = 0;
								_self.b2bTitle = "b2b商城暂时没有更多数据";
							}
						} else {
							_self.b2bFlag = 0;
							if (res.data.errno) {
								_self.b2bTitle = "b2b商城" + res.data.errno;
							} else {
								_self.b2bTitle = "b2b商城" + "查询失败";
							}
							// uni.showToast({
							// 	title: "b2b商城" + res.data.errno,
							// 	icon: "none",
							// 	position: 'bottom'
							// })
							// setTimeout(() => {
							// 	uni.showLoading()
							// }, 1000);
						}
						this.getSHGTotalRequest();
					},
					fail: (err) => {
						// console.log("B2BList Err: ")
						// console.log(err)
						_self.b2bFlag = 0;
						_self.b2bTitle = "b2b商城" + "请切换时间重新请求";
						// uni.showToast({
						// 	title: "b2b商城接口请重新请求",
						// 	icon: "none",
						// 	position: 'bottom'
						// })
						// setTimeout(() => {
						// 	uni.showLoading()
						// }, 1000);
						this.getSHGTotalRequest();
					}
				});
				// uni.request({
				// 	url: '../../static/data/b2bApi.json',
				// 	success: function(res) {
				// 		let b2bList = [];
				// 		for (var i = 0; i < res.data.data.length; i++) {
				// 			b2bList.push(res.data.data[i]);
				// 		}
				// 		_self.b2bList = b2bList;
				// 	}
				// });
			},
			getSHGList: function() { //第一次取数据
				uni.request({
					url: urlConfig,
					method: 'GET',
					data: {
						'action': 'getShgRequestList',
						'time': this.time,
						'request': "",
						'avg': "",
						'startTime': "", //2020-11-09
						'endTime': "",
						'page': 1,
						'pageSize': 3
					},
					success: (res) => {
						// console.log("SHGList: ")
						// console.log(res);
						if (res.data.data) {
							if (res.data.data.length != 0) {
								_self.shgList = res.data.data;
								_self.shgFlag = 1;
								_self.shgTitle = "送货工";
							} else {
								_self.shgFlag = 0;
								_self.shgTitle = "送货工暂时没有更多数据";
							}
							// uni.hideLoading()
						} else {
							_self.shgFlag = 0;
							if (res.data.errno) {
								_self.shgTitle = "送货工" + res.data.errno;
							} else {
								_self.shgTitle = "送货工" + "查询失败";
							}
							// uni.hideLoading()
							// uni.showToast({
							// 	title: "送货工" + res.data.errno,
							// 	icon: "none",
							// 	position: 'bottom'
							// })
						}
					},
					fail: (err) => {
						// console.log("SHGList Err: ")
						// console.log(err)
						_self.shgFlag = 0;
						_self.shgTitle = "送货工" + "请切换时间重新请求";
						// uni.hideLoading()
						// uni.showToast({
						// 	title: "送货工接口请重新请求",
						// 	icon: "none",
						// 	position: 'bottom'
						// })
					}
				});
				// uni.request({
				// 	url: '../../static/data/shgApi.json',
				// 	success: function(res) {
				// 		let shgList = [];
				// 		for (var i = 0; i < 3; i++) {
				// 			shgList.push(res.data.data[i]);
				// 		}
				// 		_self.shgList = shgList;
				// 	}
				// });
			},
			chooseDate() {
				this.$refs['datePicker'].popUp()
			},
			GetChinese(strValue) { // eslint-disable-line
				if (strValue !== null && strValue !== '') {
					const reg = /[\u4e00-\u9fa5]/g;
					return strValue.match(reg).join('');
				}
				return '';
			},
			upData(e) {
				var chString = this.GetChinese(e.value)
				if (chString == '分钟') {
					this.time = parseInt(e.value)
					this.timeString = e.value
				} else if (chString == '小时') {
					this.time = parseInt(e.value) * 60
					this.timeString = e.value
				}
				this.b2bFlag = 2;
				this.shgFlag = 2;
				this.$forceUpdate()
				this.getB2BTotalRequest();
				// console.log(this.time)
				// console.log(this.timeString)
			},
			getNetStatus() {
				// setTimeout(() => {
				this.flag[this.workStream] = 2;
				this.$forceUpdate()
				setTimeout(() => {
					this.pollRequest()
				}, 1000);
				// }, 500);
			},
			pollRequest() {
				if (this.urlList.length > this.workStream) {
					var ua = location.href.split('/');
					var serveraddress = ua[0] + '//' + ua[2] + '/' + ua[3] + '/';
					// console.log(serveraddress)
					uni.request({
						url: serveraddress + this.urlList[this.workStream],
						timeout: 10000,
						success: (res) => {
							// console.log(res.data);
							if (res.data.data.ping == 1) {
								this.flag[this.workStream] = 1;
								if (this.workStream == 0) {
									this.workStream = this.workStream + 2;
									this.flag[1] = 1;
									this.flag[2] = 1;
								} else if (this.workStream == 5 && this.flag[4] == 1) {
									this.workStream = this.workStream + 2;
									this.flag[6] = 1;
									this.flag[7] = 1;
								} else if (this.workStream == 8) {
									this.workStream = this.workStream + 2;
									this.flag[9] = 1;
									this.flag[10] = 1;
								} else if (this.workStream == 12 && this.flag[11] == 1) {
									this.workStream = this.workStream + 1;
									this.flag[13] = 1;
								} else if (this.workStream == 15) {
									this.workStream = this.workStream + 2;
									this.flag[16] = 1;
									this.flag[17] = 1;
								} else if (this.workStream == 18) {
									this.workStream = this.workStream + 2;
									this.flag[19] = 1;
									this.flag[20] = 1;
								} else if (this.workStream == 21) {
									this.workStream = this.workStream + 2;
									this.flag[22] = 1;
									this.flag[23] = 1;
								}
							} else {
								this.flag[this.workStream] = 4;
							}
							this.$forceUpdate()
							this.workStream++;
							this.getNetStatus();
						},
						fail: (err) => {
							// console.log("err：" + err)
							this.flag[this.workStream] = 3;
							this.$forceUpdate()
							this.workStream++;
							this.getNetStatus();
						}
					});
				} else {
					this.workStream = 0;
					this.getNetStatus();
				}
			},
			goToB2BMore() {
				uni.navigateTo({
					url: '/pages/more/more?titleName=' + "B2B商城" + '&time=' + this.time
				})
			},
			goToSHGMore() {
				uni.navigateTo({
					url: '/pages/more/more?titleName=' + "送货工" + '&time=' + this.time
				})
			},
			goToB2BDetail(request, name) {
				uni.navigateTo({
					url: '/pages/detail/detail?titleName=' + "B2B商城" + '&request=' + request + '&name=' + name
				})
			},
			goToSHGDetail(request, name) {
				uni.navigateTo({
					url: '/pages/detail/detail?titleName=' + "送货工" + '&request=' + request + '&name=' + name
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #EEEEEE;
		padding: 8px;
	}

	.table {
		margin: auto;
		border-collapse: collapse;
		margin-top: 1%;
		margin-bottom: 5%;
		width: 95%;
		background-color: #EEEEEE;
	}

	.header {
		background-color: #78D9FF;
		padding: 12px 26px;
		font-size: 24px;
		font-weight: bold;
	}

	.content {
		margin-bottom: 4px;
	}

	.ysyw-content {
		margin-bottom: 80px;
	}

	.container {
		background-color: white;
		margin-bottom: 4px;
	}

	.header-wrap {
		text-align: justify;
		width: 100%;
	}

	.header-server {
		padding: 5px 15px 0px 15px;
		font-size: 24px;
		display: inline-block;
	}

	.badge-server-content {
		background-color: rgb(40, 255, 40);
		width: 26px;
		height: 26px;
		border-radius: 13px;
		margin-right: 60px;
		display: inline-block;
		float: right;
		margin-top: 8px;
		margin-bottom: 8px;
	}

	.badge-server-content-red {
		background-color: rgb(255, 0, 0);
		width: 26px;
		height: 26px;
		border-radius: 13px;
		margin-right: 60px;
		display: inline-block;
		float: right;
		margin-top: 8px;
		margin-bottom: 8px;
	}

	.badge-server-img-gif {
		margin-right: 60px;
		width: 26px;
		height: 26px;
		display: inline-block;
		float: right;
		padding-top: 8px;
		padding-bottom: 8px;
	}

	.text-server-content {
		margin-right: 40px;
		font-size: 16px;
		display: inline-block;
		float: right;
		padding-top: 8px;
		padding-bottom: 8px;
		color: #ff6c00;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 24px;
		padding-left: 90px;
	}

	.flex-row-single {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 24px;
		padding: 6px 0px 6px 90px;
	}

	.flex-row-content {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 65%;
	}

	.content-dom {
		color: #888888;
	}

	.content-ip {
		padding: 0px 6px;
	}

	.badge {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.badge-content {
		background-color: rgb(40, 255, 40);
		width: 26px;
		height: 26px;
		border-radius: 13px;
		margin-right: 60px;
	}

	.badge-content-red {
		background-color: rgb(255, 0, 0);
		width: 26px;
		height: 26px;
		border-radius: 13px;
		margin-right: 60px;
	}

	.badge-img-gif {
		margin-right: 60px;
		width: 26px;
		height: 26px;
	}

	.badge-img-gif-new {
		margin-right: 60px;
		margin-top: 20px;
		width: 26px;
		height: 26px;
	}

	.text-content {
		margin-right: 40px;
		font-size: 16px;
		color: #ff6c00;
	}

	.flex-row-oip-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 75%;
		justify-content: space-between;
	}

	.flex-row-oip {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.rich-content {
		align-self: right;
		position: relative;
		right: 0px;
		left: 0px;
		bottom: 0px;
		top: 0px;
	}

	.rich-img-content {
		height: 20px;
		width: 20px;
	}

	.rich-text-content {
		color: blue;
		font-size: 18px;
	}

	.content-dom-white {
		color: white;
	}

	.jk-table {
		background-color: #f4fdfd;
		margin-top: 10px;
		border-radius: 20px;
		padding: 10px;
	}

	.jk-text-time {
		font-weight: normal;
		font-size: 24px;
	}

	.jk-image {
		margin-left: 10px;
		width: 32px;
		height: 32px;
	}

	.jk-title {
		font-size: 27px;
		font-weight: bold;
		margin-left: 15px;
		margin-top: 20px;
	}

	.jk-title-second {
		font-size: 27px;
		font-weight: 300;
		margin-left: 15px;
		margin-top: 10px;
	}

	.jk-text-blue {
		color: #1cabf2;
		margin: 0px 10px;
		font-weight: bold;
	}

	.jk-content {
		margin-top: 10px;
	}

	.jk-content-second {
		margin-bottom: 10px;
		background-color: white;
		padding: 20px 20px 0px 20px;
		border-radius: 10px;
	}

	.jk-row-wrap {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1px solid #f3f4f3;
	}

	.jk-row-wrap-first {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-bottom: 20px;
	}

	.jk-circle-wrap {
		width: 24px;
		height: 24px;
		border-radius: 16px;
		margin-right: 20px;
		margin-left: 4px;
		padding: 2px;
		border: 1px solid #df4a49;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.jk-circle {
		width: 20px;
		height: 20px;
		border-radius: 10px;
		background-color: #df4a49;
	}

	.jk-row-title {
		font-weight: bold;
		font-size: 24px;
		margin-bottom: 10px;
	}

	.jk-row-text {
		font-weight: bold;
		font-size: 24px;
		margin: 0px 10px;
	}

	.jk-button-more {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70px;
		font-size: 26px;
		background-color: #daeafe;
		border-radius: 10px;
	}

	.jk-col-wrap {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.jk-col-text {
		color: #999;
		font-size: 24px;
		margin-bottom: 6px;
	}

	.jk-col-text-wrap {
		font-weight: 300;
		font-size: 24px;
	}

	.jk-col-text-num {
		font-weight: bold;
		font-size: 30px;
		color: #df4a49;
		margin-right: 10px;
	}

	.jk-left-row {
		flex: 1;
		border-right: 1px solid #f3f4f3;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20px 20px 20px 0px;
	}

	.jk-right-row {
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20px 0px 20px 20px;
	}

	.jk-left-row-text {
		font-size: 24px;
		color: #999;
	}

	.jk-left-row-text-wrap {
		font-size: 26px;
		font-weight: 300;
	}

	.jk-left-row-text-second {
		font-weight: bold;
		font-size: 26px;
		margin-right: 10px;
	}
</style>
