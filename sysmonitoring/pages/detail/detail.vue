<template>
	<view class="table">

		<sliderMenu @touchmove.stop :list="list" titleName="接口详情" :visibleDrawer="visibleDrawer" @result="resultCondition"
		 @closeDrawer="closeDrawer" />

		<view class="header">
			<view class="jk-title-second">{{titleName}}接口明细</view>

			<view style="display: flex; flex-direction: row; justify-content: center;" @click="openFilter">
				<text class="jk-text-time">筛选</text>
				<image class="jk-image" src="../../static/img/filter.png"></image>
			</view>
		</view>

		<!-- 内容 -->
		<view class="content-title">
			<!-- 标题 -->
			<view class="row-wrap">
				<view class="row-text" style="width: 40%;">请求时间</view>
				<view class="row-text-second" style="width: 8%;">状态</view>
				<view class="row-text-second" style="width: 18%; text-align: end">请求时长</view>
				<view class="row-text-second" style="width: 23%;">请求数据大小</view>
			</view>

			<view class="row-cell-wrap" v-for="(item,index) in detailList" :key="index">
				<view class="row-content-text" style="width: 40%;">{{timestampTransfer(item.timestamp)}}</view>
				<view class="row-content-text-second" style="width: 8%;">{{item.status}}</view>
				<view class="row-content-text-second" style="width: 18%; text-align: end;">
					<text class="row-content-text-blue" :style="activationText(item.request_time)">{{item.request_time}}</text>
					秒</view>
				<view class="row-content-text-second" style="width: 23%;">{{item.request_length}}k</view>
			</view>

			<uniLoadMore v-show="this.flag == 1 ? true : false" :status="status" :content-text="contentText" color="#CCCCCC"
			 iconType="circle"></uniLoadMore>
			<!-- <text class="loading-text">
				{{loadingType === 0 ? contentText.contentdown : (loadingType === 1 ? contentText.contentrefresh : contentText.contentnomore)}}</text> -->

			<view v-show="this.flag != 1 ? true : false" class="no-data" :style="{'height': setHeight + 'px'}">
				没有更多数据了
			</view>

		</view>

	</view>
</template>

