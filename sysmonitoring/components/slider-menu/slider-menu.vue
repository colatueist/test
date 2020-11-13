<template>
	<view>
		<uni-drawer :visible="visibleDrawer" mode="right" @close="closeDrawer()">
			<view class="filter-content-header">
				<view class="filter-content-header-title">
					<text>{{titleName}}筛选</text>
				</view>
			</view>
			<scroll-view class="drawer-list" :style="{'height': drawerHeight}">
				<block v-for="(item, index) in menuList" :key="index">

					<!-- 单选、多选  isMutiple是否支持多选-->
					<view v-if="item.type == 'custom' && item.detailList.length" class="block-line">
						<view class="drawer-list-title flex justify-between">
							<view>
								{{item.title}}
							</view>
							<text v-if="item.detailList.length>showLenght" @tap="showMore(index)">{{item.showMoreList ? '收起' : '更多'}}</text>
						</view>
						<view class="draer-list-con">
							<template v-if="!item.showMoreList">
								<text :style="{background: textItem.isSelected ? color : '', color:  textItem.isSelected ? '#1CABF2' : '', fontWeight: textItem.isSelected ? 500 : 400}"
								 v-if="idx<showLenght" v-for="(textItem, idx) in item.detailList" :key="idx" :class="textItem.isSelected ? 'on' : ''"
								 @tap="itemTap(idx,item.detailList,item.key, item.isMutiple)">
									{{textItem.title}}
								</text>
							</template>
							<template v-else>
								<text :style="{background: textItem.isSelected ? color : '', color:  textItem.isSelected ? '#1CABF2' : '', fontWeight: textItem.isSelected ? 500 : 400}"
								 v-for="(textItem, idx) in item.detailList" :key="idx" :class="textItem.isSelected ? 'on' : ''" @tap="itemTap(idx,item.detailList,item.key, item.isMutiple)">
									{{textItem.title}}
								</text>
							</template>
						</view>
					</view>

					<!-- 时间带时分秒范围选择 -->
					<view v-if="item.type == 'rangetime'">
						<view class="drawer-list-title flex justify-between">
							<view>
								{{item.title}}
							</view>
						</view>
						<view class="dateContent" @click="onShowDatePicker('rangetime', item.key)">
							<view>
								<template v-if="result[item.key] && result[item.key].length > 0">
									{{rangetime[0]}}
								</template>
							</view>
							<view>
								<template v-if="result[item.key] && result[item.key].length > 0">
									{{rangetime[1]}}
								</template>
							</view>
						</view>
					</view>

					<!-- 时间不带时分秒范围选择 -->
					<view v-if="item.type == 'range'" class="block-line">
						<view class="drawer-list-title-time flex" style="flex-direction: row; justify-content: flex-start;">
							<view class="choose-time-title">
								{{item.title}}
							</view>
							<view @click="onShowDatePicker('range', item.key)">
								<view>
									<template v-if="result[item.key] && result[item.key].length > 0">
										<view class="choose-time-content">{{range[0]}}-{{range[1]}}</view>
									</template>
									<template v-else>
										<view class="choose-time">{{item.content}}</view>
									</template>
								</view>
							</view>
						</view>
					</view>

					<!-- 关键字输入 -->
					<view v-if="item.type == 'typeString'" class="block-line">
						<view class="drawer-list-title-time flex" style="flex-direction: row; justify-content: flex-start; align-items: center;">
							<view class="choose-time-title">
								{{item.title}}
							</view>
							<input class="choose-time" :style="{color:keyString != ''?'black':'#999999',fontWeight:keyString != ''?'normal':'300'}"
							 v-model="keyString" placeholder-style="color:#999999" :placeholder="item.content" />
						</view>
					</view>

					<!-- 数值范围选择 -->
					<view v-if="item.type == 'rangenumber'">
						<view class="drawer-list-title flex justify-between">
							<view>
								{{item.title}}
							</view>
						</view>
						<view class="dateContent rangenumber-content flex">
							<view class="rangenumber-input">
								<input class="m-input" type="number" clearable v-model="minNumber" :placeholder="item.minPlaceholder || '最小值'"
								 @blur="numberInputBlur(item.key)"></input>
							</view>
							<text>-</text>
							<view class="rangenumber-input">
								<input class="m-input" type="number" clearable v-model="maxNumber" :placeholder="item.maxPlaceholder || '最大值'"
								 @blur="numberInputBlur(item.key)"></input>
							</view>
						</view>
					</view>

				</block>
			</scroll-view>

			<view class="flex" style="justify-content: flex-end;">
				<view class="filter-content-footer-item" style="background-color: #1ed7e6; color: white;" @tap="resetClick">
					<text>重置</text>
				</view>
				<view class="filter-content-footer-item" style="background-color: #1eaee6; color: white;" @tap="sureClick">
					<text>确定</text>
				</view>
			</view>

		</uni-drawer>

		<mx-date-picker :show="showPicker" :type="dateType" :value="dateValue" :show-tips="true" :show-seconds="true"
		 @confirm="onSelected" @cancel="onSelected" />

	</view>
