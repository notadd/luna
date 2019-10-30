import axios from 'axios';
import { Analysis, GetDailySummaryResult, GetTrendResult, GetUserPortraitResult, GetVisitDistributionResult, GetVisitPageResult, GetVisitTrendResult } from '../../core/lib';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AnalysisImpl extends Analysis {

    async getUserPortrait(access_token: string, begin_date: string, end_date: string): Promise<GetUserPortraitResult> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/datacube/getweanalysisappiduserportrait?access_token=${access_token}`,
            data: {
                begin_date,
                end_date
            }
        }).then(res => res.data)
    }

    async getDailyRetain(access_token: string, begin_date: string, end_date: string): Promise<GetVisitTrendResult> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/datacube/getweanalysisappiddailyretaininfo?access_token=${access_token}`,
            data: {
                begin_date,
                end_date
            }
        }).then(res => res.data)
    }    
    
    async getMonthlyRetain(access_token: string, begin_date: string, end_date: string): Promise<GetVisitTrendResult> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/datacube/getweanalysisappidmonthlyretaininfo?access_token=${access_token}`,
            data: {
                begin_date,
                end_date
            }
        }).then(res => res.data)
    }

    async getWeeklyRetain(access_token: string, begin_date: string, end_date: string): Promise<GetVisitTrendResult> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/datacube/getweanalysisappidweeklyretaininfo?access_token=${access_token}`,
            data: {
                begin_date,
                end_date
            }
        }).then(res => res.data)
    }

    async getDailySummary(access_token: string, begin_date: string, end_date: string): Promise<GetDailySummaryResult> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/datacube/getweanalysisappiddailysummarytrend?access_token=${access_token}`,
            data: {
                begin_date,
                end_date
            }
        }).then(res => res.data)
    }

    async getDailyVisitTrend(access_token: string, begin_date: string, end_date: string): Promise<GetTrendResult[]> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/datacube/getweanalysisappiddailyvisittrend?access_token=${access_token}`,
            data: {
                begin_date,
                end_date
            }
        }).then(res => res.data)
    }

    async getMonthlyVisitTrend(access_token: string, begin_date: string, end_date: string): Promise<GetTrendResult[]> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/datacube/getweanalysisappidmonthlyvisittrend?access_token=${access_token}`,
            data: {
                begin_date,
                end_date
            }
        }).then(res => res.data)
    }

    async getWeeklyVisitTrend(access_token: string, begin_date: string, end_date: string): Promise<GetTrendResult[]> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/datacube/getweanalysisappidweeklyvisittrend?access_token=${access_token}`,
            data: {
                begin_date,
                end_date
            }
        }).then(res => res.data)
    }

    async getVisitDistribution(access_token: string, begin_date: string, end_date: string): Promise<GetVisitDistributionResult> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/datacube/getweanalysisappidvisitdistribution?access_token=${access_token}`,
            data: {
                begin_date,
                end_date
            }
        }).then(res => res.data)
    }
    
    async getVisitPage(access_token: string, begin_date: string, end_date: string): Promise<GetVisitPageResult> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/datacube/getweanalysisappidvisitpage?access_token=${access_token}`,
            data: {
                begin_date,
                end_date
            }
        }).then(res => res.data)
    }

    
}