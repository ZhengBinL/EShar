<style scoped>
    .calendar {
        position: relative;
        padding-top: 30px;
        width: 100%;
        height: calc(100% - 40px);
        text-align: center;
        box-sizing: border-box;

        --main: #ffc900;
        --light: #fff6d6;
        --font-main: #ff5000;
        --font-grey: #ccc;
        --border: #e0e0e0;
    }
    .calendar > .weekday {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    .calendar-month-header,
    .calendar > .weekday th { height: 30px; }
    .calendar > .container {
        height: 100%;
        -webkit-box-flex: 1;
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    table {
        border-spacing: 0;
        border-collapse: collapse;
    }
    i { font-style: normal; }
    .calendar-month-header {
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        font-size: 15px;
        font-weight: 700;
        position: sticky;
        top: 0;
        border-bottom: 1px solid var(--border);
        background: rgba(241, 242, 243, 0.9);
        z-index: 1;
    }
    .calendar-month-table {
        width: 100%;
        table-layout: fixed;
    }

    ._day {
        height: 70px;
        width: 14.2857%;
        position: relative;
        border-bottom: 1px solid var(--border);
    }
    ._day ._box {
        height: 70px;
        padding-top: 16px;
        box-sizing: border-box;
        position: relative;
    }
    ._day-info,
    ._day-note,
    ._day-text {
        display: block;
        width: 100%;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    ._day-text {
        font-size: 18px;
        height: 20px;
        line-height: 20px;
    }
    ._day-note {
        font-size: 12px;
        height: 16px;
        line-height: 16px;
        color: var(--font-main);
    }
    ._day-info {
        color: #666;
        font-size: 12px;
        line-height: 18px;
    }
    ._day-type {
        position: absolute;
        width: 14px;
        height: 14px;
        top: 3px;
        right: 3px;
        font-size: 12px;
        border-radius: 3px;
        transform: scale(.7);
        background: no-repeat;
        border: 1px solid transparent;
    }

    ._day[type=work] ._day-type::before { content: "班"; }
    ._day[type=work] ._day-type { color: var(--font-grey); border-color: var(--font-grey); }
    ._day[type=rest] ._day-type::before { content: "休"; }
    ._day[type=rest] ._day-type { color: var(--font-main); border-color: var(--font-main); }
    ._day[status=empty] { background: #fff!important; }
    ._day[status=empty] * { display: none; }
    ._day[status=selected] { background: var(--main)!important; border-bottom-color: var(--main)!important; }
    ._day[status=selected] ._day-info,
    ._day[status=selected] ._day-note,
    ._day[status=selected] ._day-text {
        color: #3d3d3d!important;
        background: none!important;
    }
    ._day[status=range] {
        background: var(--light)!important;
        border-bottom-color: var(--light)!important;
    }
    ._day[status=disabled] { background: #fafafa!important; border-bottom-color: var(--border)!important; }
    ._day[status=disabled] ._day-info,
    ._day[status=disabled] ._day-note,
    ._day[status=disabled] ._day-text {
        color: #ccc!important;
        background: none!important;
    }
    ._day[flag*=today] ._day-note,
    ._day[flag*=holiday] ._day-note,
    ._day[flag*=weekday] ._day-text { color: var(--font-main); }

    /*
        每天的状态： status
            [normal] | disabled | selected | range | empty
        每天的标记： flag  支持多个
            [normal] | today | holiday | weekday
        每天的类型： type
            [normal] | rest | work
     */

    /*
    @media (min-width: 375px) {
        ._day { height:1.86667rem; }
        ._day ._box { height: 1.86667rem; padding-top: .42667rem; }
        ._day-text { font-size: .48rem; height: .53333rem; line-height: .53333rem; }
        ._day-note { font-size: .32rem; height: .42667rem; line-height: .42667rem; }
        ._day-info { font-size: .26667rem; min-height: .48rem; line-height: .48rem; }
        ._day-type { width: .34667rem; height: .34667rem; top: .08rem; right: .08rem; }
    }
    */

</style>
<template>
    <div class="calendar">
        <table class="weekday">
            <thead>
                <tr>
                    <th>日</th>
                    <th>一</th>
                    <th>二</th>
                    <th>三</th>
                    <th>四</th>
                    <th>五</th>
                    <th>六</th>
                </tr>
            </thead>
        </table>
        <div class="container">
            <ul class="months">
                <li class="calendar-month" v-for="monthItem in renderData">
                    <div class="calendar-month-header">{{monthItem.month}}</div>
                    <table class="calendar-month-table">
                        <tbody>
                            <tr v-for="weekItem in monthItem.weeks">
                                <td class="_day" :update="updateTime" v-for="day in weekItem"
                                    :status="day.status" :type="day.type" :flag="day.flag" @click="onSelected(day)">
                                    <div class="_box">
                                        <i class="_day-type"></i>
                                        <span class="_day-note">{{day.note}}</span>
                                        <span class="_day-text">{{day.day}}</span>
                                        <span class="_day-info">{{day.info}}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </div>
        <div class="mint-toast is-placebottom level-top" style="padding: 10px;" v-show="selectedStartItem && !selectedEndItem">
            <span class="mint-toast-text">请选择离店日期</span>
        </div>
    </div>
</template>
<script>
    /**
     * 说明: 所有的日期均是标准格式的日期  String: 'yyyy-mm-dd' 格式
     * config: {
            mode: 'future',  // (选填) 渲染模式  默认所有的都可用  future: 过去的不可用  past: 将来的不可用
            startDate: '2019-01-01',  // (必填) 日历的开始时间
            endDate: '2019-12-31',  // (必填) 日历的结束时间
            disabledData: [{startDate: '2019-06-01', endDate: '2019-12-31'}],  // (选填) 被禁用的时间段  支持 多段
            initData: [  // (选填) 初始化时间  可以单独给每一天设置状态 | 标记 | 类型
                {date: '2019-04-30', status: 'disabled', type: 'work', info: '100%'},
                {date: '2019-05-01', flag: 'holiday', type: 'rest', note: '五一'},
                {date: '2019-05-02', flag: 'holiday', type: 'rest'}
            ],
            onSelected(selectedData) {  // 回调函数  选择入店可离店日期之后会回调
                console.log('selectedData', selectedData);  // 返回值: ["2019-04-24", "2019-04-25", "2019-04-26"]
            },
            // mothods
            setOptions(config) {}  // 重新设置  手动设置
     }
     */
    export default {
        props: {
            config: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                weeks: [0, 1, 2, 3, 4, 5, 6],
                renderData: [],
                updateTime: + new Date(),
                selectedStartItem: undefined,
                selectedEndItem: undefined,
                rangeItems: []
            };
        },
        beforeMount() {
            this.config.setOptions = this.setOptions;
            this.buildData();
        },
        methods: {
            setOptions(newConfig) {
                let oldConfig = this.config;
                if(typeof newConfig === 'object'){
                    Object.keys(newConfig).forEach(key => oldConfig[key] = newConfig[key]);
                    this.buildData();
                    this.updateTime = + new Date();
                }
            },
            buildData() {
                let today = this.handleDateTime.getDateTime().substr(0, 10);
                let weekday = [0, 6];
                const config = this.config;
                if(config.startDate && config.endDate){
                    let startDate = config.startDate;
                    let endDate = config.endDate;
                    let disabledData = config.disabledData;
                    let initData = config.initData;
                    let mode = config.mode || 'all';  // past  future

                    let renderData = this.renderData = [];
                    let contrastData = {};
                    let buildDate = this.handleDateTime.buildDatePoints(startDate, endDate);
                    Array.isArray(initData) && initData.forEach(item => {
                        contrastData[item.date] = item;
                    });

                    // 遍历所有的时间点并 按月 按周 分组
                    let moveMonth;
                    let orderWeeks = this.weeks;
                    buildDate.forEach(dateItem => {
                        let initWeek = [
                            {status: 'empty'}, {status: 'empty'}, {status: 'empty'}, {status: 'empty'},
                            {status: 'empty'}, {status: 'empty'}, {status: 'empty'}
                        ];
                        let dateMonth = dateItem.date.substr(0, 7);
                        let contrastItem = contrastData[dateItem.date];
                        let weekIndex = orderWeeks.indexOf(dateItem.week);
                        let item = {
                            date: dateItem.date,
                            day: dateItem.day,
                            week: dateItem.week,
                            flag: weekday.indexOf(dateItem.week) >= 0 ? 'weekday-' : ''
                        };

                        if(contrastItem){
                            item.status = contrastItem.status;
                            item.type = contrastItem.type;
                            item.note = contrastItem.note;
                            item.info = contrastItem.info;
                            item.flag += contrastItem.flag;
                        }

                        if(today === item.date){
                            item.flag += '-today';
                            item.note = '今天';
                        }else if(
                            (today > item.date && mode === 'future')
                            ||
                            (today < item.date && mode === 'past')
                        ){
                            item.status = 'disabled';
                        }

                        // 处理 disabled
                        Array.isArray(disabledData) && disabledData.forEach(disabledItem => {
                            if(disabledItem.startDate <= item.date && disabledItem.endDate >= item.date){
                                item.status = 'disabled';
                            }
                        });

                        if(moveMonth === dateMonth){
                            let weeks = renderData[renderData.length - 1].weeks;
                            if(weekIndex){
                                weeks[weeks.length - 1][weekIndex] = item;
                            }else {
                                weeks[weeks.length] = initWeek;
                                initWeek[0] = item;
                            }
                        }else {
                            let weeks = [initWeek];
                            weeks[0][weekIndex] = item;
                            renderData.push({
                                month: dateMonth,
                                weeks
                            });
                            moveMonth = dateMonth;
                        }
                    });
                }
            },
            onSelected(item) {
                let data = this.$data;
                if(item.status !== 'disabled' && item.status !== 'empty'){
                    if(data.selectedStartItem && data.selectedEndItem){

                        this.clearRangeItems();
                        this.roomIn(null, 'End');
                        this.roomIn(item, 'Start');
                        data.selectedEndItem = undefined;
                    }else if(data.selectedStartItem){
                        if(item.date > data.selectedStartItem.date){
                            this.roomIn(item, 'End');

                            data.renderData.forEach(monthItem => {
                                monthItem.weeks.forEach(weekItem => {
                                    weekItem.forEach(dayItem => {
                                        if(
                                            data.selectedStartItem.date < dayItem.date &&
                                            data.selectedEndItem.date > dayItem.date &&
                                            dayItem.status !== 'disabled'
                                        ){
                                            dayItem._status = dayItem.status;
                                            dayItem.status = 'range';
                                            data.rangeItems.push(dayItem);
                                        }
                                    });
                                });
                            });

                            if(typeof this.config.onSelected === 'function'){
                                let resData = [data.selectedStartItem.date];
                                data.rangeItems.forEach(dayItem => {
                                    resData.push(dayItem.date);
                                });
                                resData.push(item.date);
                                this.config.onSelected(resData);
                            }
                        }else {
                            this.clearRangeItems();
                            this.roomIn(item, 'Start');
                        }
                    }else {
                        this.roomIn(item, 'Start');
                    }

                    data.updateTime = + new Date();
                }
            },
            roomIn(item, type) {
                var selectedItem = this[`selected${ type }Item`];
                if(selectedItem){
                    selectedItem.status = selectedItem._status;
                    selectedItem.note = selectedItem._note;
                    selectedItem.info = selectedItem._info;
                    selectedItem._status = undefined;
                    selectedItem._note = undefined;
                    selectedItem._info = undefined;
                }
                if(item){
                    item._status = item.status;
                    item._note = item.note;
                    item._info = item.info;
                    item.status = 'selected';
                    item.note = type === 'Start' ? '入店' : '离店';

                    this[`selected${ type }Item`] = item;
                }else {
                    this[`selected${ type }Item`] = undefined;
                }
            },
            clearRangeItems() {
                this.rangeItems.forEach(item => {
                    item.status = item._status;
                    item._status = undefined;
                });
                this.rangeItems = [];
            }
        }
    }
</script>