</template>

<script>
	/***
	 * 筛选组件，当前支持多选、单选
	 * list、visibleDrawer（是否显示）参数必填
	 * item.type (custom 单选、多选、rangetime 时间范围带时分秒、range 时间范围不带时分秒、rangenumber 数字范围)
	 * item.isMutiple 是否支持多选
	 * 筛选后返回格式{"listName1":[value,value](多选),"listName2":"value"（单选）,...}
	 * rangenumber形式-可能为["",1]或[1,""]表示只有一个最大值或最小值
	 ***/
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
	import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
	export default {
		props: {
			list: {
				required: true,
				type: Array,
				default () {
					return [];
				},
			},
			visibleDrawer: {
				required: true,
				type: Boolean,
				default: false
			},
			titleName: {
				required: true,
				type: String,
				default: ""
			},
			color: {
				type: String,
				default: '#daf5fd',
			},
		},
		components: {
			uniDrawer,
			MxDatePicker
		},
		beforeCreate() {
			Date.prototype.Format = function(fmt) { //author: meizz
				var o = {
					"M+": this.getMonth() + 1, //月份 
					"d+": this.getDate(), //日 
					"h+": this.getHours(), //小时 
					"m+": this.getMinutes(), //分 
					"s+": this.getSeconds(), //秒 
					"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
					"S": this.getMilliseconds() //毫秒 
				};
				if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
				for (var k in o)
					if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" +
						o[
							k]).substr(("" + o[k]).length)));
				return fmt;
			}
		},
		created() {
			this.resetResult();
			this.resetMultiResult();
			uni.getSystemInfo({
				success: (res) => {
					this.drawerHeight = (res.windowHeight - uni.upx2px(220)) + 'px';
				}
			});
		},
		computed: {
			defaultSelectedObj() { // 保存初始状态
				return this.getSelectedObj()
			},
			selectedObj: {
				get() {
					return this.getSelectedObj()
				},
				set(newObj) {
					return newObj;
				}
			},
			menuList() {
				return this.list;
			}
		},
		data() {
			return {
				menuKey: 1,
				showLenght: 6,
				drawerHeight: '500px',
				selectDetailList: [],
				result: {},
				multiResult: {},
				showPicker: false,
				date: '',
				time: '',
				datetime: '',
				range: [new Date(new Date().getTime() - 24 * 60 * 60 * 1000).Format('yyyy/MM/dd'), new Date().Format('yyyy/MM/dd')],
				rangetime: [new Date(new Date().getTime() - 24 * 60 * 60 * 1000).Format('yyyy/MM/dd hh:mm'), new Date().Format(
					'yyyy/MM/dd hh:mm')],
				dateType: 'rangetime',
				dateValue: '',
				keyString: '',
				minNumber: '',
				maxNumber: '',
			};
		},

		methods: {
			getSelectedObj() {
				return this.commonResultObj();
			},
			resetResult() {
				this.result = this.commonResultObj();
			},
			resetMultiResult() {
				this.multiResult = this.commonResultObj();
			},
			commonResultObj() {
				let obj = {};
				this.menuList.map((item) => {
					item.isMutiple ? obj[item.key] = [] : (item.type === "range" || item.type === "rangetime") ? obj[item.key] = [] :
						obj[item.key] = '';
				})
				return obj;
			},
			//筛选项选中或取消
			itemTap(index, list, key, isMutiple) {
				if (isMutiple == true) {
					list[index].isSelected = !list[index].isSelected;
					if (list[index].isSelected) {
						this.selectedObj[key].push(list[index].value);
					} else {
						list[index].isSelected = false;
						var idx = this.selectedObj[key].indexOf(list[index].value);
						this.selectedObj[key].splice(idx, 1);
					}
					this.multiResult[key] = this.selectedObj[key];
				} else {
					this.result[key] = list[index].isSelected ? '' : list[index].value;
					for (let i = 0; i < list.length; i++) {
						if (index == i && !list[i].isSelected) {
							list[i].isSelected = true
						} else {
							list[i].isSelected = false
						}
					}
				}

				// #ifdef H5
				this.$forceUpdate();
				// #endif
			},

			sureClick() {
				let str_result = {};
				let hasChoose = false;
				for (let key in this.result) {
					if (typeof this.result[key] == 'object') {
						str_result[key] = this.result[key].join(',');
						if (!hasChoose) {
							hasChoose = this.result[key].join(',') !== '' ? true : false;
						}
					} else {
						str_result[key] = this.result[key];
						if (!hasChoose) {
							hasChoose = this.result[key] !== '' ? true : false;
						}
					}
				}

				for (let key in this.multiResult) {
					if (typeof this.multiResult[key] == 'object') {
						str_result[key] = this.multiResult[key].join(',');
						if (!hasChoose) {
							hasChoose = this.multiResult[key].join(',') !== '' ? true : false;
						}
					} else {
						str_result[key] = this.multiResult[key];
						if (!hasChoose) {
							hasChoose = this.multiResult[key] !== '' ? true : false;
						}
					}
				}

				this.$emit("result", {
					'str_result': str_result,
					'result': this.result,
					'multiResult': this.multiResult,
					'hasChoose': hasChoose,
					'stringKey': this.keyString,
					'visibleDrawer': false
				});
			},
			resetClick(list, key) {
				this.minNumber = '';
				this.maxNumber = '';
				this.keyString = '';
				for (let key in this.result) {
					if (typeof this.result[key] == 'object') {
						this.result[key] = [];
					} else {
						this.result[key] = '';
					}
				}
				for (let key in this.multiResult) {
					if (typeof this.multiResult[key] == 'object') {
						this.multiResult[key] = [];
					} else {
						this.multiResult[key] = '';
					}
				}
				for (let i = 0; i < this.menuList.length; i++) {
					if (this.menuList[i].type == 'custom') {
						for (let j = 0; j < this.menuList[i].detailList.length; j++) {
							this.menuList[i].detailList[j].isSelected = false;
						}
					}
				}
				// #ifdef H5
				this.$forceUpdate();
				// #endif

				this.$emit("resetResult");
			},
			closeDrawer() {
				this.$emit("closeDrawer", {
					'changeStatus': true,
					'visibleDrawer': false
				});
			},

			showMore(index) {
				this.menuList[index].showMoreList = !this.menuList[index].showMoreList;
				++this.menuKey;
				// #ifdef H5
				this.$forceUpdate();
				// #endif
			},

			onShowDatePicker(type, key) { //显示
				this.dateType = type;
				this.dateValue = this[type];
				this.showPicker = true;
				this.tempKey = key;
			},

			onSelected(e, key) { //选择
				this.showPicker = false;
				if (e) {
					this[this.dateType] = e.value;
					this.result[this.tempKey] = e.value;
					//选择的值
					// console.log('value => ' + e.value);
					//原始的Date对象
					// console.log('date => ' + e.date);
				}
			},

			numberInputBlur(key) {
				if (this.minNumber != '' && this.maxNumber != '' && parseFloat(this.minNumber) > parseFloat(this.maxNumber)) {
					let temp = this.minNumber;
					this.minNumber = this.maxNumber;
					this.maxNumber = temp;
				}
				this.result[key] = [];
				this.result[key].push(this.minNumber && parseFloat(this.minNumber));
				this.result[key].push(this.maxNumber && parseFloat(this.maxNumber));
			}
		}
	}
