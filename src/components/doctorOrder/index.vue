<template>
  <div style="padding: 10px;" v-loading="loading">
    <el-button-group>
      <el-button :type="btnType == 0 ? 'primary':''" size="small" @click="changeBtn(0)">全部</el-button>
      <el-button :type="btnType == 1 ? 'primary':''" size="small" @click="changeBtn(1)">长期医嘱</el-button>
      <el-button :type="btnType == 2 ? 'primary':''" size="small" @click="changeBtn(2)">临时医嘱</el-button>
      <el-button :type="btnType == 3 ? 'primary':''" size="small" @click="changeBtn(3)">麻醉医嘱</el-button>
      <el-button :type="btnType == 4 ? 'primary':''" size="small" @click="changeBtn(4)">药品医嘱</el-button>
      <el-button :type="btnType == 5 ? 'primary':''" size="small" @click="changeBtn(5)">项目医嘱</el-button>
    </el-button-group>

    <el-table
      :data="tableData"
      stripe
      size="mini"
      style="width: 100%;margin-top: 10px;font-size: 14px;">
      <el-table-column
        prop="ordersBeginDate"
        label="日期"
        width="150"
        align="center">
      </el-table-column>
      <el-table-column
        prop="ordersBeginDate"
        label="时间"
        width="150"
        align="center">
      </el-table-column>
      <el-table-column
        prop="ordersContent"
        label="医嘱内容"
        align="center">
      </el-table-column>
      <el-table-column
        prop="ordersCategCode"
        label="医嘱类型"
        width="80"
        align="center">
      </el-table-column>
      <el-table-column label="停止" align="center">
        <el-table-column
          prop="ordersStopDrName"
          label="停止者"
          width="120"
          align="center">
        </el-table-column>
        <el-table-column
          prop="ordersStopDate"
          label="日期"
          width="120"
          align="center">
        </el-table-column>
        <el-table-column
          prop="ordersStopDate"
          label="时间"
          width="120"
          align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="ordersOpenDrName"
        label="医生"
        width="120"
        align="center">
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 10px;"
      prev-text=" 上一页 "
      next-text=" 下一页 "
      background
      layout="prev, pager, next,total"
      :total="page.total"
      :page-size="page.pageSize"
      :current-page="page.pageNum"
      @current-change="currentChange">
    </el-pagination>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  // recordDate日期
  // ordersBeginDate	医嘱开始日期
  // ordersEndDate	医嘱结束日期
  // ordersExecutStatusCode	医嘱执行状态代码  确认、作废、执行、停止
  // ordersItemName	医嘱项目名称
  // ordersCategCode	医嘱类别代码	临时医嘱、长期医嘱
  // ordersContent	医嘱内容
  export default {
    name: "index",
    data() {
      return {
        loading: false,
        btnType: 0,
        tableData: [],
        page: {
          total: 0,
          pageNum: 1,
          pageSize: 10,
          pages: ""
        },
        params: {
          inhospNo: this.getzyCode,
          visitType: this.gettypeCode,
          empiID: this.getjcCode,
          ordersCategCode: ""  //医嘱类别
        },
        ordersCategCode: ["", "长期医嘱", "临时医嘱", "麻醉医嘱", "药品医嘱", "项目医嘱"]
      }
    },
    computed: {
      ...mapGetters([
        'getjcCode',
        'getzyCode',
        'gettypeCode'
      ]),
    },
    methods: {
      changeBtn: function (index) {
        this.btnType = index;
        this.page = {
          total: 0,
          pageNum: 1,
          pageSize: 10,
          pages: ""
        };
        this.getTableData();
      },
      getTableData: function () {
        let self = this;
        this.axios({
          method: "POST",
          url: "/patient/omorders-by-page/",
          data: {
            data: this.params,
            page: this.page
          }
        }).then(function (res) {
          res = res.data;
          self.tableData = res.data;
          self.page = res.page
        })
      },
      currentChange: function (val) {
        this.page.pageNum = val;
        this.getTableData();
      },
    },
    created: function () {
      this.page={
        total: 0,
        pageNum: 1,
        pageSize: 10,
        pages: ""
      };
      this.params={
        inhospNo: this.getzyCode,
        visitType: this.gettypeCode,
        empiID: this.getjcCode,
        ordersCategCode: ""  //医嘱类别
      };
      this.getTableData();
    },
    watch: {
      getzyCode: {
        handler: function (val, oldVal) {
          this.page={
            total: 0,
            pageNum: 1,
            pageSize: 10,
            pages: ""
          };
          this.params={
            inhospNo: this.getzyCode,
            visitType: this.gettypeCode,
            empiID: this.getjcCode,
            ordersCategCode: ""  //医嘱类别
          };
          this.getTableData();
        }
      },
      btnType: {
        handler: function (val, oldVal) {
          this.params.ordersCategCode = this.ordersCategCode[val]
        }
      }
    }
  }
</script>

<style scoped>

</style>