<script>
	import sliderMenu from "@/components/slider-menu/slider-menu.vue";
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import urlConfig from '@/common/config.js'
	var _self

	export default {
		data() {
			return {
				setHeight: 0,
				visibleDrawer: false,
				list: [{
						title: "请求时间",
						type: "range", //range不带时分秒范围筛选  rangetime带时分秒范围筛选
						key: "time",
						content: "点击选择时间"
					},
					{
						title: "状态",
						type: "custom",
						key: "typeKey",
						isMutiple: false, //是否多选
						detailList: [{
								title: "成功",
								value: "1",
							},
							{
								title: "失败",
								value: "2",
							},
						],
					},
					{
						title: "请求时长",
						type: "custom",
						key: "timeKey",
						isMutiple: false, //是否多选
						detailList: [{
								title: "≤5秒",
								value: "1",
							},
							{
								title: ">5秒<10秒",
								value: "2",
							},
							{
								title: "≥10秒<20秒",
								value: "3",
							},
							{
								title: "≥20秒<60秒",
								value: "4",
							},
							{
								title: "≥60秒",
								value: "5",
							}
						],
					},
				],
				titleName: "",
				flag: 0,
				page: 1,
				request: "",
				avg: "",
				startTime: "",
				endTime: "",
				requestStatus: "",
				detailList: [],
				status: 'more',
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			}
		},
		components: {
			sliderMenu,
			uniLoadMore
		},
		onLoad({
			titleName,
			request,
			name
		}) {
			_self = this;
			this.titleName = titleName + name
			this.request = request

			uni.getSystemInfo({
				success: function(res) {
					_self.setHeight = res.windowHeight * 0.8
				}
			})

			uni.showLoading();
			this.getDetailList();
		},
		// 下拉刷新
		onPullDownRefresh() {
			uni.showLoading();
			this.page = 1
			this.detailList = []
			this.getDetailList();
		},
		// 上拉加载
		onReachBottom: function() {
			_self.status = 'more'
			uni.showLoading();
			this.loadMore()
		},
		computed: {
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
		},
		methods: {
			resultCondition(obj) {
				if (obj.result) {
					if (typeof(obj.result.time[0]) == "undefined" || typeof(obj.result.time[1]) == "undefined") {
						this.startTime = ""
						this.endTime = ""
					} else {
						this.startTime = obj.result.time[0]
						this.endTime = obj.result.time[1]
					}
					// console.log("this.startTime	this.endTime	")
					// console.log(this.startTime)
					// console.log(this.endTime)
				}
				if (obj.result) {
					if (typeof(obj.result.typeKey[0]) == "undefined") {
						this.requestStatus = ""
					} else {
						if (obj.result.typeKey[0] == "1") {
							this.requestStatus = "200"
						} else if (obj.result.typeKey[0] == "2") {
							this.requestStatus = "400"
						} else {
							this.requestStatus = ""
						}
					}
					// console.log("this.requestStatus	")
					// console.log(this.requestStatus)
				}
				if (obj.result) {
					if (typeof(obj.result.timeKey[0]) == "undefined") {
						this.avg = ""
					} else {
						this.avg = obj.result.timeKey[0]
					}
					// console.log("this.avg	")
					// console.log(this.avg)
				}
				this.visibleDrawer = obj.visibleDrawer
				uni.showLoading();
				this.page = 1
				this.detailList = []
				this.getDetailList();
			},
			closeDrawer(obj) {
				this.visibleDrawer = obj.visibleDrawer
			},
			openFilter() {
				this.visibleDrawer = true
			},
			timestampTransfer(num) { //时间戳数据处理
				if (/^bai[0-9]+$/.test(num)) {
					let date = new Date(parseInt(num));
					//时间戳为10位需*1000，时间戳为13位的话不需乘1000
					let y = date.getFullYear();
					let MM = date.getMonth() + 1;
					MM = MM < 10 ? ('0' + MM) : MM; //月补0
					let d = date.getDate();
					d = d < 10 ? ('0' + d) : d; //天补0
					let h = date.getHours();
					h = h < 10 ? ('0' + h) : h; //小时补0
					let m = date.getMinutes();
					m = m < 10 ? ('0' + m) : m; //分钟补0
					let s = date.getSeconds();
					s = s < 10 ? ('0' + s) : s; //秒补0
					return y + '/' + MM + '/' + d + ' ' + h + ':' + m + ':' + s;
				} else {
					var tempString = num;
					var stringLength = tempString.length;
					var shortString = num.substring(0, stringLength - 2);
					// console.log(shortString);
					return shortString
				}
			},
			getDetailList: function() { //第一次回去数据
				_self.status = 'more';
				uni.request({
					url: urlConfig,
					method: 'GET',
					data: {
						'action': "getRequestInfoList",
						'request': this.request, //this.request,//调试 "/lqb2bServer/product?action=getItemByLoveProcList"
						'avg': this.avg,
						'startTime': this.startTime, //this.startTime,//调试 ""
						'endTime': this.endTime, //this.endTime,//调试 "2020-11-09"
						'status': this.requestStatus,
						'page': this.page,
						'pageSize': 30
					},
					success: function(res) {
						uni.hideLoading()
						if (res.data.data) {
							if (res.data.data.list.length != 0) {
								_self.detailList = res.data.data.list;
								_self.flag = 1;
							} else {
								_self.flag = 0;
							}
						} else {
							_self.flag = 0;
							if (res.data.errno) {
								uni.showToast({
									title: _self.titleName + "接口" + res.data.errno,
									icon: "none",
									position: 'bottom'
								})
							} else {
								uni.showToast({
									title: _self.titleName + "接口" + "查询失败",
									icon: "none",
									position: 'bottom'
								})
							}
						}
						// let detailList = [];
						// for (var i = 0; i < 30; i++) {
						// 	detailList.push(res.data.data[i]);
						// }
						// _self.detailList = detailList;
						// if (res.data.pages_count == res.data.data.length) {
						// 	uni.showToast({
						// 		title: '已经最新',
						// 		icon: 'none',
						// 		duration: 2000
						// 	});
						// }
						// uni.hideNavigationBarLoading();
						uni.stopPullDownRefresh(); //得到数据后停止下拉刷新
					},
					fail: (err) => {
						// console.log("List Err: ")
						// console.log(err)
						_self.flag = 0;
						uni.hideLoading()
						uni.showToast({
							title: _self.titleName + "接口请重新请求",
							icon: "none",
							position: 'bottom'
						})
						uni.stopPullDownRefresh();
					}
				});
			},
			loadMore: function() {
				// console.log(_self.detailList.length);
				if (_self.status != 'more') { //loadingType!=0;直接返回
					return false;
				}
				_self.status = 'loading';
				this.page++
				// console.log("page: " + this.page)
				uni.request({
					url: urlConfig,
					method: 'GET',
					data: {
						'action': "getRequestInfoList",
						'request': this.request, //this.request,//调试 "/lqb2bServer/product?action=getItemByLoveProcList"
						'avg': this.avg,
						'startTime': this.startTime, //this.startTime,//调试 ""
						'endTime': this.endTime, //this.endTime,//调试 "2020-11-09"
						'status': this.requestStatus,
						'page': this.page,
						'pageSize': 30
					},
					success: function(res) {
						uni.hideLoading()
						if (res.data.data) {
							if (res.data.data.list.length != 0) {
								for (var i = 0; i < res.data.data.list.length; i++) {
									_self.detailList = _self.detailList.concat(res.data.data.list[i]);
								}
							} else {
								_self.status = 'noMore';
								return false;
							}
						} else {
							if (res.data.errno) {
								uni.showToast({
									title: _self.titleName + "接口" + res.data.errno,
									icon: "none",
									position: 'bottom'
								})
							} else {
								uni.showToast({
									title: _self.titleName + "接口" + "查询失败",
									icon: "none",
									position: 'bottom'
								})
							}
						}
						// if (_self.detailList.length == res.data.pages_count) { //没有数据
						// 	_self.status = 'noMore';
						// 	uni.hideNavigationBarLoading(); //关闭加载动画
						// 	return false;
						// }
						// page++; //每触底一次 page +1
						// // console.log(page);
						// for (var i = _self.detailList.length; i < _self.detailList.length + 10; i++) {
						// 	_self.detailList = _self.detailList.concat(res.data.data[i]); //将数据拼接在一起
						// 	if (_self.detailList.length == res.data.pages_count) { //没有数据
						// 		_self.status = 'noMore';
						// 		uni.hideNavigationBarLoading(); //关闭加载动画
						// 		return false;
						// 	}
						// }
						_self.status = 'more'; //将loadingType归0重置
						// uni.hideNavigationBarLoading(); //关闭加载动画
					},
					fail: (err) => {
						// console.log("List Err: ")
						// console.log(err)
						uni.hideLoading()
						uni.showToast({
							title: _self.titleName + "接口请重新请求",
							icon: "none",
							position: 'bottom'
						})
					}
				});
			}
		},
	}