</script>

<style lang="scss" scoped>
	.flex {
		display: flex;
	}

	.justify-between {
		justify-content: space-between;
	}

	view,
	scroll-view,
	swiper,
	button,
	input,
	textarea,
	label,
	navigator,
	image {
		box-sizing: border-box;
	}

	/* 筛选样式 */
	.drawer-list {
		padding: 0 30px;
		font-size: 26px;
	}

	input {
		font-size: 26px;
	}

	.drawer-list .drawer-list-title {
		font-size: 34px;
		line-height: 48px;
		margin: 28px 0 18px;
		color: rgba(34, 34, 34, 1);
	}

	.drawer-list-title-time {
		font-size: 34px;
		line-height: 48px;
		margin: 28px 0 10px;
		color: rgba(34, 34, 34, 1);
	}

	.drawer-list .draer-list-con>text {
		background: #f5f5f5;
		border-radius: 12px;
		color: #666666;
		font-size: 28px;
		padding: 10px 38px;
		margin: 10px 30px 10px 0;
		display: inline-block;
	}

	.filter-content-header {
		padding: 30px;
		background-color: #f5f5f5;
	}

	.filter-content-header-title {
		font-size: 26;
	}

	.filter-content-footer-item {
		width: 160px;
		height: 72px;
		line-height: 72px;
		text-align: center;
		border-radius: 12px;
		margin: 24px;
		margin-left: 0px;
	}

	.filter-content-footer-item:first-child {
		color: #F00A6B;
	}

	.picker {
		z-index: 99999 !important;
	}

	.dateContent {
		&>view {
			background: rgba(244, 244, 244, 1);
			border-radius: 8px;
			width: 90%;
			height: 64px;
			line-height: 64px;
			margin-bottom: 12px;
		}
	}

	.rangenumber-content {
		&>text {
			display: inline-block;
			width: 10%;
			text-align: center;
			height: 64px;
			line-height: 64px;
		}

		.rangenumber-input {
			width: 45%;
			display: inline-block;
			padding: 0 12px;

			.m-input {
				height: 64px;
				line-height: 64px;
			}
		}
	}

	/deep/.picker {
		z-index: 999;
	}

	.block-line {
		border-top: 1px solid #f3f4f3;
		padding-bottom: 20px;
	}

	.choose-time {
		color: #999999;
		font-weight: 300;
		margin-left: 40px;
		font-size: 30px;
	}

	.choose-time-content {
		font-size: 30px;
		margin-left: 40px;
	}

	.choose-time-title {
		width: 28%;
	}
</style>
