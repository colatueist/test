<template>
	<view class="table">

		<sliderMenu @touchmove.stop :list="list" :titleName="titleName" :visibleDrawer="visibleDrawer" @result="resultCondition"
		 @closeDrawer="closeDrawer" @resetResult="resetResult" />

		<view style="display: flex; flex-direction: row; justify-content: space-between; align-items: flex-end;">
			<view v-show="this.flag == 1 ? (this.summaryFlag == 1 ? true : false) : false" class="jk-title-second">总成功
				<text class="jk-text-blue">
					{{successNum}}
				</text>
				条，失败
				<text class="jk-text-blue" style="color: #df4a49;">
					{{failNum}}
				</text>
				条，平均时长
				<text class="jk-text-blue">
					{{averageNum}}
				</text>
				秒
			</view>

			<view style="display: flex; flex-direction: row; justify-content: center;" @click="openFilter">
				<text class="jk-text-time">筛选</text>
				<image class="jk-image" src="../../static/img/filter.png"></image>
			</view>
		</view>

		<!-- 内容 -->
		<view v-show="this.flag == 1 ? true : false" class="jk-content">
			<view class="jk-content-second" v-for="(item,index) in moreList" :key="index">
				<!-- 第一行内容 -->
				<view class="jk-row-wrap" @click="goToDetail(item.request, item.name)">
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
		</view>

		<uniLoadMore v-show="this.flag == 1 ? true : false" :status="status" :content-text="contentText" color="#CCCCCC"
		 iconType="circle"></uniLoadMore>

		<view v-show="this.flag != 1 ? true : false" class="no-data" :style="{'height': setHeight + 'px'}">
			没有更多数据了
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
				successNum: 0,
				failNum: 0,
				averageNum: 0,
				visibleDrawer: false,
				list: [{
						title: "接口",
						type: "typeString", //range不带时分秒范围筛选  rangetime带时分秒范围筛选
						key: "stringKey",
						content: "请输入搜索关键字"
					}, {
						title: "请求时间",
						type: "range", //range不带时分秒范围筛选  rangetime带时分秒范围筛选
						key: "time",
						content: "点击选择时间"
					},
					{
						title: "请求时长",
						type: "custom",
						key: "typeKey",
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
				type: 0,
				time: 0,
				flag: 0,
				page: 1,
				request: "",
				avg: "",
				startTime: "",
				endTime: "",
				summaryFlag: 0,
				moreList: [],
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
			time
		}) {
			uni.setNavigationBarTitle({
				title: titleName
			})
			_self = this;
			this.titleName = titleName
			if (titleName == "B2B商城") {
				this.type = 1;
			} else {
				this.type = 2;
			}
			//方便调试
			if (typeof(time) == "undefined") {
				this.time = 360
			} else {
				this.time = parseInt(time)
			}

			uni.getSystemInfo({
				success: function(res) {
					_self.setHeight = res.windowHeight * 0.8
				}
			})

			uni.showLoading();
			this.getTotalRequest();
		},
		// 下拉刷新
		onPullDownRefresh() {
			uni.showLoading();
			this.page = 1
			this.moreList = []
			this.getTotalRequest();
		},
		// 上拉加载
		onReachBottom: function() {
			_self.status = 'more'
			uni.showLoading();
			this.loadMore()
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
			goToDetail(request, name) {
				uni.navigateTo({
					url: '/pages/detail/detail?titleName=' + this.titleName + '&request=' + request + '&name=' + name
				})
			},
			resultCondition(obj) {
				if (obj.stringKey) {
					if (typeof(obj.stringKey) == "undefined") {
						this.request = ""
					} else {
						this.request = obj.stringKey
					}
					// console.log("this.request	")
					// console.log(this.request)
				}
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
						this.avg = ""
					} else {
						this.avg = obj.result.typeKey[0]
					}
					// console.log("this.avg	")
					// console.log(this.avg)
				}
				this.visibleDrawer = obj.visibleDrawer
				uni.showLoading();
				this.page = 1
				this.moreList = []
				this.getTotalRequest();
			},
			resetResult(obj) {
				this.request = ""
				this.startTime = ""
				this.endTime = ""
				this.avg = ""
			},
			closeDrawer(obj) {
				this.visibleDrawer = obj.visibleDrawer
			},
			openFilter() {
				this.visibleDrawer = true
			},
			getTotalRequest: function() { //第一次取数据
				// console.log("============")
				// console.log(this.time)
				// console.log(this.request)
				// console.log(this.avg)
				// console.log(this.startTime)
				// console.log(this.endTime)
				// console.log(this.type)
				// console.log(this.page)
				// console.log("============")
				uni.request({
					url: urlConfig,
					method: 'GET',
					data: {
						'action': 'getTotalSuccessEooroList',
						'time': this.time,
						'request': this.request,
						'avg': this.avg,
						'startTime': this.startTime, //this.startTime,//调试 "2020-11-09"
						'endTime': this.endTime, //this.endTime,//调试 "2020-11-09"
						'type': this.type //this.type//调试 1
					},
					success: (res) => {
						// console.log("TotalRequest: ")
						// console.log(res);
						if (res.data.data) {
							_self.averageNum = res.data.data.avg;
							_self.failNum = res.data.data.error;
							_self.successNum = res.data.data.success;
							_self.summaryFlag = 1;
						} else {
							_self.summaryFlag = 0;
						}
						this.getMoreList();
					},
					fail: (err) => {
						// console.log("TotalRequest Err: ")
						// console.log(err)
						_self.summaryFlag = 0;
						this.getMoreList();
					}
				});
			},
			getMoreList: function() { //第一次回去数据
				_self.status = 'more';
				uni.request({
					url: urlConfig,
					method: 'GET',
					data: {
						'action': this.type == 1 ? "getB2BRequestList" : "getShgRequestList", //this.type == 1 ? "getB2BRequestList" : "getShgRequestList",//调试 "getB2BRequestList"
						'time': this.time,
						'request': this.request,
						'avg': this.avg,
						'startTime': this.startTime, //this.startTime,//调试 "2020-11-09"
						'endTime': this.endTime, //this.endTime,//调试 "2020-11-09"
						'page': this.page,
						'pageSize': 10
					},
					success: function(res) {
						// console.log("List: ")
						// console.log(res);
						uni.hideLoading()
						if (res.data.data) {
							if (res.data.data.length != 0) {
								_self.moreList = res.data.data;
								_self.flag = 1;
							} else {
								_self.flag = 0;
							}
						} else {
							_self.flag = 0;
							if (res.data.errno) {
								uni.showToast({
									title: _self.titleName + res.data.errno,
									icon: "none",
									position: 'bottom'
								})
							} else {
								uni.showToast({
									title: _self.titleName + "查询失败",
									icon: "none",
									position: 'bottom'
								})
							}
						}
						// let moreList = [];
						// for (var i = 0; i < 5; i++) {
						// 	moreList.push(res.data.data[i]);
						// }
						// _self.moreList = moreList;
						// if (res.data.pages_count == res.data.data.length) {
						// 	uni.showToast({
						// 		title: '已经最新',
						// 		icon: 'none',
						// 		duration: 2000
						// 	});
						// }
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
				// console.log("listLength: " + _self.moreList.length);
				if (_self.status != 'more') { //loadingType!=0;直接返回
					return false;
				}
				_self.status = 'loading'
				this.page++
				// console.log("page: " + this.page)
				uni.request({
					url: urlConfig,
					method: 'GET',
					data: {
						'action': this.type == 1 ? "getB2BRequestList" : "getShgRequestList", //this.type == 1 ? "getB2BRequestList" : "getShgRequestList",//调试 "getB2BRequestList"
						'time': this.time,
						'request': this.request,
						'avg': this.avg,
						'startTime': this.startTime, //this.startTime,//调试 "2020-11-09"
						'endTime': this.endTime, //this.endTime,//调试 "2020-11-09"
						'page': this.page,
						'pageSize': 10
					},
					success: function(res) {
						// console.log("List: ")
						// console.log(res);
						uni.hideLoading()
						if (res.data.data) {
							if (res.data.data.length != 0) {
								for (var i = 0; i < res.data.data.length; i++) {
									_self.moreList = _self.moreList.concat(res.data.data[i]);
								}
							} else {
								_self.status = 'noMore';
								return false;
							}
						} else {
							if (res.data.errno) {
								uni.showToast({
									title: _self.titleName + res.data.errno,
									icon: "none",
									position: 'bottom'
								})
							} else {
								uni.showToast({
									title: _self.titleName + "查询失败",
									icon: "none",
									position: 'bottom'
								})
							}
						}
						// if (_self.moreList.length == res.data.pages_count) { //没有数据
						// 	_self.status = 'noMore';
						// 	uni.hideNavigationBarLoading(); //关闭加载动画
						// 	return false;
						// }
						// page++; //每触底一次 page +1
						// for (var i = _self.moreList.length; i < _self.moreList.length + 3; i++) {
						// 	_self.moreList = _self.moreList.concat(res.data.data[i]); //将数据拼接在一起
						// 	if (_self.moreList.length == res.data.pages_count) { //没有数据
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

	.jk-title-second {
		font-size: 27px;
		font-weight: 300;
		margin-left: 5px;
		margin-top: 10px;
	}

	.jk-text-blue {
		color: #1cabf2;
		margin: 0px 10px;
		font-weight: bold;
	}

	.jk-content {
		margin-top: 15px;
		margin-bottom: 20px;
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

	.jk-col-text-wrap {
		font-weight: 300;
		font-size: 24px;
	}

	.jk-row-text {
		font-weight: bold;
		font-size: 24px;
		margin: 0px 10px;
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

	.jk-image {
		margin-left: 10px;
		width: 32px;
		height: 32px;
	}

	.jk-text-time {
		font-weight: 300;
		font-size: 24px;
	}

	.jk-right-row {
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20px 0px 20px 20px;
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