</script>

<style>
	page {
		background-color: white;
	}

	.table {
		background-color: #EEEEEE;
	}

	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		padding: 20px 30px;
	}

	.jk-title-second {
		font-size: 28px;
		font-weight: bold;
	}

	.jk-image {
		margin-left: 10px;
		width: 32px;
		height: 32px;
	}

	.jk-text-time {
		font-weight: 300;
		font-size: 24px;
	}

	.content-title {
		background-color: white;
		padding: 30px 0px;
	}

	.row-wrap {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 20px;
	}

	.row-cell-wrap {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 10px;
	}

	.row-text {
		color: #999999;
		font-size: 28px;
		font-weight: 300;
		padding-left: 20px;
	}

	.row-text-second {
		color: #999999;
		font-size: 28px;
		font-weight: 300;
		text-align: center;
	}

	.row-content-text {
		font-size: 28px;
		padding-left: 20px;
	}

	.row-content-text-blue {
		font-size: 28px;
		font-weight: bold;
		color: #1CABF2;
	}

	.row-content-text-second {
		font-size: 28px;
		text-align: center;
	}

	.loading-text {
		height: 60px;
		line-height: 60px;
		font-size: 26px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		color: #CCCCCC;
		font-weight: 300;
	}

	.no-data {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		color: #CCCCCC;
		font-size: 30px;
	}
</style>
