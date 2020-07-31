<template>
	<view class="homePage">
		<view class="headerSection">
			<view class="header-ifno" :style="{'height':statusBarHeight+'px'}"></view>
			<view class="header-search" :style="{'height':searchHeight+'px'}">
				<view class="searchBox" :style="{'width':searchWidth+'px'}">
					<uni-icons type="search" size="20"></uni-icons>
					<view class="searchText">
						<text>vue</text>
						<text>react</text>
						<text>uni-app</text>
					</view>
				</view>
			</view>
		</view>
		<view class="scrollBarCont">
			<tab-scroll :labelList="labelList" @changeTab="changeTab"></tab-scroll>
			<view class="settingSection">
				<uni-icons type="gear" size="20"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelList: [],
				statusBarHeight: '',
				searchHeight: '44',
				searchWidth: '',
				btnPosition: {}
			}
		},
		onLoad() {
			//#ifdef MP-WEIXIN
			this.btnPosition = uni.getMenuButtonBoundingClientRect();
			// this.searchHeight = btnPosition
			console.log(this.btnPosition);
			this.searchWidth = this.btnPosition.left - 24;
			// #endif
			uni.getSystemInfo({
				success: res => {
					this.statusBarHeight = res.statusBarHeight;
				},
				fail: err => {
					console.log(err)
				}
			})
			uniCloud.callFunction({
				name: "getLabel",
				success: (res) => {
					this.labelList = res.result.data
				}
			})
		},
		methods: {
			changeTab(params) {
				console.log("params",params);
			}
		}
	}
</script>

<style lang="scss">
	.homePage {
		.headerSection {
			width: 100%;
			background-color: #f07474;

			.header-search {
				box-sizing: border-box;
				padding: 7px 12px;
				height: 44px;
				display: flex;
				align-items: center;

				.searchBox {
					width: 100%;
					height: 30px;
					border-radius: 15px;
					background-color: #f9f9f9;
					padding-left: 10px;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					.searchText {
						font-size: 14px;
						margin-left: 6px;

						text {
							margin-right: 4px;
						}
					}
				}
			}
		}

		.scrollBarCont {
			display: flex;
			height: 45px;

			.settingSection {
				position: relative;
				width: 45px;
				height: 100%;
				text-align: center;

				.uni-icons {
					line-height: 45px;
				}

				&::after {
					position: absolute;
					content: '';
					left: 0;
					width: 1px;
					bottom: 13px;
					top: 13px;
					background-color: #999;
				}
			}
		}
	}
</style>
