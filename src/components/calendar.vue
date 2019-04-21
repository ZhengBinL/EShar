<style scoped>
    .calendar {
        position: relative;
        padding-top: 30px;
        width: 100%;
        height: 100%;
        text-align: center;

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
    ._day-text,
    ._day-status {
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
    ._day-status {
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
    ._day-status-work {
        color: var(--font-grey);
        border-color: var(--font-grey);
    }
    ._day-status-rest {
        color: var(--font-main);
        border-color: var(--font-main);
    }
    ._day-status-work::before { content: "班"; }
    ._day-status-rest::before { content: "休"; }
    .selected {
        background: var(--main)!important;
        border-bottom-color: var(--main)!important;
    }
    .selected ._day-info,
    .selected ._day-note,
    .selected ._day-text {
        color: #3d3d3d!important;
        background: none!important;
    }
    .selected-range {
        background: var(--light)!important;
        border-bottom-color: var(--light)!important;
    }
    ._day[disabled=disabled] {
        background: #fafafa!important;
        border-bottom-color: var(--border)!important;
    }
    ._day[disabled=disabled] ._day-info,
    ._day[disabled=disabled] ._day-note,
    ._day[disabled=disabled] ._day-text {
        color: #ccc!important;
        background: none!important;
    }

    /*
    @media (min-width: 375px) {
        ._day { height:1.86667rem; }
        ._day ._box { height: 1.86667rem; padding-top: .42667rem; }
        ._day-text { font-size: .48rem; height: .53333rem; line-height: .53333rem; }
        ._day-note { font-size: .32rem; height: .42667rem; line-height: .42667rem; }
        ._day-info { font-size: .26667rem; min-height: .48rem; line-height: .48rem; }
        ._day-status { width: .34667rem; height: .34667rem; top: .08rem; right: .08rem; }
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
                <li class="calendar-month" v-for="item in [1, 2, 3, 4]">
                    <div class="calendar-month-header">2019-0{{item}}</div>
                    <table class="calendar-month-table">
                        <tbody>
                            <tr>
                                <td class="_day"></td>
                                <td class="_day" disabled>
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">1</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day" disabled>
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">2</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day" disabled>
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">3</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day" disabled>
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">4</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day" disabled>
                                    <div class="_box">
                                        <i class="_day-status _day-status-rest"></i>
                                        <span class="_day-note">清明节</span>
                                        <span class="_day-text">5</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day" disabled>
                                    <div class="_box">
                                        <i class="_day-status _day-status-rest"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">6</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="_day" disabled>
                                    <div class="_box">
                                        <i class="_day-status _day-status-rest"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">7</span>
                                        <span class="_day-info">213</span>
                                    </div>
                                </td>
                                <td class="_day" disabled>
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">8</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">9</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>

                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">10</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>

                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">11</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>

                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">12</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>

                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">13</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">14</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">15</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">16</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">17</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note">今天</span>
                                        <span class="_day-text">18</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day selected">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note">入店</span>
                                        <span class="_day-text">19</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day selected-range">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">20</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="_day selected-range">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">21</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day selected">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note">离店</span>
                                        <span class="_day-text">22</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">23</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">24</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">25</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">26</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">27</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status _day-status-work"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">28</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">29</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day">
                                    <div class="_box">
                                        <i class="_day-status"></i>
                                        <span class="_day-note"></span>
                                        <span class="_day-text">30</span>
                                        <span class="_day-info"></span>
                                    </div>
                                </td>
                                <td class="_day"></td>
                                <td class="_day"></td>
                                <td class="_day"></td>
                                <td class="_day"></td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props: {},
        data() {
            return {};
        },
        methods: {}
    }
</script>
